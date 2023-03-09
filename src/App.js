import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Page1 />} />
          <Route exact path="/page2" element={<Page2 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
