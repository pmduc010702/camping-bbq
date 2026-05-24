import React from 'react';
import './styles.css';

import { useSEO, useDarkBackground } from './lib/seo';

import Nav from './components/Nav';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import MenuSection from './components/MenuSection';
import MeatPrices from './components/MeatPrices';
import SidesSection from './components/SidesSection';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import OrderForm from './components/OrderForm';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import SocialSection from './components/SocialSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import StickyMobileCTA from './components/StickyMobileCTA';

export default function App() {
  useSEO();
  useDarkBackground();

  return (
    <div
      className="min-h-screen w-full overflow-x-hidden pb-20 md:pb-0"
      style={{
        backgroundColor: '#0c0a09',
        color: '#fafaf9',
        fontFamily: '"Manrope", system-ui, sans-serif',
      }}
    >
      <Nav />
      <Hero />
      <Marquee />
      <MenuSection />
      <MeatPrices />
      <SidesSection />
      <HowItWorks />
      <About />
      <OrderForm />
      <Reviews />
      <Gallery />
      <FAQ />
      <SocialSection />
      <Contact />
      <Footer />
      <FloatingButtons />
      <StickyMobileCTA />
    </div>
  );
}
