class LightboxFactory{
    constructor(medias){
        this.medias = medias; //quand on va appeler la factory on écrira dans les parenthèses l'array sur lequel on veut agir (du coup ce sera aussi appelé "medias")
        this.position = 0; //cela va correspondre à la position du premier média de l'array "medias"
        this.element = null; //pour le moment on ne dit pas si cela va être une vidéo ou une image
        this.mainElement = document.querySelector("main");
    }
    createElement(){
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
    display(){
        //create elements
        const lightboxDiv = document.createElement("div");
        lightboxDiv.classList.add("lightbox");

        const lightboxCloseBtn = document.createElement("button");
        lightboxCloseBtn.classList.add("lightbox-btn__close");

        const lightboxPreviousBtn = document.createElement("button");
        lightboxPreviousBtn.classList.add("lightbox-btn__previous");

        const lightboxNextBtn = document.createElement("button");
        lightboxNextBtn.classList.add("lightbox-btn__next");

        const leftArrow = document.createElement("i");
        leftArrow.classList.add("fas");
        leftArrow.classList.add("fa-chevron-left");

        const rightArrow = document.createElement("i");
        rightArrow.classList.add("fas");
        rightArrow.classList.add("fa-chevron-right");

        const lightboxContainer = document.createElement("div");
        lightboxContainer.classList.add("lightbox-container");

        const lightboxMedia = this.element; //?????
        lightboxMedia.classList.add("lightbox-media");

        const lightboxTitle = document.createElement("p");
        lightboxTitle.classList.add("lightbox-title");
        lightboxTitle.innerHTML = `${this.title}`;
        
        //add elements to their parents
        this.mainElement.appendChild(lightboxDiv);
        lightboxDiv.appendChild(lightboxCloseBtn);
        lightboxDiv.appendChild(lightboxPreviousBtn);
        lightboxDiv.appendChild(lightboxNextBtn);
        lightboxDiv.appendChild(lightboxTitle);
        lightboxPreviousBtn.appendChild(leftArrow);
        lightboxNextBtn.appendChild(rightArrow);
        lightboxDiv.appendChild(lightboxContainer);
        lightboxContainer.appendChild(lightboxMedia);
    }
}

/*class LightboxVideo{
    constructor(id, url, title){
        this.id = id;
        this.url = url;
        this.title = title;
    }
    display(){
        const lightboxDiv = document.createElement("div");
        const lightboxCloseBtn = document.createElement("button");
        const lightboxPreviousBtn = document.createElement("button");
        const lightboxNextBtn = document.createElement("button");
        const leftArrow = document.createElement("i");
        const rightArrow = document.createElement("i");
        const lightboxContainer = document.createElement("div");
        const lightboxVideo = document.createElement("video");
        const lightboxVideoSource = document.createElement("source");
        const lightboxTitle = document.createElement("p");

        lightboxDiv.classList.add("lightbox-hidden");
        lightboxCloseBtn.classList.add("lightbox-btn__close");
        lightboxPreviousBtn.classList.add("lightbox-btn__previous");
        leftArrow.classList.add("fas");
        leftArrow.classList.add("fa-chevron-left");
        rightArrow.classList.add("fas");
        rightArrow.classList.add("fa-chevron-right");
        lightboxNextBtn.classList.add("lightbox-btn__next");
        lightboxContainer.classList.add("lightbox-container");
        lightboxVideo.classList.add("lightbox-media");
        lightboxVideoSource.setAttribute("src", `images/medias/${this.url}`);
        lightboxTitle.classList.add("lightbox-title");
        lightboxTitle.innerHTML = `${this.title}`;

        mainElement.appendChild(lightboxDiv);
        lightboxDiv.appendChild(lightboxCloseBtn);
        lightboxDiv.appendChild(lightboxPreviousBtn);
        lightboxDiv.appendChild(lightboxNextBtn);
        lightboxDiv.appendChild(lightboxTitle);
        lightboxPreviousBtn.appendChild(leftArrow);
        lightboxNextBtn.appendChild(rightArrow);
        lightboxDiv.appendChild(lightboxContainer);
        lightboxContainer.appendChild(lightboxVideo)
        lightboxVideo.appendChild(lightboxVideoSource);

        return lightboxDiv;
    }
}

class LightboxImage{
    constructor(id, url, title){
        this.id = id;
        this.url = url;
        this.title = title;
    }
    display(){
        //création de la lightbox vide
        const lightboxDiv = document.createElement("div");
        const lightboxCloseBtn = document.createElement("button");
        const lightboxPreviousBtn = document.createElement("button");
        const lightboxNextBtn = document.createElement("button");
        const leftArrow = document.createElement("i");
        const rightArrow = document.createElement("i");
        const lightboxContainer = document.createElement("div");
        const lightboxImage = document.createElement("img");
        const lightboxTitle = document.createElement("p");

        lightboxDiv.classList.add("lightbox-hidden");
        lightboxCloseBtn.classList.add("lightbox-btn__close");
        lightboxPreviousBtn.classList.add("lightbox-btn__previous");
        leftArrow.classList.add("fas");
        leftArrow.classList.add("fa-chevron-left");
        rightArrow.classList.add("fas");
        rightArrow.classList.add("fa-chevron-right");
        lightboxNextBtn.classList.add("lightbox-btn__next");
        lightboxContainer.classList.add("lightbox-container");
        lightboxImage.classList.add("lightbox-media");
        lightboxImage.setAttribute("src", `images/medias/${this.url}`);
        lightboxTitle.classList.add("lightbox-title");
        lightboxTitle.innerHTML = `${this.title}`;

        mainElement.appendChild(lightboxDiv);
        lightboxDiv.appendChild(lightboxCloseBtn);
        lightboxDiv.appendChild(lightboxPreviousBtn);
        lightboxDiv.appendChild(lightboxNextBtn);
        lightboxDiv.appendChild(lightboxTitle);
        lightboxPreviousBtn.appendChild(leftArrow);
        lightboxNextBtn.appendChild(rightArrow);
        lightboxDiv.appendChild(lightboxContainer);
        lightboxContainer.appendChild(lightboxImage);

        return lightboxDiv;
    }
}*/