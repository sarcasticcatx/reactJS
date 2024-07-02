import { Routes, Route } from "react-router-dom";
import "./App.css";
import { PackMate } from "./Components/PackMate/PackMate";
import { ItemsForGuys } from "./Pages/MalePage/MalePage";
import { ItemsForGirls } from "./Pages/FemalePage/FemalePage";
import { NotFoundPage } from "./Pages/NotFoundPage/NotFoundPage";
import { AddItemPage } from "./Pages/ItemsPage/AddNewItems";
import { AddItemPageForGirls } from "./Pages/ItemsPage/AddNewItemsToTheGirlSide";
import { SearchByCountry } from "./Pages/DestinationPage/Destination";
import { TripDetailsForm } from "./Components/TripDetailsForm/TripDetailsForm";
import { SummaryPage } from "./Pages/SummaryPage/SummaryPage";


export function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<PackMate />} />
        <Route path="/items-for-boys" element={<ItemsForGuys />} />
        <Route path="/items-for-girls" element={<ItemsForGirls />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/add-new-items-for-guys" element={<AddItemPage />} />
        <Route
          path="/add-new-items-for-girls"
          element={<AddItemPageForGirls />}
        />
        <Route path="/destination" element={<SearchByCountry />} />
        <Route path="/trip-details" element={<TripDetailsForm />} />
        <Route path="/summary" element={<SummaryPage />} />
      </Routes>
    </main>
  );
}
