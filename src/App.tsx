import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Bodys from "./components/Bodys";
import Footer from "./components/Footer";
import Footers from "./components/Footers";
import { HabitBot } from "./components/HabitBot";




function App() {
  return (
    <div className="page">
      <div className="container">

        <Header/>
        <Body/>
        <Bodys/>
        <Footer/>
        <Footers/>
        <HabitBot />
      </div>
    </div>
  );
}

export default App;
