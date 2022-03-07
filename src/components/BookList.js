import BookCommentForm from "./BookCommentForm";
import BookComments from "./BookComments";

import { olderThanOneYear } from "../utils/date";

const BookList = ({ books, deleteBook, readBook, addComment }) => {
  if (!books.length) {
    return <div>nema knjiga :/</div>;
  }

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
          <p>KNJIGA #{book.id}</p>
          <h2>{book.title}</h2>
          <p>Kategorija: {book.category}</p>
          <p>Prioritet: {book.priority}</p>
          <p>Datum dodavanja: {new Date(book.createdAt).toLocaleString()}</p>
          {book.readAt && (
            <p>Datum čitanja: {new Date(book.readAt).toLocaleString()}</p>
          )}

          {(deleteBook || readBook) && (
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
          )}

          {book.comments.length > 0 && (
            <BookComments comments={book.comments} />
          )}

          {addComment && (
            <BookCommentForm
              addComment={(comment) => addComment(book.id, comment)}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default BookList;
