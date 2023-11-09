import "./App.css";
import Home from "./routes/home/Home";
import { Route, Routes } from "react-router-dom";
import { Navigation } from "./routes/navigation/Navigation";
import { Authentication } from "./routes/authentication/Authentication";

const Shop = () => {
  return <h1>I am shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        {/* index tells route its the base component to render in outlet */}
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
