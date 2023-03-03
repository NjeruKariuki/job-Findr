import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";


function App() {
  return (
    <BrowserRouter>
      <header className="bg-slate-800 text-white">
        <nav>
          <div className="Navigation h-12 shadow-md fixed w-full top-0 left-0 flex justify-between font-mono items-center px-6">
            <h1 className="text-xl font-bold">JobFindr</h1>
            <span className="hidden md:flex justify-between ">
              <NavLink to="/">Home</NavLink>
              <NavLink to="about">About Us</NavLink>
            </span>
            <span>
              
            </span>

          </div>
        </nav>
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