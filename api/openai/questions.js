
//importing moduels
require('dotenv').config()
const {Configuration , OpenAIApi} = require('openai')

//creating the openai client
const configuration = new Configuration({apiKey:process.env.API_KEY,})
const openai = new OpenAIApi(configuration)


// ask function is responsable of returning a number of questions with their answers in a given subject with the a given difficulty
// it returns a promis response of the function openai.createCompletion

async function ask(subject ,nbr)
{
    const res = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: 
        `I' am making flashcards for my lesson. I want you to help me create ${nbr} flashcards questions about: ${subject}.
        your response should be all questions separated only by newline and with  numbers like this:
        1*question one here?
        2*question two here?
        if the question is harmful or dont make sense just return the phrase: 1*No Question.`,
        max_tokens:400,
        temperature:0.30,
    });
        
    return  res
}



// return the object questions that containe all questions : { "Questions":[] }

async function FlashBrainQuestion(sub,nbr)
{
    const subjectContent = sub.trim()
    const res = await ask(subjectContent,nbr)
    const questions= res.data.choices[0].text.trim().split("\n")
    return questions
}


//testing the function here
// FlashBrainQuestion("fuck you",2).then((result) => {
//     console.log(result)
// })


module.exports = { FlashBrainQuestion}
