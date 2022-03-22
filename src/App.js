import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Homepage />
      </div>
    </BrowserRouter>
  );
}

export default App;
