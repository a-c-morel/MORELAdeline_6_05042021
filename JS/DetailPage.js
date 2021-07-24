class Detail{
    constructor(){
        this.photographer = null;
        this.medias = [];
        //this.position = 0;
        this.mainElement = document.querySelector("main");
        this.lightboxMediaContainer = document.querySelector(".lightbox-media");
    }

    async getPhotographer(id){
        const response = await fetch('./JS/photographers.json');
        const obj = await response.json();
        if (!response.ok) {
            throw new Error(`Erreur HTTP ! statut : ${response.status}`);
        }

        const photographers = obj.photographers;

        for (let photographer of photographers){
            if(photographer.id == id){
                this.photographer = new PhotographerFactory("profile", {portrait: photographer.portrait, name: photographer.name, city: photographer.city, country: photographer.country, tagline: photographer.tagline, tags: photographer.tags, id: photographer.id});
                break;
            }
        }
    }

    displayPhotographer(){
        this.mainElement.appendChild(this.photographer.display());
    }

    async getMedias(id){
        const response = await fetch('./JS/photographers.json');
        const obj = await response.json();
        if (!response.ok) {
            throw new Error(`Erreur HTTP ! statut : ${response.status}`);
        }
        for (let media of obj.media){
            if((media.image == undefined) && (media.photographerId == id)){
                let video = new MediaFactory("video", {id: media.id, url: media.video, title: media.title, photographerId: media.photographerId, tags: media.tags, likes: media.likes, date: media.date, price: media.price});
                this.medias.push(video);
            }else if((media.video == undefined) && (media.photographerId == id)){
                let image = new MediaFactory("image", {id: media.id, url: media.image, title: media.title, photographerId: media.photographerId, tags: media.tags, likes: media.likes, date: media.date, price: media.price});
                this.medias.push(image);
            }
        }
        //this.lightboxMediaContainer = document.querySelector(".lightbox-media");
        this.lightbox = new LightboxFactory(this.medias, this.lightboxMediaContainer);
        // je ne comprends pas ce this.lightbox ni ce que ces 2 lignes font ici...
    }

    displayMedias(){
    
        for(let media of this.medias){
            this.mainElement.appendChild(media.display()).addEventListener('click', () => {
                console.log(media);
                //this.position = this.medias.indexOf(media);
                //console.log(this.position);
                //attention ici 1 lightbox par média...

                //this.lightbox.start(this.position) (créer la méthode start dans Lightbox)
                //this.lightbox.closeLightbox();
                
                
                this.lightbox.createElem();
                this.lightbox.clearMedia();
                this.lightbox.display();
                this.startLightbox();
            });
        }
    }

    startLightbox(){
        for (let i = 0; i < this.medias.length; i++) {
                this.lightbox.start(i);
        }
    }

    
}