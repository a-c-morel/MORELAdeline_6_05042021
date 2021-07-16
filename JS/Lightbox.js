class LightboxMediaFactory{
    constructor(medias, position, lightbox){
        this.medias = medias;
        //this.position = 0;
        this.position = position;
        this.element = null;
        //this.mainElement = mainElement;
        this.lightbox = lightbox;
        this.closeButton = document.querySelector("#lightbox-btn__close");
        this.previousButton = document.querySelector("#lightbox-btn__previous");
        this.nextButton = document.querySelector("#lightbox-btn__next");
    }

    createElem(){
        //si le média à cette position correspond à une instance de l'objet "Image" :
            if(this.medias[this.position] instanceof Image){
                this.element = document.createElement("img");
                this.element.setAttribute("src", `images/medias/${this.medias[this.position].url}`);
            }//sinon si le média à cette position correspond à une instance de l'objet "Video" :
            else if(this.medias[this.position] instanceof Video){
                this.element = document.createElement("source");
                this.element.setAttribute("src", `images/medias/${this.medias[this.position].url}`);
            }
    }

    displayMedia(){
        const lightboxMedia = this.element;
        console.log(lightboxMedia);
        
        lightboxMedia.classList.add("lightbox-media");

        //utiliser du CSS ensuite, cette ligne est juste faite pour les tests :
        lightboxMedia.style.maxWidth = "300px";
        lightboxMedia.style.height = "auto";

        const lightboxTitle = document.createElement("p");
        lightboxTitle.classList.add("lightbox-title");
        lightboxTitle.innerHTML = `${this.title}`;

        this.lightbox.appendChild(lightboxMedia);
        this.lightbox.appendChild(lightboxTitle);
    }

    closeLightbox(){
        //fermeture de la Lightbox quand on clique sur la croix ?
    }

    /*navigate(){
        //itération de this.position quand on clique sur prev (--)
        //et sur next (++)
        
        for(let i = 0; i<(this.medias).length; i++){
            this.position++;
            console.log(this.position);
            console.log(this.medias[i]);
        }
    }*/
}