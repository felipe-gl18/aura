import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Home from "./features/home/Home";
import Services from "./features/services/Services";
import ServiceDetail from "./features/services/ServiceDetail";
import Events from "./features/events/Events";
import Panorama from "./features/panorama/Panorama";
import Contact from "./features/contact/Contact";
import Organizations from "./features/organizations/Organizations";
import About from "./features/about/About";
import Sources from "./features/sources/Sources";
import Map from "./features/map/Map";
import Cases from "./features/cases/Cases";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to="/home" replace />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route
            path="/organizations"
            element={<Organizations variant="default" />}
          ></Route>
          <Route
            path="/services"
            element={<Services variant="default" />}
          ></Route>
          <Route path="/services/:service" element={<ServiceDetail />}></Route>
          <Route path="/events" element={<Events variant="default" />}></Route>
          <Route path="/cases" element={<Cases />}></Route>
          <Route
            path="/panorama"
            element={<Panorama variant="default" />}
          ></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/sources" element={<Sources />}></Route>
          <Route path="/map" element={<Map />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
