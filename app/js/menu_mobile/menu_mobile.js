var button = document.getElementById('burger_button');
var interaction = document.getElementById('interaction');

button.onclick = function () {
  interaction.classList.toggle('interaction_mobile_on');
}
