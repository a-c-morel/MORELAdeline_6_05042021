class Modal{
    constructor(photographerName){
        this.name = photographerName;
        this.modalContainer = document.querySelector(".contact-modal");
        this.modalHeading = document.querySelector(".contact-modal__heading");
        this.closeModalBtn = document.querySelector("#lightbox-btn__close");
        this.firstName = document.querySelector("#first");
        this.lastName = document.querySelector("#last");
        this.email = document.querySelector("#email");
        this.submit = document.querySelector("#submitdata");
    }

    display(){
        this.modalHeading.innerHTML = `Contactez-moi </br> ${this.name}`;
        this.modalHeading.style.order = "-1";
        this.modalContainer.appendChild(this.modalHeading);
        this.modalContainer.style.display = "flex";
        this.modalContainer.style.flexWrap = "wrap";
        this.validateform();
    }
    
    validateform(){
        this.submit.addEventListener('click', () => {
                this.modalContainer.style.display = "none";
                console.log(this.firstName.value);
                console.log(this.lastName.value);
                console.log(this.email.value);
                //essayer de voir pourquoi ça me les log x3
        });
    }
}