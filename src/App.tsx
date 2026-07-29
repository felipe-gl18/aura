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
          <Route
            path="/panorama"
            element={<Panorama variant="default" />}
          ></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
