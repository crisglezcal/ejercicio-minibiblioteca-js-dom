// ============================================== FASE 1: MÉTODOS MANEJO DEL DOM ==============================================

const books = [
  {
    author: "Chinua Achebe",
    country: "Nigeria",
    imageLink: "imagenes/things.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
    pages: 209,
    title: "Things Fall Apart",
    year: 1958
  },
  {
    author: "Hans Christian Andersen",
    country: "Denmark",
    imageLink: "imagenes/fairy.jpg",
    language: "Danish",
    link: "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
    pages: 784,
    title: "Fairy tales",
    year: 1836
  },
  {
    author: "Dante Alighieri",
    country: "Italy",
    imageLink: "imagenes/divine.jpg",
    language: "Italian",
    link: "https://en.wikipedia.org/wiki/Divine_Comedy\n",
    pages: 928,
    title: "The Divine Comedy",
    year: 1315
  },
  {
    author: "Unknown",
    country: "Sumer and Akkadian Empire",
    imageLink: "imagenes/epic.jpg",
    language: "Akkadian",
    link: "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
    pages: 160,
    title: "The Epic Of Gilgamesh",
    year: -1700
  },
  {
    author: "Unknown",
    country: "Achaemenid Empire",
    imageLink: "imagenes/book.jpg",
    language: "Hebrew",
    link: "https://en.wikipedia.org/wiki/Book_of_Job\n",
    pages: 176,
    title: "The Book Of Job",
    year: -600
  }
];

const container = document.getElementById("library");

books.forEach(book => {
  const libraryItem = document.createElement("div");
  libraryItem.className = "library-item";

  // Title - <h3>
  const title = document.createElement("h2");
  title.textContent = book.title;
  libraryItem.appendChild(title);

  // Image - <img>
  const image = document.createElement("img");
  image.src = book.imageLink;
  image.alt = book.title;
  libraryItem.appendChild(image);

  // Author - <p>
  const author = document.createElement("p");
  author.className = "author";
  author.textContent = book.author;
  libraryItem.appendChild(author);

  // Country - <p>
  const country = document.createElement("p");
  country.className = "country";
  country.textContent = book.country;
  libraryItem.appendChild(country);

  // Language - <p>
  const language = document.createElement("p");
  language.className = "language";
  language.textContent = book.language;
  libraryItem.appendChild(language);

  // Pages - <p>
  const pages = document.createElement("p");
  pages.className = "pages";
  pages.textContent = book.pages;
  libraryItem.appendChild(pages);

  // Year - <p>
  const year = document.createElement("p");
  year.className = "year";
  year.textContent = book.year;
  libraryItem.appendChild(year);

  // Link - <a>
  const link = document.createElement("a");
  link.href = book.link;
  link.target = "_blank";
  libraryItem.appendChild(link);

  container.appendChild(libraryItem);
});


// ============================================== FASE 2: TEMPLATE STRING ==============================================

// Comentado para que no se cargue el código anterior:

// let library2 = "";

// for (let i = 0; i < books.length; i++) {
//   let book = books[i];
  
//   library2 += `
//   <div class="book">
//     <h2>${book.title}</h2>
//     <p class="author">${book.author}</p>
//     <p class="country">${book.country}</p>
//     <img class="imageLink" src="${book.imageLink}" alt="${book.title}"/>
//     <a href="${book.link}" class="link">Más información</a>
//     <p class="pages">${book.pages} páginas</p>
//     <p class="year">Año: ${book.year}</p>
//   </div>
//   `;
// };
