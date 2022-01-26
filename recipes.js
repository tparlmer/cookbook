const recipes = {
  "recipe": "Lentil Soup",
  "ingredients": [
    {
      "ingredient": "Onion",
      "amount": "Whole Chopped Onion"
    },
    {
      "ingredient": "Red Lentils",
      "amount": "Half a bag"
    }
  ]
}
console.log("jello world")
const recipesBox = document.getElementById("recipes");
for (let i = 0; i < recipes.length; i ++) {
  const div = document.createElement("div");
  div.innerHTML = recipes[i].ingredient;

  recipesBox.appendChild(div);
}

