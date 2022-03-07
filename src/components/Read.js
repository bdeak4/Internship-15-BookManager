import { useState } from "react";
import { possibleCategories } from "../constants/categories";
import { sortRead } from "../utils/sort";
import BookList from "./BookList";

const Read = ({ books }) => {
  const [filterTitle, setFilterTitle] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  return (
    <div>
      <div className="form">
        <input
          type="text"
          value={filterTitle}
          onChange={(e) => setFilterTitle(e.target.value)}
          placeholder="Naziv"
        />

        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="">Sve kategorije</option>
          {possibleCategories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>

      <BookList
        books={books
          .filter((book) => book.read === true)
          .filter((book) => book.title.includes(filterTitle) || !filterTitle)
          .filter((book) => book.category === filterCategory || !filterCategory)
          .sort(sortRead)}
      />
    </div>
  );
};

export default Read;
