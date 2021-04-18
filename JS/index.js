fetch('./JS/photographers.json')
    .then((response) => { //récupère une promesse
        return response.json(); //on formate la réponse au format json, pour dire que ce n'est pas simplement du contenu texte qu'on veut récupérer
    })
    .then((obj) => { //traitement des objets dans notre page web
        console.log(obj);
        //Est-ce que c'est bien ici que je dois écrire ce que je veux faire avec ces données ?
        for (const photographer of obj.photographers){ //cela va énumérer les objets contenus dans obj
            
            //créer un article :
            const newArticle = document.createElement("article"); //crée un nouvel élément <article>
            newArticle.classList.add("card"); //ajoute la classe .card au nouvel article créé
            document.body.appendChild(newArticle); //ajoute le nouvel article au body (à la suite de ce qui se trouve déjà dans le body) récupérer main d'abord
            
            //créer 3 sections dans l'article :
            const firstSection = document.createElement("section"); //crée un nouvel élement <section>
            const secondSection = document.createElement("section"); //crée un nouvel élement <section>
            const thirdSection = document.createElement("section"); //crée un nouvel élement <section>
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

            firstSection.innerHTML =
             `<a href="">
            <figure>
                <img class="card-profile__img" src="images/Photographers ID Photos/${photographer.portrait}" alt=""> 
            </figure>
            <h2 class="card-profile__name">${photographer.name}</h2>
            </a>`

            secondSection.innerHTML =
            `<p class="card-info__location">${photographer.city}, ${photographer.country}</p>
            <p class="card-info__quote">${photographer.tagline}</p>
            <p class="card-info__price">${photographer.price}/jour</p>`

            //Je ne suis pas sûre de moi pour ce qui suit :
            /*for (let tag of tags){
                thirdSection.innerHTML = `<li class="tags-links"><a href="">#${[tag]}</a></li>`
            }*/
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