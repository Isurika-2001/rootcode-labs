import Home from "./components/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import CreateExpence from "./components/createExpence";

function App() {
  return (
    <>
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createExpence" element={<CreateExpence />} />
            <Route path="/editExpense/:id" element={<CreateExpence />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
