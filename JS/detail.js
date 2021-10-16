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
    myDetail.displayPrice();

    /*LIGHTBOX EVENTS*/

    const lightboxModal = document.querySelector("#lightbox-modal");

    //close the lightbox
    const closeLightboxBtn = document.querySelector("#lightbox-btn__close");
    closeLightboxBtn.addEventListener('click', () => {
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

    /*CONTACT MODAL EVENTS*/
    const mainElement = document.querySelector("main");
    const contactModal = document.querySelector(".contact-modal");
    const closeModalBtn = document.querySelector("#modal-btn__close");
    closeModalBtn.addEventListener('click', () => {
        contactModal.style.display = "none";
        contactModal.setAttribute("aria-hidden", "true");
        mainElement.tabIndex = 0;
        mainElement.setAttribute("aria-hidden", "false");
    });
})();