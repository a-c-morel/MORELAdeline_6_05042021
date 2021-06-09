class LightboxFactory{
    constructor(type, props){
        if(type === "video"){
            return new LightboxVideo(props);
        }
        if(type === "image"){
            return new LightboxImage(props);
        }
    }
}

class LightboxVideo{
    constructor(id, url, photographerId){
        this.id = id;
        this.url = url;
        this.photographerId = photographerId;
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

        lightboxDiv.classList.add("lightbox-hidden");
        lightboxCloseBtn.classList.add("lightbox-btn__close");
        lightboxPreviousBtn.classList.add("lightbox-btn__previous");
        leftArrow.classList.add("fas fa-chevron-left");
        rightArrow.classList.add("fas fa-chevron-right");
        lightboxNextBtn.classList.add("lightbox-btn__next");
        lightboxContainer.classList.add("lightbox-container");
        lightboxVideo.classList.add("lightbox-media");
        lightboxVideoSource.setAttribute("src", `images/medias/${this.url}`);

        mainElement.appendChild(lightboxDiv);
        lightboxDiv.appendChild(lightboxCloseBtn);
        lightboxDiv.appendChild(lightboxPreviousBtn);
        lightboxDiv.appendChild(lightboxNextBtn);
        lightboxPreviousBtn.appendChild(leftArrow);
        lightboxNextBtn.appendChild(rightArrow);
        lightboxDiv.appendChild(lightboxContainer);
        lightboxContainer.appendChild(lightboxVideo)
        lightboxVideo.appendChild(lightboxVideoSource);

        return newDiv;
    }
}

class LightboxImage{
    constructor(id, url, photographerId){
        this.id = id;
        this.url = url;
        this.photographerId = photographerId;
    }
    display(){
        //création de la lightbox vide
        const newDiv = document.createElement("div");
        const lightboxImage = document.createElement("img");

        newDiv.classList.add("lightbox-hidden");
        lightboxImage.classList.add("lightbox-media");
        lightboxImage.setAttribute("src", `images/medias/${this.url}`);

        mainElement.appendChild(newDiv);

        return newDiv;
    }
}