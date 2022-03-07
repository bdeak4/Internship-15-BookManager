import { olderThanOneYear } from "../utils/date";

const BookList = ({ books, deleteBook, readBook }) => {
  return (
    <div>
      {books.map((book) => (
        <div
          className={`book ${
            book.priority === 10 || olderThanOneYear(book.createdAt)
              ? "important"
              : ""
          }`}
          key={book.id}
        >
          <p className="book__id">KNJIGA #{book.id}</p>
          <h2 className="book__title">{book.title}</h2>
          <p className="book__category">Kategorija: {book.category}</p>
          <p className="book__priority">Prioritet: {book.priority}</p>

          {deleteBook && (
            <button
              onClick={() => deleteBook(book.id)}
              className="button book__delete-button"
            >
              Obriši knjigu
            </button>
          )}

          {readBook && (
            <button
              onClick={() => readBook(book.id)}
              className="button book__read-button"
            >
              Označi knjigu kao pročitanu
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default BookList;
