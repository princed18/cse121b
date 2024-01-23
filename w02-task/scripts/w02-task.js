/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */


/* Step 2 - Variables */
const fullName = "Prince Dube";

const currentDate= new Date();
const currentYear= currentDate.getFullYear();

const profilePicture = "images/prince.jpg";





/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");

const foodElement = document.querySelector("#food");

const yearElement = document.querySelector("#year");

const imageElement = document.querySelector("img[src='images/prince.jpg']");





/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent= currentYear;
imageElement.setAttribute('src', profilePicture)
imageElement.setAttribute('alt','Profile Image of ${fullName}')



/* Step 5 - Array */
const favoriteFoods = [];

favoriteFoods[0]= "Rice";
favoriteFoods[1]= "Chicken";
favoriteFoods[2]="Sausage";
favoriteFoods[3]="bread";
document.getElementById("food").innerHTML=favoriteFoods;


const newFavoriteFood = "Pizza";
favoriteFoods.push(newFavoriteFood);

foodElement.innerHTML += `<br>${favoriteFoods}</br>`

favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}</br>`

favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}</br>`





























