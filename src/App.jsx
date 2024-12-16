import HomePage from "./components/HomePage.jsx";
import { Routes, Route } from "react-router-dom";
import Habits from "./components/Habits.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/habits" element={<Habits />} />
      </Routes>
    </>
  );
}

export default App;
