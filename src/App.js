import "./App.css";
import Nav from "./components/Nav";
import Country from "./components/Country";
import Countries from "./components/Countries";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/:id" element={<Country />} />
      </Routes>
    </>
  );
}

export default App;
