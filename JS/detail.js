(async function createDetailPage(){
    let params = new URLSearchParams(window.location.search);
    let photographerId = params.get("id");
    console.log(`L'Id du photographe est ${photographerId}`);
    let myDetail = new Detail();
    await myDetail.getPhotographer(photographerId);
    myDetail.displayPhotographer();
    await myDetail.getMedias(photographerId);
    myDetail.displayMedias();
    
    const lightboxModal = document.querySelector(".lightbox");
    console.log(lightboxModal); //null

    //close the lightbox
    const closeButton = document.querySelector("#lightbox-btn__close");
    console.log(closeButton);

    closeLightbox();

    function closeLightbox(){
        closeButton.addEventListener('click', () => {
            lightboxModal.style.display = "none";
        })
    }

    //navigate inside lightbox
    const previousButton = document.querySelector("#lightbox-btn__previous");
    const nextButton = document.querySelector("#lightbox-btn__next");


    prevListener();
    nextListener();
    
    function prevListener(){
        previousButton.addEventListener('click', () => {
            myDetail.lightbox.goPrev();
        })
    }

    function nextListener(){
        nextButton.addEventListener('click', () => {
            myDetail.lightbox.goNext();
        })
    }

})();