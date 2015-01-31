var runCodes = document.getElementsByClassName('runCode');
for(var i=0; i<runCodes.length; i++) {
    var runCode = runCodes[i];
    console.log(runCode);
    runCode.addEventListener('click', function() {
        var codeBlock = runCode.dataset.code,
            code = document.getElementById(codeBlock).textContent;
        eval(code);
    }, true);
}