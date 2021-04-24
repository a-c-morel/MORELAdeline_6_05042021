const mainElement = document.createElement("main");
document.body.appendChild(mainElement);
const mainH1 = document.createElement("h1");
mainH1.classList.add("home-first-heading");
mainH1.innerHTML = "Nos photographes";
mainElement.appendChild(mainH1);

const headerNav = document.querySelector("nav");
const headerList = document.createElement("ul");
headerNav.appendChild(headerList);

/***Comment créer mes cartes en Programmation Orientée Objet***/

//variables pour créer les différents éléments (je les mets ici pour qu'elles soient accessibles depuis le scope global)
const newArticle = document.createElement("article"); //crée un nouvel élément <article></article>
const firstSection = document.createElement("section"); //crée un nouvel élement <section></section>
const secondSection = document.createElement("section"); //crée un nouvel élement <section></section>
const thirdSection = document.createElement("section"); //crée un nouvel élement <section></section>
const firstSectionLink = document.createElement("a"); //crée un nouvel élément <a></a>
const newFigure = document.createElement("figure"); //crée un nouvel élément <figure></figure>
const newProfileImg = document.createElement("img"); //crée un nouvel élément <img></img>
const newProfileTitle = document.createElement("h2"); //crée un nouvel élément <h2></h2>
const locationParagraph = document.createElement("p"); //crée un nouvel élément <p></p>
const quoteParagraph = document.createElement("p"); //crée un nouvel élément <p></p>
const priceParagraph = document.createElement("p"); //crée un nouvel élément <p></p>
const thirdSectionList = document.createElement("ul"); //crée un élément <ul></ul>
const liTag = document.createElement("li"); //crée un nouvel élément <li></li>
const hashtag = document.createElement("a"); //crée un élément <a></a>

//Chaque carte sera une instance de la classe "card" :
class Card{
    constructor(portrait, name, city, country, tagline, price, tags){
        this.portrait = portrait;
        this.name = name;
        this.city = city;
        this.country = country;
        this.tagline = tagline;
        this.price = price;
        this.tags = tags;
    }

    createCard(){
        newArticle.classList.add("card"); //ajoute la classe .card au nouvel article que l'on veut ajouter
        mainElement.appendChild(newArticle); //ajoute le nouvel article au main (à la suite de ce qui se trouve déjà dans le main)
    }

    createSections(){        
        //donner la classe .card-profile à la première
        firstSection.classList.add("card-profile");
        //donner la classe .card-info à la deuxième
        secondSection.classList.add("card-info");
        //donner la classe .card-tags à la troisième
        thirdSection.classList.add("card-tags");
        //ajouter les 3 sections à l'article que l'on vient de créer plus haut 
        newArticle.appendChild(firstSection);
        newArticle.appendChild(secondSection);
        newArticle.appendChild(thirdSection);
    }

    createProfileImg(){
        //firstSectionLink.setAttribute("src", `page_du_photographe${variable}`); //A MODIFIER !
        firstSection.appendChild(firstSectionLink); //ajoute l'élément <a></a> à la première section

        firstSectionLink.appendChild(newFigure); //ajoute l'élément <figure></figure> à la première section de l'article

        newProfileImg.classList.add("card-profile__img");
        newProfileImg.setAttribute("src", `images/Photographers ID Photos/${this.portrait}`);
        newFigure.appendChild(newProfileImg); //ajoute l'élément <img></img> à l'intérieur de <figure></figure>
    }

    createH2(){
        newProfileTitle.classList.add("card-profile__name"); //ajoute la classe .card-profile__name au h2
        newProfileTitle.innerHTML = `${this.name}`; //récupère le nom du photographe dans les paramètres de la carte et l'ajoute comme contenu du h2
        firstSectionLink.appendChild(newProfileTitle); //ajoute le h2 après l'élément figure dans le <a></a>
    }

    createLocation(){
        locationParagraph.classList.add("card-info__location"); //ajoute la classe .card-info__location
        locationParagraph.innerHTML = `${this.city}, ${this.country}`; //récupère la ville et le pays dynamiquement dans les paramètres de la carte et les ajoute comme contenu du p
        secondSection.appendChild(locationParagraph); //ajoute le p à la 2è section de la carte
    }

