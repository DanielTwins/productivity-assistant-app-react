import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Habits from "./components/Habits";
import "./App.css";

function App() {
  const [habits, setHabits] = useState([]);

  return (
    <Routes>
      <Route path="/" element={<HomePage habits={habits} />} />
      <Route
        path="/habits"
        element={<Habits habits={habits} setHabits={setHabits} />}
      />
    </Routes>
  );
}

export default App;
