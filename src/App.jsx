import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router";

import { store } from './redux/store';

import Homepage from "./pages/Home"
import AboutPage from "./pages/About"
import ProductsPage from "./pages/Products"
import Checkoutpage from './pages/Checkout';
import Loginpage from './pages/Login';
import RegistrationPage from './pages/Registration';
import ProductPage from './pages/Product';
import UserPage from './pages/User';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="checkout" element={<Checkoutpage />} />
          <Route path="login" element={<Loginpage />} />
          <Route path="register" element={<RegistrationPage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="user" element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
