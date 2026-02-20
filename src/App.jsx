import Home from "./component/Home";
import NavBar from "./component/NavBar";
import Feature from "./component/Feature";
import Pricing from "./component/Pricing";
import TechStack from "./component/TechStack";
import HowItWorks from "./component/HowItWorks";
import Contact from "./component/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/techstack" element={<TechStack />} />
        <Route path="/howitworks" element={<HowItWorks />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400">© 2026 WebShop Agency. All rights reserved.</p>
          <p className="text-slate-500 mt-2 text-sm">Building digital presence for local businesses</p>
        </div>
      </footer>
    </>
  )
}

export default App;