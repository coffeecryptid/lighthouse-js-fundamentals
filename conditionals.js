/* -- first conditional exersise
const raining = false;
const cold = false;
if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
} else {
  console.log("Short Sleeves are fine.");
}

console.log("Now you're ready to go outside!");

next one has more else/if statements */

const temperature = 5;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15){
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");