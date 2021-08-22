
var btnTranslate = document.querySelector("#btn-translate");

var textInput = document.querySelector("#txt-area");

var outputDiv = document.querySelector("#txt-output");

var serverUrl = "https://api.funtranslations.com/translate/minion.json"

function getTranslationUrl(text) {
    return serverUrl + "?" + "text=" + text 
}

function errorHandler(error) {
    console.log("error occured", error)
    alert("problem with server, try again after sometime!")
}

function clickEventHandler() {
//    outputDiv.innerText = "input is:  " + textArea.value;
var inputText = textInput.value

fetch(getTranslationUrl(inputText))
.then(response => response.json())
.then(json => { 
    var translatedText = json.contents.translated;
    outputDiv.innerText = translatedText;


})
.catch(errorHandler)
}


btnTranslate.addEventListener("click", clickEventHandler);


