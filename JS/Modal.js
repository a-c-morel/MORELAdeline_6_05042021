class ModalFactory{
    constructor(type, props){
        if(type === "lightbox"){
            return new Lightbox(props);
        }
        if(type === "contact"){
            return new ContactModal(props);
        }
    }
    display(){
        console.log("ceci est un message provenant de la factory des modales");
    }
}

class Lightbox{
    constructor(props){
        this.id = props.id;
        this.url = props.url;
        this.photographerId = props.photographerId;
    }
    display(){
        //création de la lightbox vide
        const newDiv = document.createElement("div");

        newDiv.classList.add("lightbox-hidden");

        mainElement.appendChild(newDiv);

        return newDiv;
    }
}


/*class ContactModal{
    constructor(props){
        this. ... = props. ...;
        this. ... = props. ...;
    }
    display(){}
}*/