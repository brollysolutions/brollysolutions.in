import { Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ClientSpotlight from '@/components/layout/ClientSpotlight';
import ScrollToTop from '@/components/common/ScrollToTop';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Industries from '@/pages/Industries';
import Careers from '@/pages/Careers';
import Products from '@/pages/Products';
import Contact from '@/pages/Contact';
import Chatbot from '@/pages/Chatbot';
import RAGChatbot from '@/pages/RAGChatbot';

function AppLayout() {
  const { pathname } = useLocation();
  const hideChromeRoutes = ['/chatbot', '/rag_chatbot'];
  const hideChrome = hideChromeRoutes.includes(pathname);

  return (
    <ClientSpotlight>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        {!hideChrome && <Navbar />}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/rag_chatbot" element={<RAGChatbot />} />
          </Routes>
        </main>
        {!hideChrome && <Footer />}
      </div>

      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#111111',
            color: '#fff',
            border: '1px solid #222',
            borderRadius: '12px',
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '14px',
          },
          success: {
            iconTheme: {
              primary: '#F2DA60',
              secondary: '#111111',
            },
          },
        }}
      />
    </ClientSpotlight>
  );
}

export default function App() {
  return <AppLayout />;
}
