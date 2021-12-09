import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Add from "./components/Add";
import Watched from "./components/Watched";
import Watchlist from "./components/Watchlist";
import * as icon from "react-icons/fa";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Watchlist />} />
        <Route path="/watched" element={<Watched />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </Router>
  );
}

export default App;
