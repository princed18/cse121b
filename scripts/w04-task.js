/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Prince Dube",
    photo: "images/prince.jpg", 
    favoriteFoods: [
      "Spaggetti",
      "Rice",
      "beef",
      "Chicken",
      "Pizza"
    ],
    hobbies: ["Watching Soccer", "Playing FIFA", "Coding"],
    placesLived: []
  };




/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
      place: "Bulawayo, ZW",
      length: "26 years"},

      {place: "Johannesburg, SA",
      length: "4 years"
    }
  );




/* DOM Manipulation - Output */
document.querySelector('#name').textContent = myProfile.name;

/* Name */

/* Photo with attributes */
document.getElementById('photo').src = myProfile.photo;
document.getElementById('photo').alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(item=>{
    let li = document.createElement('li');
    li.textContent = item;
    document.getElementById('favorite-foods').appendChild(li);

})

/* Hobbies List */
myProfile.hobbies.forEach(item=>{
    let li2=document.createElement('li');
    li2.textContent=item;
    document.getElementById('hobbies').appendChild(li2);
})

/* Places Lived DataList */
myProfile.placesLived.forEach(item => {
    let dt = document.createElement('dt');
    dt.textContent = item.place;
  
    let dd = document.createElement('dd');
    dd.textContent = item.length;
  
    document.getElementById('places-lived').appendChild(dt);
    document.getElementById('places-lived').appendChild(dd);
  });
  
