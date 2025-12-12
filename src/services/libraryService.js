

import Book from "../classes/Book.js";

export function loadBooks() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const books = [
                new Book("Dune", "Frank Herbert", 412),
                new Book("1984", "George Orwell", 328)
            ];

            Math.random() < 0.15
            ? reject("Failed to fetch books.")
            : resolve(books);
        }, 1000);
    })
}