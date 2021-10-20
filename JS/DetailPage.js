class Detail{
    constructor(){
        this.photographer = null;
        this.medias = [];
        this.headerElement = document.querySelector("header");
        this.mainElement = document.querySelector("main");
        this.mediasContainer = document.querySelector("#medias-section");
        this.lightboxContainer = document.querySelector(".lightbox-media");
    }

    async getPhotographer(id){
        const response = await fetch('./JS/photographers.json');
        const obj = await response.json();
        if (!response.ok) {
            throw new Error(`Erreur HTTP ! statut : ${response.status}`);
        }

        const photographers = obj.photographers;

        for (let photographer of photographers){
            if(photographer.id == id){
                this.photographer = new PhotographerFactory("profile", {portrait: photographer.portrait, name: photographer.name, city: photographer.city, country: photographer.country, tagline: photographer.tagline, tags: photographer.tags, id: photographer.id});
                this.price = photographer.price;
                break;
            }   
        }
    }

    displayPhotographer(){
        this.headerElement.appendChild(this.photographer.display());
    }

    async getMedias(id){
        const response = await fetch('./JS/photographers.json');
        const obj = await response.json();
        if (!response.ok) {
            throw new Error(`Erreur HTTP ! statut : ${response.status}`);
        }
        for (let media of obj.media){
            if((media.image == undefined) && (media.photographerId == id)){
                let video = new MediaFactory("video", {id: media.id, url: media.video, title: media.title, photographerId: media.photographerId, tags: media.tags, likes: media.likes, date: media.date, price: media.price});
                this.medias.push(video);
            }else if((media.video == undefined) && (media.photographerId == id)){
                let image = new MediaFactory("image", {id: media.id, url: media.image, title: media.title, photographerId: media.photographerId, tags: media.tags, likes: media.likes, date: media.date, price: media.price});
                this.medias.push(image);
            }
        }
        this.byPopularity();
        this.lightbox = new LightboxFactory(this.medias, this.lightboxContainer);
    }

    displayMedias(){
        for(let media of this.medias){
            const mediasCreated = this.mediasContainer.appendChild(media.display());
            mediasCreated.addEventListener('click', () => {
                this.startLightbox(this.medias.indexOf(media));
            });
            mediasCreated.addEventListener('keydown', (event) => {
                const keyName = event.key;
                if (keyName === 'Enter') {
                    this.startLightbox(this.medias.indexOf(media));
                }
            });
        }
    }

    displayFilter(){
        const sortingBtn = document.querySelector("#sorting-menu-btn");
        const chevron = document.querySelector("#sorting-menu-chevron");
        const popularityOption = "Popularité";
        const dateOption = "Date";
        const titleOption = "Titre";
        const sortingOption0 = document.querySelector("#option0");
        const sortingOption1 = document.querySelector("#option1");
        const sortingOption2 = document.querySelector("#option2");
        const sortingOptions = document.querySelector("#sorting-options");

        sortingOption0.innerHTML = popularityOption;
        sortingOption1.innerHTML = dateOption;
        sortingOption2.innerHTML = titleOption;

        sortingOption0.style.order = "1";
        sortingOption1.style.order = "2";
        sortingOption2.style.order = "3";
        
        sortingBtn.addEventListener("click", () => {
            this.expandMenu(sortingOptions, sortingBtn, chevron);
            sortingOption1.tabIndex = "0";
            sortingOption2.tabIndex = "0";
        });
        sortingBtn.addEventListener('keydown', (event) => {
            const keyName = event.key;
            if (keyName === 'Enter') {
                this.expandMenu(sortingOptions, sortingBtn, chevron);
                sortingOption1.tabIndex = "0";
                sortingOption2.tabIndex = "0";
            }
        });

        sortingOptions.addEventListener('click', (e) => {
            this.selectOption(e, popularityOption, sortingOption0, sortingOption1, dateOption, sortingOption2, titleOption);
        });
        sortingOptions.addEventListener('keydown', (event) => {
            const keyName = event.key;
            if (keyName === 'Enter') {
                this.selectOption(event, popularityOption, sortingOption0, sortingOption1, dateOption, sortingOption2, titleOption);
            }
        });
    }

    expandMenu(sortingOptions, sortingBtn, chevron){
        sortingOptions.classList.toggle("options-showed");
        sortingBtn.classList.toggle("sorting-menu-expanded");
        if(chevron.classList.contains("fa-chevron-up")){
            chevron.classList.replace("fa-chevron-up", "fa-chevron-down");
        } else if(chevron.classList.contains("fa-chevron-down")){
            chevron.classList.replace("fa-chevron-down", "fa-chevron-up");
        }
    }

    selectOption(e, popularityOption, sortingOption0, sortingOption1, dateOption, sortingOption2, titleOption){
        if(e.target.innerHTML === popularityOption){ //&& (!e.target.id === 0)
            console.log(popularityOption);
            this.removeMedias();
            this.byPopularity();
            sortingOption0.innerHTML = popularityOption;
            sortingOption1.innerHTML = dateOption;
            sortingOption2.innerHTML = titleOption;
            this.displayMedias();
        }else if(e.target.innerHTML === dateOption){ //&& (!e.target.id === 0)
            console.log(dateOption);
            this.removeMedias();
            this.byDate();
            sortingOption0.innerHTML = dateOption;
            sortingOption1.innerHTML = titleOption;
            sortingOption2.innerHTML = popularityOption;
            this.displayMedias();
        }else if(e.target.innerHTML === titleOption){ //&& (!e.target.id === 0)
            console.log(titleOption);
            this.removeMedias();
            this.byTitle();
            sortingOption0.innerHTML = titleOption;
            sortingOption1.innerHTML = popularityOption;
            sortingOption2.innerHTML = dateOption;
            this.displayMedias();
        }
    }

    removeMedias(){
        const medias = document.querySelectorAll(".media");
        for (let media of medias){
            this.mediasContainer.removeChild(media);
        }
    }

    startLightbox(index){
        this.lightbox.start(index);
    }

    totalLikesDefault(){
        const totalLikes = document.querySelector(".recap-infos__likes");
        const mediasLikes = document.querySelectorAll(".media-info__likes");
        let arrayLikes = [];

        mediasLikes.forEach(element => arrayLikes.push(parseInt(element.outerText)));

        const sum = arrayLikes.reduce((a, b) => a + b);
        totalLikes.innerHTML = `${sum} <i class="fas fa-heart" id="total-likes__icon"></i>`;
    }

    displayPrice(){
        const recapPrice = document.querySelector(".recap-infos__price");
        recapPrice.innerHTML = `${this.price}€ / jour`;
    }

    byPopularity(){
        this.medias.sort( (a, b) => {
            return a.likes - b.likes;
        });
    }

    byDate(){
        this.medias.sort( (a, b) => {
            return a.date - b.date;
        });
    }

    byTitle(){
        this.medias.sort( (a, b) => {
            if (a.title < b.title){
                return -1;
            }
            if (a.title > b.title){
                return 1;
            }else{
                return 0;
            }
        });
    }
}