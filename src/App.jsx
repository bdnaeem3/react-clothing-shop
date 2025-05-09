import { BrowserRouter, Routes, Route } from "react-router";

import Homepage from "./pages/Home"
import AboutPage from "./pages/About"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
