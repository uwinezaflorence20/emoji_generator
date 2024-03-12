const changeFace = document.getElementById("face");
const emojis =["😊","😂","🤣","❤️","😍","😒","🙌","🤼‍♀️","☺️","🤨","😐","😶","😬","🧑‍🦳","🧑","👶","🎨","🌖","😢","🎶","😉","💕"];
//console.log(emojis.lenght);
// const face = document.querySelector("#face");
const btn = document.getElementById("butto");

const display = () => {
   let round = Math.floor(Math.random()* emojis.length);
   let result = emojis[round];
   changeFace.innerHTML = result;
};

btn.addEventListener("click", display);