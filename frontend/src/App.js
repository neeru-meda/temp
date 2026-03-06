import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { ScrollProgress } from "./components/ScrollProgress";
import Home from "./pages/Home";
import Agenda from "./pages/Agenda";
import Facts from "./pages/Facts";
import Rules from "./pages/Rules";
import SponsorsMentors from "./pages/SponsorsMentors";
import Contingency from "./pages/Contingency";
import Admin from "./pages/Admin";

function App() {
  return (
    <div className="App min-h-screen paper-texture">
      <BrowserRouter>
        <ScrollProgress />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/facts" element={<Facts />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/sponsors-mentors" element={<SponsorsMentors />} />
          <Route path="/contingency" element={<Contingency />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;