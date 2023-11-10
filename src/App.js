import "./App.css";
import Home from "./routes/home/Home";
import { Route, Routes } from "react-router-dom";
import { Navigation } from "./routes/navigation/Navigation";
import { Authentication } from "./routes/authentication/Authentication";
import { Shop } from "./routes/shop/Shop";
import { Checkout } from "../src/routes/checkout/Checkout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        {/* index tells route its the base component to render in outlet */}
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
