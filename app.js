//---------------------------//
// VARIABLES

const encryptInput = document.getElementById('encrypt-input');
const encryptedResult = document.getElementById('encrypted-result');

const decryptInput = document.getElementById('decrypt-input');
const decryptedResult = document.getElementById('decrypted-result');

//---------------------------//
// EVENT LISTENERS

loadEventListeners();
function loadEventListeners() {
  encryptInput.addEventListener('keyup', encryptText);
  decryptInput.addEventListener('keyup', decryptText);
}

//---------------------------//
// FUNCTIONS

function encryptText(e) {

  let text = encryptInput.value.replace(/[A-Z]/gi, letter => {
    
    return String.fromCharCode((letter <= "Z" ? 90:122) >= (letter=letter.charCodeAt(0) + 13) ? letter:letter-26);
  });
  
  encryptedResult.innerHTML = text;
  
  if (encryptInput.value !== '') {
    document.getElementById('result-encrypt').classList.remove('hidden');
  } else {
    document.getElementById('result-encrypt').classList.add('hidden');
  }

  e.preventDefault();
}

function decryptText(e) {

  let text = decryptInput.value.replace(/[A-Z]/gi, letter => {
    
    return String.fromCharCode((letter <= "Z" ? 90:122) >= (letter=letter.charCodeAt(0) + 13) ? letter:letter-26);
  });

  decryptedResult.innerHTML = text;

  if (decryptInput.value !== '') {
    document.getElementById('result-decrypt').classList.remove('hidden');
  } else {
    document.getElementById('result-decrypt').classList.add('hidden');
  }

  e.preventDefault();
}