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

        pictureImg.setAttribute("src", `${this.img}`); //media.image dans le JSON
        pictureTitle.innerHTML = `${this.title}`; //? pas trouvé dans le JSON
        pictureLikes.innerHTML = `${this.numberOfLikes}`; //media.likes dans le JSON

        pictureArticle.appendChild(pictureSection);
        pictureArticle.appendChild(pictureInfoSection);
        pictureSection.appendChild(pictureImg);
        pictureInfoSection.appendChild(pictureTitle);
        pictureInfoSection.appendChild(pictureLikes);
    }
}