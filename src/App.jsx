import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Bazar from "./Bazar"
import Bazares from "./Bazares"


export default function App() {
  return (
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/bazar/:id" element={<Bazar />} />
     <Route path="/bazar/1" element={<Bazar />} />
     <Route path="/bazar/12" element={<Bazar />} />
     <Route path="/bazar/25" element={<Bazar />} />
     <Route path="/bazares/" element={<Bazares />} />
    </Routes>
  );
}