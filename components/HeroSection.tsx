import { Download, MessageSquare, ArrowRight, Heart, Star, Shield } from 'lucide-react'

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center gradient-warm overflow-hidden">
      {/* Elegant Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-32 w-48 h-48 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-primary rounded-full blur-3xl"></div>
      </div>

      {/* Artisan Flourishes */}
      <div className="absolute top-1/4 left-10 text-primary/20 text-6xl font-playfair">❦</div>
      <div className="absolute top-1/3 right-16 text-secondary/20 text-4xl font-playfair">❦</div>
      <div className="absolute bottom-1/4 left-20 text-accent/20 text-5xl font-playfair">❦</div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="max-w-5xl mx-auto">
          {/* Elegant Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-cream-100/80 backdrop-blur-sm rounded-full text-primary text-sm font-medium mb-12 border border-cream-200">
            <Heart className="w-4 h-4 mr-2" fill="currentColor" />
            <span className="font-inter">Trusted by 500+ Retailers Across India</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-neutral-800 mb-8 leading-tight font-playfair">
            Crafting Joy,{' '}
            <span className="text-gradient-warm">One Smile</span>
            <br />
            at a Time
          </h1>

          {/* Elegant Subtext */}
          <p className="text-xl md:text-2xl text-neutral-600 mb-16 max-w-4xl mx-auto leading-relaxed font-crimson">
            We are artisans of happiness, curating the finest collection of toys, gifts, and décor 
            that bring warmth to every home. <span className="font-semibold text-primary">Minimum 100 pieces per product, 
            crafted with love, delivered with care.</span>
          </p>

          {/* Elegant Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-3xl mx-auto">
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 font-playfair">500+</div>
              <div className="text-neutral-600 text-sm font-inter">Curated SKUs</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 font-playfair">500+</div>
              <div className="text-neutral-600 text-sm font-inter">Trusted Partners</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 font-playfair">100</div>
              <div className="text-neutral-600 text-sm font-inter">Min. Pieces</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 font-playfair">24/7</div>
              <div className="text-neutral-600 text-sm font-inter">WhatsApp Connect</div>
            </div>
          </div>

          {/* Elegant CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <a 
              href="#catalogue" 
              className="btn-primary flex items-center space-x-3 group"
            >
              <Download size={20} />
              <span>Explore Collections</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="btn-elegant flex items-center space-x-3 group"
            >
              <MessageSquare size={20} />
              <span>Request Quote</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-neutral-500">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-inter">GST Registered</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-secondary" />
              <span className="text-sm font-inter">Made in India</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="w-4 h-4 text-accent" />
              <span className="text-sm font-inter">3 Years of Trust</span>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection


