import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';

import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { DestinationsPage } from './pages/DestinationsPage';
import { DestinationDetailPage } from './pages/DestinationDetailPage';
import { PackagesPage } from './pages/PackagesPage';
import { PackageDetailPage } from './pages/PackageDetailPage';
import { ExperiencesPage } from './pages/ExperiencesPage';
import { JournalPage } from './pages/JournalPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

import { EnquiryProvider } from './context/EnquiryContext';

function App() {
  return (
    <Router>
      <EnquiryProvider>
        <div className="min-h-screen flex flex-col bg-wanderly-dark text-wanderly-text selection:bg-wanderly-emerald selection:text-wanderly-gold">
          {/* Automatic scroll restoration on navigation */}
          <ScrollToTop />

          {/* Sticky Luxury Navbar */}
          <Navbar />

          {/* Core Route Viewports */}
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/destinations" element={<DestinationsPage />} />
              <Route path="/destinations/:slug" element={<DestinationDetailPage />} />
              <Route path="/packages" element={<PackagesPage />} />
              <Route path="/packages/:slug" element={<PackageDetailPage />} />
              <Route path="/experiences" element={<ExperiencesPage />} />
              <Route path="/journal" element={<JournalPage />} />
              <Route path="/journal/:slug" element={<ArticleDetailPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>

          {/* Global Footer */}
          <Footer />

          {/* Feedback Toast Notifications */}
          <Toaster
            position="top-right"
            theme="dark"
            richColors
            toastOptions={{
              style: {
                background: '#0A1A14',
                borderColor: 'rgba(255, 200, 87, 0.3)',
                color: '#FFFFFF',
              },
            }}
          />
        </div>
      </EnquiryProvider>
    </Router>
  );
}

export default App;
