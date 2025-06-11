/*
  BONUS 5
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
  console.log(books);
})();