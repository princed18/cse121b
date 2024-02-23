/* W05: Programming Tasks */

/* Declare and initialize global variables */
const fixtureElement= document.getElementById("fixtures");
let fixturelist = [];



const displayFixture = (fixtures) => {
    fixtureElement.innerHTML="";
    fixtures.forEach((fixture) => {
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        h3.textContent = fixture.fixtureGame;
        const img = document.createElement('img');
        img.src = liverpool.imageUrl;
        img.alt = liverpool.location;
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
};

/* async getfIXTURE Function using fetch()*/
const getFixtures = async () => {

    const response = await fetch("https://www.google.com/search?q=liverpool+fixtures&rlz=1C1GCEA_enZA1076ZA1076&oq=liverpool+fixtures+&gs_lcrp=EgZjaHJvbWUyCggAEEUYFhgeGDkyBggBECMYJzIQCAIQABiDARixAxiABBiKBTIQCAMQABiDARixAxiABBiKBTINCAQQABixAxiABBiKBTIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBCTEyMzE1ajBqOagCALACAA&sourceid=chrome&ie=UTF-8#sie=t;/m/04ltf;2;/m/02_tc;mt;fp;1;;;.json");
    if (response.ok){
        templeList = await response.json();
        displayTemples(fixturelist);
        console.log(fixturelist);

    }
}
document.querySelector("#fixtures").addEventListener("change", () => { filterTemples(fixturelist) });
getFixtures();

/* reset Function */

    const reset = ()=>{
        fixtureElement.innerHTML="";

    }
getFixtures();



