import { sortRead } from "../utils/sort";
import BookList from "./BookList";

const Read = ({ books, setBooks }) => {
  return (
    <div>
      <BookList
        books={books.filter((book) => book.read === true).sort(sortRead)}
      />
    </div>
  );
};

export default Read;
