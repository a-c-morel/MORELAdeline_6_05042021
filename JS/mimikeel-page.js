/*let photographerForm = new Form("test", "test", "text");
photographerForm.display();*/

mainElement.appendChild(photographerForm.display());

fetch('./JS/photographers.json')
    .then((response) => {
        return response.json();
    })
    .then((obj) => {
        photographers = obj.photographers;
        let photographer1 = photographers[0];
        let profile1 = new Photographer(photographer1.portrait, photographer1.name, photographer1.city, photographer1.country, photographer1.tagline, photographer1.price, photographer1.tags);
        console.log(profile1);

        let photographer1Id = photographers[0].id;

        medias = obj.media;
        for (let media of medias){
            if(media.id === photographer1Id){
                //creer une instance de picture
            }
        }

        let photographerPage1 = new PhotographerPage(profile1, photographerForm, menu, gallery);
        //tags.push(...photographer.tags);
        
        mainElement.appendChild(photographerPage1.display());
    })
    .catch((error) => {
        console.error("Cela n'a pas fonctionné");
        console.error(error);
    });