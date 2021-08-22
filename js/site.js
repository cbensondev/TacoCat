"use strict";
//Controller Function
function getValue() {

    //hide the alert pane
    document.getElementById("alert").classList.add("invisible");

    //get input value from screen
    let inputText = document.getElementById("phraseInput").value;

    //strip text down
    let strippedText = stripText(inputText);

    //run the palindrome checker
    let palindromeText = palindromeMe(strippedText);

    let tacoCat = false;
    if (strippedText === palindromeText) {
        tacoCat = true;
    };

    //display the result
    displayResult(tacoCat, palindromeText);
    
};

//Strip it down... Remove spaces, special characters, convert to lowercase.
function stripText(inputText) {

    let result = inputText.replace(/\s+/g, "");
    result = result.replace(/[^a-zA-Z ]/g, "");
    result = result.toLowerCase();

    return result;    
};

function palindromeMe(inputText) {

    let result = [];

    for (let index = inputText.length-1; index >= 0; index--) {
        result += inputText[index];
    }

    return result;
};

function displayResult(headerCheck, inputText) {
    
    if (headerCheck) {
        document.getElementById("alertHeader").innerText = "Well Done! You entered a palindrome";
    } else {
        document.getElementById("alertHeader").innerText = "Nope! You did not enter a palindrome";
    };

    document.getElementById("message").innerText = inputText;

    document.getElementById("alert").classList.remove("invisible");
}