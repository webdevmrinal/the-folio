import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-[#e4e4e9]">
      <Navbar />
      <LandingPage />
    </div>
  );
}

export default App;
