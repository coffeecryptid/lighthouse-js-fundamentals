const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log("Banana Bread Ingredients:");
let i = 0;
while (i < ingredients.length){
  console.log(ingredients[i]);
  i++;
}

// Write a for loop that prints out the contents of ingredients:
console.log("More Banana Bread Ingredients");
for (i = 0; i < ingredients.length; i++){
  console.log(ingredients[i]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:

console.log("Reverse Banana Bread");
ingredients.reverse();
for (i = 0; i < ingredients.length; i++){
  console.log(ingredients[i]);
}