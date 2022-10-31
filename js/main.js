const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const getMeals = async () => {};

const viewMeals = async () => {
	const result = await fetch(searchApi);
	const data = await result.json();
	console.log(data);
	let cartoona = ``;
	data.meals.map((meal) => {
		cartoona += `            <div class="meal my-3 col-md-3 position-relative rounded-2 overflow-hidden">
						<div class="">
							<img src="${meal.strMealThumb}" alt="img" class="w-100 rounded-2">
						</div>
						<div class="meal-name position-absolute start-0 end-0 bottom-0 bg-white opacity-75">
							<h2 class="px-3">${meal.strMeal}</h2>
						</div>
					</div>`;
	});

	const dest = document.querySelector(".container .row1");
	dest.innerHTML = cartoona;
};

console.log(window.location);
// for nav toggle
document
	.querySelector("nav .naav .bi-justify")
	.addEventListener("click", () => {
		// toggleNav();'
		document.querySelector("nav").classList.toggle("translate");
	});

const searchByName = async (e) => {
	const api = searchApi + e;
	const result = await fetch(api);
	const data = await result.json();
	let cartoona = ``;
	if (data.meals) {
		data.meals.map((meal) => {
			cartoona += `            <div class="meal my-3 col-md-3 position-relative rounded-2 overflow-hidden">
				<div class="">
					<img src="${meal.strMealThumb}" alt="img" class="w-100 rounded-2">
				</div>
				<div class="meal-name position-absolute start-0 end-0 bottom-0 bg-white opacity-75">
					<h2 class="px-3">${meal.strMeal}</h2>
				</div>
			</div>`;
		});
	}
	const dest = document.querySelector(".container .row2");
	dest.innerHTML = cartoona;
};

const searchByFirstLetter = async (e) => {
	const api = searchApi + e;
	const result = await fetch(api);
	const data = await result.json();
	let cartoona = ``;
	for (let i = 0; i < data.meals.length; i++) {
		if (data.meals[i].strMeal.startsWith(e)) {
			cartoona += `            <div class="meal my-3 col-md-3 position-relative rounded-2 overflow-hidden">
				<div class="">
					<img src="${data.meals[i].strMealThumb}" alt="img" class="w-100 rounded-2">
				</div>
				<div class="meal-name position-absolute start-0 end-0 bottom-0 bg-white opacity-75">
					<h2 class="px-3">${data.meals[i].strMeal}</h2>
				</div>
			</div>`;
		}
	}
	const dest = document.querySelector(".container .row2");
	dest.innerHTML = cartoona;
};
const getCategories = async () => {
	console.log("akshfbasf");
	const api = "https://www.themealdb.com/api/json/v1/1/categories.php";
	const result = await fetch(api);
	const data = await result.json();
	let cartoona = ``;
	for (let i = 0; i < data.categories.length; i++) {
		cartoona += `            <div class="meal my-3 col-md-3 position-relative rounded-2 overflow-hidden">
				<div class="">
					<img src="${data.categories[i].strCategoryThumb}" alt="img" class="w-100 rounded-2">
				</div>
				<div class="meal-name position-absolute start-0 end-0 bottom-0 bg-white opacity-75 text-center">
					<h2 class="px-3">${data.categories[i].strCategory}</h2>
					<p>${data.categories[i].strCategoryDescription}</p>
				</div>
			</div>`;
	}
	const dest = document.querySelector(".container .row3");
	dest.innerHTML = cartoona;
};
const getArea = async () => {
	const api = "https://www.themealdb.com/api/json/v1/1/list.php?a=list";
	const result = await fetch(api);
	const data = await result.json();
	let cartoona = ``;
	for (let i = 0; i < data.meals.length; i++) {
		cartoona += ` <div class="col-md-3 my-3 text-center text-white fs-1">
	<i class="bi bi-dice-6-fill text-danger"></i>
	<h2>${data.meals[i].strArea}</h2>
</div>;`;
	}
	const dest = document.querySelector(".container .row4");
	dest.innerHTML = cartoona;
};
const getIngredients = async () => {
	const api = "https://www.themealdb.com/api/json/v1/1/list.php?i=list";
	const result = await fetch(api);
	const data = await result.json();
	let cartoona = ``;
	for (let i = 0; i < data.meals.length; i++) {
		cartoona += `
            <div class="col-md-3 text-center text-white my-3">
                <i class="bi bi-fire text-success fs-1"></i>
                <h2>${data.meals[i].strIngredient}</h2>
                <p class="fs-5">${
									data.meals[i].strDescription
										? data.meals[i].strDescription
										: "Not Found"
								}</p>
            </div>;`;
	}
	const dest = document.querySelector(".container .row5");
	dest.innerHTML = cartoona;
};
const navigateToSearch = () => {
	window.location.href = "search.html";
};
const navigateToHome = () => {
	window.location.href = "index.html";
};

const navigateToCategories = () => {
	window.location.href = "categories.html";
};
const navigateToArea = () => {
	window.location.href = "area.html";
};
const navigateToIngredients = () => {
	window.location.href = "ingredients.html";
};

if (window.location.pathname == "/index.html") {
	viewMeals();
}
if (window.location.pathname == "/") {
	viewMeals();
}
if (window.location.pathname == "/categories.html") {
	getCategories();
}
if (window.location.pathname == "/area.html") {
	getArea();
}
if (window.location.pathname == "/ingredients.html") {
	getIngredients();
}
