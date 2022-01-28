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

/*

const recipesBox = document.getElementById("recipes");
for (let i = 0; i < recipes.ingredients.length; i ++) {
  const div = document.createElement("div");
  div.innerHTML = recipes[i].ingredient;

  recipesBox.appendChild(div);
}
*/

document.getElementById("button").addEventListener("click", function(){

  const para = document.createElement("p");
  para.innerText = "This is a recipe";
  document.body.appendChild(para);

});

document.getElementById("boxButton").addEventListener("click", function(){

  document.getElementById("box").style.backgroundColor = "blue";

});