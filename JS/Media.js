class MediaFactory{
    constructor(type, props){
        this.type = type; //"video" ou "image"
        if(type === "image"){
            return new Image(props);
        }
        if(type === "video"){
            return new Video(props);
        }
    }
    display(){
        console.log("ceci est un message provenant de la factory des medias")
    }
}

class Video extends MediaFactory{
    constructor(props){
        super(props);
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

        //newVideoLink.setAttribute(); ?
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

        return newVideoArticle;
    }
}

class Image extends MediaFactory{
    constructor(props){
        super(props);
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
        newImageInfoSection.appendChild(newImageLikes);

        return newImageArticle;
    }
}

/* Et ensuite pour créer un objet vidéo dans la page details.js, dans le fetch, let myVideo = new Video(données fetch);
myVideo.display();

pour créer un objet picture, let myPicture = new Picture();
myPicture.display(données fetch);*/