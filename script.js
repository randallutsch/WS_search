(function(){
    var tbLetters = document.getElementById("tbLetters");
    var tbWordSize = document.getElementById("tbWordSize");
    var btnSubmit = document.getElementById("btnSubmit");
    var resultsDiv = document.getElementById("results");

    tbWordSize.value = 3;

    var strWords = loadWords();
    window.arrWords = strWords.split(" ");

    btnSubmit.onclick = buttonClick();
    
})();

function loadWords(){
    var filepath = "words.txt";
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filepath, false);
    xmlhttp.send();
    if(xmlhttp.status==200){
        result = xmlhttp.responseText;
    }

    return result;
}

function buttonClick(){
    
}