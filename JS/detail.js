//ajout du main au body
const mainElement = document.createElement("main");
document.body.appendChild(mainElement);

//creation du formulaire (input, label)
const form = document.createElement("form");
form.setAttribute("action", "");
form.style.order = "1";

const label = document.createElement("label");
label.setAttribute("for", "");

const input = document.createElement("input");
input.setAttribute("type", "text");

mainElement.appendChild(form);
form.appendChild(label);
form.appendChild(input);

//creation du menu de selection
const selectMenu = document.createElement("select");
selectMenu.style.order = "2";

const popularityOption = document.createElement("option");
popularityOption.setAttribute("value", "0");
popularityOption.innerHTML = "Popularité";

const dateOption = document.createElement("option");
dateOption.setAttribute("value", "1");
dateOption.innerHTML = "Date";

const titleOption = document.createElement("option");
titleOption.setAttribute("value", "2");
titleOption.innerHTML = "Titre";

mainElement.appendChild(selectMenu);
selectMenu.appendChild(popularityOption);
selectMenu.appendChild(dateOption);
selectMenu.appendChild(titleOption);

//instance de la classe Detail qui affiche les medias en fonction de l'ID du photographe:
(async function createDetailPage(){
    let myDetail = new Detail();
    await myDetail.getPhotographer();
    myDetail.displayMedias();
})();

    /*const clickableMedias = document.querySelectorAll(".media");

    clickableMedias.forEach(clickableMedia =>{
    clickableMedia.addEventListener('click', e =>{
        console.log("vous avez cliqué");
        let lightbox = new LightboxFactory(medias);
        lightbox.createElement();
        mainElement.appendChild(lightbox.display());
    });
});




PSEUDO CODE :

function navigation(array des médias){
    let currentMedia = media cliqué

    eventListener sur le bouton prev et sur le bouton next avec les conditions :
    if(position == 0){
        e.preventDefault sur l'event listener de prev
    }
    if(position > medias.length){
        e.preventDefault sur l'event listener de next
    } else{
        position ++ ou position -- à chaque clic
    }
}*/