(async function createDetailPage() {
    let params = new URLSearchParams(window.location.search);
    let photographerId = params.get("id");
    let myDetail = new Detail();
    await myDetail.getPhotographer(photographerId);
    myDetail.displayPhotographer();
    await myDetail.getMedias(photographerId);
    myDetail.displayMedias();
    myDetail.displayFilter();
    myDetail.totalLikesDefault();
    myDetail.displayPrice();

    /*CONTACT MODAL EVENTS*/

    //closing the modal
    const contactModal = document.querySelector(".contact-modal");
    const closeModalBtn = document.querySelector("#modal-btn__close");
    const contactBtn = document.querySelector(".contact-btn")
    closeModalBtn.addEventListener("click", () => {
        contactModal.style.display = "none";
        contactBtn.focus();
    });
    contactModal.addEventListener("keydown", (e) => {
        const keyName = e.key;
        if (keyName === "Escape") {
            contactModal.style.display = "none";
            contactBtn.focus();
        }
    });

    /*LIGHTBOX EVENTS*/
    const lightboxModal = document.querySelector("#lightbox-modal");
    const firstMedia = document.querySelector(".media");

    //close the lightbox
    const closeLightboxBtn = document.querySelector("#lightbox-btn__close");
    closeLightboxBtn.addEventListener("click", () => {
        lightboxModal.style.display = "none";
        firstMedia.focus();
    });
    closeLightboxBtn.addEventListener("keydown", (e) => {
        const keyName = e.key;
        if (keyName === "Escape") {
            lightboxModal.style.display = "none";
            firstMedia.focus();
        }
    });

    //navigate inside the lightbox
    const previousButton = document.querySelector("#lightbox-btn__previous");
    const nextButton = document.querySelector("#lightbox-btn__next");
    previousButton.addEventListener("click", () => {
            myDetail.lightbox.goPrev();
        });
    nextButton.addEventListener("click", () => {
            myDetail.lightbox.goNext();
        });
    lightboxModal.addEventListener("keydown", (e) => {
        const keyName = e.key;
        if (keyName === "ArrowLeft") {
            myDetail.lightbox.goPrev();
        }
        if (keyName === "ArrowRight") {
            myDetail.lightbox.goNext();
        }
        if (keyName === " ") {
            e.preventDefault();
        }
    });

    //prevent default behavior of space key, and make sure the user can escape the lightbox even if an element is focused inside lightbox
    previousButton.addEventListener("keydown", (e) => {
        const keyName = e.key;
        if (keyName === "Escape") {
            lightboxModal.style.display = "none";
            firstMedia.focus();
        }
        if (keyName === " ") {
            e.preventDefault();
        }
    });
    nextButton.addEventListener("keydown", (e) => {
        const keyName = e.key;
        if (keyName === "Tab") {
            e.preventDefault();
            closeLightboxBtn.focus();
        }
        if (keyName === "Escape") {
            lightboxModal.style.display = "none";
            firstMedia.focus();
        }
        if (keyName === " ") {
            e.preventDefault();
        }
    });
})();