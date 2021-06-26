//récupération de la valeur de l'id du photographe dans l'url
let params = new URLSearchParams(window.location.search);
let photographerId = params.get("id");
console.log(`id du photographe : ${photographerId}`);

let photographers = [];
let photographerProfile = null;
let medias = [];

class Detail{
    constructor(){
        this.photographers = [];
        this.tags = [];
    }

    async getPhotographer(){
        const response = await fetch('./JS/photographers.json');
        console.log(response);
        const obj = await response.json();
        console.log(obj);
        if (!response.ok) {
            throw new Error(`Erreur HTTP ! statut : ${response.status}`);
        }
        for (let photographer of photographers){
            if(photographer.id == photographerId){
                photographerProfile = new PhotographerFactory("profile", {portrait: photographer.portrait, name: photographer.name, city: photographer.city, country: photographer.country, tagline: photographer.tagline, tags: photographer.tags, id: photographer.id});
                mainElement.appendChild(photographerProfile.display());
            }
        }
        for (let media of obj.media){
            if((media.image == undefined) && (media.photographerId == photographerId)){
                let video = new MediaFactory("video", {id: media.id, url: media.video, title: media.title, photographerId: media.photographerId, tags: media.tags, likes: media.likes, date: media.date, price: media.price});          
                mainElement.appendChild(video.display());
                medias.push(video);
            }else if((media.video == undefined) && (media.photographerId == photographerId)){
                let image = new MediaFactory("image", {id: media.id, url: media.image, title: media.title, photographerId: media.photographerId, tags: media.tags, likes: media.likes, date: media.date, price: media.price});
                mainElement.appendChild(image.display());
                medias.push(image);
            }
        }
        console.log(medias);

        let lightbox = new LightboxFactory(medias);

        lightbox.createElement();
        mainElement.appendChild(lightbox.display());
    }
}