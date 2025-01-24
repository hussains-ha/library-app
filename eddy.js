const myLibrary = [];

function Book(title, author, pages, haveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
  this.info = function () {
    return `${this.title}, ${this.author}, ${this.pages} pages, ${this.haveRead}`;
  };
}

function addBookToLibrary(title, author, pages, haveRead) {
  const book = new Book(title, author, pages, haveRead);
  myLibrary.push(book);
}

const body = document.querySelector("body");

const newBookButton = document.createElement("button");
newBookButton.textContent("Add a New Book!");
newBookButton.addEventListener("click", () => { 
    const form = document.createElement("form"); 
    
})

//Table set-up for Books
const table = document.createElement("table");
const tableHead = document.createElement("thead");
table.appendChild(tableHead);
const nameCol = document.createElement("th");
const authorCol = document.createElement("th");
const pageCol = document.createElement("th");
const haveReadCol = document.createElement("th");
nameCol.textContent = "Book Title";
authorCol.textContent = "Author";
pageCol.textContent = "Number of Pages";
haveReadCol.textContent = "Have I Read It?";
tableHead.appendChild(nameCol);
tableHead.appendChild(authorCol);
tableHead.appendChild(pageCol);
tableHead.appendChild(haveReadCol);
body.appendChild(table);

function bookDisplay() {
  myLibrary.map((book) => {
    const row = document.createElement("tr");
    const nameData = document.createElement("td");
    const authorData = document.createElement("td");
    const pageData = document.createElement("td");
    const readData = document.createElement("td");
    nameData.textContent = book.title;
    authorData.textContent = book.author;
    pageData.textContent = book.pages;
    readData.textContent = book.haveRead;

    row.appendChild(nameData);
    row.appendChild(authorData);
    row.appendChild(pageData);
    row.appendChild(readData);
    table.appendChild(row);
  });
}

addBookToLibrary("Hussain", "Hussain", 324, "yes");
addBookToLibrary("brendan", "brendan", 1, "no");
bookDisplay();
