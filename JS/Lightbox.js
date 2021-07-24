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
                this.element = document.createElement("source");
                //this.element.classList.add("lightbox-media");
                this.element.setAttribute("src", `images/medias/${this.medias[this.position].url}`);
            }
        //utiliser du CSS ensuite, cette ligne est juste faite pour les tests :
        this.element.style.maxWidth = "300px";
        this.element.style.height = "auto";

        lightboxTitle.classList.add("lightbox-title");
        lightboxTitle.innerHTML = `${this.title}`; //undefined ... normal je ne l'ai déclaré nulle part
        this.lightbox.appendChild(this.element);
        this.lightbox.appendChild(lightboxTitle);
    }

    //pb = si j'exécute clearMedia avant createElement, this.element est encore de type null donc pas possible.
    //et si je fais l'inverse, children aura déjà bien 2 nodes puisque ils auront été ajouté avant le clear...
    //il faudrait ajouter 1 condition Si le nombre de childNodes est supérieur à 2
    //fait -> pb = du coup ça affiche le dernier element des medias après avoir suppr tous les childNodes précédents...

    clearMedia(){
        if(this.lightbox.hasChildNodes()){
            let children = this.lightbox.childNodes;
            while(children.length >= 2){
                console.log(children);
                children.forEach((child)=>{
                    this.lightbox.removeChild(child);
                });   
            }
        }
        this.lightbox.appendChild(this.element);
    }

    display(){
        this.lightbox.classList.add("lightbox-showed");
        this.clearMedia();
    }
    
    start(i = 0){
        this.position = i;
        this.createElem();
        this.display();
    }

    goPrev(){
        this.previousButton.addEventListener('click', () => { //cet event sera à mettre dans detail.js

            if(this.position > 0){
                this.position--;
                console.log(this.position);
                this.createElem();
                this.clearMedia();
            }else{
                this.position = this.medias.length -1
            }
        });
    }

    goNext(){
        this.nextButton.addEventListener('click', () => { //cet event sera à mettre dans detail.js
            if(this.position < (this.medias).length){
                this.position++;
                console.log(this.position);
                this.createElem();
            }else{
                this.position = 0;
            }
        });
    }
}