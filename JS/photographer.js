class Photographer{
    constructor(portrait, name, city, country, tagline, price, tags){
        this.portrait = portrait;
        this.name = name;
        this.city = city;
        this.country = country;
        this.tagline = tagline;
        this.price = price;
        this.tags = tags;
    }
    display(){
        let nameWithSpaces = this.name; 
        let nameWithoutSpaces = (nameWithSpaces).replace(/ /g, ""); 
        let nameToLowerCase = nameWithoutSpaces.toLowerCase();

        //create elements
        const newArticle = document.createElement("article");
        const firstSection = document.createElement("section");
        const secondSection = document.createElement("section");
        const thirdSection = document.createElement("section");
        const firstSectionLink = document.createElement("a");
        const newDiv = document.createElement("div");
        const newProfileImg = document.createElement("img");
        const newProfileTitle = document.createElement("h2");
        const locationParagraph = document.createElement("p");
        const quoteParagraph = document.createElement("p");
        const priceParagraph = document.createElement("p");
        const thirdSectionList = document.createElement("ul");

        //add classes and attributes + content
        newArticle.classList.add("card");
        newArticle.setAttribute("role", "article");
        firstSection.classList.add("card-profile");
        firstSection.setAttribute("role", "region");
        firstSection.setAttribute("aria-labelledby", "photographer-name");
        newProfileTitle.setAttribute("id", "photographer-name");
        secondSection.classList.add("card-info");
        thirdSection.classList.add("card-tags");
        firstSectionLink.setAttribute("href", `${nameToLowerCase}.html`);
        newProfileImg.classList.add("card-profile__img");
        newProfileImg.setAttribute("src", `images/Photographers ID Photos/${this.portrait}`);
        newProfileTitle.classList.add("card-profile__name");
        newProfileTitle.innerHTML = `${this.name}`;
        locationParagraph.classList.add("card-info__location");
        locationParagraph.innerHTML = `${this.city}, ${this.country}`;
        quoteParagraph.classList.add("card-info__quote");
        quoteParagraph.innerHTML = `${this.tagline}`;
        priceParagraph.classList.add("card-info__price");
        priceParagraph.innerHTML = `${this.price}€/jour`;

        //add elements to their parents
        newArticle.appendChild(firstSection);
        newArticle.appendChild(secondSection);
        newArticle.appendChild(thirdSection);
        firstSection.appendChild(firstSectionLink);
        firstSectionLink.appendChild(newDiv);
        newDiv.appendChild(newProfileImg);
        firstSectionLink.appendChild(newProfileTitle);
        secondSection.appendChild(locationParagraph);
        secondSection.appendChild(quoteParagraph);
        secondSection.appendChild(priceParagraph);
        thirdSection.appendChild(thirdSectionList);
        
        //create tags
        for (const tag of this.tags){
            const liTag = document.createElement("li");
            const hashtag = document.createElement("a");
            liTag.classList.add("tags-links");
            thirdSectionList.appendChild(liTag);
            hashtag.setAttribute("href", ``);
            hashtag.innerHTML = `<span aria-hidden="true">#</span>${tag}`;
            liTag.appendChild(hashtag);
        }

        return newArticle;
    }
}