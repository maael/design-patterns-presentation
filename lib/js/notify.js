function notify(text, assertion) {;
    var notificationArea = document.getElementById('notifications'),
        notificationEle = document.createElement('div'),
        notificationText = document.createTextNode(text),
        assertionEle = document.createElement('div'),
        assertionIcon = document.createElement('i');

    notificationEle.className = 'notification';
    notificationEle.appendChild(notificationText);
    if(typeof assertion === 'boolean') {
        assertionEle.className = 'assertion';
        assertionIcon.className = 'icon-'+((assertion) ? 'ok' : 'cancel');
        assertionEle.appendChild(assertionIcon);
        notificationEle.appendChild(assertionEle);
    }

    notificationArea.appendChild(notificationEle);
}
Reveal.addEventListener( 'slidechanged', function( event ) {
    notificationArea = document.getElementById('notifications').innerHTML = "";
});