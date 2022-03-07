function sortActive(book1, book2) {
  if (book1.priority > book2.priority) {
    return -1;
  }

  if (book1.priority < book2.priority) {
    return 1;
  }

  return new Date(book1.createdAt) - new Date(book2.createdAt);
}

function sortRead(book1, book2) {}

export { sortActive, sortRead };
