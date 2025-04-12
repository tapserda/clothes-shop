import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';

function About() {
  return (
    <div className="min-h-screen bg-primary">
      {/* Video Hero Section */}
      <div className="h-screen relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-primary/60"></div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="font-serif text-6xl font-bold mb-6">Our Story</h1>
            <p className="text-xl">Where street culture meets high fashion, creating a new definition of urban luxury.</p>
          </div>
        </div>
      </div>

      {/* Parallax Sections */}
      <ParallaxBanner
        layers={[
          {
            image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80',
            speed: -20,
          }
        ]}
        className="h-[50vh] relative"
      >
        <div className="absolute inset-0 bg-primary/60 flex items-center justify-center">
          <div className="max-w-3xl text-center px-4">
            <h2 className="font-serif text-4xl font-bold mb-4">Our Vision</h2>
            <p className="text-lg">Bridging the gap between streetwear and luxury fashion, creating pieces that speak to both worlds.</p>
          </div>
        </div>
      </ParallaxBanner>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="font-serif text-3xl font-bold mb-6">Our Heritage</h3>
            <p className="text-secondary/80 mb-4">
              Founded in the heart of urban culture, LUXE STREET emerged from a passion for authentic street style and premium craftsmanship. Our journey began with a simple idea: elevate streetwear without losing its raw, authentic edge.
            </p>
            <p className="text-secondary/80">
              Today, we continue to push boundaries, combining innovative designs with luxury materials to create pieces that define contemporary urban fashion.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-3xl font-bold mb-6">Our Commitment</h3>
            <p className="text-secondary/80 mb-4">
              Every piece in our collection is a testament to our commitment to quality and sustainability. We work with ethical manufacturers and use premium materials to ensure our products stand the test of time.
            </p>
            <p className="text-secondary/80">
              Our design process combines street culture influences with luxury fashion principles, creating unique pieces that resonate with the modern urban lifestyle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;