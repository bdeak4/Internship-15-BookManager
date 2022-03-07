function sortActive(book1, book2) {
  if (book1.priority > book2.priority) {
    return -1;
  }

  if (book1.priority < book2.priority) {
    return 1;
  }

  return new Date(book1.createdAt) - new Date(book2.createdAt);
}

function sortRead(book1, book2) {
  const date1 = new Date(book1.readAt).toISOString().substring(0, 10);
  const date2 = new Date(book2.readAt).toISOString().substring(0, 10);

  if (date1 > date2) {
    return 1;
  }

  if (date1 < date2) {
    return -1;
  }

  return book1.title > book2.title;
}

export { sortActive, sortRead };