    createQuote(){
        quoteParagraph.classList.add("card-info__quote"); //ajoute la classe .card-info__quote
        quoteParagraph.innerHTML = `${this.tagline}`; //récupère la citation dans les paramètres de la carte et l'ajoute comme contenu du p
        secondSection.appendChild(quoteParagraph); //ajoute le p après le précédent
    }

    createPrice(){
        priceParagraph.classList.add("card-info__price"); //ajoute la classe .card-info__price
        priceParagraph.innerHTML = `${this.price}/jour`; //récupère le prix dans les paramètres de la carte et l'ajoute comme contenu du p
        secondSection.appendChild(priceParagraph); //ajoute le p après le précédent
    }

    createTags(){
        thirdSection.appendChild(thirdSectionList); //ajoute le ul à la troisième section de la carte
        for (const tag of this.tags){ //boucle qui parcourt le array qui contient les tags
            liTag.classList.add("tags-links"); //ajoute la classe .tags-links au li
            thirdSectionList.appendChild(liTag); //ajoute le li dans le ul de la 3e section

            hashtag.setAttribute("href", ``); //ajoute l'attribut href à mon élément <a></a> //penser à remplir le href 
            hashtag.innerHTML = `#${tag}`; //ajoute le contenu du tag à l'index de l'array où se trouve la boucle à ce moment
            liTag.appendChild(hashtag); //ajoute le a avec son contenu dans le li
        }
    }
}

//Ensuite, pour créer une instance :

//(à mettre dans la boucle du fetch)

//let myCard = new card(photographer.portrait, photographer.name, photographer.city, photographer.country, photographer.tagline, photographer.price, photographer.tags);


