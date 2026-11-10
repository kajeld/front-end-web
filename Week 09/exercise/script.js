let title = document.querySelector("#title");
let message = document.querySelector("#message");

let title2 = document.querySelector("#title2");
let message2 = document.querySelector("#message2");

let title3 = document.querySelector("#title3");
let message3 = document.querySelector("#message3");



document.querySelector("#blue").addEventListener("click", function() {
  document.body.style.backgroundColor = "lightblue";
  title.textContent = "Logical thinker";
  message.textContent = "You have no whimsical nature.";
});

document.querySelector("#green").addEventListener("click", function() {
  document.body.style.backgroundColor = "lightgreen";
  title.textContent = "Nature lover!";
  message.textContent = "You must love the outdoors!";
});

document.querySelector("#red").addEventListener("click", function() {
  document.body.style.backgroundColor = "salmon";
  title.textContent = "Martian!";
  message.textContent = "So, how's living on Mars?";
});

document.querySelector("#orange").addEventListener("click", function() {
  document.body.style.backgroundColor = "orange";
  title.textContent = "Sunset enthusiast!";
  message.textContent = "*Cue Golden Hour by Kacey Musgraves*";
});




document.querySelector("#accept").addEventListener("click", function() {
  title2.textContent = "A gentle soul";
  message2.textContent = "How kind. The worm will remember this.";
});

document.querySelector("#refuse").addEventListener("click", function() {
  title2.textContent = "Heartless";
  message2.textContent = "The worm spent three days making that hat.";
});

document.querySelector("#eat").addEventListener("click", function() {
  title2.textContent = "Concerning behavior";
  message2.textContent = "You ate his hat? He made that himself.";
});




document.querySelector("#yes").addEventListener("click", function() {
  title3.textContent = "Good choice";
  message3.textContent = "The moon's been trying to reach you. Phone tag is officially over.";
});

document.querySelector("#no").addEventListener("click", function() {
  title3.textContent = "Bad news";
  message3.textContent = "The moon is angry now. He can see you, you know.";
});

document.querySelector("#voicemail").addEventListener("click", function() {
  title3.textContent = "37 missed calls";
  message3.textContent = "The moon is getting impatient. I wouldn't keep ignoring him if I were you.";
});




document.querySelector("#reset").addEventListener("click", function() {
  document.body.style.backgroundColor = "white";

  title.textContent = "Your diagnosis awaits...";
  message.textContent = "Think about it.";

  title2.textContent = "";
  message2.textContent = "";

  title3.textContent = "";
  message3.textContent = "";
});



