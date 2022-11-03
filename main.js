const list = document.getElementById('list');
const addBook = document.getElementById('add-new');
const contact = document.getElementById('contact');
const addBookOne = document.querySelector('.add-book-1');
const bookList = document.querySelector('.book-list-1');
const contactOne = document.querySelector('.contact-me-1');

list.addEventListener('click', () => {
  bookList.classList.add('list-active');
  addBookOne.classList.remove('addBook-active');
  contactOne.classList.remove('contact-active');
  list.classList.add('color-red');
  addBook.classList.remove('color-red');
  contact.classList.remove('color-red');
});

addBook.addEventListener('click', () => {
  addBookOne.classList.add('addBook-active');
  bookList.classList.remove('list-active');
  contactOne.classList.remove('contact-active');
  addBook.classList.add('color-red');
  list.classList.remove('color-red');
  contact.classList.remove('color-red');
});

contact.addEventListener('click', () => {
  contactOne.classList.add('contact-active');
  bookList.classList.remove('list-active');
  addBookOne.classList.remove('addBook-active');
  contact.classList.add('color-red');
  list.classList.remove('color-red');
  addBook.classList.remove('color-red');
});

window.addEventListener('load', () => {
  bookList.classList.add('list-active');
  list.classList.add('color-red');
});

const d = new Date();
d.setFullYear(2022);
document.getElementById('demo').innerHTML = d;