fetch('./JS/photographers.json')
    .then((response) => { //récupère une promesse
        return response.json(); //on formate la réponse au format json, pour dire que ce n'est pas simplement du contenu texte qu'on veut récupérer
    })
    .then((obj) => { //traitement des objets dans notre page web
        console.log(obj);
        //Est-ce que c'est bien ici que je dois écrire ce que je veux faire avec ces données ?
        for (const photographer of obj.photographers){ //cela va énumérer les objets contenus dans obj
            let myCard = new Card(photographer.portrait, photographer.name, photographer.city, photographer.country, photographer.tagline, photographer.price, photographer.tags);
            myCard.createCard();
            myCard.createSections();
            myCard.createProfileImg();
            myCard.createH2();
            myCard.createLocation();
            myCard.createQuote;
            myCard.createPrice();
            myCard.createTags();
        }
        //Ne fonctionne pas car myCard prend tour à tour les valeurs de chaque objet photographer et s'arrête en prenant celles du dernier (au dernier tour de boucle) : il faudrait que cela crée des noms de variables différents je pense ? (myCard1, myCard2, myCard3...)
            
            /*         
            //créer un article :
            const newArticle = document.createElement("article"); //crée un nouvel élément <article></article>
            newArticle.classList.add("card"); //ajoute la classe .card au nouvel article créé
            mainElement.appendChild(newArticle); //ajoute le nouvel article au body (à la suite de ce qui se trouve déjà dans le body) récupérer main d'abord
            
            //créer 3 sections dans l'article :
            const firstSection = document.createElement("section"); //crée un nouvel élement <section></section>
            const secondSection = document.createElement("section"); //crée un nouvel élement <section></section>
            const thirdSection = document.createElement("section"); //crée un nouvel élement <section></section>
            //donner la classe .card-profile à la première
            firstSection.classList.add("card-profile");
            //donner la classe .card-info à la deuxième
            secondSection.classList.add("card-info");
            //donner la classe .card-tags à la troisième
            thirdSection.classList.add("card-tags");
            //ajouter les 3 sections à l'article que l'on vient de créer plus haut 
            newArticle.appendChild(firstSection);
            newArticle.appendChild(secondSection);
            newArticle.appendChild(thirdSection);

            const firstSectionLink = document.createElement("a"); //crée un nouvel élément <a></a>
            firstSectionLink.setAttribute("src", `page_du_photographe${variable}`); //A MODIFIER !
            firstSection.appendChild(firstSectionLink); //ajoute l'élément <a></a> à la première section

            const newFigure = document.createElement("figure"); //crée un nouvel élément <figure></figure>
            firstSectionLink.appendChild(newFigure); //ajoute l'élément <figure></figure> à la première section de l'article

            const newProfileImg = document.createElement("img"); //crée un nouvel élément <img></img>
            newProfileImg.classList.add("card-profile__img");
            newProfileImg.setAttribute("src", `images/Photographers ID Photos/${photographer.portrait}`);
            newFigure.appendChild(newProfileImg); //ajoute l'élément <img></img> à l'intérieur de <figure></figure>

            const newProfileTitle = document.createElement("h2"); //crée un nouvel élément <h2></h2>
            newProfileTitle.classList.add("card-profile__name"); //ajoute la classe .card-profile__name au h2
            newProfileTitle.innerHTML = `${photographer.name}`; //récupère le nom du photographe dynamiquement dans les données JSON et l'ajoute comme contenu du h2
            firstSectionLink.appendChild(newProfileTitle); //ajoute le h2 après l'élément figure dans le <a></a>

            const locationParagraph = document.createElement("p"); //crée un nouvel élément <p></p>
            locationParagraph.classList.add("card-info__location"); //ajoute la classe .card-info__location
            locationParagraph.innerHTML = `${photographer.city}, ${photographer.country}`; //récupère la ville et le pays dynamiquement dans les données JSON et les ajoute comme contenu du p
            secondSection.appendChild(locationParagraph); //ajoute le p à la 2è section de la carte

            const quoteParagraph = document.createElement("p"); //crée un nouvel élément <p></p>
            quoteParagraph.classList.add("card-info__quote"); //ajoute la classe .card-info__quote
            quoteParagraph.innerHTML = `${photographer.tagline}`; //récupère la citation dynamiquement dans les données JSON et l'ajoute comme contenu du p
            secondSection.appendChild(quoteParagraph); //ajoute le p après le précédent

            const priceParagraph = document.createElement("p"); //crée un nouvel élément <p></p>
            priceParagraph.classList.add("card-info__price"); //ajoute la classe .card-info__price
            priceParagraph.innerHTML = `${photographer.price}/jour`; //récupère le prix dynamiquement dans les données JSON et l'ajoute comme contenu du p
            secondSection.appendChild(priceParagraph); //ajoute le p après le précédent

            const thirdSectionList = document.createElement("ul"); //crée un élément <ul></ul>
            thirdSection.appendChild(thirdSectionList); //ajoute le ul à la troisième section de la carte
            for (const tag of photographer.tags){ //boucle qui parcourt le array qui contient les tags
                const liTag = document.createElement("li"); //crée un nouvel élément <li></li>
                liTag.classList.add("tags-links"); //ajoute la classe .tags-links au li
                thirdSectionList.appendChild(liTag); //ajoute le li dans le ul de la 3e section

                const hashtag = document.createElement("a"); //crée un élément <a></a>
                hashtag.setAttribute("href", ``); //ajoute l'attribut href à mon élément <a></a> //penser à remplir le href 
                hashtag.innerHTML = `#${tag}`; //ajoute le contenu du tag à l'index de l'array où se trouve la boucle à ce moment
                liTag.appendChild(hashtag); //ajoute le a avec son contenu dans le li
            }*/
    })
    .catch((error) => {
        console.error("Cela n'a pas fonctionné");
        console.error(error);
    });
  
 
//Créer une boucle qui parcourt toutes les cartes pour en extraire les tags :

const numberOfCards = mainElement.getElementsByTagName("article");
console.log(numberOfCards.length); //donne 6

/*for(let i=0; i < numberOfCards.length; i++){
    - Créer un array qui stocke les tags existants
    let hashtagsList = [];
    hashtagsList.push(); -> cette étape m'embête car je ne sais pas très bien comment obtenir les tags... (ils sont maintenant existants dans le DOM donc je devrais pouvoir les cibler)
        - Utiliser hashtable pour supprimer les doublons de mon array (faisable car ne contient que des types string, ça n'aurait pas été possible avec un array contenant des objets)

        - Créer une boucle qui parcourt mon array

            - à chaque tour de boucle, ajouter un li contenant le tag à cet index dans la nav (que je dois d'abord créer, vide)
}


     */