class Detail{
    constructor(){
        this.photographer = null;
        this.medias = [];
        this.mainElement = document.querySelector("main");
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
        this.mainElement.appendChild(this.photographer.display());
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
            this.mainElement.appendChild(media.display()).addEventListener('click', () => {
                console.log(media);
                this.startLightbox(this.medias.indexOf(media));
            });            
        }
    }

    displayFilter(){
        const sortingOptions = document.getElementById("sorting-options");
        sortingOptions.addEventListener("change", () => {
            const sortingOptionInput0 = document.querySelector("#sorting-option0");
            const sortingOptionInput1 = document.querySelector("#sorting-option1");
            const sortingOptionInput2 = document.querySelector("#sorting-option2");

            const sortingOption0 = document.querySelector('#option0');
            const sortingOption1 = document.querySelector('#option1');
            const sortingOption2 = document.querySelector('#option2');

            if(sortingOptionInput0.checked){
                console.log("Tri par popularité");
                sortingOption0.style.order = "1";
                sortingOption1.style.order= "2";
                sortingOption2.style.order= "3";
                this.removeMedias();
                this.byPopularity();
                this.displayMedias();
            }else if(sortingOptionInput1.checked){
                console.log("Tri par date");
                sortingOption1.style.order= "1";
                sortingOption2.style.order= "2";
                sortingOption0.style.order = "3";
                this.removeMedias();
                this.byDate();
                this.displayMedias();
            }else if(sortingOptionInput2.checked){
                console.log("Tri par titre");
                sortingOption2.style.order= "1";
                sortingOption0.style.order= "2";
                sortingOption1.style.order = "3";
                this.removeMedias();
                this.byTitle();
                this.displayMedias();
            }
        });
    }

    removeMedias(){
        const medias = document.querySelectorAll(".media");
        for (let media of medias){
                this.mainElement.removeChild(media);
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