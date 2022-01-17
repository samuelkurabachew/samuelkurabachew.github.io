window.onload = function () {
    document.getElementById("decorate").onclick = buttonFunctions;
    document.getElementById("checkbox").onclick = checkBoxFunctions;
    document.getElementById("igpayAtinlayButton").onclick = igpayAtinlayFunctions;
    document.getElementById("malkovichButton").onclick = malkovichFunctions;
}

function buttonFunctions(){
    setInterval(buttonFunctions, 500);
    var x = document.getElementById("textArea");

    var style = window.getComputedStyle(x, null).getPropertyValue('font-size');
    var fontSize = parseInt(style);
    fontSize += 2;
    x.style.fontSize = fontSize + "pt";
}

function checkBoxFunctions() {

    let bling = document.getElementById("checkbox");
    var y = document.getElementById("textField");
    var z = document.getElementById("textArea");

    if (bling.checked) {
        z.style.color = "green";
        z.style.fontWeight = "bold";
        z.style.textDecoration = "underline";
        document.body.style.backgroundImage = "url('./images/hundred_dollar_bill.jpeg')";
    } else {
        z.style.color = "black";
        z.style.fontWeight = "400";
        z.textDecoration = "none";
        document.body.style.backgroundImage = "none";
    }
}

function igpayAtinlayFunctions() {
    var text = document.getElementById("textArea");
    text.textContent = translatePigLatin(text.textContent);

}
function malkovichFunctions() {
    var text = document.getElementById("textArea");
    text.textContent = Malkovitch(text.textContent);
}

function translatePigLatin(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newStr = "";

    if (vowels.indexOf(str[0]) > -1) {
        newStr = str + "way";
        return newStr;
    } else {
        let firstMatch = str.match(/[aeiou]/g) || 0;
        let vowel = str.indexOf(firstMatch[0]);
        newStr = str.substring(vowel) + str.substring(0, vowel) + "ay";
        return newStr;
    }
}

function Malkovitch(str) {
    let strArr = str.split(' ');
    let pigLatin = [];

    
    for (let word of strArr) {
        if (word.length >= 5) {
            pigLatin.push("Malkovitch")
        } else {
            pigLatin.push(word);
        }
    }
    return pigLatin.join(" ");
}
