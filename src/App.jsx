import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import UpcomingEvents from "./components/UpcomingEvents";
// import PastEvents from "./components/PastEvents";
import Resources from "./components/Resources";
import Footer from "./components/Footer";
import TerminalHeader from "./components/TerminalHeader";
// import BlinkingCursor from "./components/BlinkingCrusor";

function App() {
  return (
    <div className="min-h-screen bg-black text-green-400 font-['VictorMono_Nerd_Font'] p-4">
      <div className="max-w-6xl mx-auto border border-green-400 rounded-md p-4">
        {
          <>
            <TerminalHeader />
            {/* <BlinkingCursor /> */}
            <Header />
            <Hero />
            <About />
            <UpcomingEvents />
            {/* <PastEvents /> */}
            <Resources />
            <Footer />
          </>
        }
      </div>
    </div>
  );
}

export default App;
