class Modal{
    constructor(photographerName){
        this.name = photographerName;
        this.modalContainer = document.querySelector(".contact-modal");
        this.modalHeading = document.querySelector(".contact-modal__heading");
        this.firstName = document.querySelector("#first");
        this.lastName = document.querySelector("#last");
        this.email = document.querySelector("#email");
        this.submit = document.querySelector("#submitdata");
    }

    display(){
        this.modalHeading.innerHTML = `Contactez-moi ${this.name}`;
        
        this.modalContainer.appendChild(this.modalHeading);
        this.modalContainer.style.display = "flex";
        this.validateform();
    }
    
    validateform(){
        this.submit.addEventListener('click', () => {
                this.modalContainer.style.display = "none";
                console.log(this.firstName.value);
                console.log(this.lastName.value);
                console.log(this.email.value);
        });
    }
}