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
        //create elements
        const newArticle = document.createElement("article"); //crée un nouvel élément <article></article>
        const firstSection = document.createElement("section"); //crée un nouvel élement <section></section>
        const secondSection = document.createElement("section"); //crée un nouvel élement <section></section>
        const thirdSection = document.createElement("section"); //crée un nouvel élement <section></section>
        const firstSectionLink = document.createElement("a"); //crée un nouvel élément <a></a>
        const newDiv = document.createElement("div"); //crée un nouvel élément <figure></figure>
        const newProfileImg = document.createElement("img"); //crée un nouvel élément <img></img>
        const newProfileTitle = document.createElement("h2"); //crée un nouvel élément <h2></h2>
        const locationParagraph = document.createElement("p"); //crée un nouvel élément <p></p>
        const quoteParagraph = document.createElement("p"); //crée un nouvel élément <p></p>
        const priceParagraph = document.createElement("p"); //crée un nouvel élément <p></p>
        const thirdSectionList = document.createElement("ul"); //crée un élément <ul></ul>

        //add classes and attributes + content
        newArticle.classList.add("card"); //ajoute la classe .card au nouvel article que l'on veut ajouter
        newArticle.setAttribute("role", "article");
        firstSection.classList.add("card-profile");
        firstSection.setAttribute("role", "region");
        firstSection.setAttribute("aria-labelledby", "photographer-name");
        newProfileTitle.setAttribute("id", "photographer-name");
        secondSection.classList.add("card-info");
        thirdSection.classList.add("card-tags");
        //firstSectionLink.setAttribute("src", `page_du_photographe${variable}`); //A MODIFIER !
        newProfileImg.classList.add("card-profile__img");
        newProfileImg.setAttribute("src", `images/Photographers ID Photos/${this.portrait}`);
        newProfileTitle.classList.add("card-profile__name"); //ajoute la classe .card-profile__name au h2
        newProfileTitle.innerHTML = `${this.name}`; //récupère le nom du photographe dans les paramètres de la carte et l'ajoute comme contenu du h2
        locationParagraph.classList.add("card-info__location"); //ajoute la classe .card-info__location
        locationParagraph.innerHTML = `${this.city}, ${this.country}`; //récupère la ville et le pays dynamiquement dans les paramètres de la carte et les ajoute comme contenu du p
        quoteParagraph.classList.add("card-info__quote"); //ajoute la classe .card-info__quote
        quoteParagraph.innerHTML = `${this.tagline}`; //récupère la citation dans les paramètres de la carte et l'ajoute comme contenu du p
        priceParagraph.classList.add("card-info__price"); //ajoute la classe .card-info__price
        priceParagraph.innerHTML = `${this.price}€/jour`; //récupère le prix dans les paramètres de la carte et l'ajoute comme contenu du p

        //add elements to their parents
        newArticle.appendChild(firstSection);
        newArticle.appendChild(secondSection);
        newArticle.appendChild(thirdSection);
        firstSection.appendChild(firstSectionLink); //ajoute l'élément <a></a> à la première section
        firstSectionLink.appendChild(newDiv); //ajoute l'élément <figure></figure> à la première section de l'article
        newDiv.appendChild(newProfileImg); //ajoute l'élément <img></img> à l'intérieur de <figure></figure>
        firstSectionLink.appendChild(newProfileTitle); //ajoute le h2 après l'élément figure dans le <a></a>
        secondSection.appendChild(locationParagraph); //ajoute le p à la 2è section de la carte
        secondSection.appendChild(quoteParagraph); //ajoute le p après le précédent
        secondSection.appendChild(priceParagraph); //ajoute le p après le précédent
        thirdSection.appendChild(thirdSectionList); //ajoute le ul à la troisième section de la carte
        
        //create tags
        for (const tag of this.tags){ //boucle qui parcourt le array qui contient les tags
            const liTag = document.createElement("li"); //crée un nouvel élément <li></li>
            const hashtag = document.createElement("a"); //crée un élément <a></a>
            liTag.classList.add("tags-links"); //ajoute la classe .tags-links au li
            thirdSectionList.appendChild(liTag); //ajoute le li dans le ul de la 3e section
            hashtag.setAttribute("href", ``); //ajoute l'attribut href à mon élément <a></a> //penser à remplir le href 
            hashtag.innerHTML = `#${tag}`; //ajoute le contenu du tag à l'index de l'array où se trouve la boucle à ce moment
            liTag.appendChild(hashtag); //ajoute le a avec son contenu dans le li
        }

        return newArticle;
    }
}