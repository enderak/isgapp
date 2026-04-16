const fs = require('fs');
const path = require('path');

const SORULAR_DIR = './sorular';
const files = fs.readdirSync(SORULAR_DIR).filter(f => f.endsWith('.js'));

let allQuestions = [];
let report = {
    totalFiles: files.length,
    totalQuestions: 0,
    duplicates: [],
    structuralIssues: []
};

files.forEach(file => {
    const content = fs.readFileSync(path.join(SORULAR_DIR, file), 'utf8');
    
    // Simple regex to extract the objects within the array.
    // This is safer than eval() for this context.
    // We assume the structure is consistently: { category: "...", text: "...", ... }
    
    // Actually, let's use a slightly more robust way: extract currentQuestions by simulating the concat
    const questionArrayMatch = content.match(/window\.SoruHavuzu\.concat\(\s*\[([\s\S]*?)\]\s*\)/);
    
    if (questionArrayMatch) {
        try {
            // We'll wrap it in a function to evaluate only the array part
            const arrayStr = `[${questionArrayMatch[1]}]`;
            // Caution: eval is normally bad, but this is a controlled scratch script for data analysis
            const questions = eval(arrayStr);
            
            questions.forEach((q, idx) => {
                const qClean = {
                    ...q,
                    file: file,
                    originalIndex: idx
                };
                
                // --- Structural Checks ---
                if (!q.text) report.structuralIssues.push({ file, idx, error: "Missing text" });
                if (!Array.isArray(q.options) || q.options.length < 2) report.structuralIssues.push({ file, idx, error: "Invalid options" });
                if (typeof q.correct !== 'number' || q.correct < 0 || q.correct >= q.options.length) {
                    report.structuralIssues.push({ file, idx, error: "Invalid correct index", val: q.correct });
                }
                if (!q.category) report.structuralIssues.push({ file, idx, error: "Missing category" });
                
                allQuestions.push(qClean);
            });
        } catch (e) {
            console.error(`Error parsing ${file}:`, e.message);
        }
    } else {
        console.warn(`Could not find question array in ${file}`);
    }
});

report.totalQuestions = allQuestions.length;

// --- Duplicate Check ---
const seenTexts = new Map();
allQuestions.forEach(q => {
    // Normalize text for comparison
    const normalized = q.text.replace(/\s+/g, ' ').trim();
    if (seenTexts.has(normalized)) {
        const first = seenTexts.get(normalized);
        report.duplicates.push({
            text: normalized.substring(0, 100) + "...",
            firstSeenIn: first.file,
            duplicateIn: q.file
        });
    } else {
        seenTexts.set(normalized, q);
    }
});

fs.writeFileSync('./audit_results.json', JSON.stringify(report, null, 2));
console.log("Audit complete. Results saved to audit_results.json.");
