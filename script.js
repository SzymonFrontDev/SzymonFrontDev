let button = document.querySelector(".js-button");
let body = document.querySelector(".js-body");
let theme = document.querySelector(".js-theme");


button.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        theme.innerText = "jasny";
    } else {
        theme.innerText = "ciemny";
    }
});


