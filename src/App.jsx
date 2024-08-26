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

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-zinc-900 text-green-400 p-4">
        <div className="max-w-6xl mx-auto border bg-black border-green-400 rounded-md p-4">
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
  );
}

export default App;
