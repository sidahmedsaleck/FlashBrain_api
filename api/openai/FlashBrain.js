const answer = require("./answers")
const question = require("./questions")

async function FlashBrain(sub,nbr)
{
    
    var flashCards = {"flashCards":[]}
    const questions = await question.FlashBrainQuestion(sub,nbr)
    const answers = await answer.FlashBrainAnswer(questions)
    for (let i = 0; i < questions.length; i++) 
        {    const card = {}
            card.Q = questions[i].split("*")[1]
            card.A = answers[i]
            flashCards.flashCards.push(card)
        }
            
    

    return flashCards
}


module.exports = { FlashBrain }