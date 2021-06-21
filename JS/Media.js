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
        const newImageArticle = document.createElement("article");
        newImageArticle.classList.add("media");

        const newMediaSection = document.createElement("section");
        newMediaSection.classList.add("media-preview");

        const newInfoSection = document.createElement("section");
        newInfoSection.classList.add("media-info");


        const newImage = document.createElement("img");
        newImage. classList.add("media-preview__media");
        newImage.setAttribute("src", `images/medias/${this.url}`);

        const newImageTitle = document.createElement("h2");
        newImageTitle.classList.add("media-info__title");
        newImageTitle.innerHTML = `${this.title}`;

        const newImageLikes = document.createElement("p");
        newImageLikes.classList.add("media-info__likes");

        //mainElement.appendChild(newImageArticle);
        newImageArticle.appendChild(newMediaSection);
        newImageArticle.appendChild(newInfoSection);
        newMediaSection.appendChild(newImage);
        newInfoSection.appendChild(newImageTitle);
        newInfoSection.appendChild(newImageLikes);

        /*const newImageArticle = document.createElement("article");
        const newImageLink = document.createElement("a");
        const newImage = document.createElement("img");
        const newImageInfoSection = document.createElement("section");
        const newImageTitle = document.createElement("p");
        const newImageLikes = document.createElement("p");
        
        newImageArticle.classList.add("gallery");
        newImageLink.classList.add("gallery-link");
        newImage.setAttribute("src", `images/medias/${this.url}`);
        newImage.classList.add("gallery-link__media");
        newImageInfoSection.classList.add("gallery-info");
        newImageTitle.innerHTML = `${this.title}`;
        newImageTitle.classList.add("gallery-info__title");
        newImageLikes.classList.add("gallery-info__likes")
        newImageLikes.innerHTML = `${this.likes}`;
        
        mainElement.appendChild(newImageArticle);
        newImageArticle.appendChild(newImageLink);
        newImageLink.appendChild(newImage);
        newImageArticle.appendChild(newImageInfoSection);
        newImageInfoSection.appendChild(newImageTitle);
        newImageInfoSection.appendChild(newImageLikes);*/
        
        return newImageArticle;
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
        const newVideoArticle = document.createElement("article");
        newVideoArticle.classList.add("media");
        const newMediaSection = document.createElement("section");
        newMediaSection.classList.add("media-preview");
        const newInfoSection = document.createElement("section");
        newInfoSection.classList.add("media-info");
        const newVideo = document.createElement("video");
        newVideo. classList.add("media-preview__media");
        const newSource = document.createElement("source");
        newSource.setAttribute("src", `images/medias/${this.url}`);
        const newVideoTitle = document.createElement("h2");
        newVideoTitle.classList.add("media-info__title");
        newVideoTitle.innerHTML = `${this.title}`;
        const newVideoLikes = document.createElement("p");
        newVideoLikes.classList.add("media-info__likes");

        //mainElement.appendChild(newVideoArticle);
        newVideoArticle.appendChild(newMediaSection);
        newVideoArticle.appendChild(newInfoSection);
        newMediaSection.appendChild(newVideo);
        newVideo.appendChild(newSource);
        newInfoSection.appendChild(newVideoTitle);
        newInfoSection.appendChild(newVideoLikes);
        /*const newVideoArticle = document.createElement("article");
        const newVideoLink = document.createElement("a");
        const newVideoThumbnail = document.createElement("video");
        const newVideoSource = document.createElement("source");
        const newVideoInfoSection = document.createElement("section");
        const newVideoTitle = document.createElement("p");
        const newVideoLikes = document.createElement("p");

        newVideoArticle.classList.add("gallery");
        newVideoLink.classList.add("gallery-link");
        newVideoSource.setAttribute("src", `images/medias/${this.url}`);
        newVideoThumbnail.classList.add("gallery-link__media");
        newVideoInfoSection.classList.add("gallery-info")
        newVideoTitle.innerHTML = `${this.title}`;
        newVideoTitle.classList.add("gallery-info__title");
        newVideoLikes.classList.add("gallery-info__likes");
        newVideoLikes.innerHTML = `${this.likes}`;
        
        mainElement.appendChild(newVideoArticle);
        newVideoArticle.appendChild(newVideoLink);
        newVideoArticle.appendChild(newVideoInfoSection);
        newVideoLink.appendChild(newVideoThumbnail);
        newVideoThumbnail.appendChild(newVideoSource);
        newVideoInfoSection.appendChild(newVideoTitle);
        newVideoInfoSection.appendChild(newVideoLikes);
        //lightbox.appendChild(lightboxVideo);*/
        
        return newVideoArticle;
    }
}