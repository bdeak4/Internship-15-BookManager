import BookForm from "./BookForm";
import BookList from "./BookList";

const Active = ({ books, setBooks }) => {
  const addBook = (book) => {
    setBooks((prev) => [...prev, { ...book, id: prev.length + 1 }]);
  };

  return (
    <div>
      <BookForm addBook={addBook} />
      <BookList books={books.filter((book) => book.read === false)} />
    </div>
  );
};

export default Active;
