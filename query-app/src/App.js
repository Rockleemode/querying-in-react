import React, { useState } from "react";
import Planets from "./components/Planets";
import People from "./components/People";
import NavBar from "./components/NavBar";


function App() {
  const [page, setPage] = useState("planets");

  return (
    <div className="App">
      <h2>Star Wars Info</h2>
      <NavBar setpage={setPage}/>
      <div className="content">
        {page === "planets" ? <Planets /> : <People /> }
      </div>
    </div>
  );
}

export default App;
