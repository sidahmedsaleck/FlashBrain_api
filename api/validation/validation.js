


const max_nbr_flashcars = 10

// Validation for the subject "/api/flashcards/?subject=subject_name&nbr=number_quest"
function subjectValidator(str)
{  
    if(str.match(/^[A-Za-z ]+$/) )
    {
        // console.log(str)
        return true
    }
    else
    {   
        // console.log(str)
        return false
    } 
}

// Validation for the number of questions "/api/flashcards/?subject=subject_name&nbr=number_quest"

function nbrValidator(nbr)
{
    if(nbr.match(/^[0-9]+$/) )
    {
        // console.log(nbr)
        if (parseInt(nbr) > 0 && parseInt(nbr) <= max_nbr_flashcars)
        {
            return true
        }
    }
    else 
    {
        // console.log(nbr)
        return false
    }
}

module.exports = {subjectValidator,nbrValidator}