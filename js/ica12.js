const btn = document.querySelector("#js-new-quote");
btn.addEventListener("click", getQuote);

const btn2 = document.querySelector("#js-tweet");
btn2.addEventListener("click", getAnswer);

const answerText = document.querySelector("#js-answer-text")

const endPoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

let answer = '';

async function getQuote(){ // using this to generate the quote//
    try {
        const response = await fetch(endPoint);
        if (!response.ok){ // if response is not okay//
            throw Error(response.statusText);
        }
        
        
        const json = await response.json();
        //console.log(json['question']); opens up json dictonary and calls the key question wich ill output a question ot the log//
        displayQuote(json["question"]);
        console.log(json['answer']);
        answer = json["answer"];
        answerText.textContent = ""; 
    } catch (err){
        console.log(err);
        alert("Failed to fetch new quote");
    }
}

function displayQuote(quote){
    const quoteText = document.querySelector("#js-quote-text");
    quoteText.textContent = quote;
}


function getAnswer(){
    answerText.textContent = answer;
}

getQuote(); // adds a quote on page load// 

