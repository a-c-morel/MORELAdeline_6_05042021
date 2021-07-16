(async function createDetailPage(){
    let params = new URLSearchParams(window.location.search);
    let photographerId = params.get("id");
    console.log(`L'Id du photographe est ${photographerId}`);
    let myDetail = new Detail();
    await myDetail.getPhotographer(photographerId);
    myDetail.displayPhotographer();
    await myDetail.getMedias(photographerId);
    myDetail.displayMedias();
})();

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