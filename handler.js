const moneyLife = require('./utils');

function handleQuestion(question) {
    if (question.type === moneyLife.money) {
        return "how does the social construction of money work?"
    } else if (question.type === moneyLife.life) {
        return "What does it mean to live a good life?"
    } else {
        return "Is free will real or just an illusion?"
    }

}

module.exports = handleQuestion;