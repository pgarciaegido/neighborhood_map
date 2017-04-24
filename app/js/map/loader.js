module.exports = {
  setLoader,
  removeLoader,
  getScreenSize
}

function setLoader () {
  // Creates loader and appends it. Styles in CSS file.
  var body = document.getElementById('body');
  var loaderBg = document.createElement('div');
  var loader = document.createElement('div');

  loaderBg.id = 'loader-bg';
  loader.id = 'loader';

  var screenSize = getScreenSize();

  // It gets more centered dividing by 3 here.
  loader.style.top = screenSize[0] / 3 + 'px';
  loader.style.left = screenSize[1] / 2 + 'px';

  body.appendChild(loaderBg);
  body.appendChild(loader);
}

function removeLoader () {
  document.getElementById('loader').remove();
  document.getElementById('loader-bg').remove();
}

// Returns screen size in an array, to place the loader properly in the center
function getScreenSize () {
  var arr = [];
  arr.push(window.innerHeight)
  arr.push(window.innerWidth)

  return arr;
}
