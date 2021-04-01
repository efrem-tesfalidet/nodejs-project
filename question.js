const handleQuestion = require('./handler')
const moneyLife = require('./utils');

let question1 = {
    text: "How do I get more money?",
    type: moneyLife.money
}
let question2 = {
    text: "How much money do I need?",
    type: moneyLife.money
}
let question3 = {
    text: "To be free or not to be?",
    type: moneyLife.freewill
}
console.log(handleQuestion(question1)) //should print "how does the social construction of money work?"
console.log(handleQuestion(question2)) //should print "how does the social construction of money work?"
console.log(handleQuestion(question3)) //should print "Is free will real or just an illusis