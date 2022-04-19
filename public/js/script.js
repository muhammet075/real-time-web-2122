var socket = io();

var form = document.getElementById("submitForm");
var input = document.getElementById("inputField");
var messages = document.getElementById("messages");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (input.value) {
    socket.emit("chat message", input.value);

    var item = document.createElement("li");
    item.textContent = input.value;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
    input.value = "";
  }
});
