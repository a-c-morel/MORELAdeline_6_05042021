class Homepage{
    constructor(){
        this.photographers = [];
        this.tags = [];
        this.mainElement = document.querySelector("main");
        this.headerElement = document.querySelector("header");
    }

    heading(){
        const mainH1 = document.createElement("h1");
        mainH1.classList.add("home-first-heading");
        mainH1.innerHTML = "Nos photographes";
        this.mainElement.appendChild(mainH1);
    }

    async getPhotographers(){
        const response = await fetch("./JS/photographers.json");
        const obj = await response.json();

        if (!response.ok) {
            throw new Error(`Erreur HTTP ! statut : ${response.status}`);
        }

        const photographers = obj.photographers;

        for (const photographer of photographers){
            let myCard = new PhotographerFactory("card", {portrait : photographer.portrait, name : photographer.name, city : photographer.city, country : photographer.country, tagline : photographer.tagline, price : photographer.price, tags : photographer.tags, id : photographer.id});
            this.photographers.push(myCard);
            this.tags.push(...photographer.tags);
        }
    }

    displayPhotographers(){
        this.photographers.forEach(photographer =>{
            this.mainElement.appendChild(photographer.display());
        });
    }

    displayTags() {
        this.tags = new Set(this.tags);
        
        const navigation = document.createElement("nav");
        navigation.setAttribute("role", "navigation");
        const navigationList = document.createElement("ul");

        for (let tag of this.tags) {
            const tagContainer = document.createElement("li");
            tagContainer.setAttribute("tabindex", "0");
            tagContainer.classList.add("tag-filter");
            tagContainer.classList.add("tags-links");
            tagContainer.innerHTML = `<span aria-hidden ="true">#</span>${tag}`;
            navigationList.appendChild(tagContainer);

            tagContainer.addEventListener("click", () => {
                this.filter(tag);
            });
            tagContainer.addEventListener("keydown", (e) => {
                const keyName = e.key;
                if (keyName === "Enter") {
                    this.filter(tag);                }
            });

            navigation.appendChild(navigationList);
        }
        this.headerElement.appendChild(navigation);
    }

    filter(tag) {
        let cards = document.querySelectorAll(".card");
    
        for (let card of cards) {
        card.style.display = "block";
            if (!card.innerText.includes(tag)) {
                card.style.display = "none";
            }
        }
    }
}