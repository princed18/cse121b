    // fetch.js
const url = "https://jsonplaceholder.org/users";

let data = null;
const userList =document.querySelector("ul");

async function getUsers(URL) {
  const response = await fetch(URL);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    data = await response.json();
    console.log(data);
    displayUsers(data);

    
}
}

function displayUsers(users){

   reset()
    users.forEach(user => {
        const listItem = document.createElement("li");
        listItem.textContent=`${user.firstname} ${user.lastname}  ${user.birthDate}`;
        userList.appendChild(listItem);
        
    });
}
function reset(){
userList.innerHTML="";
}


function filterData(){
    let eightys= data.filter(user => user.birthDate.includes("198"));
    displayUsers(eightys);


}
document.querySelector("button").addEventListener("click",filterData);

getUsers(url);
