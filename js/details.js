const params = new URLSearchParams(window.location.search);
const id = params.get("recipeId");

console.log("id:", id);

// const id = 1528;
const productURL = "https://dummyjson.com/recipes/" + id;
const productcontainer = document.querySelector("#details-box");

function getRecipes() {
  fetch(productURL).then((res) => res.json().then((recipe) => show(recipe)));
}

function show(recipe) {
  productcontainer.innerHTML = `
  <article class="recipe">
<div class="product-header">
             <img src="https://cdn.dummyjson.com/recipe-images/${recipe.id}.webp" alt="Billede af ${recipe.name}">
             <div class="product-details">
                <h4 class="product-title">${recipe.name}</h4>
                <br>
   <p>Prep time: ${recipe.prepTimeMinutes} min</p>
   <br>
   <p>Cooking time: ${recipe.cookTimeMinutes} min</p>     
   <br>    
   <p>Servings: ${recipe.servings}</p>  
   <br>
   <p>Difficulty: ${recipe.difficulty}</p>
   </div>
            </div>

            <div class="product-recipe">
             
<details>
  <summary>Ingredients</summary>
  <ul><li>${recipe.ingredients.join("</li><li>")}</li></ul>
</details>
<details>
  <summary>Instructions</summary>
  <ul><li>${recipe.instructions.join("</li><li>")}</li></ul>
</details>
<details>
  <summary>Information</summary>
  <div class="more-info">
  <p>Cuisine: ${recipe.cuisine}</p>
  <br>
    <p>Calories per serving: ${recipe.caloriesPerServing}</p>
    <br>
      <p>Meal type: ${recipe.mealType}</p>
      <br>
         <p>Rating: ${recipe.rating} | Review count: ${recipe.reviewCount}</p>
         <br>
           <p>Tags: ${recipe.tags.join(", ")}</p>
           </div>
<h2>Enjoy your meal!</h2>
</details>

            </div>
    </article>
  `;
}

getRecipes();
