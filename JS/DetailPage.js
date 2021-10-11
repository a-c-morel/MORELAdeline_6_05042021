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
            this.mediasContainer.appendChild(media.display()).addEventListener('click', () => {
                console.log(media);
                this.startLightbox(this.medias.indexOf(media));
            });            
        }
    }

    displayFilter(){
        const sortingBtn = document.querySelector(".sorting-menu-btn");
        const chevron = document.querySelector("#sorting-menu-chevron");
        const popularityOption = "Popularité";
        const dateOption = "Date";
        const titleOption = "Titre";
        //const sortingOptions = document.getElementById("sorting-options");
        const sortingOption0 = document.querySelector("#option0");
        const sortingOption1 = document.querySelector("#option1");
        const sortingOption2 = document.querySelector("#option2");
        const sortingOptions = document.querySelector("#sorting-options");

        //sortingOption1.classList.toggle("hidden-toggle");
        //sortingOption2.classList.toggle("hidden-toggle");

        sortingOption0.innerHTML = popularityOption;
        sortingOption1.innerHTML = dateOption;
        sortingOption2.innerHTML = titleOption;

        sortingOption0.style.order = "1";
        sortingOption1.style.order = "2";
        sortingOption2.style.order = "3";

        //par défaut = appliquer le tri par popularité (appeler fonction en dehors de l'event listener)

        
        sortingBtn.addEventListener("click", () => { //ajouter condition "ou quand on clique sur le chevron"
            console.log("dérouler la liste + rotation chevron vers le haut");
            //passer li2 en display block ou le remettre en display none -> toggle avec une classe ?
            sortingOptions.classList.toggle("options-showed");
            sortingBtn.classList.toggle("sorting-menu-expanded");
            //rotation du chevron vers ^
            if(chevron.classList.contains("fa-chevron-up")){
                chevron.classList.replace("fa-chevron-up", "fa-chevron-down");
            } else if(chevron.classList.contains("fa-chevron-down")){
                chevron.classList.replace("fa-chevron-down", "fa-chevron-up");
            }
        });
        
        sortingOption1.addEventListener('click', () => {
            if(sortingOption1 === popularityOption){
                this.removeMedias();
                this.byPopularity();
                sortingOption0.innerHTML = popularityOption;
                sortingOption1.innerHTML = dateOption;
                sortingOption2.innerHTML = titleOption;
                this.displayMedias();
            }
            if(sortingOption1 === dateOption){
                console.log("test");
                this.removeMedias();
                this.byDate();
                sortingOption0.innerHTML = dateOption;
                sortingOption1.innerHTML = titleOption;
                sortingOption2.innerHTML = popularityOption;
                this.displayMedias();
            }
            if(sortingOption1 === titleOption){
                this.removeMedias();
                this.byTitle();
                sortingOption0.innerHTML = titleOption;
                sortingOption1.innerHTML = popularityOption;
                sortingOption2.innerHTML = dateOption;
                this.displayMedias();
            }
        });
            
        sortingOption2.addEventlistener('click', () => {
                if(sortingOption2 === popularityOption){
                this.removeMedias();
                this.byPopularity();
                sortingOption0.innerHTML = popularityOption;
                sortingOption1.innerHTML = dateOption;
                sortingOption2.innerHTML = titleOption;
                this.displayMedias();
                }
            if(sortingOption2 === dateOption){
                this.removeMedias();
                this.byDate();
                sortingOption0.innerHTML = dateOption;
                sortingOption1.innerHTML = titleOption;
                sortingOption2.innerHTML = popularityOption;
                this.displayMedias();
            }
            if(sortingOption2 === titleOption){
                this.removeMedias();
                this.byTitle();
                sortingOption0.innerHTML = titleOption;
                sortingOption1.innerHTML = popularityOption;
                sortingOption2.innerHTML = dateOption;
                this.displayMedias();
            }  
        });
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
        console.log(sum);
        totalLikes.innerText = `${sum}`;
    }


    //Je pense que je vais revert l'ordre car il est plus logique de mettre les + populaires et les + récents en premier
    byPopularity(){
        this.medias.sort( (a, b) => {
            return a.likes - b.likes;
        });
        //console.log(this.medias);
    }

    byDate(){
        this.medias.sort( (a, b) => {
            return a.date - b.date;
        });
        //console.log(this.medias);
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
        //console.log(this.medias);
    }

}