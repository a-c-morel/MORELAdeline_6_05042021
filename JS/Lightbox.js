class LightboxMediaFactory{
    constructor(medias, mainElement, lightbox, closeButton, previousButton, nextButton){
        this.medias = medias; //quand on va appeler la factory on écrira dans les parenthèses l'array sur lequel on veut agir (du coup ce sera aussi appelé "medias")
        this.position = 0; //cela va correspondre à la position du premier média de l'array "medias"
        this.element = null; //pour le moment on ne dit pas si cela va être une vidéo ou une image
        this.mainElement = mainElement;
        this.lightbox = lightbox;
        this.closeButton = closeButton;
        this.previousButton = previousButton;
        this.nextButton = nextButton;
    }
    createMedia(){
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
        const lightboxMedia = this.element; //?????
        lightboxMedia.classList.add("lightbox-media");

        const lightboxTitle = document.createElement("p");
        lightboxTitle.classList.add("lightbox-title");
        lightboxTitle.innerHTML = `${this.title}`;

        this.lightbox.appendChild(lightboxMedia);
        this.lightbox.appendChild(lightboxTitle);
    }

    openLightbox(){}
    closeLightbox(){}
    navigate(){}
}