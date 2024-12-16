import HomePage from "./components/HomePage.jsx";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/habits" />
      </Routes>
    </>
  );
}

export default App;
