const mainElement = document.createElement("main");
document.body.appendChild(mainElement);

function heading(){
    const mainH1 = document.createElement("h1");
    mainH1.classList.add("home-first-heading");
    mainH1.innerHTML = "Nos photographes";
    mainElement.appendChild(mainH1);
}

heading();

let myHomePage = new Homepage();
myHomePage.getPhotographers();
