/*class Tags{

    constructor(tag){
        this.tag = `${tag}`
    }

    displayTags(){
        const navigation = document.createElement("nav");
        const navigationList = document.createElement("ul");

        for(let tag of tags){
            const tagContainer = document.createElement("li");
            const tagLink = document.createElement("a");
            tagContainer.classList.add("tags-links");
            //tagLink.setAttribute(href, ...)
            tagLink.innerHTML = `${tag}`
            navigationList.appendChild(tagContainer);
            tagContainer.appendChild(tagLink);
            navigation.appendChild(navigationList);
        }
        return navigation;
    }
    
}*/