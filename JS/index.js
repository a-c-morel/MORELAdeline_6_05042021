const mainElement = document.createElement("main");
const headerElement = document.createElement("header");
document.body.appendChild(headerElement);
document.body.appendChild(mainElement);

const mainH1 = document.createElement("h1");
mainH1.classList.add("home-first-heading");
mainH1.innerHTML = "Nos photographes";
mainElement.appendChild(mainH1);

/*const headerNav = document.querySelector("nav");
const headerList = document.createElement("ul");
headerNav.appendChild(headerList);*/

let photographers = [];
let tags = [];

fetch('./JS/photographers.json')
    .then((response) => { //récupère une promesse
        return response.json(); //on formate la réponse au format json, pour dire que ce n'est pas simplement du contenu texte qu'on veut récupérer
    })
    .then((obj) => { //traitement des objets dans notre page web
        console.log(obj); //output attendu: Object { photographers: (6) […], media: (59) […] }
        photographers = obj.photographers;
        for (const photographer of photographers){ //cela va énumérer les objets contenus dans obj
            let myCard = new Photographer(photographer.portrait, photographer.name, photographer.city, photographer.country, photographer.tagline, photographer.price, photographer.tags);
            tags.push(...photographer.tags);
            mainElement.appendChild(myCard.display());
            console.log(myCard);
        }
        console.log(tags);
        tags = new Set(tags);
        console.log(tags);
        const navigation = document.createElement("nav");
        const navigationList = document.createElement("ul");

        for(let tag of tags){
            const tagContainer = document.createElement("li");
            const tagLink = document.createElement("a");
            tagContainer.classList.add("tags-links");
            //tagLink.setAttribute(href, ...)
            tagLink.innerHTML = `#${tag}`
            navigationList.appendChild(tagContainer);
            tagContainer.appendChild(tagLink);
            navigation.appendChild(navigationList);
        }
        headerElement.appendChild(navigation);
    })
    .catch((error) => {
        console.error("Cela n'a pas fonctionné");
        console.error(error);
    });
  
 
//Créer une boucle qui parcourt toutes les cartes pour en extraire les tags :





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