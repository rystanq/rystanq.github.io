let myData = {};

function fetchData() {
  comicNumber = Math.floor(Math.random() * 3000) + 1;
  fetch("https://corsproxy.io/?https://xkcd.com/${comicNumber}/info.0.json")
    .then((res) => {
      // fetching response and testing if valid
      if (res.ok) {
        return res.json(); // if valid return response as json data
      } else {
        console.log(res); // if not valid console log the data
      }
    })

    .then((res) => {
      myData = res; // setting the already declared myData to the values of the JSON data
      console.log(myData); // log the data as a json

      //title
      document.getElementById("title").innerHTML = myData.title; // get the title element from html page and set it to the value of title in the
      // json file

      //image
      document.getElementById("comic").src = myData.img;
      document.getElementById("comic").setAttribute("alt", myData.alt);

      //date
      let m = myData.month;
      let d = myData.day;
      let y = myData.year;
      document.getElementById("date").innerHTML = m + "/" + d + "/" + y;
    })

    .catch((error) => {
      // if the json value was not able to be imported correctly, this line tells the computer to log the error to the console
      console.log(error);
    });
}

fetchData(); // run our function to create the page

document.getElementById("generate").addEventListener("click", (e) => {
  fetchData(); // this enables the informatin to change everytime a click happens, which was in the rubric
});
