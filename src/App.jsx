import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}
export default App;
