{
    const welcome = () => {
        console.log("Witam wszystkich developerów!");
    }
    const toggleBackground = () => {
        {
            const nextColorName = document.querySelector(".js-nextColorName");
            const body = document.body
            body.classList.toggle("body--grey");
            nextColorName.innerText = body.classList.contains("body--grey") ? "białe" : "szare";
        }
    }

    const init = () => {
        const button = document.querySelector(".js-changeBackgroundButton");
        button.addEventListener("click", toggleBackground);
        welcome();
    };
    init();

}