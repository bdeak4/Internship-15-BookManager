import { uuidv4 } from "../utils/crypto";

const BookComments = ({ comments }) => {
  return (
    <div className="book__comments">
      <p>Komentari:</p>
      <ul>
        {comments.map((comment) => (
          <li key={uuidv4()}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookComments;
