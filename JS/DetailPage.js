class Detail{
    constructor(){
        this.photographer = null;
        this.medias = [];
        this.mainElement = document.querySelector("main");
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
    }

    displayMedias(){
        console.log(this.medias);
        for(let media of this.medias){
            this.mainElement.appendChild(media.display());
        }
    }
}