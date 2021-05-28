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
        const newVideoTitle = document.createElement("p");

        //newVideoLink.setAttribute(); ?
        newVideoSource.setAttribute("src", `images/medias/${this.url}`);
        newVideoTitle.innerHTML = `${this.title}`;
        newVideoThumbnail.classList.add("gallery__video");

        mainElement.appendChild(newVideoArticle);
        newVideoArticle.appendChild(newVideoLink);
        newVideoArticle.appendChild(newVideoTitle);
        newVideoLink.appendChild(newVideoThumbnail);
        newVideoThumbnail.appendChild(newVideoSource);

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
        const newImageTitle = document.createElement("p");

        //newVideoLink.setAttribute(); ?
        newImage.setAttribute("src", `images/medias/${this.url}`);
        newImage.classList.add("gallery__picture");
        newImageTitle.innerHTML = `${this.title}`;

        mainElement.appendChild(newImageArticle);
        newImageArticle.appendChild(newImageLink);
        newImageLink.appendChild(newImage);
        newImageArticle.appendChild(newImageTitle);

        return newImageArticle;
    }
}

/* Et ensuite pour créer un objet vidéo dans la page details.js, dans le fetch, let myVideo = new Video(données fetch);
myVideo.display();

pour créer un objet picture, let myPicture = new Picture();
myPicture.display(données fetch);*/