class PhotographerFactory{
    constructor(type, props){
        this.type = type; //"card" ou "profile"
        if(type === "card"){
            return new Card(props);
        }
        if(type === "profile"){
            return new Profile(props);
        }
    }
    display(){
        console.log("ceci est un message provenant de la factory Photographer");
    }
}

class Card extends PhotographerFactory{
    constructor(props){
        super(props);
        this.portrait = props.portrait;
        this.name = props.name;
        this.city = props.city;
        this.country = props.country;
        this.tagline = props.tagline;
        this.price = props.price;
        this.tags = props.tags;
        this.id = props.id;
    }
    display(){
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
        firstSectionLink.setAttribute("href", `detail.html?id=${this.id}`);
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

class Profile extends PhotographerFactory{
    constructor(props){
        super(props);
        this.portrait = props.portrait;
        this.name = props.name;
        this.city = props.city;
        this.country = props.country;
        this.tagline = props.tagline;
        this.tags = props.tags;
        this.id = props.id;
    }
    display(){
        //create elements
        const newArticle = document.createElement("article");
        const firstSection = document.createElement("section");
        const firstSectionH1 = document.createElement("h1");
        const locationParagraph = document.createElement("p");
        const quoteParagraph = document.createElement("p");
        const tagsSection = document.createElement("section");
        const tagsSectionList = document.createElement("ul");
        const secondSection = document.createElement("section");
        const newDiv = document.createElement("div");
        const newProfileImg = document.createElement("img");

        //add classes and attributes + content
        newArticle.classList.add("profile"); //dans le scss, je pourrai prendre les propriétés que j'ai appliquées à .card et les modifier un peu
        firstSection.classList.add("profile-info");
        firstSectionH1.classList.add("profile-info__name");
        firstSectionH1.innerHTML = `${this.name}`;
        locationParagraph.classList.add("profile-info__location");
        locationParagraph.innerHTML = `${this.city}, ${this.country}`;
        quoteParagraph.classList.add("profile-info__quote");
        quoteParagraph.innerHTML = `${this.tagline}`;
        secondSection.classList.add("profile-image");
        newProfileImg.setAttribute("src", `images/Photographers ID Photos/${this.portrait}`);

        //add elements to their parents
        mainElement.appendChild(newArticle);
        newArticle.appendChild(firstSection);
        newArticle.appendChild(secondSection);
        firstSection.appendChild(firstSectionH1);
        firstSection.appendChild(locationParagraph);
        firstSection.appendChild(quoteParagraph);
        firstSection.appendChild(tagsSection);
        tagsSection.appendChild(tagsSectionList);
        secondSection.appendChild(newDiv);
        newDiv.appendChild(newProfileImg);
        
        for (const tag of this.tags){
            const liTag = document.createElement("li");
            const hashtag = document.createElement("a");
            liTag.classList.add("tags-links");
            tagsSectionList.appendChild(liTag);
            hashtag.setAttribute("href", ``);
            hashtag.innerHTML = `<span aria-hidden="true">#</span>${tag}`;
            liTag.appendChild(hashtag);
        }
        return newArticle;
    }
}