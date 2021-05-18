//creation du formulaire (input, label)
const form = document.createElement("form");
const label = document.createElement("label");
const input = document.createElement("input");

form.setAttribute("action", "");
label.setAttribute("for", "");
input.setAttribute("type", "text");

mainElement.appendChild(form);
form.appendChild(label);
form.appendChild(input);

//creation du menu de selection
const selectMenu = document.createElement("select");
const popularityOption = document.createElement("option");
const dateOption = document.createElement("option");
const titleOption = document.createElement("option");

popularityOption.setAttribute("value", "0");
popularityOption.innerHTML = "Popularité"; 
dateOption.setAttribute("value", "1");
dateOption.innerHTML = "Date";
titleOption.setAttribute("value", "2");
titleOption.innerHTML = "Titre";

mainElement.appendChild(selectMenu);
selectMenu.appendChild(popularityOption);
selectMenu.appendChild(dateOption);
selectMenu.appendChild(titleOption);

fetch('./JS/photographers.json')
    .then((response) => {
        return response.json();
    })
    .then((obj) => {
        photographers = obj.photographers;
        /*let photographer1 = photographers[0];
        let profile1 = new Photographer(photographer1.portrait, photographer1.name, photographer1.city, photographer1.country, photographer1.tagline, photographer1.price, photographer1.tags);
        console.log(profile1);*/

        //let photographer1Id = photographers[0].id;

        medias = obj.media;
        for (let media of medias){
            if(media.id === photographer1Id){
                //creer une instance de picture
            }
        }

        /*let photographerPage1 = new PhotographerPage(profile1, photographerForm, menu, gallery);*/
        //tags.push(...photographer.tags);
        
        //mainElement.appendChild(photographerPage1.display());
    })
    .catch((error) => {
        console.error("Cela n'a pas fonctionné");
        console.error(error);
    });







/*class PhotographerPage{
    constructor(profile, form, menu, gallery){
        this.profile = profile
        this.form = form;
        this.menu = menu;
        this.gallery = gallery;
    }

    createProfile(){
        let profile = new Photographer(photographer.name, photographer.city, photographer.country, photographer.tagline, photographer.tags, photographer.portrait);
        profile.displayProfile();
        return profile;
        
    }
    createGallery(){
        let form = new Form("test", "test", "text");
        form.display();
        return form;
    }
    createMenu(){
        let menu = new Menu("Popularité", "Date", "Titre");
        menu.display();
        return menu;
    }
    createGallery(){
        let gallery = new Gallery();
        gallery.display();
        return gallery;
    }
}*/

