new WOW().init();

let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Come back please :(";
});
window.addEventListener("focus", () => {
    document.title = docTitle;
});