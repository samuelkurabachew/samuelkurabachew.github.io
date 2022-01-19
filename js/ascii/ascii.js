'esversion: 6';

var textArea, startButton, stopButton, animationSelector, sizeSelector, setTimeOutID, turboChecker;
var animationSpeed = 250;

var initVariables = () => {
    textArea = document.getElementById("textArea");
    startButton = document.getElementById("startButton");
    stopButton = document.getElementById("stopButton");
    animationSelector = document.getElementById("animationSelector");
    sizeSelector = document.getElementById("sizeSelector");
    turboChecker = document.getElementById("turbo");

    stopButton.disabled = true;
};

window.onload = () => {
    initVariables();

    animationSelector.onchange = () => {
        textArea.value = ANIMATIONS[animationSelector.value];
    };

    sizeSelector.onchange = () => {
        textArea.style.fontSize = sizeSelector.value;
    };

    turboChecker.onchange = () => {
        animationSpeed = turboChecker.checked ? 50 : 250;
    };

    startButton.onclick = () => {
        stopButton.disabled = false;
        startButton.disabled = true;
        animationSelector.disabled = true;

        let texts = ANIMATIONS[animationSelector.value].split("=====\n");
        let idx = 0;

        var displayFunction = function () {
            textArea.value = texts[idx];
            idx = (idx + 1) % texts.length;
            setTimeOutID = setTimeout(displayFunction, animationSpeed);
        };
        setTimeOutID = setTimeout(displayFunction, animationSpeed);
    };

    stopButton.onclick = () => {
        stopButton.disabled = true;
        startButton.disabled = false;
        animationSelector.disabled = false;
        clearTimeout(setTimeOutID);
        textArea.value = ANIMATIONS[animationSelector.value];
    };
};