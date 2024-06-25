import { Routes, Route } from "react-router-dom";
import "./App.css";
import { PackMate } from "./Components/PackMate/PackMate";
import { ItemsForGuys } from "./Pages/MalePage/MalePage";
import { ItemsForGirls } from "./Pages/FemalePage/FemalePage";
import { NotFoundPage } from "./Pages/NotFoundPage/NotFoundPage";

export function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<PackMate />} />
        <Route path="/items-for-boys" element={<ItemsForGuys />} />
        <Route path="/items-for-girls" element={<ItemsForGirls />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  );
}
