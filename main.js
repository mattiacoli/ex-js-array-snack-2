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
console.log(longBooks);

// Creare un array (longBooksTitles) che contiene solo i titoli dei libri contenuti in longBooks.
const longBooksTitles = longBooks.map(b => b.title);

// Stampa in console ogni titolo nella console
console.log(longBooksTitles)


// Snack 2 - il primo libro scontato ----------------------------------------------------------------------------------------------

// Creare un array (availableBooks) che contiene tutti i libri disponibili.
const availableBooks = books.filter(b => b.available === true)
console.log(availableBooks);

// Crea un array (discountedBooks) con gli availableBooks, ciascuno con il prezzo scontato del 20% (mantieni lo stesso formato e arrotonda al centesimo)
const discountedBooks = availableBooks.map(b => {

  return parseFloat(b.price) * 0.8
})

console.log(discountedBooks);


// Salva in una variabile (fullPricedBook) il primo elemento di discountedBooks che ha un prezzo intero (senza centesimi)
const fullPricedBook = discountedBooks.find(p => Number.isInteger(p))
console.log(fullPricedBook);
