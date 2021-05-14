class Logo{
    constructor(linkAttribute, imgAttribute){
        this.linkAttribute = linkAttribute;
        this.imgAttribute = imgAttribute;
    }
    display(){
        const photographerHeader = document.createElement("header");
        const logoLink = document.createElement("a");
        const logoImg = document.createElement("img");
    
        logoLink.setAttribute("href", `${this.linkAttribute}`); //"index.html"
        logoImg.classList.add("logo");
        logoImg.setAttribute("src", `${this.imgAttribute}`); //images/logo.png
    
        document.body.appendChild(photographerHeader);
        photographerHeader.appendChild(logoLink);
        logoLink.appendChild(logoImg);
        return logoLink;
    }
}