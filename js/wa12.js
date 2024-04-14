const btn = document.querySelector("#js-new-quote");
btn.addEventListener("click", getQuote);

const btn2 = document.querySelector("#js-character");
btn2.addEventListener("click", getCharacter);

const btn3 = document.querySelector("#js-anime");
btn3.addEventListener("click", getAnime);






const endPoint = "https://animechan.xyz/api/random";

//let answer = '';
//{quote: 'I find it hard to believe that my cells are in you…bvious where you’ve gotten most of your strength.', 
//anime: 'Dragon Ball Z', character: 'Vegeta'}

async function getQuote(){ // using this to generate the quote//
    try {
        const response = await fetch("https://animechan.xyz/api/random");
        if (!response.ok){ // if response is not okay//
            throw Error(response.statusText);
        }

        const json = await response.json();
        const quoteText = document.querySelector("#js-quote-text");
        quoteText.textContent = json["quote"];

} catch (err){
    console.log(err);
    alert("Failed to fetch new quote");
}
}

async function getCharacter(){
    try {
        const response = await fetch("https://animechan.xyz/api/random");
        if (!response.ok){ // if response is not okay//
            throw Error(response.statusText);
        }

        const json = await response.json();
        const characterText = document.querySelector("#js-character-text");
        characterText.textContent = json["character"];
} catch (err){
    console.log(err);
    alert("Failed to fetch new quote");
}    
}

async function getAnime(){
    try {
        const response = await fetch("https://animechan.xyz/api/random");
        if (!response.ok){ // if response is not okay//
            throw Error(response.statusText);
        }

        const json = await response.json();
        const animeText = document.querySelector("#js-anime-text");
        animeText.textContent = json["anime"];
} catch (err){
    console.log(err);
    alert("Failed to fetch new quote");
}    
}


getQuote(); // adds a quote on page load// 
