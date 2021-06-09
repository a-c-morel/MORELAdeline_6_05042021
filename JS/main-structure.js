//Creation du header et de main
const mainElement = document.createElement("main");
const headerElement = document.createElement("header");
document.body.appendChild(headerElement);
document.body.appendChild(mainElement);

//Creation du logo
const headerLink = document.createElement("a");
headerLink.setAttribute("href", "index.html");
headerElement.appendChild(headerLink);
const logoImg = document.createElement("img");
logoImg.classList.add("logo");
logoImg.setAttribute("src", "images/logo.png");
logoImg.setAttribute("alt", "");
headerLink.appendChild(logoImg);