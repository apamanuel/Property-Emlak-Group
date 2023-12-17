import Home from "./components/views/Home/Home";
import ForSale from "./components/views/For sale/ForSale";
import Documents from "./components/views/Documents/Documents";
import AboutUs from "./components/views/AboutUs/AboutUs";
import ContactUs from "./components/views/ContactUs/ContactUs";
import Login from "./components/views/Login/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forSale" element={<ForSale />} />
        <Route path="/services" element={<Documents />} />
        <Route path="/aboutUs" element={<AboutUs/>} />
        <Route path="/contactUs" element={<ContactUs/>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
