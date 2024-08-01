/*
1. Recupero gli elementi dal DOM
2. Definisco le variabili di cui sono a conoscenza: 
    - il prezzo del biglietto è definito in base ai km (0.21 € al km)

    - va applicato uno sconto del 20% per i minorenni

    - va applicato uno sconto del 40% per gli over 65.

3. Chiedo all'utente il numero di chilometri che vuole percorrere
4. Chiedo all'utente l'età del passeggero
5. Calcolo il prezzo totale del viaggio
6. Stampo il messaggio in pagina */

/* Fase preparatoria */
//Recupero gli elementi in pagina
const fullnameElement = document.getElementById('full-name');
console.log(fullnameElement);

const kmElement = document.getElementById('km-to-ride');
console.log(kmElement);

const ageElement = document.getElementById('age');
console.log(ageElement);

const button = document.querySelector('button')
// Preparo gli elementi conosciuti

const discountFirst = 20;
console.log('discountFirst',  discountFirst);

const discountSecond = 40;
console.log('discountSecond', discountSecond);

/* Fase di gestione eventi */
let km;

button.addEventListener ('click', function () {
    // Recupero il valore dell'input del nome e cognome
    const fullname = fullnameElement.value.trim();
    console.log('fullname', fullname);

    //Recupero il valore dei km
    km = kmElement.value;
    console.log('km', km);

    //Recupero il valore dell'età
    const age = ageElement.value;
    console.log('age', age);
    
    //Calcolo il prezzo al km
    const priceToKm = parseInt(0.21 * km).toFixed(2); 
    console.log('priceToKm', priceToKm);
    //Calcolo lo sconto minori
    const discountMinor = priceToKm - ((discountFirst * priceToKm)  /  100);
    console.log('discountMinor', discountMinor);
    //Calcolo lo sconto over-65
    const discountMajor = priceToKm - ((discountSecond * priceToKm)  /  100);
    console.log('discountMajor', discountMajor);
    //Dichiaro la variabile price
    let  price = priceToKm;
    //Applico gli sconti in base alla scelta dell'utente
    if (age === 3) {
        price = discountMajor;
    } else if (age === 1) {
        price = discountMinor;
    }
    console.log('price', price);
})

/* Fase di raccolta dei dati */



/* Fase Lavorazione dei dati */