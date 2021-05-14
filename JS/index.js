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
headerLink.appendChild(logoImg);

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

fetch('./JS/photographers.json')
    .then((response) => {
        return response.json();
    })
    .then((obj) => {
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
            tagContainer.classList.add("tag-filter");
            tagContainer.classList.add("tags-links");
            tagContainer.innerHTML = `<span aria-hidden ="true">#</span>${tag}`;
            /*const sharpSpan = document.createElement("span");
            sharpSpan.setAttribute("aria-hidden", "true");
            sharpSpan.innerText = '#'
            tagContainer.appendChild(sharpSpan);
            tagContainer.innerText = `${tag}`;*/
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