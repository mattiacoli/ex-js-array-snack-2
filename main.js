const books = [
  {
    title: "React Billionaire",
    pages: 250,
    author: {
      name: 'Alice',
      age: 35
    },
    available: false,
    price: '101€',
    tags: ['advanced', 'js', 'react', 'senior']
  },
  {
    title: "Advanced JS",
    pages: 500,
    author: {
      name: 'Bob',
      age: 20
    },
    available: true,
    price: '25€',
    tags: ['advanced', 'js', 'mid-senior']
  },
  {
    title: "CSS Secrets",
    pages: 320,
    author: {
      name: 'Alice',
      age: 17
    },
    available: true,
    price: '8€',
    tags: ['html', 'css', 'junior']
  },
  {
    title: "HTML Mastery",
    pages: 200,
    author: {
      name: 'Charlie',
      age: 50
    },
    available: false,
    price: '48€',
    tags: ['html', 'advanced', 'junior', 'mid-senior']
  },
];


// Snack 1 - Filtra e Modifica ------------------------------------------------------------------------------------------------

// Crea una funzione che somma due numeri.
const sum = (a, b) => a + b

// Crea un array (longBooks) con i libri che hanno più di 300 pagine;
const longBooks = books.filter(b => b.pages > 300)
console.log('Snack 1: \n' + 'libri con +300 pagine : ', longBooks);

// Creare un array (longBooksTitles) che contiene solo i titoli dei libri contenuti in longBooks.
const longBooksTitles = longBooks.map(b => b.title);
console.log('Snack 1: \n' + 'array di titoli di libri con più pagine : \n', longBooksTitles)

// Stampa in console ogni titolo nella console
longBooksTitles.forEach(t => console.log('Snack 1: \n' + 'Singolo titolo di libri con più pagine : \n', t))

// Snack 2 - il primo libro scontato ----------------------------------------------------------------------------------------------

// Creare un array (availableBooks) che contiene tutti i libri disponibili.
const availableBooks = books.filter(b => b.available === true)
console.log('Snack 2: \n' + 'libri disponibili : ', availableBooks);

// Crea un array (discountedBooks) con gli availableBooks, ciascuno con il prezzo scontato del 20% (mantieni lo stesso formato e arrotonda al centesimo)
const discountedBooks = availableBooks.map(b => {

  return { ...b, price: parseFloat(b.price) * 0.8 }
})

console.log('Snack 2: \n' + 'libri scontati 20% : ', discountedBooks);


// Salva in una variabile (fullPricedBook) il primo elemento di discountedBooks che ha un prezzo intero (senza centesimi)
const fullPricedBook = discountedBooks.find(b => Number.isInteger(b.price))
console.log('Snack 2: \n' + 'libro con prezzo non decimale :', fullPricedBook);


// Snack 3 - Ordinare gli Autori -----------------------------------------------------------------------------------------------------

// Creare un array (authors) che contiene gli autori dei libri.
const author = books.map(b => b.author)
console.log('Snack 3: \n' + 'autori libri: ', author);

// Crea una variabile booleana (areAuthorsAdults) per verificare se gli autori sono tutti maggiorenni.
const areAuthorsAdult = author.every(a => a.age >= 18)
console.log('Snack 3: \n' + 'sono tutti maggiorenni :', areAuthorsAdult);

// Ordina l’array authors in base all’età, senza creare un nuovo array.
// (se areAuthorsAdult è true, ordina in ordine crescente, altrimenti in ordine decrescente)
author.sort((a, b) => {
  if (areAuthorsAdult) {
    return a.age - b.age
  }

  return b.age - a.age

})

/* Versione compatta
  author.sort((a, b)=>(a.age - b.age) * (areAuthorsAdult ? 1 : -1))
*/


// Snack 4 - Calcola età media -----------------------------------------------------------------------------------------------------


// Creare un array (ages) che contiene le età degli autori dei libri.
const ages = author.map(a => a.age)
console.log('Snack 4: \n' + 'età in ordine decrescente : ', ages);

// Calcola la somma delle età (agesSum) usando reduce.
const agesSum = ages.reduce((acc, age) => acc + age, 0)
console.log('Snack 4: \n' + 'somma delle età : ', agesSum);

// Stampa in console l’età media degli autori dei libri.
const media = agesSum / ages.length
console.log('Snack 4: \n' + 'età media :', media);

/*
  Snack 5 (Bonus)
  Usando la l'API http://localhost:3333/book/{id} usa la combinazione di .map() e Promise.all(), per creare una funzione (getBooks) che a partire da un array di id (ids), ritorna una promise che risolve un array di libri (books).
  Testala con l’array [2, 13, 7, 21, 19] .
*/


async function fetchJson(url) {
  const response = await fetch(url)
  const data = await response.json()
  return data
}


async function getBooks(arr) {
  // recuperare i libri da id
  const promises = arr.map(id => fetchJson(`http://localhost:3333/books/${id}`))

  // ritorna una promise che risolve un array di libri
  return data = await Promise.all(promises)
}

const booksIds = [2, 13, 7, 21, 19];

/*
  getBooks(booksIds)
  .then(data => console.log(data))
  .catch(error => console.error(error))
*/



(async () => {
  const books = await getBooks(booksIds)
  console.log()
  console.log('Bonus Snack 5: \n' + `elenco libri con id [${booksIds}] :`, books);
})();


/*
  Snack 6 (Bonus)
  Crea una variabile booleana (areThereAvailableBooks) per verificare se c’è almeno un libro disponibile.
  Crea un array (booksByPrice) con gli elementi di books ordinati in base al prezzo (crescente).
  Ordina l’array booksByPricein base alla disponibilità (prima quelli disponibili), senza creare un nuovo array.

*/

const areThereAvailableBooks = books.some(b => b.available === true)
console.log('Bonus Snack 6: \n' + `ci sono libri disponibili: ${areThereAvailableBooks}`)

const booksByPrice = books.sort((a, b) => {
  const aPrice = parseFloat(a.price)
  const bPrice = parseFloat(b.price)
  return aPrice - bPrice
})
console.log('Bonus Snack 6: \n' + 'libri con prezzo crescente:', booksByPrice);

booksByPrice.sort((a, b) => {
  const availableA = Number(a.available)
  const availableB = Number(b.available)
  return availableB - availableA

})

// booksByPrice.sort((a,b)=> Number(b.available) - Number(a.available))

console.log('Bonus Snack 6: \n' + 'libri con prezzo crescente ordinati per disponibilità:\n', booksByPrice)

/*

  Snack 7 (Bonus) - Analizza i tag
  Usa reduce per creare un oggetto (tagCounts) che conta quante volte ogni tag viene usato tra i libri.

*/

const tagCounts = books.reduce((acc, b) => {

  b.tags.forEach(tag => {
    acc[tag] = (acc[tag] || 0) + 1
  })


  return acc

}, {})

console.log('Bonus Snack 7: \n' + 'tag presenti e loro conteggio', tagCounts);




