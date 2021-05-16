class Logo{
    constructor(linkAttribute, imgAttribute){
        this.linkAttribute = linkAttribute;
        this.imgAttribute = imgAttribute;
    }
    display(){
        const headerLink = document.createElement("a");
        headerLink.setAttribute("href", "index.html");
        headerElement.appendChild(headerLink);
        const logoImg = document.createElement("img");
        logoImg.classList.add("logo");
        logoImg.setAttribute("src", "images/logo.png");
        logoImg.setAttribute("alt", "Fisheye Home page");
        headerLink.appendChild(logoImg);
        return headerLink;
    }
}