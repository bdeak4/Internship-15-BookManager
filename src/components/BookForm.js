import { useState } from "react";

import { emptyBook } from "../constants/book";
import { possibleCategories } from "../constants/categories";

const BookForm = ({ addBook }) => {
  const [book, setBook] = useState(emptyBook);
  const [error, setError] = useState("");

  const setBookProperty = (key, value) => {
    setBook((prev) => ({ ...prev, [key]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!book.title) {
      setError("naziv knjige prazan");
      return;
    }

    if (!book.category) {
      setError("kategorija knjige prazna");
      return;
    }

    addBook(book);
    setBook(emptyBook);
    setError("");
  };

  return (
    <form onSubmit={handleFormSubmit} className="form">
      <label className="label">
        Naziv
        <input
          type="text"
          value={book.title}
          onChange={(e) => setBookProperty("title", e.target.value)}
          placeholder="Naziv"
        />
      </label>

      <label className="label">
        Kategorija
        <select
          value={book.category}
          onChange={(e) => setBookProperty("category", e.target.value)}
        >
          <option value="" disabled>
            Kategorija
          </option>
          {possibleCategories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </label>

      <label className="label">
        Prioritet
        <select
          value={book.priority}
          onChange={(e) =>
            setBookProperty("priority", parseInt(e.target.value))
          }
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
      </label>

      {error && <div className="error">{error}</div>}

      <button type="submit" className="button">
        Dodaj knjigu
      </button>
    </form>
  );
};

export default BookForm;
