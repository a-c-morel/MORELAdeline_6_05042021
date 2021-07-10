(async function createDetailPage(){
    let params = new URLSearchParams(window.location.search);
    let photographerId = params.get("id");
    console.log(photographerId);
    let myDetail = new Detail();
    await myDetail.getPhotographer(photographerId);
    myDetail.displayPhotographer();
    await myDetail.getMedias(photographerId);
    myDetail.displayMedias();
})();

/*mainElement = document.querySelector("main");
lightbox = document.querySelector(".lightbox");
closeButton = document.querySelector("#lightbox-btn__close");
previousButton = document.querySelector("#lightbox-btn__previous");
nextButton = document.querySelector("#lightbox-btn__next"); 

let lightbox = new LightboxFactory(medias, mainElement, lightbox, closeButton, previousButton, nextButton);
quand on clique sur un media (eventListener):
lightbox.createMedia();
lightbox.displayMedia();
lightbox.openLightbox();

*/

/*console.log(document.getElementsByClassName("media"));

const clickableMedias = document.getElementsByClassName("media");

clickableMedias.forEach(clickableMedia =>{
    clickableMedia.addEventListener('click', e =>{
        console.log("vous avez cliqué");
        let lightbox = new LightboxFactory(medias);
        lightbox.createElement();
        mainElement.appendChild(lightbox.display());
    });
});*/




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