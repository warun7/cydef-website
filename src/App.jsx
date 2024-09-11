import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import UpcomingEvents from "./components/UpcomingEvents";
import Resources from "./components/Resources";
import Footer from "./components/Footer";
import TerminalHeader from "./components/TerminalHeader";
import UpPage from "./components/UpPage";
import DownPage from "./components/DownPage";
import HackerBackground from "./components/HackerBackground"; // Import the new component

function App() {
  return (
    <div className="relative">
      <Router>
        <HackerBackground />
        <div className="relative min-h-screen bg-transparent text-green-400 p-4 z-10">
          <div className="max-w-6xl mx-auto border bg-black border-green-400 rounded-md p-4 drop-shadow-xl shadow-green-400 shadow-lg">
            <TerminalHeader />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Header />
                    <Hero />
                    <About />
                    <UpcomingEvents />
                    <Resources />
                    <Footer />
                  </>
                }
              />
              <Route path="/up" element={<UpPage />} />
              <Route path="/down" element={<DownPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
