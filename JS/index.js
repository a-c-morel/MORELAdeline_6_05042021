const mainElement = document.createElement("main");
document.body.appendChild(mainElement);
const mainH1 = document.createElement("h1");
mainH1.classList.add("home-first-heading");
mainH1.innerHTML = "Nos photographes";
mainElement.appendChild(mainH1);

fetch('./JS/photographers.json')
    .then((response) => { //récupère une promesse
        return response.json(); //on formate la réponse au format json, pour dire que ce n'est pas simplement du contenu texte qu'on veut récupérer
    })
    .then((obj) => { //traitement des objets dans notre page web
        console.log(obj);
        //Est-ce que c'est bien ici que je dois écrire ce que je veux faire avec ces données ?
        for (const photographer of obj.photographers){ //cela va énumérer les objets contenus dans obj
                        
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
            /*firstSectionLink.setAttribute("src", `page_du_photographe${variable}`); //A MODIFIER !*/
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

            const locationParagraph = document.createElement("p");
            locationParagraph.classList.add("card-info__location");
            locationParagraph.innerHTML = `${photographer.city}, ${photographer.country}`;
            secondSection.appendChild(locationParagraph);

            const quoteParagraph = document.createElement("p");
            quoteParagraph.classList.add("card-info__quote");
            quoteParagraph.innerHTML = `${photographer.tagline}`;
            secondSection.appendChild(quoteParagraph);

            const priceParagraph = document.createElement("p");
            priceParagraph.classList.add("card-info__price");
            priceParagraph.innerHTML = `${photographer.price}/jour`;
            secondSection.appendChild(priceParagraph);

            const thirdSectionList = document.createElement("ul");
            thirdSection.appendChild(thirdSectionList);
            for (const tag of photographer.tags){
                const liTag = document.createElement("li");
                liTag.classList.add("tags-links");
                thirdSectionList.appendChild(liTag);

                const hashtag = document.createElement("a");
                hashtag.setAttribute("href", ``); //à remplir plus tard
                hashtag.innerHTML = `#${tag}`;
                liTag.appendChild(hashtag);
            }
        }
    })
    .catch((error) => {
        console.error("Cela n'a pas fonctionné");
        console.error(error);
    });






















    /* Structure HTML à créer, qui se remplira de manière dynamique :
`<article id="card${index +=1}" class="card">
            <section class="card-profile">
                <a href="">
                    <figure>
                        <img class="card-profile__img" src="${url -> je ne sais pas trop comment rendre ça dynamique}" alt="">
                    </figure>
                    <h2 class="card-profile__name">${name[index]}</h2>
                </a>
            </section>
            <section class="card-info">
                <p class="card-info__location">${city[index]}</p>
                <p class="card-info__quote">${quote[index]}</p>
                <p class="card-info__price">${price[index]}</p>
            </section>
            <section class="card-tags">
                <ul>
                    -> pour créer cette liste il faudra que je récupère dynamiquement celle de l'objet json, et plus besoin des id vu que j'ai fait du flex et que je vais mettre une width dynamique pour les tags. Je pense qu'il faudra que je fasse une boucle for (let tag of tags...).
                    <li class="tags-links"><a href="">#${tag[]}</a></li>
                    ...
                    ...
                </ul>
            </section>
        </article>`*/




/*Ce que j'ai écrit ci-dessous ne va pas, je pense qu'il faut simplement que j'écrive une fonction qui génère la carte dans son intégralité et qui va chercher les valeurs dans le JSON*/

/*function addProfileSection(){
    const card = document.querySelector(".card"); //renverra true si une carte existe
    const profile = document.querySelector(".card .card-profile") // vérifier si c'est bien comme ça qu'on écrit les query selector pour cibler card-profile dans card
    //renverra true si un élément avec la classe card-profil existe dans la carte
    const newProfile = document.createElement("section"); // crée un nouvel élement <section>
    newProfile.classList.add("card-profile"); //ajoute la classe .card-profile à la nouvelle section créée
    
    if(card & !profile){ //à vérifier : je veux que la condition soit qu'une carte existe et qu'elle ne contienne pas encore de section de profil
        document.card.appendChild(newProfile); //ajoute la nouvelle section avec la classe .card-profile à l'article
    }else if(card & profile){ //si la carte contient déjà cette section
        console.log("Cette carte contient déjà une section profil")
    }else {
        console.log("Vous devez d'abord créer une carte en utilisant la fonction addCard");
    }
};

function addInfoSection(){
    const card = document.querySelector(".card"); //renverra true si une carte existe
    const info = document.querySelector(".card .card-info") // vérifier si c'est bien comme ça qu'on écrit les query selector pour cibler card-profile dans card
    //renverra true si un élément avec la classe card-info existe dans la carte
    const newInfo = document.createElement("section"); // crée un nouvel élement <section>
    newInfo.classList.add("card-info"); //ajoute la classe .card-info à la nouvelle section créée
    
    if(card & !info){ //à vérifier : je veux que la condition soit qu'une carte existe et qu'elle ne contienne pas encore de section d'informations
        document.card.appendChild(newInfo); //ajoute la nouvelle section avec la classe .card-info à l'article
    }else if(card & info){ //si la carte contient déjà cette section
        console.log("Cette carte contient déjà une section info")
    }else {
        console.log("Vous devez d'abord créer une carte en utilisant la fonction addCard");
    }
};*/