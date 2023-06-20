import Home from "./components/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import Expence from "./components/expence";
import CreateExpence from "./components/createExpence";

function App() {
  return (
    <>
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/expence" element={<Expence />} />
            <Route path="/createExpence" element={<CreateExpence />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
