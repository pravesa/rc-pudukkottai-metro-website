import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import FocusAreas from '@/components/FocusAreas';
import Leadership from '@/components/Leadership';
import Membership from '@/components/Membership';
import Meetings from '@/components/Meetings';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <FocusAreas />
      <Leadership />
      <Membership />
      <Meetings />
      <Contact />
      <Footer />
    </main>
  );
}
