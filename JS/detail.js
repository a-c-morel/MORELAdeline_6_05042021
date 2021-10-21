(async function createDetailPage(){
    let params = new URLSearchParams(window.location.search);
    let photographerId = params.get("id");
    //console.log(`L'Id du photographe est ${photographerId}`);
    let myDetail = new Detail();
    await myDetail.getPhotographer(photographerId);
    myDetail.displayPhotographer();
    await myDetail.getMedias(photographerId);
    myDetail.displayMedias();
    myDetail.displayFilter();
    myDetail.totalLikesDefault();
    myDetail.displayPrice();

    /*LIGHTBOX EVENTS*/
    const lightboxModal = document.querySelector("#lightbox-modal");

    //close the lightbox
    const closeLightboxBtn = document.querySelector("#lightbox-btn__close");
    closeLightboxBtn.addEventListener('click', () => {
        lightboxModal.style.display = "none";
        //+ remettre focus sur le media qui a été cliqué au départ
    });
    closeLightboxBtn.addEventListener('keydown', (event) => {
        const keyName = event.key;
        if (keyName === 'Escape') {
            lightboxModal.style.display = "none";
            //+ remettre focus sur le media qui a été cliqué au départ
        }
    });

    //navigate inside the lightbox
    const previousButton = document.querySelector("#lightbox-btn__previous");
    const nextButton = document.querySelector("#lightbox-btn__next");
    previousButton.addEventListener('click', () => {
            myDetail.lightbox.goPrev();
        });
    nextButton.addEventListener('click', () => {
            myDetail.lightbox.goNext();
        });
    
    lightboxModal.addEventListener('keydown', (event) => {
        const keyName = event.key;
        if (keyName === 'ArrowLeft') {
            myDetail.lightbox.goPrev();
        }
        if (keyName === 'ArrowRight') {
            myDetail.lightbox.goNext();
        }
    });
    
    /*CONTACT MODAL EVENTS*/
    const contactModal = document.querySelector(".contact-modal");
    const closeModalBtn = document.querySelector("#modal-btn__close");
    closeModalBtn.addEventListener('click', () => {
        contactModal.style.display = "none";
        //+ remettre focus sur le bouton de contact
    });
    contactModal.addEventListener('keydown', (event) => {
        const keyName = event.key;
        if (keyName === 'Escape') {
            contactModal.style.display = "none";
            //+ remettre focus sur le bouton de contact
        }
    });
})();