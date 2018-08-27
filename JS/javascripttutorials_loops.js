let myPlaces= ['Peru', 'Chamonix', 'Japan'];
let friendPlaces= ['Peru', 'France', 'Spain'];

for (let myPlacesIndex= 0; myPlacesIndex< myPlaces.length; myPlacesIndex++) {
  for (let friendPlacesIndex=0; friendPlacesIndex< friendPlaces.length; friendPlacesIndex++){
    if (myPlaces[myPlacesIndex]===friendPlaces[friendPlacesIndex]) {
      console.log('This is in common');
    } else {
      console.log('not in common');
    }
  }
}