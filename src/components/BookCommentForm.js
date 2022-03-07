import { useState } from "react";

const BookCommentForm = ({ addComment }) => {
  const [comment, setComment] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (comment) {
          addComment(comment);
          setComment("");
        }
      }}
      className="book__comment-form"
    >
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        required
        placeholder="Komentar"
        className="book__comment-input"
      />
      <button className="button" type="submit">
        Dodaj komentar
      </button>
    </form>
  );
};

export default BookCommentForm;
