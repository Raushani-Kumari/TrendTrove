import React, { Suspense } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MainLayout from "./components/MainLayout";
import ProductDetail from "./pages/ProductDetails";

const Home = React.lazy(() => import("./pages/Home"));
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Home />
              </Suspense>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/collection/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
