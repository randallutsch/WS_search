(function(){
    var tbWordSize = document.getElementById("tbWordSize");
    var btnSubmit = document.getElementById("btnSubmit");

    tbWordSize.value = 3;

    var strWords = loadWords();
    window.arrWords = strWords.split("\n");

    btnSubmit.onclick = buttonClick;
    
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
    var arrWords = window.arrWords;

    var resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";
    var tbLetters = document.getElementById("tbLetters");
    var tbWordSize = document.getElementById("tbWordSize");

    arrWords.forEach(element => {
        if(element.length - 1 == tbWordSize.value)
            if(wordCanBeMade(element, tbLetters.value))
                resultsDiv.innerHTML += element+'\n';
    });

    tbLetters.focus();
    tbLetters.select();
}

function wordCanBeMade(word, letters){
    var wordcopy = word.replace('\r','').toUpperCase();
    letters.toUpperCase().split('').forEach(element => {
        wordcopy = wordcopy.replace(element,"");
    });
    if (wordcopy == "")
        return true;
    return false;
}