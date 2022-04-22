import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter,
  // Routes,
  // Route,
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <div className="container"><Header/></div>
    </div>
    </BrowserRouter>
  );
}

export default App;
