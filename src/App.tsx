import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Error } from "./pages/Error";
import Home from "./pages/Home";
import About from "./pages/About";
import { HighestMountains } from "./pages/HighestMountains";
import { Contact } from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Nav from "./components/Nav";
import { Footer } from "./components/Footer";

export const App = () => (
  <>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/highest-mountains" element={<HighestMountains />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
);

export default App;
