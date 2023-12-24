const scores = [70,85,90];
const minimumScore = 75;

const examPassed = scores.every(score => score >= minimumScore);
console.log(examPassed);