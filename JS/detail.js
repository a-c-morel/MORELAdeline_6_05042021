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

let photographers = [];
let photographerProfile = null;
let medias = [];



//ce qui suit va générer la page HTML "detail" en fonction de l'id du photographe cliqué dans "index"
fetch('./JS/photographers.json')
    .then((response) => {
        return response.json();
    })
    .then((obj) => {
        photographers = obj.photographers;

        for (let photographer of photographers){
            if(photographer.id == photographerId){
                photographerProfile = new PhotographerFactory("profile", {portrait: photographer.portrait, name: photographer.name, city: photographer.city, country: photographer.country, tagline: photographer.tagline, tags: photographer.tags, id: photographer.id});
                mainElement.appendChild(photographerProfile.display());
            }
        }
        for (let media of obj.media){
            if((media.image == undefined) && (media.photographerId == photographerId)){
                let video = new MediaFactory("video", {id: media.id, url: media.video, title: media.title, photographerId: media.photographerId, tags: media.tags, likes: media.likes, date: media.date, price: media.price});
                console.log(video);
                mainElement.appendChild(video.display());
                medias.push(video);
            }else if((media.video == undefined) && (media.photographerId == photographerId)){
                let image = new MediaFactory("image", {id: media.id, url: media.image, title: media.title, photographerId: media.photographerId, tags: media.tags, likes: media.likes, date: media.date, price: media.price});
                mainElement.appendChild(image.display());
                medias.push(image);
            }
        }

        console.log(medias);
    })
    .catch((error) => {
        console.error("Cela n'a pas fonctionné");
        console.error(error);
    });

