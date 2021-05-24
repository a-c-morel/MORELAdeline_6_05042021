heading();

fetch('./JS/photographers.json')
    .then((response) => {
        return response.json();
    })
    .then((obj) => {
        photographers = obj.photographers;
        for (const photographer of photographers){ //cela va énumérer les objets contenus dans obj
            let myCard = new PhotographerFactory("card", {portrait : photographer.portrait, name : photographer.name, city : photographer.city, country : photographer.country, tagline : photographer.tagline, price : photographer.price, tags : photographer.tags});
            
            tags.push(...photographer.tags);

            mainElement.appendChild(myCard.display());
        }
        
        tags = new Set(tags);
        const navigation = document.createElement("nav");
        const navigationList = document.createElement("ul");

        for(let tag of tags){
            const tagContainer = document.createElement("li");
            tagContainer.classList.add("tag-filter");
            tagContainer.classList.add("tags-links");
            tagContainer.innerHTML = `<span aria-hidden ="true">#</span>${tag}`;
            /*const sharpSpan = document.createElement("span");
            sharpSpan.setAttribute("aria-hidden", "true");
            sharpSpan.innerText = '#'
            tagContainer.appendChild(sharpSpan);
            tagContainer.innerText = `${tag}`;*/
            navigationList.appendChild(tagContainer);
            tagContainer.addEventListener("click", () =>{
                filtrer(tag);
            });
            navigation.appendChild(navigationList);
        }
        headerElement.appendChild(navigation);
    })
    .catch((error) => {
        console.error("Cela n'a pas fonctionné");
        console.error(error);
    });