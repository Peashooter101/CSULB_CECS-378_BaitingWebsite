function formProcess(event) {
    event.preventDefault();
    
    var messageContents = "";
    for (let i = 0; i < form.elements.length; i++) {
        messageContents += form.elements[i].name + ":" + form.elements[i].value + "     -|-     ";
    }

    var templateParams = {
        message: messageContents
    };

    emailjs.send('service_0evt78l', 'template_xdsrpln', templateParams);
}

const form = document.getElementById('user-information');
form.addEventListener('submit', formProcess);