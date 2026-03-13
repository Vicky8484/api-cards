const params = new URLSearchParams(window.location.search);
const myCategory = params.get("recipes");

const listURL = "https://dummyjson.com/recipes?limit=100";
console.log(listURL);
const listContainer = document.querySelector("#recipe-box");

function getRecipes() {
  fetch(listURL).then((res) => res.json().then((data) => showRecipes(data.recipes)));
}

function showRecipes(recipes) {
  // Start med tom container
  listContainer.innerHTML = "";

  // recipes er et array af objekter
  recipes.forEach((recipe) => {
    listContainer.innerHTML += `
 <article class="recipe-card">
 <img src="https://cdn.dummyjson.com/recipe-images/${recipe.id}.webp" alt="Billede af ${recipe.name}">
                <h2 class="card-title">${recipe.name}</h2>
                <div class="space">
   <p>Prep time</p> <p>${recipe.prepTimeMinutes} min</p>
                </div>
             
                 <div class="space">
   <p>Cooking time</p> <p>${recipe.cookTimeMinutes} min</p>
                </div>

                 <div class="space">
   <p>Servings</p> <p>${recipe.servings}</p>
                </div>
                
                 <div class="space">
   <p>Difficulty</p> <p>${recipe.difficulty}</p>
                </div>

    
  <div class="space">
   <p>Ingredients</p> <p>${recipe.ingredients.length}</p>
                </div>

         <div class="space">
   <p>Kalorier</p> <p>${recipe.caloriesPerServing}</p>
                </div>
<br>
                <a class="recipeBtn" href="details.html?recipeId=${recipe.id}">Recipe</a>
            </article>
    `;
  });
}

//Filtrer
const showAllBtn = document.querySelector("#resetBtn");

let allRecipes = [];

function getRecipes() {
  fetch(listURL)
    .then((res) => res.json())
    .then((data) => {
      allRecipes = data.recipes; // gem originaldata
      showRecipes(allRecipes);
    });
}

showAllBtn.addEventListener("click", () => showRecipes(allRecipes));

// Under 20 min prep Filter
const filterPrepBtn = document.querySelector("#filterByPrep");

function filterByPrep() {
  const filtered = allRecipes.filter((recipe) => recipe.prepTimeMinutes < 20);

  showRecipes(filtered);
}

filterPrepBtn.addEventListener("click", filterByPrep);
showAllBtn.addEventListener("click", () => showRecipes(allRecipes));

// Under 20 min cooking Filter
const filterCookBtn = document.querySelector("#filterByCook");

function filterByCook() {
  const filtered = allRecipes.filter((recipe) => recipe.cookTimeMinutes < 20);

  showRecipes(filtered);
}

filterCookBtn.addEventListener("click", filterByCook);
showAllBtn.addEventListener("click", () => showRecipes(allRecipes));

// Under 10 Ingredients Filter
const filterByIn = document.querySelector("#filterByIngredients");

function filterByIngredients() {
  const filtered = allRecipes.filter((recipe) => recipe.ingredients.length < 10);

  showRecipes(filtered);
}

filterByIn.addEventListener("click", filterByIngredients);
showAllBtn.addEventListener("click", () => showRecipes(allRecipes));

// Over 10 Ingredients Filter
const filterByIn2 = document.querySelector("#filterByIngredients2");

function filterByIngredients2() {
  const filtered = allRecipes.filter((recipe) => recipe.ingredients.length > 10);

  showRecipes(filtered);
}

filterByIn2.addEventListener("click", filterByIngredients2);
showAllBtn.addEventListener("click", () => showRecipes(allRecipes));

// Under 300 calories Filter
const filterByCal = document.querySelector("#filterByCalories");

function filterByCalories() {
  const filtered = allRecipes.filter((recipe) => recipe.caloriesPerServing <= 300);

  showRecipes(filtered);
}

filterByCal.addEventListener("click", filterByCalories);
showAllBtn.addEventListener("click", () => showRecipes(allRecipes));

// Under 500 calories Filter
const filterByCal2 = document.querySelector("#filterByCalories2");

function filterByCalories2() {
  const filtered = allRecipes.filter((recipe) => recipe.caloriesPerServing <= 500);

  showRecipes(filtered);
}

filterByCal2.addEventListener("click", filterByCalories2);
showAllBtn.addEventListener("click", () => showRecipes(allRecipes));

// 4 or less servings Filter
const filterLessBtn = document.querySelector("#filterByLess");

function filterByLess() {
  const filtered = allRecipes.filter((recipe) => recipe.servings <= 4);

  showRecipes(filtered);
}

filterLessBtn.addEventListener("click", filterByLess);
showAllBtn.addEventListener("click", () => showRecipes(allRecipes));

// 4 or more servings Filter
const filterMoreBtn = document.querySelector("#filterByMore");

function filterByMore() {
  const filtered = allRecipes.filter((recipe) => recipe.servings >= 4);

  showRecipes(filtered);
}

filterMoreBtn.addEventListener("click", filterByMore);
showAllBtn.addEventListener("click", () => showRecipes(allRecipes));

getRecipes();

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
