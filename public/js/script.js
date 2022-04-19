var socket = io();

var form = document.getElementById("submitForm");
var input = document.getElementById("inputField");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (input.value) {
    socket.emit("chat message", input.value);
    input.value = "";
  }
});
