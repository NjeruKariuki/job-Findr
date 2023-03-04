import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import RootLayout from "./layouts/RootLayout";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    )
)
  return (
      <RouterProvider router={router} />
  )
}

export default App;