const mainElement = document.createElement("main");
const headerElement = document.createElement("header");
document.body.appendChild(headerElement);
document.body.appendChild(mainElement);

let logo = new Logo("index.html", "images/logo.png");
logo.display();

let tags = [];