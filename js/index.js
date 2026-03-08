const params = new URLSearchParams(window.location.search);
const myCategory = params.get("recipes");

const listURL = "https://dummyjson.com/recipes";
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
<br>
                <a class="recipeBtn" href="details.html?recipeId=${recipe.id}">Recipe</a>
            </article>
    `;
  });
}

// Cooking tid Sortering
const sortByTimeBtn = document.querySelector("#sortByTime");
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

function sortTime() {
  console.log("sort by time");
  const sorted = [...allRecipes].sort((a, b) => a.cookTimeMinutes - b.cookTimeMinutes); // sortér efter cooking time
  showRecipes(sorted); // vis sorteret liste
}

sortByTimeBtn.addEventListener("click", sortTime);
showAllBtn.addEventListener("click", () => showRecipes(allRecipes));

// Alphabet Sortering
const sortByAlphabetBtn = document.querySelector("#sortByAlphabet");

function sortAlphabet() {
  console.log("sort by alphabet");
  const az = [...allRecipes].sort((a, b) => a.name.localeCompare(b.name, "da")); // sortér efter navn
  showRecipes(az); // vis sorteret liste
}

sortByAlphabetBtn.addEventListener("click", sortAlphabet);
showAllBtn.addEventListener("click", () => showRecipes(allRecipes));

// Easy Sortering
const filterByEasyBtn = document.querySelector("#filterByEasy");

function filterByEasy() {
  const filtered = allRecipes.filter((recipe) => (recipe.difficulty = "Easy"));

  showRecipes(filtered);
}

filterByEasyBtn.addEventListener("click", filterByEasy);
showAllBtn.addEventListener("click", () => showRecipes(allRecipes));

// Medium Sortering
const filterByMediumBtn = document.querySelector("#filterByMedium");

function filterByMedium() {
  const filtered = allRecipes.filter((recipe) => (recipe.difficulty = "Medium"));

  showRecipes(filtered);
}

filterByMediumBtn.addEventListener("click", filterByMedium);
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
