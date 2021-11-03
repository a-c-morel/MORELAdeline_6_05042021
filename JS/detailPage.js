class Detail {
    constructor() {
        this.photographer = null;
        this.medias = [];
        this.headerElement = document.querySelector("header");
        this.mainElement = document.querySelector("main");
        this.mediasContainer = document.querySelector("#medias-section");
        this.lightboxContainer = document.querySelector(".lightbox-media");
        this.sortingMenuContainer = document.querySelector(".sorting-menu-container");
        this.sortingBtn = document.querySelector("#sorting-menu-btn");
        this.chevron = document.querySelector("#sorting-menu-chevron");
        this.popularityOption = "Popularité";
        this.dateOption = "Date";
        this.titleOption = "Titre";
        this.sortingOption0 = document.querySelector("#option0");
        this.sortingOption1 = document.querySelector("#option1");
        this.sortingOption2 = document.querySelector("#option2");
        this.sortingOptions = document.querySelector("#sorting-options");
    }

    async getPhotographer(id) {
        const response = await fetch("./JS/photographers.json");
        const obj = await response.json();
        if (!response.ok) {
            throw new Error(`Erreur HTTP ! statut : ${response.status}`);
        }

        const photographers = obj.photographers;

        for (let photographer of photographers) {
            if (photographer.id == id) {
                this.photographer = new PhotographerFactory("profile", {portrait: photographer.portrait, name: photographer.name, city: photographer.city, country: photographer.country, tagline: photographer.tagline, tags: photographer.tags, id: photographer.id});
                this.price = photographer.price;
                break;
            }   
        }
    }

    displayPhotographer() {
        this.headerElement.appendChild(this.photographer.display());
    }

    async getMedias(id) {
        const response = await fetch("./JS/photographers.json");
        const obj = await response.json();
        if (!response.ok) {
            throw new Error(`Erreur HTTP ! statut : ${response.status}`);
        }
        for (let media of obj.media) {
            if ((media.image == undefined) && (media.photographerId == id)) {
                let video = new MediaFactory("video", {id: media.id, url: media.video, title: media.title, photographerId: media.photographerId, tags: media.tags, likes: media.likes, date: media.date, price: media.price});
                this.medias.push(video);
            } else if((media.video == undefined) && (media.photographerId == id)) {
                let image = new MediaFactory("image", {id: media.id, url: media.image, title: media.title, photographerId: media.photographerId, tags: media.tags, likes: media.likes, date: media.date, price: media.price});
                this.medias.push(image);
            }
        }
        this.byPopularity();
        this.lightbox = new LightboxFactory(this.medias, this.lightboxContainer);
    }

    displayMedias() {
        for (let media of this.medias) {
            const mediasCreated = this.mediasContainer.appendChild(media.display());
            mediasCreated.addEventListener("click", (e) => {
                e.preventDefault();
                this.startLightbox(this.medias.indexOf(media));
            });
            mediasCreated.addEventListener("keydown", (e) => {
                const keyName = e.key;
                if (keyName === "Enter") {
                    e.preventDefault();
                    this.startLightbox(this.medias.indexOf(media));
                }
            });
        }
    }

    displayFilter() {
        this.sortingOption0.innerHTML = this.popularityOption;
        this.sortingOption1.innerHTML = this.dateOption;
        this.sortingOption2.innerHTML = this.titleOption;

        this.sortingOption0.style.order = "1";
        this.sortingOption1.style.order = "2";
        this.sortingOption2.style.order = "3";
        
        this.sortingBtn.addEventListener("click", () => {
            this.expandMenu(this.sortingOptions, this.sortingMenuContainer, this.chevron);
            this.toggleAttribute(this.sortingBtn);
            this.sortingOption1.tabIndex = "0";
            this.sortingOption2.tabIndex = "0";
        });
        this.sortingBtn.addEventListener("keydown", (e) => {
            const keyName = e.key;
            if (keyName === "Enter") {
                this.expandMenu(this.sortingOptions, this.sortingMenuContainer, this.chevron);
                this.toggleAttribute(this.sortingBtn);
                this.sortingOption1.tabIndex = "0";
                this.sortingOption2.tabIndex = "0";
            }
        });

        this.sortingOptions.addEventListener("click", (e) => {
            this.selectOption(e,
                this.popularityOption,
                this.sortingOption0,
                this.sortingOption1,
                this.dateOption,
                this.sortingOption2,
                this.titleOption);
        });
        this.sortingOptions.addEventListener("keydown", (e) => {
            const keyName = e.key;
            if (keyName === "Enter") {
                this.selectOption(e,
                    this.popularityOption,
                    this.sortingOption0,
                    this.sortingOption1,
                    this.dateOption,
                    this.sortingOption2,
                    this.titleOption);
            }
        });
    }

    expandMenu(sortingOptions, sortingMenuContainer, chevron) {
        sortingOptions.classList.toggle("options-showed");
        sortingMenuContainer.classList.toggle("sorting-menu-expanded");
        
        if (chevron.classList.contains("fa-chevron-up")) {
            chevron.classList.replace("fa-chevron-up", "fa-chevron-down");
        } else if(chevron.classList.contains("fa-chevron-down")) {
            chevron.classList.replace("fa-chevron-down", "fa-chevron-up");
        }
    }

    toggleAttribute(sortingBtn) {
        let ariaExpanded = sortingBtn.getAttribute("aria-expanded"); 
        
        if (ariaExpanded == "true") {
            ariaExpanded = "false"
        } else {
            ariaExpanded = "true"
        }

        sortingBtn.setAttribute("aria-expanded", ariaExpanded);
    }

    selectOption(e, popularityOption, sortingOption0, sortingOption1, dateOption, sortingOption2, titleOption) {
        if (e.target.innerHTML === popularityOption) {
            this.removeMedias();
            this.byPopularity();
            sortingOption0.innerHTML = popularityOption;
            sortingOption1.innerHTML = dateOption;
            sortingOption2.innerHTML = titleOption;
            this.displayMedias();
        } else if (e.target.innerHTML === dateOption) {
            this.removeMedias();
            this.byDate();
            sortingOption0.innerHTML = dateOption;
            sortingOption1.innerHTML = titleOption;
            sortingOption2.innerHTML = popularityOption;
            this.displayMedias();
        } else if (e.target.innerHTML === titleOption) {
            this.removeMedias();
            this.byTitle();
            sortingOption0.innerHTML = titleOption;
            sortingOption1.innerHTML = popularityOption;
            sortingOption2.innerHTML = dateOption;
            this.displayMedias();
        }
    }

    removeMedias() {
        const medias = document.querySelectorAll(".media");
        for (let media of medias) {
            this.mediasContainer.removeChild(media);
        }
    }

    startLightbox(index) {
        this.lightbox.start(index);
    }

    totalLikesDefault() {
        const totalLikes = document.querySelector(".recap-infos__likes");
        const mediasLikes = document.querySelectorAll(".media-info__likes");
        let arrayLikes = [];

        mediasLikes.forEach(element => arrayLikes.push(parseInt(element.outerText)));

        const sum = arrayLikes.reduce((a, b) => a + b);
        totalLikes.innerHTML = `${sum} <span class="fas fa-heart" id="total-likes__icon"></span>`;
    }

    displayPrice() {
        const recapPrice = document.querySelector(".recap-infos__price");
        recapPrice.innerHTML = `${this.price}€ / jour`;
    }

    byPopularity() {
        this.medias.sort((a, b) => {
            return b.likes - a.likes;
        });
    }

    byDate() {
        this.medias.sort((a, b) => {
            return a.date - b.date;
        });
    }

    byTitle() {
        this.medias.sort((a, b) => {
            if (a.title < b.title) {
                return -1;
            }
            if (a.title > b.title) {
                return 1;
            } else {
                return 0;
            }
        });
    }
}
