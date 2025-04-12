import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X, Instagram, Twitter, Facebook, ArrowRight, ShoppingBag } from 'lucide-react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Shop from './pages/Shop';
import About from './pages/About';

function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-primary z-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-serif text-4xl font-bold mb-4 animate-pulse">LUXE STREET</h1>
        <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto"></div>
      </div>
    </div>
  );
}

function HomePage() {
  const [email, setEmail] = useState('');

  return (
    <div className="snap-container">
      {/* Hero Section */}
      <section className="relative h-screen snap-section">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&q=80"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/40"></div>
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="animate-fade-in">
              <h2 className="font-serif text-5xl md:text-7xl font-bold mb-6">
                Where Street Meets Luxury
              </h2>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl">
                Elevating urban fashion with premium craftsmanship and bold design.
              </p>
              <Link 
                to="/shop"
                className="inline-flex items-center px-8 py-3 border-2 border-secondary hover:bg-secondary hover:text-primary transition-colors duration-300"
              >
                Explore Collection
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-24 bg-accent snap-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-serif text-4xl font-bold mb-16 text-center">Latest Collection</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80"
            ].map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden"
              >
                <img 
                  src={image}
                  alt={`Collection ${index + 1}`}
                  className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-primary snap-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-serif text-4xl font-bold mb-6">Join the Movement</h3>
          <p className="mb-8 text-lg">Subscribe to receive exclusive drops and updates.</p>
          
          <form 
            className="max-w-md mx-auto"
            onSubmit={(e) => {
              e.preventDefault();
              setEmail('');
            }}
          >
            <div className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-transparent border-2 border-secondary focus:border-accent outline-none transition-colors"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-secondary text-primary hover:bg-accent hover:text-secondary transition-colors duration-300"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <ParallaxProvider>
      <Router>
        <div className="min-h-screen bg-primary text-secondary">
          {/* Navigation */}
          <nav className="fixed w-full z-50 bg-primary/95 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-20">
                <Link to="/" className="font-serif text-2xl font-bold">LUXE STREET</Link>
                
                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-8">
                  <Link to="/shop" className="hover:text-accent transition-colors">Shop</Link>
                  <Link to="/about" className="hover:text-accent transition-colors">About</Link>
                  <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
                </div>
                
                {/* Mobile Menu Button */}
                <button 
                  className="md:hidden"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
            
            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="md:hidden bg-primary/95 backdrop-blur-sm">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <Link to="/shop" className="block px-3 py-2 hover:text-accent transition-colors">Shop</Link>
                  <Link to="/about" className="block px-3 py-2 hover:text-accent transition-colors">About</Link>
                  <a href="#contact" className="block px-3 py-2 hover:text-accent transition-colors">Contact</a>
                </div>
              </div>
            )}
          </nav>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
          </Routes>

          {/* Footer */}
          <footer className="py-12 bg-primary border-t border-secondary/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <h4 className="font-serif text-xl font-bold mb-6 md:mb-0">LUXE STREET</h4>
                
                <div className="flex space-x-6">
                  <a href="#" className="hover:text-accent transition-colors">
                    <Instagram size={24} />
                  </a>
                  <a href="#" className="hover:text-accent transition-colors">
                    <Twitter size={24} />
                  </a>
                  <a href="#" className="hover:text-accent transition-colors">
                    <Facebook size={24} />
                  </a>
                </div>
              </div>
              
              <div className="mt-8 text-center text-sm text-secondary/60">
                © {new Date().getFullYear()} LUXE STREET. All rights reserved.
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </ParallaxProvider>
  );
}

export default App;