class MediaFactory{
    constructor(type, props){
        if(type === "image"){
            return new Image(props);
        }
        if(type === "video"){
            return new Video(props);
        }
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
        this.date = new Date(props.date);
        this.price = props.price
    }
    display(){
        //create elements
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
        newImageLikes.innerHTML = `${this.likes} <i class="fas fa-heart"></i>`

        newImageLikes.addEventListener('click', (e)=> {
            e.stopPropagation();
            newImageLikes.innerHTML = `${this.increment(this.likes)} <i class="fas fa-heart"></i>`;
            this.totalLikesCounter();
        });
        
        //add elements to their parents
        newImageArticle.appendChild(newMediaSection);
        newImageArticle.appendChild(newInfoSection);
        newMediaSection.appendChild(newImage);
        newInfoSection.appendChild(newImageTitle);
        newInfoSection.appendChild(newImageLikes);

        return newImageArticle;
    }
    increment(likes){
        this.likes++
        return this.likes;
    }

    totalLikesCounter(){
        const totalLikes = document.querySelector(".recap-infos__likes");
        const mediasLikes = document.querySelectorAll(".media-info__likes");
        
        let arrayLikes = [];
        mediasLikes.forEach(element => arrayLikes.push(parseInt(element.outerText)));
            
        const sum = arrayLikes.reduce((a, b) => a + b);
        //console.log(sum);
        totalLikes.innerText = `${sum}`;
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
        this.date = new Date(props.date);
        this.price = props.price
    }
    display(){
        //create elements
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
        newVideoLikes.innerHTML = `${this.likes} <i class="fas fa-heart"></i>`

        newVideoLikes.addEventListener('click', (e)=> {
            e.stopPropagation();
            newVideoLikes.innerHTML = `${this.increment(this.likes)} <i class="fas fa-heart"></i>`;
            this.totalLikesCounter();
        });
        //add elements to their parents
        newVideoArticle.appendChild(newMediaSection);
        newVideoArticle.appendChild(newInfoSection);
        newMediaSection.appendChild(newVideo);
        newVideo.appendChild(newSource);
        newInfoSection.appendChild(newVideoTitle);
        newInfoSection.appendChild(newVideoLikes);
        
        return newVideoArticle;
    }
    increment(likes){
        let numberOfLikes = likes;
        numberOfLikes++;
        this.likes = numberOfLikes;
        return this.likes;
    }

    totalLikesCounter(){
        const totalLikes = document.querySelector(".recap-infos__likes");
        const mediasLikes = document.querySelectorAll(".media-info__likes");
        
        let arrayLikes = [];
        mediasLikes.forEach(element => arrayLikes.push(parseInt(element.outerText)));
            
        const sum = arrayLikes.reduce((a, b) => a + b);
        //console.log(sum);
        totalLikes.innerText = `${sum}`;
    }
}