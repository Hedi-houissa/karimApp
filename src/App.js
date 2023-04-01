import "./App.css";
import Header from "./components/Header/Header";
import axios from "axios";
import React, { useState, useEffect } from "react";
import List from "./pages/List";

function App() {
  const [first, setfirst] = useState(null);
  console.log("🚀 ~ file: App.js:8 ~ App ~ first:", first);
  async function fetchData() {
    const res = await axios.post("http://localhost:8080/todo/upperCase", {
      skills: [],
    });
    setfirst(res);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <List />
    </div>
  );
}

export default App;
