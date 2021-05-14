const mainElement = document.createElement("main");

class PhotographerPage{
    constructor(logo, profile, input, menu, gallery){
        this.logo = logo;
        this.profile = profile
        this.input = input;
        this.menu = menu;
        this.gallery = gallery;
    }
    displayLogo(){
        logo = new Logo("index.html", "images/logo.png");
        logo.display();
        return logo;
    }

    displayProfile(){
        let profile = new PhotographerProfile(photographer.name, photographer.city, photographer.country, photographer.tagline, photographer.tags, photographer.portrait);
        profile.display();
        return profile;
        /*fetch('./JS/photographers.json')
        .then((response) => {
            return response.json();
        })
        .then((obj) => {
            photographers = obj.photographers;
            for (const photographer of photographers){
                let photographerId = photographer.id;
                //comment utiliser cet Id pour cibler les données de ce photographe ?
                let profile = new PhotographerProfile(photographer.name, photographer.city, photographer.country, photographer.tagline, photographer.tags, photographer.portrait);
                profile.display();
                return profile;
            }
        })
        .catch((error) => {
            console.error("Cela n'a pas fonctionné");
            console.error(error);
        }); */

        //le fetch devra plutôt se trouver dans le js du photographe en question...
    }
    displayGallery(){
        //machin.displayForm();
        //machin.displayPictures();
    }
}

