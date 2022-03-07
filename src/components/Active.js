import { sortActive } from "../utils/sort";
import BookForm from "./BookForm";
import BookList from "./BookList";

const Active = ({ books, setBooks }) => {
  const addBook = (book) => {
    setBooks((prev) => [
      ...prev,
      { ...book, id: prev.length + 1, createdAt: new Date().toISOString() },
    ]);
  };

  const handleDeleteBook = (id) => {
    setBooks((prev) => prev.filter((book) => book.id !== id));
  };

  const handleReadBook = (id) => {
    setBooks((prev) => {
      const book = prev.find((book) => book.id === id);
      if (book) {
        book.read = true;
        book.readAt = new Date().toISOString();
      }
      return [...prev];
    });
  };

  const handleAddComment = (bookId, comment) => {
    setBooks((prev) => {
      const book = prev.find((book) => book.id === bookId);
      if (book) {
        book.comments.push(comment);
      }
      return [...prev];
    });
  };

  return (
    <div>
      {books.filter((book) => book.read === false).length >= 10 ? (
        <p className="message">Onemogućen unos, ajde čitat!</p>
      ) : (
        <BookForm addBook={addBook} />
      )}

      <BookList
        books={books.filter((book) => book.read === false).sort(sortActive)}
        deleteBook={handleDeleteBook}
        readBook={handleReadBook}
        addComment={handleAddComment}
      />
    </div>
  );
};

export default Active;
