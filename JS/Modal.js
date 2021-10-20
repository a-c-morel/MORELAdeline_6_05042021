class Modal{
    constructor(photographerName){
        this.name = photographerName;
        this.modalContainer = document.querySelector(".contact-modal");
        this.modalHeading = document.querySelector(".contact-modal__heading");
        this.closeModalBtn = document.querySelector("#lightbox-btn__close");
        this.firstName = document.querySelector("#first");
        this.lastName = document.querySelector("#last");
        this.email = document.querySelector("#email");
        this.form = document.querySelector("#modal-form");
        this.submit = document.querySelector("#submitdata");
        this.mainElement = document.querySelector("main");
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
        this.submitData();
        });
        this.submit.addEventListener('keydown', (event) => {
            const keyName = event.key;
            if (keyName === 'Enter') {
                this.submitData();
            }
        });
    }

    submitData(){
        this.modalContainer.style.display = "none";
        console.log(this.firstName.value);
        console.log(this.lastName.value);
        console.log(this.email.value);
        this.form.reset();
    }
}