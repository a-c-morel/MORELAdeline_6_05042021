const mainElement = document.createElement("main");
document.body.appendChild(mainElement);

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

//instance de la classe Detail qui affiche les medias en fonction de l'ID du photographe:
let myDetail = new Detail();
myDetail.getPhotographer();

/*PSEUDO CODE :

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