import { Routes, Route } from "react-router-dom";
import Home from "./Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
     {/* <Route path="/menu-semanal/" element={<MenuSemanal />} /> */}
    </Routes>
  );
}