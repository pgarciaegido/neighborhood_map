module.exports = {
  returnHotspots,
  getServices
}


var hotspots = [
  {
    location: { lat: 40.4492770, lng: -3.6950890 },
    title: 'Nuit',
    description: 'Great club',
    service: 'nightlife'
  },
  {
    location: { lat: 40.453054, lng: -3.688359 },
    title: 'Santiago Bernabeu Stadium',
    description: 'Real Madrid Football Stadium',
    service: 'enterteinment'
  },
  {
    location: { lat: 40.446776, lng: -3.693649 },
    title: 'El Corte Inglés',
    description: 'Massive shopping center',
    service: 'shops'
  },
  {
    location: { lat: 40.450082, lng: -3.691642 },
    title: 'New York Burger',
    description: 'Best burgers in town!',
    service: 'food'
  },
  {
    location: { lat: 40.448939, lng: -3.696191 },
    title: 'Taxi a Manhatan',
    description: 'Cool place to have a few drinks',
    service: 'nightlife'
  },
  {
    location: { lat: 40.450705, lng: -3.693855 },
    title: 'Wok Garden',
    description: 'Japanese restaurant.',
    service: 'food'
  },
  {
    location: { lat: 40.449968, lng: -3.694979 },
    title: 'Zara',
    description: 'Clothes & fashion',
    service: 'shops'
  },
  {
    location: { lat: 40.451927, lng: -3.692833 },
    title: 'Azca Exhibition Hall',
    description: 'Little museum',
    service: 'enterteinment'
  },
];

function returnHotspots () {
  return hotspots;
}

// Get services from hotspots
function getServices() {
  var serv = []
  var push = true;
  for (let i in hotspots){
    let s = hotspots[i].service;
    for (let j in serv){
      if (s === serv[j]) push = false;
    }
    if (push) serv.push(s)
  }
  return serv;
}
