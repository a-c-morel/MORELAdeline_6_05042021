

fetch('./JS/photographers.json')
    .then((response) => {
        return response.json();
    })
    .then((obj) => {
        photographers = obj.photographers;

        
        //ici il faut que je cible les infos de Mimi uniquement dans le JSON
            let photographerPage1 = new PhotographerPage(logo, profile, input, menu, gallery);
            tags.push(...photographer.tags);
            mainElement.appendChild(photographerPage1.display());
    })
    .catch((error) => {
        console.error("Cela n'a pas fonctionné");
        console.error(error);
    });