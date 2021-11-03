class Modal {
    constructor(photographerName) {
        this.name = photographerName;
        this.modalContainer = document.querySelector(".contact-modal");
        this.modalHeading = document.querySelector(".contact-modal__heading");
        this.closeModalBtn = document.querySelector("#modal-btn__close");
        this.firstName = document.querySelector("#first");
        this.lastName = document.querySelector("#last");
        this.email = document.querySelector("#email");
        this.form = document.querySelector("#modal-form");
        this.submit = document.querySelector("#submitdata");
        this.mainElement = document.querySelector("main");
    }

    display() {
        this.modalHeading.innerHTML = `Contactez-moi </br> ${this.name}`;
        this.modalHeading.style.order = "-1";
        this.modalContainer.appendChild(this.modalHeading);
        this.modalContainer.style.display = "flex";
        this.modalContainer.style.flexWrap = "wrap";
        this.closeModalBtn.focus();
        this.captureFocus();
        this.validateform();
    }

    captureFocus() {
        this.submit.addEventListener("keydown", (e) => {
            const keyName = e.key;
            if (keyName === "Tab") {
                e.preventDefault();
                this.closeModalBtn.focus();
            }
        });
    }
    
    validateform() {
        this.submit.addEventListener("click", () => {
        this.submitData();
        });
        this.submit.addEventListener("keydown", (e) => {
            const keyName = e.key;
            if (keyName === "Enter") {
                this.submitData();
            }
        });
    }

    submitData() {
        this.modalContainer.style.display = "none";
        console.log(this.firstName.value);
        console.log(this.lastName.value);
        console.log(this.email.value);
        this.form.reset();
    }
}
