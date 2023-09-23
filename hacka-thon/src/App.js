import { Routes, Route } from "react-router-dom";

import Register from "./componenets/Register";
import Contact from "./componenets/Contact";
import Home from "./componenets/Home";
import Navbar from "./componenets/Navbar";

function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
