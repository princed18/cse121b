/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement= document.getElementById("temples");
let templeList = [];


/* async displayTemples Function */
const displayTemples = (temples) => {
    templesElement.innerHTML="";
    temples.forEach((temple) => {
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        h3.textContent = temple.templeName;
        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.location;
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {

    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok){
        templeList = await response.json();
        displayTemples(templeList);
        console.log(templeList);

    }
}
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });
getTemples();

/* reset Function */

    const reset = ()=>{
        templesElement.innerHTML="";

    }


/* filterTemples Function */
function filterTemples(temples) {
    reset();
    let filter = document.getElementById("filtered").value;
    switch (filter) {
        case 'utah':
            let utahTemples = temples.filter(temple => temple.location.toLowerCase().includes("utah"));
            displayTemples(utahTemples);
            break;
        case 'notutah':
            let notUtahTemples = temples.filter(temple => !temple.location.toLowerCase().includes("utah"));
            displayTemples(notUtahTemples);
            break;
        case 'older':
            let olderTemples = temples.filter(temple => {
                let dedicationDate = new Date(temple.dedicated);
                return dedicationDate < new Date(1950, 0, 1);
            });
            displayTemples(olderTemples);
            break;
        case 'all':
        default:
            displayTemples(temples);
            break;
    }
}


getTemples();

/* Event Listener */
