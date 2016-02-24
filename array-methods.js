var  planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/* 
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
var el = document.getElementById("planets");
planets.forEach(function(planet) {
  el.innerHTML += planet + '<br>';
});
// Use the map method to create a new array where the first letter of each planet is capitalized
// MAP METHOD

// var reversedColors = colors.map(
//   function(placeholder){
//     return placeholder.split("").reverse().join("");
//   }
//   )

var capPlanets = planets.map(
  function(capitalized){
    return capitalized.charAt().toUpperCase() + capitalized.slice(1);

  })
// Use the filter method to create a new array that contains planets with the letter 'e'

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];