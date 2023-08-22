import React from "react";
import Board from "./components/Board/Board.tsx";
import Header from "./components/Header/Header.tsx";

function App() {
  return (
    <div className="App" style={{
      "display": "flex",
      "flexFlow": "column",
      "height": "100%",
    }}>
      <Header />
      <Board />
    </div>
  );
}

export default App;
