import "./App.css";
import Header from "./components/Header/Header";
import {
  BrowserRouter,
  // Routes,
  // Route,
} from "react-router-dom";
import Address from "./components/Address/Address";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Header />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
