
//importing moduels
require('dotenv').config()
const {Configuration , OpenAIApi} = require('openai')

//creating the openai client
const configuration = new Configuration({apiKey:process.env.API_KEY,})
const openai = new OpenAIApi(configuration)


async function anwerQuestion(question)
{
    const res = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: 
        `I' am making flashcards for my lesson. I want you to give me a short answer to this question:${question}.your answer should be exactly one short paragraphe,less than 30 words.`,
        max_tokens:400,
        temperature:0,
    });
    return res
}


async function FlashBrainAnswer(questions)
{
    let answersList = []
    for (let i = 0; i < questions.length; i++) {
        if (questions[i].trim() != "1*No Question")
        {
            const answer = await anwerQuestion(questions[i])
            answersList.push(answer.data.choices[0].text.trim())
        }
    }
    return answersList
}


// testing the function here
// let q = ['1-What is the difference between a List and a Set in Java?','2-How would you implement a custom LinkedList class in Java?']
// flashBrainAnswer(q).then((a)=>console.log(a))

module.exports = { FlashBrainAnswer }