

export default class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    describe() {
        return `${this.title} by ${this.author}, ${this.pages} pages.`;
    }
}

