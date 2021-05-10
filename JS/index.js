const mainElement = document.createElement("main");
const headerElement = document.createElement("header");
document.body.appendChild(headerElement);
document.body.appendChild(mainElement);

const mainH1 = document.createElement("h1");
mainH1.classList.add("home-first-heading");
mainH1.innerHTML = "Nos photographes";
mainElement.appendChild(mainH1);

const headerLink = document.createElement("a");
headerLink.setAttribute("href", "index.html");
headerElement.appendChild(headerLink);
const logoImg = document.createElement("img");
logoImg.classList.add("logo");
logoImg.setAttribute("src", "images/logo.png");
logoImg.setAttribute("alt", "Fisheye Home page");
headerElement.appendChild(logoImg);

//ne pas oublier d'ajouter le logo !

let photographers = [];
let tags = [];

function filtrer(tag){
    let cards = document.querySelectorAll(".card");
    //console.log(cards);
    for (let card of cards){
        card.style.display = "block";
        //console.log(card.innerText);
        if(!card.innerText.includes(tag)){
            //console.log(`le tag ${tag} ne se trouve pas dans la carte ${card.innerText}`);
            card.style.display = "none";
        }else{
            //console.log(`le tag ${tag} se trouve bien dans la carte ${card.innerText}`);
        }
    }
}

fetch('./JS/photographers.json')
    .then((response) => { //récupère une promesse
        return response.json(); //on formate la réponse au format json, pour dire que ce n'est pas simplement du contenu texte qu'on veut récupérer
    })
    .then((obj) => { //traitement des objets dans notre page web
        photographers = obj.photographers;
        for (const photographer of photographers){ //cela va énumérer les objets contenus dans obj
            let myCard = new Photographer(photographer.portrait, photographer.name, photographer.city, photographer.country, photographer.tagline, photographer.price, photographer.tags);
            tags.push(...photographer.tags);
            mainElement.appendChild(myCard.display());
        }
        
        tags = new Set(tags);
        const navigation = document.createElement("nav");
        const navigationList = document.createElement("ul");

        for(let tag of tags){
            const tagContainer = document.createElement("li");
            tagContainer.innerHTML = `#${tag}`;
            tagContainer.classList.add("tag-filter");
            tagContainer.classList.add("tags-links");
            //tagLink.setAttribute(href, ...)
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
    });