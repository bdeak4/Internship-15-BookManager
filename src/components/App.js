import { useEffect, useState } from "react";
import Active from "./Active";
import Read from "./Read";

const App = () => {
  const [screen, setScreen] = useState("active");
  const [books, setBooks] = useState(
    JSON.parse(localStorage.getItem("books") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <div>
      <nav>
        <a
          href="/tab"
          onClick={(e) => {
            e.preventDefault();
            setScreen("active");
          }}
          className={`tab ${screen === "active" ? "tab--active" : ""}`}
        >
          Aktivno
        </a>
        <a
          href="/tab"
          onClick={(e) => {
            e.preventDefault();
            setScreen("read");
          }}
          className={`tab ${screen === "read" ? "tab--active" : ""}`}
        >
          Pročitano
        </a>
      </nav>

      {screen === "active" ? <Active books={books} setBooks={setBooks} /> : ""}
      {screen === "read" ? <Read books={books} setBooks={setBooks} /> : ""}
    </div>
  );
};

export default App;
