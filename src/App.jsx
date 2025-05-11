import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router";

import { store } from './redux/store';

import Homepage from "./pages/Home"
import AboutPage from "./pages/About"
import ProductsPage from "./pages/Products"

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="products" element={<ProductsPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
