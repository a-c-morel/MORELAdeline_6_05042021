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
    }

    checkFirstName(){
        if(!this.firstName.value){
            return false;
        } else{
            return true;
        }
    }

    checkLastName(){
        if(!this.lastName.value){
            return false;
        } else{
            return true;
        }
    }

    checkEmail(){
        if(!this.email.value){
            return false;
        } else{
            return true;
        }
    }
    
    validateform(){
        this.submit.addEventListener('click', (e) => {
            e.preventDefault();
            const checkFirstNameResult = this.checkFirstName();
            const checkLastNameResult = this.checkLastName();
            const checkEmailResult = this.checkEmail();
            if(checkFirstNameResult && checkLastNameResult && checkEmailResult){
                this.modalContainer.style.display = "none";
                console.log(this.firstName.value);
                console.log(this.lastName.value);
                console.log(this.email.value);
            }
        })
    }
}