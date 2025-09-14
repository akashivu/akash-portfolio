import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
export default function App() {
  return (
    <Router>
      <div className="h-screen w-screen flex flex-col">
        <Navbar />
        <main className="flex-1 p-6">
          <Routes>
             <Route path="/" element={<Home />} />
          </Routes>
        </main>
       
      </div>
    </Router>
  );
}

