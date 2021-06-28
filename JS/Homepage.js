const mainElement = document.createElement("main");
document.body.appendChild(mainElement);

let tags = [];

class Homepage{
    constructor(){
        this.photographers = [];
        this.tags = [];
    }

    heading(){
        const mainH1 = document.createElement("h1");
        mainH1.classList.add("home-first-heading");
        mainH1.innerHTML = "Nos photographes";
        mainElement.appendChild(mainH1);
    }

    async getPhotographers(){
        const response = await fetch('./JS/photographers.json');
        //console.log(response);
        const obj = await response.json();
        //console.log(obj);
        if (!response.ok) {
            throw new Error(`Erreur HTTP ! statut : ${response.status}`);
        }
        const photographers = obj.photographers;
        //console.log(photographers);
        for (const photographer of photographers){
            let myCard = new PhotographerFactory("card", {portrait : photographer.portrait, name : photographer.name, city : photographer.city, country : photographer.country, tagline : photographer.tagline, price : photographer.price, tags : photographer.tags, id : photographer.id});
            this.photographers.push(myCard);
            this.tags.push(...photographer.tags);
        }
        console.log(this.photographers);
    }

    displayPhotographers(){
        this.photographers.forEach(photographer =>{
            mainElement.appendChild(photographer.display());
        });
    }

    displayTags(){
        tags = new Set(this.tags);
        
        const navigation = document.createElement("nav");
        const navigationList = document.createElement("ul");
        for(let tag of tags){
            const tagContainer = document.createElement("li");
            tagContainer.classList.add("tag-filter");
            tagContainer.classList.add("tags-links");
            tagContainer.innerHTML = `<span aria-hidden ="true">#</span>${tag}`;
            navigationList.appendChild(tagContainer);
            tagContainer.addEventListener("click", () =>{
                (function filtrer(tag){
                    let cards = document.querySelectorAll(".card");
                    for (let card of cards){
                        card.style.display = "block";
                        if(!card.innerText.includes(tag)){
                            card.style.display = "none";
                        }
                    }
                })();
            });
            navigation.appendChild(navigationList);
        }
        headerElement.appendChild(navigation);
    }

}

