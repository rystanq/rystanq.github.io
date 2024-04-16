// Declarying Variables 

const curVolume = document.querySelector("#curVolume");
const submitBtn = document.querySelector("#submit");
const radnomBtn = document.querySelector("#random");
const UpOne = document.querySelector(".upOne");
const DownOne = document.querySelector(".downOne");

let volume = 13;

submitBtn.addEventListener("click", submitted);
radnomBtn.addEventListener("click", ranNumber);
UpOne.addEventListener("click", addVol);
DownOne.addEventListener("click", subVol);

function submitted(){
    alert("Your final volume is " + volume + ". Thank you for playing, I hope it was infuriating.");
    //randomize volume when finished so user can start over
}

