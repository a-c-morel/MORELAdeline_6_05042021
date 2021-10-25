class MediaFactory {
    constructor(type, props) {
        if(type === "image") {
            return new Image(props);
        }
        if(type === "video") {
            return new Video(props);
        }
    }
}

class Image {
    constructor(props) {
        this.id = props.id;
        this.url = props.url;
        this.title = props.title;
        this.photographerId = props.photographerId;
        this.tags = props.tags;
        this.likes = props.likes;
        this.date = new Date(props.date);
        this.price = props.price
    }

    display() {
        const newImageArticle = document.createElement("article");
        newImageArticle.classList.add("media");
        newImageArticle.setAttribute("tabindex", "0");

        const newMediaSection = document.createElement("section");
        newMediaSection.classList.add("media-preview");

        const newInfoSection = document.createElement("section");
        newInfoSection.classList.add("media-info");

        const newImage = document.createElement("img");
        newImage. classList.add("media-preview__media");
        newImage.setAttribute("src", `images/medias/${this.url}`);
        newImage.setAttribute("alt", `${this.title}`);
        newImage.setAttribute("aria-label", `${this.title}`);

        const newImageTitle = document.createElement("h2");
        newImageTitle.classList.add("media-info__title");
        newImageTitle.innerHTML = `${this.title}`;

        const newImageLikes = document.createElement("p");
        newImageLikes.classList.add("media-info__likes");
        newImageLikes.innerHTML = `${this.likes} `;
        
        newImageLikes.addEventListener("click", (e) => {
            e.preventDefault();//pour que cela n"ouvre pas la lightbox
            e.stopPropagation();
            newImageLikes.innerHTML = `${this.increment(this.likes)} <i class="fas fa-heart" aria-label="likes"></i>`;
            this.totalLikesCounter();
        });
        newImageLikes.addEventListener("keydown", (e) => {
            const keyName = e.key;
            if (keyName === "Enter") {
                e.preventDefault();
                e.stopPropagation();
                newImageLikes.innerHTML = `${this.increment(this.likes)} <i class="fas fa-heart" aria-label="likes"></i>`;
                this.totalLikesCounter();
                newImageArticle.focus();
            }
        });

        const newLikeIcon = document.createElement("i");
        newLikeIcon.classList.add("fas");
        newLikeIcon.classList.add("fa-heart");
        newLikeIcon.setAttribute("aria-label", "likes");
        newLikeIcon.setAttribute("tabindex", "0");
        
        newImageArticle.appendChild(newMediaSection);
        newImageArticle.appendChild(newInfoSection);
        newMediaSection.appendChild(newImage);
        newInfoSection.appendChild(newImageTitle);
        newInfoSection.appendChild(newImageLikes);
        newImageLikes.appendChild(newLikeIcon);

        return newImageArticle;
    }

    increment(likes) {
        this.likes++
        return this.likes;
    }

    totalLikesCounter() {
        const totalLikes = document.querySelector(".recap-infos__likes");
        const mediasLikes = document.querySelectorAll(".media-info__likes");
        
        let arrayLikes = [];
        mediasLikes.forEach(element => arrayLikes.push(parseInt(element.outerText)));
            
        const sum = arrayLikes.reduce((a, b) => a + b);
        totalLikes.innerHTML = `${sum} <i class="fas fa-heart" id="total-likes__icon"></i>`;
    }
}

class Video {
    constructor(props) {
        this.id = props.id;
        this.url = props.url;
        this.title = props.title;
        this.photographerId = props.photographerId;
        this.tags = props.tags;
        this.likes = props.likes;
        this.date = new Date(props.date);
        this.price = props.price
    }

    display() {
        const newVideoArticle = document.createElement("article");
        newVideoArticle.classList.add("media");
        newVideoArticle.setAttribute("tabindex", "0");

        const newMediaSection = document.createElement("section");
        newMediaSection.classList.add("media-preview");

        const newInfoSection = document.createElement("section");
        newInfoSection.classList.add("media-info");

        const newVideo = document.createElement("video");
        newVideo. classList.add("media-preview__media");
        newVideo.setAttribute("alt", `${this.title}`);

        const newSource = document.createElement("source");
        newSource.setAttribute("src", `images/medias/${this.url}`);

        const newDefaultText = document.createElement("p");
        newDefaultText.innerHTML = "Votre navigateur ne supporte pas l'élément vidéo."

        const newVideoTitle = document.createElement("h2");
        newVideoTitle.classList.add("media-info__title");
        newVideoTitle.innerHTML = `${this.title}`;

        const newVideoLikes = document.createElement("p");
        newVideoLikes.classList.add("media-info__likes");
        newVideoLikes.innerHTML = `${this.likes} `

        newVideoLikes.addEventListener("click", (e)=> {
            e.preventDefault();
            e.stopPropagation();
            newVideoLikes.innerHTML = `${this.increment(this.likes)} <i class="fas fa-heart" aria-label="likes"></i>`;
            this.totalLikesCounter();
        });
        newVideoLikes.addEventListener("keydown", (e) => {
            const keyName = e.key;
            if (keyName === "Enter") {
                e.preventDefault();
                e.stopPropagation();
                newVideoLikes.innerHTML = `${this.increment(this.likes)} <i class="fas fa-heart" aria-label="likes"></i>`;
                this.totalLikesCounter();
                newVideoArticle.focus();
            }
        });

        const newLikeIcon = document.createElement("i");
        newLikeIcon.classList.add("fas");
        newLikeIcon.classList.add("fa-heart");
        newLikeIcon.setAttribute("aria-label", "likes");
        newLikeIcon.setAttribute("tabindex", "0");

        newVideoArticle.appendChild(newMediaSection);
        newVideoArticle.appendChild(newInfoSection);
        newMediaSection.appendChild(newVideo);
        newVideo.appendChild(newSource);
        newVideo.appendChild(newDefaultText);
        newInfoSection.appendChild(newVideoTitle);
        newInfoSection.appendChild(newVideoLikes);
        newVideoLikes.appendChild(newLikeIcon);
        
        return newVideoArticle;
    }

    increment(likes) {
        let numberOfLikes = likes;
        numberOfLikes++;
        this.likes = numberOfLikes;
        return this.likes;
    }

    totalLikesCounter() {
        const totalLikes = document.querySelector(".recap-infos__likes");
        const mediasLikes = document.querySelectorAll(".media-info__likes");
        
        let arrayLikes = [];
        mediasLikes.forEach(element => arrayLikes.push(parseInt(element.outerText)));
            
        const sum = arrayLikes.reduce((a, b) => a + b);
        totalLikes.innerText = `${sum}`;
    }
}