class PhotographerProfile{
    constructor(name, city, country, tagline, tags, portrait){
        this.name = name;
        this.city = city;
        this.country = country;
        this.tagline = tagline;
        this.tags = tags;
        this.portrait = portrait;
    }
    displayProfile(){
        //create elements
        const sectionContainer = document.createElement("section");
        const newArticle = document.createElement("article");
        const firstSection = document.createElement("section");
        const firstSectionH1 = document.createElement("h1");
        const secondSection = document.createElement("section");
        const locationParagraph = document.createElement("p");
        const quoteParagraph = document.createElement("p");
        const thirdSection = document.createElement("section");
        const thirdSectionList = document.createElement("ul");
        const fourthSection = document.createElement("section");
        const newDiv = document.createElement("div");
        const newProfileImg = document.createElement("img");

        //add classes and attributes + content
        firstSection.classList.add("card-profile");
        firstSectionH1.classList.add("card-profile__name");
        firstSectionH1.innerHTML = `${this.name}`;
        secondSection.classList.add("card-info");
        locationParagraph.classList.add("card-info__location");
        locationParagraph.innerHTML = `${this.city}, ${this.country}`;
        quoteParagraph.classList.add("card-info__quote");
        quoteParagraph.innerHTML = `${this.tagline}`;
        newProfileImg.classList.add("card-profile__img");
        newProfileImg.setAttribute("src", `images/Photographers ID Photos/${this.portrait}`);

        //add elements to their parents
        mainElement.appendChild(sectionContainer);
        sectionContainer.appendChild(newArticle);
        newArticle.appendChild(firstSection);
        newArticle.appendChild(secondSection);        
        newArticle.appendChild(thirdSection);
        newArticle.appendChild(fourthSection);
        firstSection.appendChild(firstSectionH1);
        secondSection.appendChild(locationParagraph);
        secondSection.appendChild(quoteParagraph);
        thirdSection.appendChild(thirdSectionList);
        fourthSection.appendChild(newDiv);
        newDiv.appendChild(newProfileImg);
        
        for (const tag of this.tags){
            const liTag = document.createElement("li");
            const hashtag = document.createElement("a");
            liTag.classList.add("tags-links");
            thirdSectionList.appendChild(liTag);
            hashtag.setAttribute("href", ``);
            hashtag.innerHTML = `<span aria-hidden="true">#</span>${tag}`;
            liTag.appendChild(hashtag);
        }
        return sectionContainer;
    }
}

/*Ici il faut que ma classe ait une fonction qui va chercher l'id du photographe et renvoie les données JSON qui correspondent*/