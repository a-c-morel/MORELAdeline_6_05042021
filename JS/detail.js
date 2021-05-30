//creation du formulaire (input, label)
const form = document.createElement("form");
const label = document.createElement("label");
const input = document.createElement("input");

form.setAttribute("action", "");
form.style.order = "1";
label.setAttribute("for", "");
input.setAttribute("type", "text");

mainElement.appendChild(form);
form.appendChild(label);
form.appendChild(input);

//creation du menu de selection
const selectMenu = document.createElement("select");
const popularityOption = document.createElement("option");
const dateOption = document.createElement("option");
const titleOption = document.createElement("option");

selectMenu.style.order = "2";
popularityOption.setAttribute("value", "0");
popularityOption.innerHTML = "Popularité"; 
dateOption.setAttribute("value", "1");
dateOption.innerHTML = "Date";
titleOption.setAttribute("value", "2");
titleOption.innerHTML = "Titre";

mainElement.appendChild(selectMenu);
selectMenu.appendChild(popularityOption);
selectMenu.appendChild(dateOption);
selectMenu.appendChild(titleOption);

//récupération de la valeur de l'id du photographe dans l'url
let params = new URLSearchParams(window.location.search);
let photographerId = params.get("id");
console.log(photographerId);

//ce qui suit va générer la page HTML "detail" en fonction de l'id du photographe cliqué dans "index"
fetch('./JS/photographers.json')
    .then((response) => {
        return response.json();
    })
    .then((obj) => {
        photographers = obj.photographers;

        for (let photographer of photographers){
            if(photographer.id == photographerId){
                let photographerProfile = new PhotographerFactory("profile", {portrait: photographer.portrait, name: photographer.name, city: photographer.city, country: photographer.country, tagline: photographer.tagline, tags: photographer.tags, id: photographer.id});
                mainElement.appendChild(photographerProfile.display());
            }
        }
        medias = obj.media;
        for (let media of medias){
            if((media.image == undefined) && (media.photographerId == photographerId)){
                let video = new MediaFactory("video", {id: media.id, url: media.video, title: media.title, photographerId: media.photographerId, tags: media.tags, likes: media.likes, date: media.date, price: media.price});
                mainElement.appendChild(video.display());
            }else if((media.video == undefined) && (media.photographerId == photographerId)){
                let image = new MediaFactory("image", {id: media.id, url: media.image, title: media.title, photographerId: media.photographerId, tags: media.tags, likes: media.likes, date: media.date, price: media.price});
                mainElement.appendChild(image.display());
            }
        }
        /*let photographer1 = photographers[0];
        let profile1 = new Photographer(photographer1.portrait, photographer1.name, photographer1.city, photographer1.country, photographer1.tagline, photographer1.price, photographer1.tags);
        console.log(profile1);*/

        //let photographer1Id = photographers[0].id;

        /*medias = obj.media;
        for (let media of medias){
            if(media.id === photographer1Id){
                //creer une instance de picture
            }
        }*/

        /*let photographerPage1 = new PhotographerPage(profile1, photographerForm, menu, gallery);*/
        //tags.push(...photographer.tags);
        
        //mainElement.appendChild(photographerPage1.display());
    })
    .catch((error) => {
        console.error("Cela n'a pas fonctionné");
        console.error(error);
    });







/*class PhotographerPage{
    constructor(profile, form, menu, gallery){
        this.profile = profile
        this.form = form;
        this.menu = menu;
        this.gallery = gallery;
    }

    createProfile(){
        let profile = new Photographer(photographer.name, photographer.city, photographer.country, photographer.tagline, photographer.tags, photographer.portrait);
        profile.displayProfile();
        return profile;
        
    }
    createGallery(){
        let form = new Form("test", "test", "text");
        form.display();
        return form;
    }
    createMenu(){
        let menu = new Menu("Popularité", "Date", "Titre");
        menu.display();
        return menu;
    }
    createGallery(){
        let gallery = new Gallery();
        gallery.display();
        return gallery;
    }
}*/
