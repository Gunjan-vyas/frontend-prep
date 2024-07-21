// Activity 1
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  print() {
    return console.log("title", this.title);
  }
  updatedYear(year) {
    this.year = year;
  }
  returnBookAuthorAndTitle() {
    return this.author + " " + this.title;
  }
}

let book1 = new Book("halfGf", "chethanBagath", "2015");
console.log(book1.print()); //halfGf
console.log(book1.title); //halfGf

// Act 2
console.log(book1.returnBookAuthorAndTitle()); //chethanBagath halfGf

book1.updatedYear(1024);
console.log(book1.year); //1024

//Act3
const library = {
  name: "City Library",
  books: [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
      getInfo: function () {
        return `${this.title} (${this.year})`;
      },
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
      getInfo: function () {
        return `${this.title} (${this.year})`;
      },
    },
    {
      title: "1984",
      author: "George Orwell",
      year: 1949,
      getInfo: function () {
        return `${this.title} (${this.year})`;
      },
    },
  ],
};

// Logging the library object to the console
console.log(library);

library.books.forEach((book) => {
  console.log(book.title);
});

//Act 4
library.books.forEach((book) => {
  console.log(book.getInfo());
});

// This keyword : fundamentally refers to the object that is executing the current function.

//Act 5
for (let book of library.books) {
  // for of -> array
  for (let key in book) {
    // on => object
    console.log(key, book[key]);
  }
}

let newBookObj = book1;

console.log(typeof newBookObj); //object

console.log("keys array", Object.keys(newBookObj)); // will return an array of all the keys of the object;
console.log("values array", Object.values(newBookObj)); // will return an array of all the values of the object;
