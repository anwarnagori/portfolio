const text = document.querySelector(".second-text");
const userName = "MUHAMMAD ANWAR";
const developer = "FRONT-END WEB DEVELOPER";

const textLoad = () => {
    setTimeout(() => {
        text.textContent = `${userName}`;
    }, 0)
    setTimeout(() => {
        text.textContent = `${developer}`;
    }, 4000)
}

textLoad();

setInterval(textLoad, 8000);