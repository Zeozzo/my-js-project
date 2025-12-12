import Book from "./classes/Book.js";
import { loadBooks } from "./services/libraryService.js";


const pokemon = new Book("Pokémon Adventures", "Hidenori Kusaka", 192);
console.log(pokemon.describe());

/*
loadBooks()
    .then(books => {
        books.forEach(book => console.log(book.describe()));
    })
    .catch(err => {
        console.error("Error:", err);
    })
*/

async function run() {
    try {
        const books = await loadBooks();
        books.forEach(book => console.log(book.describe()));
    } catch (error) {
        console.error("Something went wrong:", error);
    }
}

run();