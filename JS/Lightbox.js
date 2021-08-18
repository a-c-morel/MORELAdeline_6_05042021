class LightboxFactory{
    constructor(medias, lightbox){
        this.medias = medias;
        this.position = 0;
        this.element = null;
        this.lightbox = lightbox;
    }

    createElem(){
        const lightboxTitle = document.createElement("p");

        //si le média à cette position correspond à une instance de l'objet "Image" :
            if(this.medias[this.position] instanceof Image){
                this.element = document.createElement("img");
                this.element.classList.add("lightbox-media__image");
                this.element.setAttribute("src", `images/medias/${this.medias[this.position].url}`);
            }//sinon si le média à cette position correspond à une instance de l'objet "Video" :
            else if(this.medias[this.position] instanceof Video){
                this.element = document.createElement("video");
                const videoSource = document.createElement("source");
                videoSource.setAttribute("src", `images/medias/${this.medias[this.position].url}`);
                this.element.classList.add("lightbox-media__video");
                this.element.controls = true;
                this.element.appendChild(videoSource);
            }

        lightboxTitle.classList.add("lightbox-media__title");
        lightboxTitle.innerText = `${this.medias[this.position].title}`
        this.lightbox.appendChild(this.element);
        this.lightbox.appendChild(lightboxTitle);
    }

    clearMedia(){
        while (this.lightbox.firstChild) {
            this.lightbox.removeChild(this.lightbox.firstChild);
        }
    }

    display(){
        const lightboxContainer = document.querySelector("#lightbox-modal");
        lightboxContainer.style.display = "flex";
        this.clearMedia();
    }
    
    start(index = 0){
        this.position = index;
        this.display();
        this.createElem();
    }

    goPrev(){
            if(this.position > 0){
                this.position--;
                console.log(this.position);
                
            }else{
                this.position = this.medias.length -1
            }
            this.clearMedia();
            this.createElem();
    }

    goNext(){
            if(this.position < (this.medias).length-1){
                this.position++;
                console.log(this.position);
            }else{
                this.position = 0;
            }
            this.clearMedia();
            this.createElem();
    }
}