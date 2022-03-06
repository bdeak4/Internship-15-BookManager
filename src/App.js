import { useState } from "react";
import Active from "./Active";
import Read from "./Read";

function App() {
  const [screen, setScreen] = useState("active");

  return (
    <div>
      <nav>
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
            setScreen("active");
          }}
          className={`tab ${screen === "active" ? "tab--active" : ""}`}
        >
          Aktivno
        </a>
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
            setScreen("read");
          }}
          className={`tab ${screen === "read" ? "tab--active" : ""}`}
        >
          Pročitano
        </a>
      </nav>
      {screen === "active" ? <Active /> : ""}
      {screen === "read" ? <Read /> : ""}
    </div>
  );
}

export default App;
