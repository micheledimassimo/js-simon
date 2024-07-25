
const a = 1;
const b = 10;
const randomGeneratedNumber = [];
let numberContainer = document.getElementById('num-container');
const sec = 5;

for (let i = 0; i < 5; i++) {
    const num = getRndNumber(a, b);
    randomGeneratedNumber.push(num);

    numberContainer.innerHTML += `
        <span>
            ${num}
        </span>
    `;
    
}
console.log('randomNum', randomGeneratedNumber, typeof randomGeneratedNumber);

setTimeout(function () {
    numberContainer.innerHTML = `
        <h1>
            Inserisci i numeri che hai visto nell'ordine giusto
        </h1>
    `;
}, (sec - 1) * 1000);

setTimeout(function () {
    console.log('Timer finito');

    
    let guessedNumer = 0;

    for (let i = 0; i < randomGeneratedNumber.length; i++) {
        const userNumber = parseInt(prompt(`Inserisci il ${i + 1}° numero:`));
        console.log('userNumber', userNumber, typeof userNumber);

        if (userNumber == randomGeneratedNumber[i]) {
            guessedNumer++;
        }
    }
    alert(`Hai indovinato ${guessedNumer} numeri`);    
}, sec * 1000);

//FUNIZONi

function getRndNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }