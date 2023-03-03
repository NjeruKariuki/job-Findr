import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import TopBar from "./Components/TopBar";


function App() {
  return (
    <BrowserRouter>
      <header className="bg-slate-800 text-white">
        <TopBar />
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App;