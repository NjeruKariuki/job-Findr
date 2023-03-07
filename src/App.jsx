import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import Home, { jobsLoader } from "./Pages/Home";
import About from "./Pages/About";
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import Faqs from "./Pages/help/Faqs";
import Contact, { contactAction } from "./Pages/help/Contact";
import NotFound from "./Pages/NotFound";
import Career, { careerLoader } from "./Pages/Career";
import CareerError from "./Pages/Errors/CareerError";
import CareersError from "./Pages/Errors/CareersError";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index loader={jobsLoader} element={<Home />} errorElement={<CareersError />} />
        <Route path="career/:id" loader={careerLoader} element={<Career />} errorElement={<CareerError />} />
        <Route path="about" element={<About />} />
        <Route path="help" element={<HelpLayout />}>
          <Route path="faq" element={<Faqs />} />
          <Route path="contact" action={contactAction} element={<Contact />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App;