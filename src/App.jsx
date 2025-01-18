import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Home from './pages/Home'
function App() {
  const ProductPage = lazy(() => import("./pages/ProductPage"));

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product-page/:id" element={<ProductPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}
export default App;
