// This function generates a random integer between 0 and nums - 1
function genRandIndex(nums){
    return Math.floor(Math.random() * nums)
}

// This object contains arrays for the different parts of our message
const randomMessage = {
    currentState: ["Today is a great day", "Your future looks promising", "You will find peace"],
    motivationalPhrase: ["Incredible opportunities awaits you", "Challenges that will grow, and shape you", "Nothing but happiness in your way"],
    advice: ["Ahead of you.", "Waiting for you.", "In your journey of knowledge."]
};

// An empty array to store the parts of the final message
let personalMessage = [];

//Iterate over the object
for(let index in randomMessage){
    let option = genRandIndex(randomMessage[index].length)

    switch(index){
        case 'currentState':
            personalMessage.push(`${randomMessage[index][option]}`)
            break
        case 'motivationalPhrase':
            personalMessage.push(`${randomMessage[index][option]}`)
            break
        case 'advice':
            personalMessage.push(`${randomMessage[index][option]}`)
            break
        default:
            personalMessage.push('Please enter the correct information to output result!')
    }
}

function formatMessage(message){
    const format = personalMessage.join('\n')
    console.log(format)
}

formatMessage(personalMessage)

