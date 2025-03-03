import "./App.css";
import MainDash from "./components/mainDash/MainDash";
import RightSide from "./components/RightSide/RightSide";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainDash />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
