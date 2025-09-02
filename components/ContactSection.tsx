import { Phone, Mail, MapPin, MessageCircle, Heart, Clock, Shield, Download } from 'lucide-react'

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-cream-100 rounded-full text-primary text-sm font-medium mb-6">
            <Heart className="w-4 h-4 mr-2" fill="currentColor" />
            <span className="font-inter">Let's Connect</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-neutral-800 mb-8 font-playfair">
            Get in <span className="text-gradient-warm">Touch</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed font-crimson">
            Ready to partner with Keepsy? Connect with us on WhatsApp 24x7 for instant B2B inquiries and bulk quotes. 
            We're here to help you grow your business with our curated collections.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* WhatsApp CTA */}
          <div className="card-elegant flex flex-col items-center justify-center text-center relative">
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 text-primary/20 text-4xl font-playfair">❦</div>
            <div className="absolute -bottom-4 -right-4 text-secondary/20 text-4xl font-playfair">❦</div>
            
            <div className="w-20 h-20 bg-gradient-to-br from-secondary to-secondary-light rounded-full flex items-center justify-center mb-8 shadow-lg">
              <MessageCircle className="w-10 h-10 text-white" />
                </div>
                
            <h3 className="text-3xl font-bold text-neutral-800 mb-6 font-playfair">
              Instant B2B Inquiries
            </h3>
            <p className="text-neutral-600 mb-8 leading-relaxed font-crimson">
              Connect with us on WhatsApp 24x7 for immediate support, bulk quotes, and personalized assistance.
            </p>
            
            <a href="https://wa.me/919876543210?text=Hi%20Keepsy,%20I%20want%20a%20bulk%20quote.%20Minimum%20100%20pieces%20per%20product." 
               target="_blank" rel="noopener noreferrer"
               className="btn-primary text-lg px-10 py-4 mb-6 flex items-center space-x-3 group">
              <MessageCircle size={20} />
              <span>Chat on WhatsApp</span>
            </a>
            
            <div className="flex items-center space-x-2 text-neutral-500 font-inter">
              <Clock className="w-4 h-4" />
              <span>Available 24/7</span>
              </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <div className="card-elegant">
              <h3 className="text-2xl font-bold text-neutral-800 mb-8 font-playfair">
                Quick Actions
              </h3>
              
              <div className="space-y-6">
                <a 
                  href="https://wa.me/919876543210?text=Hi%20Keepsy,%20I'm%20interested%20in%20wholesale%20products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-6 p-6 bg-secondary/5 rounded-2xl hover:bg-secondary/10 transition-all duration-300 group border border-secondary/20"
                >
                  <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle size={28} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-800 text-lg font-inter mb-1">WhatsApp Inquiry</div>
                    <div className="text-neutral-600 font-crimson">Get instant response</div>
                  </div>
                </a>

                <a 
                  href="#catalogue"
                  className="flex items-center space-x-6 p-6 bg-primary/5 rounded-2xl hover:bg-primary/10 transition-all duration-300 group border border-primary/20"
                >
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Download size={28} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-800 text-lg font-inter mb-1">Download Catalogue</div>
                    <div className="text-neutral-600 font-crimson">500+ products with pricing</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Details */}
            <div className="card-elegant">
              <h3 className="text-3xl font-bold text-neutral-800 mb-8 font-playfair">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Phone className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-800 text-lg font-inter mb-1">Phone</div>
                    <div className="text-neutral-600 font-crimson text-lg">+91 98765 43210</div>
                    <div className="text-sm text-neutral-500 font-inter">Mon-Sat: 9 AM - 7 PM</div>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center">
                    <Mail className="w-8 h-8 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-800 text-lg font-inter mb-1">Email</div>
                    <div className="text-neutral-600 font-crimson text-lg">info@keepsy.in</div>
                    <div className="text-sm text-neutral-500 font-inter">Connect with us on WhatsApp 24x7</div>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-800 text-lg font-inter mb-1">Manufacturing Unit</div>
                    <div className="text-neutral-600 font-crimson text-lg">
                      Keepsy India<br />
                      Saharanpur, Uttar Pradesh
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-earth-500/10 rounded-2xl flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-earth-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-800 text-lg font-inter mb-1">Storage Unit</div>
                    <div className="text-neutral-600 font-crimson text-lg">
                      NFC Ashram<br />
                      New Delhi
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Shipping & Returns */}
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 text-white relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 text-white/20 text-3xl font-playfair">❦</div>
              <div className="absolute bottom-4 left-4 text-white/20 text-2xl font-playfair">❦</div>
              
              <h3 className="text-3xl font-bold mb-6 font-playfair">Shipping & Returns</h3>
              <div className="space-y-4">
                <ul className="space-y-3 text-white/90 font-crimson">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white/60 rounded-full mt-2"></div>
                    <span>Pan-India delivery: within 3 days by air, about a week by train</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white/60 rounded-full mt-2"></div>
                    <span>Average shipping cost: ~₹35 per kg</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white/60 rounded-full mt-2"></div>
                    <span>Easy returns for damaged/defective items</span>
                  </li>
                </ul>
                </div>
              <div className="mt-6 pt-6 border-t border-white/20 text-sm text-white/80 font-inter">
                Pan-India coverage & hassle-free support
                </div>
                </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white rounded-2xl p-6 text-center border border-cream-200">
                <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-sm font-semibold text-neutral-800 font-inter">GST Registered</div>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center border border-cream-200">
                <Heart className="w-8 h-8 text-secondary mx-auto mb-3" />
                <div className="text-sm font-semibold text-neutral-800 font-inter">Made in India</div>
                </div>
              <div className="bg-white rounded-2xl p-6 text-center border border-cream-200">
                <Clock className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="text-sm font-semibold text-neutral-800 font-inter">3 Years Trust</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

