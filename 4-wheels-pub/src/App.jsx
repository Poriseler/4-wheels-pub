import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "../ui/AppLayout";
import Homepage from "../pages/Homepage";
import Menu from "../pages/Menu";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route element={<AppLayout />}>
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
