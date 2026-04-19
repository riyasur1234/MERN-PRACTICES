//toggle button create(change dark to light and light to dark mode)

let mode = document.querySelector("#mode");
let body = document.querySelector("body");
let currentMode = "light";
mode.addEventListener("click", () => {
    console.log("you are trying to change mode")
    if (currentMode === "light") {
        currentMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else {
        currentMode = "light";
         body.classList.add("light");
         body.classList.remove("dark");
    }
    console.log(currentMode);
});