import Hero from './components/Hero';
import MarketOverview from './components/MarketOverview';
import Technology from './components/Technology';
import Competition from './components/Competition';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-black text-slate-200 selection:bg-uv-blue/70 selection:text-black overflow-x-hidden">
      <Navbar />
      <main className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <Hero />
        <MarketOverview />
        <Technology />
        <Competition />
      </main>
      <Footer />
    </div>
  );
}

export default App;
