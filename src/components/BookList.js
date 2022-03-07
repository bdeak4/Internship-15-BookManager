import BookCommentForm from "./BookCommentForm";
import BookComments from "./BookComments";

import { olderThanOneYear } from "../utils/date";

const BookList = ({ books, deleteBook, readBook, addComment }) => {
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

          <div className="book__actions">
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

          {book.comments.length > 0 && (
            <BookComments comments={book.comments} />
          )}

          <BookCommentForm
            addComment={(comment) => addComment(book.id, comment)}
          />
        </div>
      ))}
    </div>
  );
};

export default BookList;
