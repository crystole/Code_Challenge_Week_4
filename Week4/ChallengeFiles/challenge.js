// Part 1: Create a new div of class "planet" and set its background color
// to the color of your choice.  Then, append it to the body in the DOM.


var planet = document.getElementById("div1");
planet.style.background = "red";


// Part 2: Create a new div of class "moon" and append it to the planet in the DOM.

var moon = document.getElementById("div2");
planet.append(moon);
