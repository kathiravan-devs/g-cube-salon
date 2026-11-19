import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Services } from "./pages/services/Services";
import { ContactPage } from "./pages/contact/ContactPage";
import { Gallery } from "./pages/gallery/GalleryPage";
import { AboutPage } from "./pages/about/AboutPage";

function NotFound() {
  return (
    <main className="not-found">
      <p className="section-eyebrow">404 · Page not found</p>
      <h1>We couldn't find that page.</h1>
      <p>The page may have moved, or the link may be incorrect.</p>
      <Link to="/" className="btn btn-primary">Return to home</Link>
    </main>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
