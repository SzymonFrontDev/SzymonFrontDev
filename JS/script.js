{
    const welcome = () =>
        console.log("HELLO!");

    const ToggleBackground = () => {
        const theme = document.querySelector(".js-theme");
        const body = document.querySelector(".js-body");

        body.classList.toggle("dark");
        theme.innerText = body.classList.contains("dark ") ? "jasny" : "ciemny";

    }



    const init = () => {
        const button = document.querySelector(".js-button");
        button.addEventListener("click", ToggleBackground)
        welcome();
    }
    init();

}