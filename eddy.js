const myLibrary = [];

const body = document.querySelector("body");

//Adding A New Book Logic!
const formContainer = document.createElement("div");
formContainer.setAttribute("class", "form-container");
const newBookButton = document.createElement("button");
newBookButton.textContent = "Add a New Book!";
const submitButton = document.createElement("button");
const cancelButton = document.createElement("button");
cancelButton.textContent = "Cancel";
submitButton.textContent = "Submit";
submitButton.type = "submit";
body.appendChild(newBookButton);

newBookButton.addEventListener("click", () => {
  body.removeChild(newBookButton);
  const form = document.createElement("form");
  const titleInput = document.createElement("input");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("placeholder", "Book Title");
  const authorInput = document.createElement("input");
  authorInput.setAttribute("type", "text");
  authorInput.setAttribute("id", "authorInput");
  authorInput.setAttribute("placeholder", "Author");
  const pageInput = document.createElement("input");
  pageInput.setAttribute("type", "text");
  pageInput.setAttribute("id", "pageInput");
  pageInput.setAttribute("placeholder", "Pages");
  const haveReadInput = document.createElement("input");
  haveReadInput.setAttribute("type", "text");
  haveReadInput.setAttribute("id", "haveReadInput");
  haveReadInput.setAttribute("placeholder", "Have Read");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    addBookToLibrary(
      titleInput.value,
      authorInput.value,
      pageInput.value,
      haveReadInput.value
    );
    bookDisplay();
    body.removeChild(formContainer);
    body.appendChild(newBookButton);
  });
  cancelButton.addEventListener("click", () => {
    formContainer.removeChild(form);
    body.removeChild(formContainer);
    body.appendChild(newBookButton);
  });
  form.append(
    titleInput,
    authorInput,
    pageInput,
    haveReadInput,
    submitButton,
    cancelButton
  );
  formContainer.appendChild(form);
  body.appendChild(formContainer);
});

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
tableHead.append(nameCol, authorCol, pageCol, haveReadCol);
body.appendChild(table);
body.appendChild(newBookButton);

function Book(title, author, pages, haveRead) {
  this.key = myLibrary.length;
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

function bookDisplay() {
  while (table.rows.length > 0) {
    table.deleteRow(0);
  }

  myLibrary.forEach((book) => {
    const row = document.createElement("tr");
    const nameData = document.createElement("td");
    const authorData = document.createElement("td");
    const pageData = document.createElement("td");
    const readData = document.createElement("td");
    const deleteButt = document.createElement("button");
    nameData.textContent = book.title;
    authorData.textContent = book.author;
    pageData.textContent = book.pages;
    readData.textContent = book.haveRead;
    deleteButt.textContent = "Delete Book";
    deleteButt.addEventListener("click", () => {
      const bookKey = book.key;
      table.removeChild(row);
      myLibrary.filter((boo) => {
        return boo.key !== book.key;
      });
    });

    row.append(nameData, authorData, pageData, readData, deleteButt);
    table.appendChild(row);
  });
}
