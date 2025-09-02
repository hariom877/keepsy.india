import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, Heart, MessageCircle } from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Collections', href: '#categories' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  const productCategories = [
    { name: 'Handcrafted Toys', href: '#toys' },
    { name: 'Gift Collections', href: '#gifts' },
    { name: 'Heritage Classics', href: '#top-old' },
    { name: 'Bestseller Collection', href: '#favorites' },
    { name: 'Sustainable Wooden', href: '#wooden' },
    { name: 'Dashboard Décor', href: '#dashboard' },
    { name: 'Home Elegance', href: '#showpieces' },
  ]

  const businessInfo = [
    { name: 'Download Catalogue', href: '#catalogue' },
    { name: 'Wholesale Inquiry', href: '#contact' },
    { name: 'Bulk Order', href: '#contact' },
    { name: 'Custom Products', href: '#contact' },
  ]

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/keepsy.india' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/keepsy.india' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/keepsy_india' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/keepsy-india' },
    { name: 'WhatsApp', icon: MessageCircle, href: 'https://wa.me/919876543210' },
  ]

  return (
    <footer className="bg-neutral-800 text-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-primary text-6xl font-playfair">❦</div>
        <div className="absolute top-20 right-20 text-secondary text-4xl font-playfair">❦</div>
        <div className="absolute bottom-10 left-1/4 text-accent text-5xl font-playfair">❦</div>
        <div className="absolute bottom-20 right-10 text-primary text-3xl font-playfair">❦</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg">
                <Heart className="text-white w-6 h-6" fill="currentColor" />
              </div>
              <span className="text-3xl font-bold text-white font-playfair">Keepsy</span>
            </div>
            <p className="text-neutral-300 mb-8 leading-relaxed font-crimson text-lg">
              India's trusted wholesale supplier for toys, gifts & décor. 
              Crafting joy and spreading happiness since 3 years.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                  <Phone size={18} className="text-primary" />
                </div>
                <span className="text-neutral-300 font-inter">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-secondary/20 rounded-xl flex items-center justify-center">
                  <Mail size={18} className="text-secondary" />
                </div>
                <span className="text-neutral-300 font-inter">info@keepsy.in</span>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center">
                  <MapPin size={18} className="text-accent mt-1" />
                </div>
                <span className="text-neutral-300 font-inter">
                  Manufacturing: Saharanpur, UP<br />
                  Storage: NFC Ashram, Delhi
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-8 font-playfair">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-neutral-300 hover:text-secondary transition-colors duration-300 font-inter"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-xl font-bold mb-8 font-playfair">Collections</h3>
            <ul className="space-y-4">
              {productCategories.map((category) => (
                <li key={category.name}>
                  <a 
                    href={category.href}
                    className="text-neutral-300 hover:text-secondary transition-colors duration-300 font-inter"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Services */}
          <div>
            <h3 className="text-xl font-bold mb-8 font-playfair">Business Services</h3>
            <ul className="space-y-4">
              {businessInfo.map((service) => (
                <li key={service.name}>
                  <a 
                    href={service.href}
                    className="text-neutral-300 hover:text-secondary transition-colors duration-300 font-inter"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="mt-10">
              <h4 className="text-lg font-semibold mb-6 text-neutral-200 font-playfair">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-neutral-700 rounded-xl flex items-center justify-center hover:bg-secondary transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    <social.icon size={20} className="text-neutral-300 hover:text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neutral-700 mt-16 pt-12 space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-neutral-400 text-lg font-crimson">
              © 2024 Keepsy India. All rights reserved.
            </div>
            
            <div className="flex flex-wrap items-center space-x-8 text-neutral-400">
              <a href="#" className="hover:text-secondary transition-colors duration-300 font-inter">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-secondary transition-colors duration-300 font-inter">
                Terms of Service
              </a>
              <a href="#" className="hover:text-secondary transition-colors duration-300 font-inter">
                Shipping Policy
              </a>
              <a href="#" className="hover:text-secondary transition-colors duration-300 font-inter">
                Return Policy
              </a>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-primary rounded-full"></div>
              <span className="text-neutral-300 font-inter">GST Registered</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-secondary rounded-full"></div>
              <span className="text-neutral-300 font-inter">Made in India</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-accent rounded-full"></div>
              <span className="text-neutral-300 font-inter">PAN & GST Available</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-primary rounded-full"></div>
              <span className="text-neutral-300 font-inter">500+ Happy Retailers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

