const btnEncrypt = document.querySelector(".encrypt");
const btnDecrypt = document.querySelector(".decrypt");
const textarea = document.querySelector("#text");
const resultDiv = document.querySelector(".side-right");

let originalText = "";
let encryptedText = "";

btnEncrypt.addEventListener("click", () => {
    originalText = textarea.value;

    const keysEncrypt = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    encryptedText = originalText.replace(/[a-zA-Z]/g, (macth) => {
        return keysEncrypt[macth.toLowerCase()] || macth;
    });

    resultDiv.innerHTML = encryptedText;
});

btnDecrypt.addEventListener("click", () => {
    if (encryptedText) {   
        const keysDecrypt = {
            'enter': 'e',
            'imes': 'i',
            'ai': 'a',
            'ober': 'o',
            'ufat': 'u'
        };
        
        const decryptedTexts = encryptedText.replace(/[a-zA-Z]/g, (macth) => {
            return keysDecrypt[macth.toLowerCase()] || macth;
        });
        
        resultDiv.innerHTML = decryptedTexts;
    } else {
        resultDiv.innerHTML = 'Nada para descriptografar. Por favor, crie um texto criptografado primeiro.';
    }
})