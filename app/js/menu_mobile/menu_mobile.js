// On click(tap), opens or closes the menu on mobile versions.
var button = document.getElementById('burger_button');
var interaction = document.getElementById('interaction');
var mapContainer = document.getElementById('map_container');

button.onclick = function () {
  interaction.classList.toggle('interaction_mobile_on');
}
