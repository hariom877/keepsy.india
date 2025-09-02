import { Heart, Target, Users, Award, Star, Shield, Clock, MessageCircle } from 'lucide-react'

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: 'Crafted with Love',
      description: 'Every product is selected with care, ensuring it brings genuine joy to families across India.'
    },
    {
      icon: Target,
      title: 'Quality Promise',
      description: 'We maintain the highest standards, with rigorous quality checks that guarantee excellence.'
    },
    {
      icon: Users,
      title: 'Partnership First',
      description: 'Your success is our success. We grow together, building lasting relationships.'
    },
    {
      icon: Award,
      title: 'Trusted Heritage',
      description: 'Three years of building trust with retailers, creating a legacy of reliability.'
    }
  ]

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-cream-100 rounded-full text-primary text-sm font-medium mb-6">
            <Heart className="w-4 h-4 mr-2" fill="currentColor" />
            <span className="font-inter">Our Story</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-neutral-800 mb-8 font-playfair">
            About <span className="text-gradient-warm">Keepsy</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed font-crimson">
            Supplying since 3 years as a trusted, Made in India brand, to major retailers and
            brands including <strong className="text-primary">Archies</strong> & <strong className="text-primary">Chumbak</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-neutral-700 leading-relaxed font-crimson">
                What began as a small family business has grown into one of India's most trusted 
                wholesale suppliers, serving 500+ retailers across the country. We understand 
                the challenges retailers face - from finding reliable suppliers to managing 
                inventory and ensuring consistent quality.
              </p>
              
              <p className="text-lg text-neutral-700 leading-relaxed font-crimson">
                That's why we've built our business around three core principles: 
                <strong className="text-primary"> Quality Products</strong>, 
                <strong className="text-primary"> Reliable Service</strong>, and 
                <strong className="text-primary"> Partner Success</strong>. 
                Every product we supply is carefully selected and tested to ensure it meets 
                the highest standards.
              </p>

              <p className="text-lg text-neutral-700 leading-relaxed font-crimson">
                Today, we offer 500+ SKUs across toys, gift accessories, car dashboard items, 
                and showpieces. Our minimum 100 pieces policy, competitive pricing, and pan-India delivery 
                make us the preferred choice for retailers who want to focus on growing their 
                business rather than worrying about supply chain issues.
              </p>
            </div>

            {/* Elegant Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-cream-50 rounded-2xl border border-cream-200">
                <div className="text-4xl font-bold text-primary mb-2 font-playfair">3+</div>
                <div className="text-sm text-neutral-600 font-inter">Years of Trust</div>
              </div>
              <div className="text-center p-6 bg-cream-50 rounded-2xl border border-cream-200">
                <div className="text-4xl font-bold text-primary mb-2 font-playfair">500+</div>
                <div className="text-sm text-neutral-600 font-inter">Retailer Partners</div>
              </div>
              <div className="text-center p-6 bg-cream-50 rounded-2xl border border-cream-200">
                <div className="text-4xl font-bold text-primary mb-2 font-playfair">1000+</div>
                <div className="text-sm text-neutral-600 font-inter">Orders Fulfilled</div>
              </div>
              <div className="text-center p-6 bg-cream-50 rounded-2xl border border-cream-200">
                <div className="text-4xl font-bold text-primary mb-2 font-playfair">24/7</div>
                <div className="text-sm text-neutral-600 font-inter">WhatsApp Connect</div>
              </div>
            </div>
          </div>

          {/* Visual Section */}
          <div className="relative">
            {/* Main Visual */}
            <div className="bg-gradient-to-br from-cream-100 to-cream-200 rounded-3xl p-12 h-96 flex items-center justify-center relative overflow-hidden">
              {/* Artisan Flourishes */}
              <div className="absolute top-6 left-6 text-primary/20 text-4xl font-playfair">❦</div>
              <div className="absolute top-6 right-6 text-secondary/20 text-3xl font-playfair">❦</div>
              <div className="absolute bottom-6 left-8 text-accent/20 text-3xl font-playfair">❦</div>
              <div className="absolute bottom-6 right-8 text-primary/20 text-4xl font-playfair">❦</div>
              
              <div className="text-center relative z-10">
                <div className="w-40 h-40 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                  <Heart className="text-white w-16 h-16" fill="currentColor" />
                </div>
                <h3 className="text-3xl font-bold text-neutral-800 mb-4 font-playfair">
                  Spreading Joy Since 2021
                </h3>
                <p className="text-neutral-600 font-crimson leading-relaxed">
                  From toys that make children smile to décor that beautifies homes, 
                  we're passionate about bringing happiness to every household.
                </p>
              </div>
            </div>

            {/* Floating Trust Badges */}
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-lg border border-cream-200">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Shield className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-neutral-800 font-inter">Quality Assured</div>
                  <div className="text-sm text-neutral-600 font-inter">ISO Certified</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-lg border border-cream-200">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-7 h-7 text-secondary" />
                </div>
                <div>
                  <div className="font-semibold text-neutral-800 font-inter">Pan-India</div>
                  <div className="text-sm text-neutral-600 font-inter">Fast Delivery</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-neutral-800 mb-6 font-playfair">
            Our Values
          </h3>
          <p className="text-xl text-neutral-600 font-crimson">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-soft">
                <value.icon size={36} className="text-primary" />
              </div>
              <h4 className="text-xl font-bold text-neutral-800 mb-4 font-playfair">
                {value.title}
              </h4>
              <p className="text-neutral-600 leading-relaxed font-crimson">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection


