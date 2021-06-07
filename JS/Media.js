function launchLightbox(elem){
    elem.classList.add("lightbox-showed");
}

class MediaFactory{
    constructor(type, props){
        if(type === "image"){
            return new Image(props);
        }
        if(type === "video"){
            return new Video(props);
        }
    }
    display(){
        console.log("ceci est un message provenant de la factory des medias");
    }
}

class Video{
    constructor(props){
        this.id = props.id;
        this.url = props.url;
        this.title = props.title;
        this.photographerId = props.photographerId;
        this.tags = props.tags;
        this.likes = props.likes;
        this.date = props.date;
        this.price = props.price
    }
    display(){
        //ce que doit faire la méthode pour générer un objet de type vidéo
        const newVideoArticle = document.createElement("article");
        const newVideoLink = document.createElement("a");
        const newVideoThumbnail = document.createElement("video");
        const newVideoSource = document.createElement("source");
        const newVideoInfoSection = document.createElement("section");
        const newVideoTitle = document.createElement("p");
        const newVideoLikes = document.createElement("p");
        const lightbox = new ModalFactory("lightbox", {id: this.id, url: this.video, photographerId: this.photographerId});
        const lightboxVideo = document.createElement("video");
        const lightboxVideoSource = document.createElement("source");

        newVideoArticle.classList.add("gallery");
        newVideoLink.classList.add("gallery-link");
        newVideoLink.setAttribute("onclick", `launchLightbox(${lightbox})`);
        newVideoSource.setAttribute("src", `images/medias/${this.url}`);
        newVideoThumbnail.classList.add("gallery-link__media");
        newVideoInfoSection.classList.add("gallery-info")
        newVideoTitle.innerHTML = `${this.title}`;
        newVideoTitle.classList.add("gallery-info__title");
        newVideoLikes.classList.add("gallery-info__likes");
        newVideoLikes.innerHTML = `${this.likes}`;
        lightboxVideo.classList.add("lightbox-media");
        lightboxVideoSource.setAttribute("src", `images/medias/${this.url}`);
        
        mainElement.appendChild(newVideoArticle);
        mainElement.appendChild(lightbox.display());
        newVideoArticle.appendChild(newVideoLink);
        newVideoArticle.appendChild(newVideoInfoSection);
        newVideoLink.appendChild(newVideoThumbnail);
        newVideoThumbnail.appendChild(newVideoSource);
        newVideoInfoSection.appendChild(newVideoTitle);
        newVideoInfoSection.appendChild(newVideoLikes);
        //lightbox.appendChild(lightboxVideo);
        lightboxVideo.appendChild(lightboxVideoSource);
        
        return newVideoArticle;
    }
}

class Image{
    constructor(props){
        this.id = props.id;
        this.url = props.url;
        this.title = props.title;
        this.photographerId = props.photographerId;
        this.tags = props.tags;
        this.likes = props.likes;
        this.date = props.date;
        this.price = props.price
    }
    display(){
        //ce que doit faire la méthode pour générer un objet de type photo
        const newImageArticle = document.createElement("article");
        const newImageLink = document.createElement("a");
        const newImage = document.createElement("img");
        const newImageInfoSection = document.createElement("section");
        const newImageTitle = document.createElement("p");
        const newImageLikes = document.createElement("p");
        const lightboxImage = document.createElement("img");

        newImageArticle.classList.add("gallery");
        newImageLink.classList.add("gallery-link");
        newImageLink.setAttribute("onclick", "");
        newImage.setAttribute("src", `images/medias/${this.url}`);
        newImage.classList.add("gallery-link__media");
        newImageInfoSection.classList.add("gallery-info");
        newImageTitle.innerHTML = `${this.title}`;
        newImageTitle.classList.add("gallery-info__title");
        newImageLikes.classList.add("gallery-info__likes")
        newImageLikes.innerHTML = `${this.likes}`;
        lightboxImage.classList.add("lightbox-media");
        lightboxImage.setAttribute("src", `images/medias/${this.url}`);

        mainElement.appendChild(newImageArticle);
        newImageArticle.appendChild(newImageLink);
        newImageLink.appendChild(newImage);
        newImageArticle.appendChild(newImageInfoSection);
        newImageInfoSection.appendChild(newImageTitle);
        newImageInfoSection.appendChild(newImageLikes);
        
        return newImageArticle;
    }

    /*launchLightbox(){
        const lightbox = new ModalFactory("lightbox", {id: this.id, url: this.image, photographerId: this.photographerId});
        mainElement.appendChild(lightbox);
        console.log("vous avez cliqué sur un media");
    }*/
}