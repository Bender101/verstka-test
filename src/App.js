import "./App.css";
import Header from "./components/Header/Header";
import {
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Header />
          <Navbar/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
