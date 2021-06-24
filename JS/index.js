const headerElement = document.createElement("header");
document.body.appendChild(headerElement);
const mainElement = document.createElement("main");
document.body.appendChild(mainElement);

function heading(){
    const mainH1 = document.createElement("h1");
    mainH1.classList.add("home-first-heading");
    mainH1.innerHTML = "Nos photographes";
    mainElement.appendChild(mainH1);
}

function displayPhotographers(photographers){
    //const mainElement = document.createElement("main");
    console.log(photographers);
    for (const photographer of photographers){
        console.log(photographer);
        //mainElement.appendChild(myCard.display());
    }
    //return mainElement;
}


heading();

let tags = [];

function filtrer(tag){
    let cards = document.querySelectorAll(".card");
    for (let card of cards){
        card.style.display = "block";
        if(!card.innerText.includes(tag)){
            card.style.display = "none";
        }
    }
}

/*fetch('./JS/photographers.json')
    .then((response) => {
        return response.json();
    })
    .then((obj) => {
        photographers = obj.photographers;

        for (const photographer of photographers){ //cela va énumérer les objets contenus dans obj
            let myCard = new PhotographerFactory("card", {portrait : photographer.portrait, name : photographer.name, city : photographer.city, country : photographer.country, tagline : photographer.tagline, price : photographer.price, tags : photographer.tags, id : photographer.id});
            
            tags.push(...photographer.tags);

            mainElement.appendChild(myCard.display());
        }
        
        tags = new Set(tags);
        const navigation = document.createElement("nav");
        const navigationList = document.createElement("ul");

        for(let tag of tags){
            const tagContainer = document.createElement("li");
            tagContainer.classList.add("tag-filter");
            tagContainer.classList.add("tags-links");
            tagContainer.innerHTML = `<span aria-hidden ="true">#</span>${tag}`;
            navigationList.appendChild(tagContainer);
            tagContainer.addEventListener("click", () =>{
                filtrer(tag);
            });
            navigation.appendChild(navigationList);
        }
        headerElement.appendChild(navigation);
    })
    .catch((error) => {
        console.error("Cela n'a pas fonctionné");
        console.error(error);
    });*/

class Homepage{
    constructor(){
        this.photographers = [];
        this.tags = [];
    }

    async getPhotographers(){
        const response = await fetch('./JS/photographers.json');
        console.log(response);
        const obj = await response.json();
        console.log(obj);
        if (!response.ok) {
            throw new Error(`Erreur HTTP ! statut : ${response.status}`);
        }
        const photographers = obj.photographers;
        console.log(photographers);
        for (const photographer of photographers){
            let myCard = new PhotographerFactory("card", {portrait : photographer.portrait, name : photographer.name, city : photographer.city, country : photographer.country, tagline : photographer.tagline, price : photographer.price, tags : photographer.tags, id : photographer.id});
            this.photographers.push(myCard);
            this.tags.push(...photographer.tags);
        }
        displayPhotographers(this.photographers);
    }

    

    /*filtrer(tag){
        let cards = document.querySelectorAll(".card");
        for (let card of cards){
            card.style.display = "block";
            if(!card.innerText.includes(tag)){
                card.style.display = "none";
            }
        }
    }

    displayTags(){
        tags = new Set(tags);
        const navigation = document.createElement("nav");
        const navigationList = document.createElement("ul");
        for(let tag of tags){
            const tagContainer = document.createElement("li");
            tagContainer.classList.add("tag-filter");
            tagContainer.classList.add("tags-links");
            tagContainer.innerHTML = `<span aria-hidden ="true">#</span>${tag}`;
            navigationList.appendChild(tagContainer);
            tagContainer.addEventListener("click", () =>{
                filtrer(tag);
            });
            navigation.appendChild(navigationList);
        }
        headerElement.appendChild(navigation);
    }*/
}


let myHomePage = new Homepage();
myHomePage.getPhotographers();
