import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Done from "./Done";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/done" element={<Done />} />
    </Routes>
  );
}
