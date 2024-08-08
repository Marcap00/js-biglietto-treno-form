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
// FORM ELEMENTS
const form = document.querySelector('form');
console.log(form);

const fullnameField = document.getElementById('full-name');
console.log(fullnameField);

const kmElement = document.getElementById('km-to-ride');
console.log(kmElement);

const ageElement = document.getElementById('age');
console.log(ageElement);

const button = document.querySelector('button');
console.log(button);

// TICKET ELEMENTS
const fullnameElement = document.getElementById('result-fullname');
console.log(fullnameElement);

const offer = document.getElementById('offer');
console.log(offer);

const carElement = document.getElementById('car');
console.log(car);

const codeCPElement = document.getElementById('cp-code');
console.log(codeCPElement);

const resultElement = document.getElementById('result-price');
console.log(resultElement);

// Preparo gli elementi conosciuti
const discountFirst = 20;
console.log('discountFirst',  discountFirst);

const discountSecond = 40;
console.log('discountSecond', discountSecond);

/* Fase di gestione eventi */

button.addEventListener ('click', function () {
    /* Fase di raccolta dati */
    // Recupero il valore dell'input del nome e cognome
    const fullname = fullnameField.value.trim();
    console.log('fullname', fullname);

    //Recupero il valore dei km
    const km = parseInt(kmElement.value);
    console.log('km', km);

    //Recupero il valore dell'età
    const age = ageElement.value;
    console.log('age', age);
    
    /* Fase Lavorazione dei dati */
    //Calcolo il prezzo al km
    const priceToKm = parseInt((0.21 * km)); 
    console.log('priceToKm', priceToKm);
    
    //Calcolo lo sconto minori
    const discountMinor = priceToKm - ((discountFirst * priceToKm)  /  100);
    console.log('discountMinor', discountMinor);
    
    //Calcolo lo sconto over-65
    const discountMajor = priceToKm - ((discountSecond * priceToKm)  /  100);
    console.log('discountMajor', discountMajor);
    
    //Dichiaro la variabile price
    let price = parseInt(priceToKm);
    console.log('price', price);
    
    /* Fase di output del prezzo */
    resultElement.innerText = '€ ' + price.toFixed(2);

    //Applico gli sconti in base alla scelta dell'utente
    if (age == 3) {
        price = discountMajor;
        resultElement.innerText = '€ ' + price.toFixed(2);
        offer.innerText = 'Senior';
        
    } else if (age == 1) {
        price = discountMajor;
        resultElement.innerText = '€ ' + price.toFixed(2);
        offer.innerText = 'Junior';
    }

    // Genero un numero di carrozza
    const car = Math.floor(Math.random() * 9) + 1;

    // Genero un codice CP 
    const codeCP = Math.floor(Math.random() * (100000 - 90000)) + 90000;

    /* Fase di output degli elementi nel biglietto */
    fullnameElement.innerText = fullname;
    offer.innerText = 'Standard';
    carElement.innerText = car;
    codeCPElement.innerText = codeCP;

    // Reset del form
    form.reset();
})
