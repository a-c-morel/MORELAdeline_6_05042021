class Picture {
    constructor(img, title, numberOfLikes){
        this.img = img;
        this.title = title;
        this.numberOfLikes = numberOfLikes;
    }
    display(){
        const pictureArticle = document.createElement("article");
        const pictureSection = document.createElement("section");
        const pictureInfoSection = document.createElement("section");
        const pictureImg = document.createElement("img");
        const pictureTitle = document.createElement("p");
        const pictureLikes = document.createElement("i");

        pictureImg.setAttribute("src", `${this.img}`);
        pictureTitle.innerHTML = `${this.title}`;
        pictureLikes.innerHTML = `${this.numberOfLikes}`;

        pictureArticle.appendChild(pictureSection);
        pictureArticle.appendChild(pictureInfoSection);
        pictureSection.appendChild(pictureImg);
        pictureInfoSection.appendChild(pictureTitle);
        pictureInfoSection.appendChild(pictureLikes);
    }
}