// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Navbar from "./components/nav/nav";
import Home from "./components/home/home";
import Fleet from "./components/fleet/fleet";
import Booking from "./components/booking/booking";
import Footer from "./components/footer/footer";
import Contact from "./components/contact/contact";
import About from "./components/about/about";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-neutral-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fleet" element={<Fleet />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/*<Route path="/dashboard" element={<Dashboard />} /> */}
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-center" />
      </div>
    </Router>
  );
}

export default App;