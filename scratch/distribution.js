const fs = require('fs');
const path = require('path');

const SORULAR_DIR = './sorular';
const files = fs.readdirSync(SORULAR_DIR).filter(f => f.endsWith('.js'));

let allQuestions = [];
let categoryDistribution = {};
let profileDistribution = {};

files.forEach(file => {
    const content = fs.readFileSync(path.join(SORULAR_DIR, file), 'utf8');
    const questionArrayMatch = content.match(/window\.SoruHavuzu\.concat\(\s*\[([\s\S]*?)\]\s*\)/);
    
    if (questionArrayMatch) {
        try {
            const questions = eval(`[${questionArrayMatch[1]}]`);
            questions.forEach(q => {
                categoryDistribution[q.category] = (categoryDistribution[q.category] || 0) + 1;
                profileDistribution[q.profile] = (profileDistribution[q.profile] || 0) + 1;
                allQuestions.push(q);
            });
        } catch (e) {}
    }
});

const report = {
    totalQuestions: allQuestions.length,
    categoryDistribution,
    profileDistribution
};

console.log(JSON.stringify(report, null, 2));
