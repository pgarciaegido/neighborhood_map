# My neighborhood map :house:
An interactive client webapp with some cool hotspots in my neighborhood, using Google maps and Foursquare APIs, and an MVVM design using knockout.js.

![Map](http://i65.tinypic.com/29xsp5x.png)

## Current features
* Display markers with the info from my models.
* Offer further information when clicking in a marker, thanks to Google Street Imagery and Foursquare API.
* Sort places according to the kind of service they offer.
* Hide and show markers.

## Usage
Clone the repository:
```sh
git clone git@github.com:pgarciaegido/neighborhood_map.git
```
Install al necesary dependencies:
```sh
npm install
```
If you want to raise a server to check the site and keep it watching for changes, I have used webpack-dev-server. Install it and raise it:
```sh
npm install -g webpack-dev-server
```
```sh
webpack-dev-server
```

On ./app/js/secret/secret.js are my keys for foursquare and google api request. Please, modify them and include your owns.

For production, you can set your NODE_ENV to production and webpack will minify the JS bundle.

## Todos
* Include feature for the user to keep their own places, and record them on localStorage.

## Contributing
If you fancy, you can make a pull request and improve the functionality or even the UI of the site.

Any possible issues, you can report them [here](https://github.com/pgarciaegido/neighborhood_map/issues).

## Contact
You can contact me on pgarciaegido@gmail.com :beer:
