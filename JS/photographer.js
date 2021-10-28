class PhotographerFactory {
    constructor(type, props) {
        this.type = type; //"card" ou "profile"
        if (type === "card") {
            return new Card(props);
        }
        if (type === "profile") {
            return new Profile(props);
        }
    }
}

class Card {
    constructor(props) {
        this.portrait = props.portrait;
        this.name = props.name;
        this.city = props.city;
        this.country = props.country;
        this.tagline = props.tagline;
        this.price = props.price;
        this.tags = props.tags;
        this.id = props.id;
    }

    display() {
        const newArticle = document.createElement("article");
        newArticle.classList.add("card");

        const firstSection = document.createElement("section");
        firstSection.classList.add("card-profile");
        firstSection.setAttribute("aria-labelledby", `${this.name.split(' ').join('_')}`);

        const secondSection = document.createElement("section");
        secondSection.classList.add("card-info");

        const thirdSection = document.createElement("section");
        thirdSection.classList.add("card-tags");

        const firstSectionLink = document.createElement("a");
        firstSectionLink.setAttribute("href", `detail.html?id=${this.id}`);

        const newDiv = document.createElement("div");

        const newProfileImg = document.createElement("img");
        newProfileImg.classList.add("card-profile__img");
        newProfileImg.setAttribute("src", `images/Photographers_ID_Photos/${this.portrait}`);
        newProfileImg.setAttribute("alt", "");
        newProfileImg.setAttribute("aria-label", `${this.name}`);

        const newProfileTitle = document.createElement("h2");
        newProfileTitle.setAttribute("id", `${this.name.split(' ').join('_')}`);
        newProfileTitle.classList.add("card-profile__name");
        newProfileTitle.innerHTML = `${this.name}`;

        const locationParagraph = document.createElement("p");
        locationParagraph.classList.add("card-info__location");
        locationParagraph.innerHTML = `${this.city}, ${this.country}`;

        const quoteParagraph = document.createElement("p");
        quoteParagraph.classList.add("card-info__quote");
        quoteParagraph.innerHTML = `${this.tagline}`;

        const priceParagraph = document.createElement("p");
        priceParagraph.classList.add("card-info__price");
        priceParagraph.innerHTML = `${this.price}€/jour`;

        const thirdSectionList = document.createElement("ul");

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
        for (const tag of this.tags) {
            const liTag = document.createElement("li");
            liTag.classList.add("tags-links");
            thirdSectionList.appendChild(liTag);
            liTag.innerHTML = `<span aria-hidden="true">#</span>${tag}`;
        }
        return newArticle;
    }
}

class Profile {
    constructor(props) {
        this.portrait = props.portrait;
        this.name = props.name;
        this.city = props.city;
        this.country = props.country;
        this.tagline = props.tagline;
        this.tags = props.tags;
        this.id = props.id;
        this.mainElement = document.querySelector("main");
        this.headerElement = document.querySelector("header");
    }

    display() {
        const newArticle = document.createElement("article");
        newArticle.classList.add("profile");

        //section avec les infos du photographe
        const firstSection = document.createElement("section");
        firstSection.classList.add("profile-info");
        /*nom*/
        const firstSectionH1 = document.createElement("h1");
        firstSectionH1.classList.add("profile-info__name");
        firstSectionH1.innerHTML = `${this.name}`;
        /*ville, pays*/
        const locationParagraph = document.createElement("p");
        locationParagraph.classList.add("profile-info__location");
        locationParagraph.innerHTML = `${this.city}, ${this.country}`;
        /*citation*/
        const quoteParagraph = document.createElement("p");
        quoteParagraph.classList.add("profile-info__quote");
        quoteParagraph.innerHTML = `${this.tagline}`;
        /*tags*/
        const tagsSection = document.createElement("section");
        tagsSection.classList.add("profile-info__tags");
        const tagsSectionList = document.createElement("ul");

        //bouton de contact
        const contactBtn = document.createElement("button");
        contactBtn.classList.add("contact-btn");
        contactBtn.innerHTML = "Contactez-moi";

        //ouverture de la modale:
        contactBtn.addEventListener("click", () => {
            const modal = new Modal(this.name);
            modal.display();
        });

        //section with photographer picture
        const secondSection = document.createElement("section");
        secondSection.classList.add("profile-image");
        const newDiv = document.createElement("div");
        const newProfileImg = document.createElement("img");
        newProfileImg.setAttribute("src", `images/Photographers_ID_Photos/${this.portrait}`);
        newProfileImg.setAttribute("alt", "");
        newProfileImg.setAttribute("aria-label", `${this.name}`);

        this.headerElement.appendChild(newArticle);
        newArticle.appendChild(firstSection);
        newArticle.appendChild(contactBtn);
        newArticle.appendChild(secondSection);
        firstSection.appendChild(firstSectionH1);
        firstSection.appendChild(locationParagraph);
        firstSection.appendChild(quoteParagraph);
        firstSection.appendChild(tagsSection);
        tagsSection.appendChild(tagsSectionList);
        secondSection.appendChild(newDiv);
        newDiv.appendChild(newProfileImg);
        
        for (const tag of this.tags) {
            const liTag = document.createElement("li");
            liTag.classList.add("tags-links");
            liTag.classList.add("profile-tags");
            tagsSectionList.appendChild(liTag);
            liTag.innerHTML = `<span aria-hidden="true">#</span>${tag}`;
            liTag.style.cursor = "unset";
        }
        return newArticle;
    }
}