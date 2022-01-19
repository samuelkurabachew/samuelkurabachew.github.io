// ------------ Task 1 ------------
var rudyTimer = (() => {
    return () => {
        timer = null;
        if (timer === null) {
            timer = setInterval(rudy, 1000);
        } else {
            clearInterval(timer);
            timer = null;
        }
    }
})();

function rudy() { 
    document.getElementById("output").innerHTML += "Rudy!";
}

// ------------ Task 1 ------------

var textArea, accountNameInput, depositInput, createNewAccountButton;
var accountInfoList = [];

var createAccount = (accountName, deposit) => {
    return {
        'accountName': accountName,
        'deposit': deposit,
        'toString': () => {
            return `Account name: ${accountName}  Balance: ${deposit}`;
        }
    }
};

var createNewAccountButtonHandler = () => {
    let newAccount = createAccount(
        accountNameInput.value,
        depositInput.value
    );

    textArea.value = textArea.value +
        (accountInfoList.length === 0 ? "" : "\n") +
        newAccount.toString();

    accountInfoList.push(newAccount);
};

window.onload = () => {

    accountNameInput = document.getElementById("accountName");
    depositInput = document.getElementById("deposit");
    textArea = document.getElementById("textArea");
    createNewAccountButton = document.getElementById("createNewAccountButton");

    createNewAccountButton.onclick = createNewAccountButtonHandler;
};
