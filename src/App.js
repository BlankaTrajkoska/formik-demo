import OldForm from "./components/OldForm";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Table from "./components/Table";
import Home from "./components/Home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Home path="/" element={<Home />} /> */}
        <Routes>
          <Route path="/form" element={<OldForm />} />
          <Route path="/table" element={<Table />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
