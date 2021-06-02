// Objectives
// To fetch from an API.
// To use async and await correctly.
// To return the necesary information from a request using object manipulation.
const YOUR_APP_ID = "ceda2fc1";
const YOUR_APP_KEY = "a54127187f1158cc2dbac20fec2398c3";
const requestUrl = `https://api.edamam.com/search?q=kale&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

let foodToSearch = null;

let endPoint = document.getElementById("recipe-results");

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
  // console.log(data);
  // console.log(data.hits[1].recipe.label);
  // document.getElementById("recipe-label").innerHTML = data.hits[1].recipe.label;
  // console.log(data.hits[1].recipe.url);
  // document.getElementById("recipe-label").href = data.hits[1].recipe.url;
  //--- write your code above ---
  endPoint.innerHTML = "";
  getMeSomeRecipes(data);
  console.log(data);
}
// next step is to put the recipe label and url in the a tah in inner.html
// items that we want to be displayed in order:
//
// Recipe img -> findings.hits[i].recipe.image
// Recipe label with href -> label findings.hits[i].recipe.label ; href -> findings.hits[i].recipe.url
// Calories -> findings.hits[i].recipe.calories

function getMeSomeRecipes(findings) {
  for (let i = 0; i < 10; i++) {
    // Recipe Image
    let imgUrl = findings.hits[i].recipe.image;
    let img = document.createElement("img");
    img.setAttribute("src", imgUrl);
    //Recipe Label
    let labelName = findings.hits[i].recipe.label;
    let label = document.createElement("a");
    let labelhref = findings.hits[i].recipe.url;
    label.setAttribute("href", labelhref);
    label.innerText = labelName;
    //Recipe Calories
    let caloriesNumber = findings.hits[i].recipe.calories;
    let calories = document.createElement("p");
    calories.innerText = `Only ${Math.round(caloriesNumber)} calories!`;

    //Recipe Div
    let recipediv = document.createElement("div");
    // recipediv.appendChild(img);
    // recipediv.appendChild(label);
    // recipediv.appendChild(calories);
    recipediv.append(img, label, calories);

    //last one below
    endPoint.appendChild(recipediv);
    recipediv.setAttribute("class", "plate");
  }
}
