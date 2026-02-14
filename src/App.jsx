import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Layout
import MainLayout from './layouts/MainLayout';

// Pages
import LoadingPage from './pages/LoadingPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// Products
import ProductsPage from './pages/products/ProductsPage';
import InterrogatorsPage from './pages/products/InterrogatorsPage';
import SwitchesPage from './pages/products/SwitchesPage';
import FBGSensorsPage from './pages/products/FBGSensorsPage';

// Services
import ServicesPage from './pages/services/ServicesPage';
import ConsultingPage from './pages/services/ConsultingPage';
import InstallationPage from './pages/services/InstallationPage';

// Resources
import ApplicationsPage from './pages/resources/ApplicationsPage';
import PublicationsPage from './pages/resources/PublicationsPage';

// 404
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [loaderComplete, setLoaderComplete] = useState(false);

  useEffect(() => {
    const loaderShown = sessionStorage.getItem('loaderShown');
    if (loaderShown) {
      setShowLoader(false);
      setLoaderComplete(true);
    }
  }, []);

  const handleLoaderComplete = () => {
    sessionStorage.setItem('loaderShown', 'true');
    setLoaderComplete(true);
    setTimeout(() => {
      setShowLoader(false);
    }, 500);
  };

  if (showLoader && !loaderComplete) {
    return <LoadingPage onComplete={handleLoaderComplete} />;
  }

  return (
    <Router>
      <Routes>
        {/* Main Layout wraps all pages */}
        <Route path="/" element={<MainLayout />}>
          {/* Home */}
          <Route index element={<HomePage />} />
          
          {/* About */}
          <Route path="about" element={<AboutPage />} />
          
          {/* Products */}
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/interrogators" element={<InterrogatorsPage />} />
          <Route path="products/switches" element={<SwitchesPage />} />
          <Route path="products/fbg-sensors" element={<FBGSensorsPage />} />
          
          {/* Services */}
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/consulting" element={<ConsultingPage />} />
          <Route path="services/installation" element={<InstallationPage />} />
          
          {/* Resources */}
          <Route path="applications" element={<ApplicationsPage />} />
          <Route path="publications" element={<PublicationsPage />} />
          
          {/* Contact */}
          <Route path="contact" element={<ContactPage />} />
          
          {/* 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
