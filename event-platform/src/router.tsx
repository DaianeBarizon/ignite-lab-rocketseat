import { Route, Routes } from "react-router-dom";
import { Event } from "./pages/event";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<h1>1</h1>} />
      <Route path="/event" element={<Event />} />
    </Routes>
  );
}
