var body = document.getElementsByTagName('body')[0];
body .addEventListener("keyup", function(e) {
    if(e.keyCode===18){
        var iframe = document.getElementsByTagName('iframe')[0];
        iframe.style.opacity = ((iframe.style.opacity === '0' || iframe.style.opacity === '') ? 1 : 0);
    }
}, true);