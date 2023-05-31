let color1 = document.querySelector("#color1")
let color2 = document.querySelector("#color2")
let body = document.getElementById("gradient")
let randomButton = document.getElementById("random-btn")

function colorFormats(color) {
    let tc = tinycolor(color)
    return {
        hex: tc.toHexString(),
        rgb: tc.toRgbString(),
    }
}

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    let color1Formats = colorFormats(color1.value)
    let color2Formats = colorFormats(color2.value)
    setDisplay("color1Display", color1Formats)
    setDisplay("color2Display", color2Formats)
}

function setDisplay(displayId, colorFormats) {
    let display = document.getElementById(displayId);
    display.innerHTML = `
        <span class="label">RGB:</span> <h3>${colorFormats.rgb}</h3>
        <span class="label">HEX:</span> <h3>${colorFormats.hex}</h3>
    `;
}

color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)


function setButtonGradient() {
    randomButton.style.background = `linear-gradient(170.5deg, ${color1.value} 50%, ${color2.value} 50%)`;
}

color1.addEventListener("input", function () {
    setGradient();
    setButtonGradient();
})

color2.addEventListener("input", function () {
    setGradient();
    setButtonGradient();
})

randomButton.addEventListener("click", function () {
    let randomColor1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
    let randomColor2 = "#" + Math.floor(Math.random() * 16777215).toString(16);
    color1.value = randomColor1;
    color2.value = randomColor2;
    setGradient();
    setButtonGradient();
})

setGradient();
setButtonGradient();

