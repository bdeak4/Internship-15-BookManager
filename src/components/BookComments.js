import { uuidv4 } from "../utils/crypto";

const BookComments = ({ comments }) => {
  return (
    <ul className="book__comments">
      {comments.map((comment) => (
        <li key={uuidv4()}>{comment}</li>
      ))}
    </ul>
  );
};

export default BookComments;
