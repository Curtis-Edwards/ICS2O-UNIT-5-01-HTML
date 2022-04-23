/* Created by: Curtis Edwards
   Created on: April 2022
   This file contains the JS functions for index.html*/

'use strict'

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
//input
const randomNumber = Math.floor(Math.random() * 6) + 1

/**
 * This function checks the slider value.
 */
function buttonClicked() {
document.getElementById("hello-world").innerHTML = "The answer is " + answerCheck
}

let answerCheck

  if (slider.value == randomNumber) {
    answerCheck = "Correct"
} else {
    answerCheck = "Incorrect" 
}

