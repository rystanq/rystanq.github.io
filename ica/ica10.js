//const button = document.querySelectorAll("button");

//console.log(button)
//for(const b in button){
//    b.addEventListener('click', colorChange)
//}

const button1 = document.querySelector(".button1");
button1.addEventListener('click', colorChange);


const button2 = document.querySelector("#button2");
button2.addEventListener('click', changeItem);

const header = document.querySelector('h1')

//button.addEventListener('click', colorChange);/**on that variable"button" listen for a click, when click run runfunction**/

function colorChange(){        
    document.body.style.backgroundColor = "#A9A9A9";
}

function changeItem(){
    const newText = prompt("What would you like the header to say now ?");
    header.textContent = ` ${newText} `;
}

