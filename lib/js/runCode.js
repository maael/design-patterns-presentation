var runCodes = document.getElementsByClassName('runCode');
for(var i=0; i<runCodes.length; i++) {
    runCodes[i].attachEventListener('click', function() {
        var codeBlock = runCodes[i].dataset.code,
            code = document.getElemenetById(codeBlock).textContent;
        eval(code);
    });
}