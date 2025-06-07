/*
# Repo: ex-js-functions-snack-2

## 🏆 Snack 1 - Somma due numeri
Crea una funzione che somma due numeri.

- Crea una funzione dichiarativa chiamata `somma` che accetta due numeri e restituisce la loro somma.
- Poi, definisci la stessa funzione `somma` come **funzione anonima** assegnata a una variabile.
- Infine, riscrivi la funzione `somma` con la **sintassi delle arrow functions**.

---
*/

/* somma(3, 2)

function somma(num1, num2) {
  return num1+num2

}

const somma = function (num1, num2) {
 return num1+num2
}

const somma = (num1, num2) =>(num1 + num2);

somma(3, 2) */


/*

## 🏆 Snack 2 - Calcola il quadrato
Crea una **arrow function** che calcola il quadrato di un numero.

- Definisci una funzione chiamata `quadrato` che accetta un numero e restituisce il suo quadrato in una sola riga.
*/

const quadrato = num => num ** 2

console.log(quadrato(3))

/*
---

## 🏆 Snack 3 - Funzione eseguiOperazione
Crea una funzione `eseguiOperazione`.

- Accetta tre parametri: due numeri e una funzione operatore (callback).
- La funzione esegue l'operazione fornita sui due numeri.

### Esempio d’uso:
```js
const somma = (a, b) => a + b;
const moltiplica = (a, b) => a * b;

const eseguiOperazione = (a, b, operazione) => operazione(a, b);

console.log(eseguiOperazione(3, 4, somma)); // 7
console.log(eseguiOperazione(3, 4, moltiplica)); // 12
```
*/

const somma = (a, b) => (a + b)
const moltiplica = (a, b) => (a * b)

const eseguiOperazione = (a, b, operazione) => operazione(a, b)
console.log(eseguiOperazione(3, 2, somma));
console.log(eseguiOperazione(3, 2, moltiplica));


/*
---

## 🏆 Snack 4 - Generatore creaTimer
Crea un generatore di funzioni `creaTimer`.

- Accetta un tempo (in ms) e restituisce una nuova funzione che avvia un `setTimeout` per stampare **"Tempo scaduto!"**.

*/

// function creaTimer(tempo) {
//   setTimeout(() => {
//     console.log('Tempo scaduto');

//   }, tempo)
// }

// creaTimer(5000)



/*
---

## 🏆 Snack 5 - stampaOgniSecondo
Crea una funzione `stampaOgniSecondo` con `setInterval`.

- Accetta un messaggio e lo stampa ogni secondo.
- ⚠️ Nota: Questa funzione crea un loop infinito. Usa `clearInterval()` per interromperlo.

---
*/

/* const stampaOgniSecondo = (message) => {
  const interval = setInterval(() => {
    console.log(message);
  }, 1000)

  setTimeout(() => {
    clearInterval(interval)
  }, 5000)

}

stampaOgniSecondo('Ciao') */




/*

## 🏆 Snack 6 - Contatore automatico
Crea un contatore automatico con `setInterval`.

- Definisci `creaContatoreAutomatico` che accetta un intervallo di tempo e restituisce una funzione che avvia un contatore incrementale.

---
*/

function creaContatoreAutomatico(interval) {
  let count = 0

  return function () {
    setInterval(() => {
      count++
      console.log(count);

    }, interval)

  }
}
const ogniSecondo = creaContatoreAutomatico(1000)



/*

## 🏆 Snack 7 - Timer con stop
Crea una funzione che ferma un timer dopo un certo tempo.

- `eseguiEferma` accetta un messaggio, un tempo di avvio e uno di stop.
- Il messaggio viene stampato a intervalli regolari, ma si ferma dopo il tempo di stop.
*/

function eseguiEferma(message, start, stop) {
  const stampa = setInterval(() => {
    console.log(message);

  }, start * 1000)

  setTimeout(() => {
    clearInterval(stampa)
  }, stop * 1000)
}


/*
---

## 🎯 ,Snack 8 (Bonus) - Conto alla rovescia
Crea una funzione `contoAllaRovescia`.

- Accetta un numero `n` e stampa il conto da `n` a `0`, con intervalli di 1 secondo.
- Alla fine stampa **"Tempo scaduto!"**.

### Esempio:
```js
contoAllaRovescia(5)
```

### Output:
```
5
4
3
2
1
Tempo scaduto!
```

---
*/

function contoAllaRovescia(n) {
  let count = n
  console.log(count);

  const countdown =
    setInterval(() => {
      if (count > 0) {
        console.log(count);
        count--
      } else {
        console.log('Tempo scaduto!');
        clearInterval(countdown)
      }

    }, 1000)

}

contoAllaRovescia(10)

/*

## 🎯 Snack 9 (Bonus) - Sequenza con ritardi
Crea una funzione `sequenzaOperazioni`.

- Accetta un array di funzioni e un tempo di intervallo.
- Esegue ogni operazione in sequenza con un ritardo uguale al tempo specificato.

### Esempio:
```js
sequenzaOperazioni([
  () => console.log("Operazione 1"),
  () => console.log("Operazione 2"),
  () => console.log("Operazione 3")
], 2000);
```

---
*/

function sequenzaOperazioni(funzioni, tempo) {
  funzioni.forEach((funzione, index) => {
    setTimeout(() => {
      funzione()
    }, tempo * index)
  })
}

sequenzaOperazioni([
  () => console.log("Operazione 1"),
  () => console.log("Operazione 2"),
  () => console.log("Operazione 3")
], 2000);






/*
## 🎯 Snack 10 (Bonus) - Throttler
Crea una funzione `creaThrottler`.

- Accetta una funzione e un tempo `limite`.
- Restituisce una nuova funzione che esegue l'originale **al massimo una volta ogni n millisecondi**.

### Esempio:
```js
const throttledLog = creaThrottler(() => console.log("Eseguito!"), 2000);

throttledLog(); // ✅ "Eseguito!"
throttledLog(); // ❌ Ignorato
setTimeout(throttledLog, 2500); // ✅ "Eseguito!" dopo 2.5 secondi
```

*/