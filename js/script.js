/* Created by: Curtis Edwards
   Created on: April 2022
   This file contains the JS functions for index.html*/

"use strict"

/**
 * Check service worker.
 */
 if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-UNIT-5-01-HTML/sw.js", {
    scope: "/ICS2O-UNIT-5-01-HTML/",
  })
}

/**
 * This function updates the slider value.
 */
 function updateSliderValue(valueFromSlider) {
  document.getElementById("slider-value").innerHTML = valueFromSlider
}

/**
 * This function displays the slider value.
 */
function ButtonClicked() {
  document.getElementById("random-number").innerHTML =
    Math.floor(Math.random() * 6) + 1
}

// process
if (random - number == slider - value) {
  print("Correct!")
}

// process
if (random - number != slider - value) {
  print("Incorrect!")
}
