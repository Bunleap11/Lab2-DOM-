document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("button");
    const resultColor = document.getElementById("result-color");
    const body = document.body;

    function getRandomHexColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    button.addEventListener("click", () => {
        const randomColor = getRandomHexColor(); 

        body.style.backgroundColor = randomColor; 

        resultColor.textContent = randomColor; 
        resultColor.style.color = randomColor; 
    });
});