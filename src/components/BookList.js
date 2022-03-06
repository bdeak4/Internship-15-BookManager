const BookList = ({ books }) => {
  return (
    <div>
      {books.map((book) => (
        <div className="book">
          <p className="book__id">KNJIGA #{book.id}</p>
          <h2 className="book__title">{book.title}</h2>
          <p className="book__category">{book.category}</p>
          <p className="book__priority">{book.priority}</p>
        </div>
      ))}
    </div>
  );
};

export default BookList;
