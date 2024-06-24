import { Routes, Route } from "react-router-dom";
import "./App.css";
import { PackMate } from "./Components/PackMate/PackMate";
import { ItemsForGuys } from "./Pages/MalePage/MalePage";



export function App() {
  return (
      <main>
          <Routes>
            <Route path="/" element={<PackMate />} />
            <Route path="/items-for-boys" element={<ItemsForGuys />} />
          </Routes>
      </main>
  );
}

//go to main.tsx to change ur app name
