import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Compensation from './pages/Compensation';
import CompensationDetail from './pages/CompensationDetail';
import Solutions from './pages/Solutions';
import About from './pages/About';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hizmetler" element={<Services />} />
        <Route path="/hizmetler/:slug" element={<ServiceDetail />} />
        <Route path="/kompanzasyon" element={<Compensation />} />
        <Route path="/kompanzasyon/:slug" element={<CompensationDetail />} />
        <Route path="/cozumler" element={<Solutions />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/sss" element={<Faq />} />
        <Route path="/iletisim" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
