import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import Classes from "./pages/Classes";
import Trainers from "./pages/Trainers";
import Membership from "./pages/Membership";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/classes" element={<Classes />} />
      <Route path="/trainers" element={<Trainers />} />
      <Route path="/membership" element={<Membership />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;