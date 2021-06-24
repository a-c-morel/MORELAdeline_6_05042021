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

        newImageArticle.appendChild(newMediaSection);
        newImageArticle.appendChild(newInfoSection);
        newMediaSection.appendChild(newImage);
        newInfoSection.appendChild(newImageTitle);
        newInfoSection.appendChild(newImageLikes);

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

        newVideoArticle.appendChild(newMediaSection);
        newVideoArticle.appendChild(newInfoSection);
        newMediaSection.appendChild(newVideo);
        newVideo.appendChild(newSource);
        newInfoSection.appendChild(newVideoTitle);
        newInfoSection.appendChild(newVideoLikes);
        
        return newVideoArticle;
    }
}