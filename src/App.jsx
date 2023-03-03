import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Jobs from "./Pages/Jobs";
import About from "./Pages/About";


function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="jobs" element={<Jobs />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App;