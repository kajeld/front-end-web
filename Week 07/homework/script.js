
let title = document.querySelector("#title");
let message = document.querySelector("#message");

document.querySelector("#happy").addEventListener("click", function() {
  document.body.style.backgroundColor = "lightyellow";
  title.textContent = "Everything is wonderful!";
  message.textContent = "Enjoy it while it lasts.";
});

document.querySelector("#tired").addEventListener("click", function() {
  document.body.style.backgroundColor = "lightblue";
  title.textContent = "Five more minutes...";
  message.textContent = "Maybe just close your eyes.";
});

document.querySelector("#angry").addEventListener("click", function() {
  document.body.style.backgroundColor = "lightcoral";
  title.textContent = "LEAVE ME ALONE";
  message.textContent = "Actually, that helped a little.";
});

document.querySelector("#reset").addEventListener("click", function() {
  document.body.style.backgroundColor = "white";
  title.textContent = "How are you feeling?";
  message.textContent = "Pick a mood. See what happens.";
});
