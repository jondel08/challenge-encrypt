function Encrypt(){
    const texValue = document.getElementById('txtEncripta').value.toString();
    document.getElementById('txtEncriptado').value = EncryptText(texValue);
}

function Decrypt(){
    const texValue = document.getElementById('txtEncripta').value.toString();
    document.getElementById('txtEncriptado').value = DecryptText(texValue);
}

function EncryptText(text){

    var encryptingRules = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    var encryptedText = '';

    for (var i = 0; i < text.length; i++) {
        var caracter = text[i];
        if (encryptingRules[caracter]) {
            encryptedText += encryptingRules[caracter];
        } else {
            encryptedText += caracter;
        }
    }

    return encryptedText;
}

function DecryptText(encryptedText){

    var decryptingRules = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    var decryptedWords = Object.keys(decryptingRules);
    var decryptedText = encryptedText;

    decryptedWords.forEach(function(word) {
        var regex = new RegExp(word, 'g');
        decryptedText = decryptedText.replace(regex, decryptingRules[word]);
    });

    return decryptedText;
}


document.addEventListener('DOMContentLoaded', function() {
    var textarea = document.getElementById('txtEncripta');

    textarea.addEventListener('input', function() {
        var value = textarea.value;
        textarea.value = removeInvalidCharacters(value);
    });

    var validateButton = document.getElementById('presentacion__enlaces');
    validateButton.addEventListener('click', function() {
        validateTextarea();
    });
});

function removeInvalidCharacters(value) {
    // Expresión regular para permitir solo letras minúsculas y espacios
    var regex = /[^a-z\s]/g;
    return value.replace(regex, '');
}

function validateTextarea() {
    var textarea = document.getElementById('txtEncripta');
    var errorMessage = document.getElementById('error-message');
    var value = textarea.value;

    if (!isValidText(value)) {
        alert('El texto no puede ser nulo, y solo puede contener minúsculas sin acentos ni caracteres especiales.');
        return false;
    } else {
        return true;
    }
}

function isValidText(value) {
    // Expresión regular para validar letras minúsculas sin acentos ni caracteres especiales
    var regex = /^[a-z\s]+$/;
    return regex.test(value);
}

function Clean(){
    document.getElementById('txtEncripta').value = '';
    document.getElementById('txtEncriptado').value = '';
}


function CopyTo(){

    const texToCopy = document.getElementById('txtEncriptado').value.toString();
    document.getElementById('txtEncripta').value = texToCopy;
    document.getElementById('txtEncriptado').value = '';
}