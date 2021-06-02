// Objectives
// To fetch from an API.
// To use async and await correctly.
// To return the necesary information from a request using object manipulation.
const YOUR_APP_ID = "ceda2fc1";
const YOUR_APP_KEY = "a54127187f1158cc2dbac20fec2398c3";
const requestUrl = `https://api.edamam.com/search?q=kale&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

let foodToSearch = null;

function handleRecipeClick() {
  fetchRecipe(foodToSearch);
}

function handleFoodChange() {
  foodToSearch = document.querySelector("#food-input").value;
}

async function fetchRecipe(food) {
  //--- write your code below ---
  let response = await fetch(
    `https://api.edamam.com/search?q=${food}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`
  );
  let data = await response.json();
  console.log(data);
  console.log(data.hits[1].recipe.label);
  document.getElementById("recipe-label").innerHTML = data.hits[1].recipe.label;
  console.log(data.hits[1].recipe.url);
  document.getElementById("recipe-label").href = data.hits[1].recipe.url;
  //--- write your code above ---
}
// next step is to put the recipe label and url in the a tah in inner.html
