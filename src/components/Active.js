import BookForm from "./BookForm";

function Active() {
  return (
    <div>
      <BookForm addBook={(book) => console.log(book)} />
    </div>
  );
}

export default Active;
