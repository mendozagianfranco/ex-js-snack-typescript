# Esercizi TypeScript - Snack

## Descrizione
Questa repository contiene esercizi base di **TypeScript** pensati per imparare le principali funzionalità del linguaggio, come i tipi, i tipi unione, gli oggetti complessi, le interfacce e i tipi generici.

---

## Obiettivi
- Comprendere come usare i tipi primitivi (`string`, `number`, `boolean`) e il tipo `unknown`.
- Imparare a discriminare i tipi con `typeof`, `Array.isArray` e `instanceof`.
- Creare tipi complessi tramite **type alias** e combinazioni (`&`, unione di tipi).
- Lavorare con oggetti e array tipizzati.
- Usare proprietà `readonly` e tipi letterali per valori predefiniti.

---

## Snack inclusi

### Snack 1: Discriminazione dei tipi
- Variabile `data` di tipo `unknown`.
- Controllo del tipo di `data` per gestire stringhe, numeri, booleani, null, array e Promise.
- Stampa valori elaborati in console a seconda del tipo rilevato.

### Snack 2: Tipizzazione di oggetti
- Creazione di un tipo `Dipendente` con proprietà tipizzate.
- Uso di tipi letterali (`'m' | 'f'`, `'indeterminato' | 'determinato' | 'freelance'`) e proprietà `readonly`.
- Rappresenta un dipendente con informazioni di base e anni di servizio.

### Snack 3: Tipi complessi e combinazioni
- Tipi `Developer` e `ProjectManager` che estendono `Dipendente`.
- Creazione di un tipo `Team` contenente un `ProjectManager` e più `Developer`.
- Gestione di proprietà opzionali (`?`) e array tipizzati.

---

## Tecnologie e concetti utilizzati
- **TypeScript**
- Tipi primitivi e tipo `unknown`
- Type alias e combinazioni (`&`)
- Proprietà opzionali e readonly
- Tipi letterali
- Array e tuple tipizzate
- Discriminazione dei tipi con `typeof`, `instanceof`, `Array.isArray`

---

## Scopo della repository
Esercizi pratici per familiarizzare con la tipizzazione in TypeScript, per consolidare la comprensione di oggetti, array, tipi complessi e controllo dei tipi in fase di compilazione.
