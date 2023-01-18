const express = require('express')
const router = express.Router()
const {FlashBrain} = require('../openai/FlashBrain')
const validation = require('../../api/validation/validation.js')


const badValidationMsg = {msg:"Please make sure to provide correct subjet or  number of questions"}

router.post('/',async (req,res)=>
{


    res.header("Access-Control-Allow-Origin", "*");
    const subject = req.query.subject
    const nbr =  req.query.nbr
 
    if(validation.subjectValidator(String(subject)) && validation.nbrValidator(nbr))
    {
        const result = await FlashBrain(subject.trim(),nbr)
        res.status(200).json(result)
    }
    else
    {
        res.status(400).json(badValidationMsg)
    }
       
})




module.exports = router;