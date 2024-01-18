import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "../ui/AppLayout";
import Homepage from "../pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Homepage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
