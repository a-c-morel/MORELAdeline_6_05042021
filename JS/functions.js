function heading(){
    const mainH1 = document.createElement("h1");
    mainH1.classList.add("home-first-heading");
    mainH1.innerHTML = "Nos photographes";
    mainElement.appendChild(mainH1);
}

function filtrer(tag){
    let cards = document.querySelectorAll(".card");
    for (let card of cards){
        card.style.display = "block";
        if(!card.innerText.includes(tag)){
            card.style.display = "none";
        }
    }
}