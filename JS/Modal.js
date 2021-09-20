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
    }

    display(){
        this.modalHeading.innerHTML = `Contactez-moi </br> ${this.name}`;
        this.modalHeading.style.order = "-1";
        this.modalContainer.appendChild(this.modalHeading);
        this.modalContainer.style.display = "flex";
        this.modalContainer.style.flexWrap = "wrap";
        this.modalContainer.setAttribute('aria-hidden', 'false');
        this.focus;
        this.validateform();
    }

    /*focus(){
        // add all the elements inside modal which you want to make focusable
        const  focusableElements = [this.firstName, this.lastName, this.email, this.submit];

        const firstFocusableElement = this.modalContainer.querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal
        const focusableContent = this.modalContainer.querySelectorAll(focusableElements);
        const lastFocusableElement = focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal


        document.addEventListener('keydown', function(e) {
            let isTabPressed = e.key === 'Tab';

            if (!isTabPressed) {
                return;
            }

            if (e.shiftKey) { // if shift key pressed for shift + tab combination
                if (document.activeElement === firstFocusableElement) {
                lastFocusableElement.focus(); // add focus for the last focusable element
                e.preventDefault();
                }
            } else{ // if tab key is pressed
                if (document.activeElement === lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
                    firstFocusableElement.focus(); // add focus for the first focusable element
                    e.preventDefault();
                }
            }
        });

        firstFocusableElement.focus();
    }*/
    
    validateform(){
        this.submit.addEventListener('click', () => {
            this.modalContainer.style.display = "none";
            this.modalContainer.setAttribute('aria-hidden', 'true');
            document.body.setAttribute('aria-hidden', 'false');
            //document.body.tabIndex = 0;
            console.log(this.firstName.value);
            console.log(this.lastName.value);
            console.log(this.email.value);
            this.form.reset();
        });
    }
}