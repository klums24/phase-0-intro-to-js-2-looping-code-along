// Code your solutions in this file

function writeCards(names, eventName){
    let messages = [];
    for (let i = 0; i < names.length; i++){
        messages.push ("Thank you, " + names[i] + ", for the wonderful " + eventName + " gift!");
    }
    return messages;
    
}

writecards(["Guadalupe", "Ollie", "Aki", "surprise"]);

//countdown
function countDown(number){
    let i = 0;
    while (i <= number){
        console.log(number);
        number--;
    }
    
}

countDown(10);