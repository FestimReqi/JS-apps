class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    static showBooks() {
        const dummyBooks = [
            {
                title: 'Book One',
                author: 'John Doe',
                isbn: 23145653
            },
            {
                title: 'Book Two',
                author: 'Jane Doe',
                isbn: 762431
            },
        ];

        const books = Store.getBooks();
        books.sort((a,b) => a.title.localeCompare(b.title));

        books.forEach(book => UI.displayBooks(book));
        dummyBooks.forEach(book => UI.displayBooks(book))
    }

    static displayBooks(books) {
        let tbody = document.querySelector('#book-list');
        let tr = document.createElement('tr');
        tr.classList.add('table-row');
        tr.innerHTML = `
                <td>${books.title}</td>
                <td>${books.author}</td>
                <td>${books.isbn}</td>
                <td>
                    <a href="#" class="float-end btn btn-danger btn-sm delete">X</a>
                </td>
        `;

        tbody.appendChild(tr);
    }

    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }

    static removeBook(e) {
        if (e.classList.contains('delete')) {
            e.parentElement.parentElement.remove();
        }
    }

}

class Store {
    static getBooks() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }

    static addBook(book) {
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn) {
        const books = Store.getBooks();

        books.forEach((book, index) => {
            if (book.isbn === isbn) {
                books.splice(index, 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
    }
}


// Show Dummy Books
document.addEventListener('DOMContentLoaded', UI.showBooks);

// Add a new Book
document.querySelector('#book-form').addEventListener('submit', e => {
   e.preventDefault();
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let isbn = document.querySelector('#isbn').value;
    const book = new Book(title, author, isbn);

    if (title === '' || author === '' || isbn === '') {
        alert('Please fill all the fields!');
    } else {
        UI.clearFields();
        UI.displayBooks(book);
        Store.addBook(book);
    }
});


//Delete a Book

document.querySelector('#book-list').addEventListener('click', e => {
    e.preventDefault();
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
    UI.removeBook(e.target);
});


document.querySelector('#filterInput').addEventListener('keyup', () => {
    let filterInputValue = document.querySelector('#filterInput').value.toUpperCase();
    let tbody = document.querySelector('#book-list');
    let tr = tbody.querySelectorAll('tr.table-row');

    Array.from(tr).forEach(item => {
        let td = item.getElementsByTagName('td')[0];
        let displayNames = td.innerHTML.toUpperCase().indexOf(filterInputValue) > -1 ? '' : 'none';
        item.style.display = displayNames;
    });
});