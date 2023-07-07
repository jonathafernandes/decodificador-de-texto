const btnEncrypt = document.querySelector(".encrypt");
const textarea = document.querySelector("#text");
const result = document.querySelector(".side-right");
// const secondKey = "i"; 
// const thirdkey = "a";
// const fourthkey = "o";
// const fifthkey = "u";

btnEncrypt.addEventListener("click", function () {
    const text = textarea.value;
    const firstKey = "e";
    let firstKeyWord = "enter";

    if (text.includes(firstKey)) {
        let firstKeyWord = text.replace(new RegExp(firstKey, 'g'), firstKeyWord);
        result.innerHTML = firstKeyWord;
    }
    // if (text.includes(secondKey)) {
    //     result.innerHTML = text + "imes";
    // }
});