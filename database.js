const books = [
  {
    ISBN: "1234Book",
    title: "Tesla!!!",
    pubDate: "2021-08-05",
    language: "en",
    numPage: 250,
    author: [1,2],
    publications: [1],
    category: ["tech","space","educaton"]
  }
]

const author = [
  {
    id: 1,
    name: "Shreyas",
    books: ["1234Book","secretBook"]
  },
  {
    id: 2,
    name: "Elon Musk",
    books: ["1234Book"]
  },
]

const publication = [
  {
    id: 1,
    name: "writer",
    books: ["1234Book"]
  }
]

module.exports = {books, author, publication};
