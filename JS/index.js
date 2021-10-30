(async function createHomepage() {
let myHomePage = new Homepage();
myHomePage.heading();
await myHomePage.getPhotographers();
myHomePage.displayPhotographers();
myHomePage.displayTags();
})();