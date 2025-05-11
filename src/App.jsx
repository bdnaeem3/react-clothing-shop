import { BrowserRouter, Routes, Route } from "react-router";

import Homepage from "./pages/Home"
import AboutPage from "./pages/About"
import ProductsPage from "./pages/Products"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="products" element={<ProductsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
