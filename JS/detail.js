(async function createDetailPage(){
    let params = new URLSearchParams(window.location.search);
    let photographerId = params.get("id");
    console.log(`L'Id du photographe est ${photographerId}`);
    let myDetail = new Detail();
    await myDetail.getPhotographer(photographerId);
    myDetail.displayPhotographer();
    await myDetail.getMedias(photographerId);
    myDetail.displayMedias();
    myDetail.displayFilter();
    myDetail.totalLikesDefault();
    //myDetail.byTitle(); -> test OK

    const lightboxModal = document.querySelector("#lightbox-modal");

    //close the lightbox
    const closeButton = document.querySelector("#lightbox-btn__close");

        closeButton.addEventListener('click', () => {
            lightboxModal.style.display = "none";
        });

    //navigate inside lightbox
    const previousButton = document.querySelector("#lightbox-btn__previous");
    const nextButton = document.querySelector("#lightbox-btn__next");

    
    previousButton.addEventListener('click', () => {
            myDetail.lightbox.goPrev();
        });

    nextButton.addEventListener('click', () => {
            myDetail.lightbox.goNext();
        });

    //sort by Popularity, Date or Title (test)
    /*const sortingOptions = document.getElementById("sorting-options");  
    console.log(sortingOptions.options);
    sortingOptions.addEventListener("change", ()=>{
        if(sortingOptions.options[0].selected){
            console.log("Vous avez sélectionné le tri par Popularité");
        }if(sortingOptions.options[1].selected){
            console.log("Vous avez sélectionné le tri par Date");
        }if(sortingOptions.options[2].selected){
            console.log("Vous avez sélectionné le tri par Titre");
        }
    });*/
    






    /*const titleOption = document.querySelector("option[value='2']")    
    console.log(titleOption);
    titleOption.addEventListener('click', () => {
        myDetail.byTitle();
    })
    const sortingOptions = document.getElementById("sorting-options");  
    sortingOptions.addEventListener('change', () => {
        console.log('Vous avez sélectionné', this.option);
    });*/

})();