class LightboxFactory{
    constructor(medias, lightbox){
        this.medias = medias;
        this.position = 0;
        this.element = null;
        this.lightbox = lightbox;
    }

    createElem(){
        const lightboxTitle = document.createElement("p");

        //si le média à cette position correspond à une instance de l'objet "Image" :
            if(this.medias[this.position] instanceof Image){
                this.element = document.createElement("img");
                //this.element.classList.add("lightbox-media");
                this.element.setAttribute("src", `images/medias/${this.medias[this.position].url}`);
            }//sinon si le média à cette position correspond à une instance de l'objet "Video" :
            else if(this.medias[this.position] instanceof Video){
                this.element = document.createElement("video");
                const videoSource = document.createElement("source");
                videoSource.setAttribute("src", `images/medias/${this.medias[this.position].url}`);
                //this.element.classList.add("lightbox-media");
                this.element.appendChild(videoSource);
            }
        //utiliser du CSS ensuite, cette ligne est juste faite pour les tests :
        this.element.style.maxWidth = "300px";
        this.element.style.height = "auto";

        lightboxTitle.classList.add("lightbox-title");
        lightboxTitle.innerText = `${this.medias[this.position].title}`
        this.lightbox.appendChild(this.element);
        this.lightbox.appendChild(lightboxTitle);
    }

    clearMedia(){
        while (this.lightbox.firstChild) {
            this.lightbox.removeChild(this.lightbox.firstChild);
        }
        /*if(this.lightbox.hasChildNodes()){
            let children = this.lightbox.childNodes;
            while(children.length >= 2){
                console.log(children);
                children.forEach((child)=>{
                    this.lightbox.removeChild(child);
                });   
            }
        }
        this.lightbox.appendChild(this.element);*/ //ce n'est pas ça qu'il va falloir mettre car cela ne prend pas en compte le titre
    }

    display(){
        const lightboxContainer = document.querySelector("#lightbox-modal");
        lightboxContainer.style.display = "flex";
        //lightboxContainer.classList.add("lightbox");
        this.lightbox.classList.add("lightbox-showed");
        this.clearMedia();
    }
    
    start(index = 0){
        this.position = index;
        console.log(this.position);
        this.display();
        this.createElem();
    }

    goPrev(){
        //this.previousButton.addEventListener('click', () => { //cet event sera à mettre dans detail.js

            if(this.position > 0){
                this.position--;
                console.log(this.position);
                
            }else{
                this.position = this.medias.length -1
            }
            this.clearMedia();
            this.createElem();
        //});
    }

    goNext(){
        //this.nextButton.addEventListener('click', () => { //cet event sera à mettre dans detail.js
            if(this.position < (this.medias).length-1){
                this.position++;
                console.log(this.position);
            }else{
                this.position = 0;
            }
            this.clearMedia();
            this.createElem();
        //});
    }
}