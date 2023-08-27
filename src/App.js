import "./App.css";
import Homepage from "./pages/homepage/homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchedPage from "./pages/searched_page/searched_page";
import ProductDetails from "./pages/productdetails/product_details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/search?" element={<SearchedPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// npm install redux redux-thunk react-redux