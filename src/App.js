import "./App.css";
import Footer from "./components/Footer";
import Bannar from "./components/Bannar";
import HowToStart from "./components/HowToStart";
import Rewards from "./components/Rewards";
import LeaderBoard from "./components/LeaderBoard";

function App() {
  return (
    <div className="App">
      <div className="logo">
        <img src="/assets/images/SVG/xend-logo.svg" alt="logo" />
      </div>
      <Bannar />
      <HowToStart />
      <Rewards />
      <LeaderBoard />
      <Footer />
    </div>
  );
}

export default App;
