class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  static getBookLS() {
    let bookLocalStore;
    if (localStorage.getItem('books') === null) {
      bookLocalStore = [];
    } else {
      bookLocalStore = JSON.parse(localStorage.getItem('books'));
    }
    return bookLocalStore;
  }

  static add(book) {
    const bookList = Book.getBookLS();
    bookList.push(book);
    localStorage.setItem('books', JSON.stringify(bookList));
  }

  static remove(title, author) {
    const bookList = Book.getBookLS();
    bookList.forEach((book, index) => {
      if (book.title === title && book.author === author) {
        bookList.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(bookList));
  }

  static displayBooks() {
    const books = Book.getBookLS();
    books.forEach((book) => Book.libraryBooks(book));
  }

  static libraryBooks(book) {
    const library = document.querySelector('.library');
    const newLib = document.createElement('div');

    newLib.innerHTML = `<div class="new-lib ${book.author}">
      <p><q>${book.title}</q> by <i>${book.author}</i></p>
        <button class="remove">
        Remove
        </button>
        </div>`;
    newLib.className = 'color-block';
    library.appendChild(newLib);
  }

  static deleteBook(el) {
    if (el.classList.contains('remove')) {
      el.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector('.input-book').value = '';
    document.querySelector('.input-author').value = '';
  }
}

document.addEventListener('DOMContentLoaded', Book.displayBooks);
document.querySelector('.form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('.input-book').value;
  const author = document.querySelector('.input-author').value;
  if (title !== '' && author !== '') {
    const book = new Book(title, author);
    Book.libraryBooks(book);
    Book.add(book);
    Book.clearFields();
  }
});

document.querySelector('.library').addEventListener('click', (e) => {
  Book.deleteBook(e.target);
  const fe = e.target.previousSibling.previousSibling;
  Book.remove(fe.firstChild.textContent, fe.lastChild.textContent);
});