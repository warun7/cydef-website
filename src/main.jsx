import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import UpcomingEvents from "./components/UpcomingEvents.jsx";
import About from "./components/About.jsx";
import PastEvents from "./components/PastEvents.jsx";
import Resources from "./components/Resources.jsx";
import Footer from "./components/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Header />
    <Hero />
    <About />
    <UpcomingEvents />
    <PastEvents />
    <Resources />
    <Footer />
  </StrictMode>
);
