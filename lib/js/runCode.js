var runCodes = document.getElementsByClassName('runCode');
for(var i=0; i<runCodes.length; i++) (function(i) {
    var runCode = runCodes[i];
    runCode.addEventListener('click', function() {
        var codeBlock = runCode.dataset.code,
            code = document.getElementById(codeBlock).textContent;
        document.getElementById('notifications').innerHTML = "";
        eval(code);
    }, true);
})(i);