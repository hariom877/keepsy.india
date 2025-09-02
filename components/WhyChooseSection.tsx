import { Truck, Package, Users, Award, Clock, Shield, Star, TrendingUp } from 'lucide-react'

const WhyChooseSection = () => {
  const benefits = [
    {
      icon: Package,
      title: 'MOQ 100 pcs & Best Margins',
      description: 'Order a minimum of 100 pieces per product. Competitive wholesale prices ensuring maximum profitability for retailers.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Truck,
      title: 'Pan-India Delivery',
      description: 'Fast and reliable delivery across all states. We handle logistics so you can focus on your business.',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Users,
      title: '500+ SKUs Ready for Bulk Supply',
      description: 'Extensive product range with consistent stock availability. No more supply chain disruptions.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Award,
      title: 'Trusted by 100+ Retailers',
      description: 'Join our network of satisfied retailers who have been partnering with us for years.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ]

  const stats = [
    { number: '3', label: 'Years', icon: Clock },
    { number: '100%', label: 'GST Compliant', icon: Shield },
    { number: '4.8★', label: 'Customer Rating', icon: Star },
    { number: '24x7', label: 'WhatsApp Support', icon: TrendingUp }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Why Choose <span className="text-gradient">Keepsy</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            We understand the challenges of wholesale business. That's why we've built our 
            services around your success and profitability.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="group">
              <div className="flex items-start space-x-6 p-8 rounded-2xl hover:shadow-medium transition-all duration-300 hover:transform hover:-translate-y-1">
                <div className={`${benefit.bgColor} p-4 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon size={32} className={benefit.color} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Trusted by Retailers Across India
            </h3>
            <p className="text-xl text-white/90">
              Our track record speaks for itself
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <stat.icon size={24} className="text-white" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials & Mini FAQ */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Testimonials */}
          <div className="bg-neutral-50 rounded-2xl p-8">
            <h4 className="text-xl font-bold text-neutral-900 mb-4">What Retailers Say</h4>
            <div className="space-y-6">
              <div>
                <div className="flex space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="text-secondary fill-current" />
                  ))}
                </div>
                <p className="text-neutral-700">“Consistent quality and fast dispatch. Our repeat orders are smoother with Keepsy.”</p>
                <div className="text-sm text-neutral-500 mt-1">Aman Gupta, Distributor - Delhi</div>
              </div>
              <div>
                <div className="flex space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="text-secondary fill-current" />
                  ))}
                </div>
                <p className="text-neutral-700">“Margins are great and wooden toys sell really well. Recommended for retail chains.”</p>
                <div className="text-sm text-neutral-500 mt-1">Priya Mehta, Retail Chain Buyer - Bengaluru</div>
              </div>
            </div>
          </div>

          {/* Mini FAQ */}
          <div className="bg-neutral-50 rounded-2xl p-8">
            <h4 className="text-xl font-bold text-neutral-900 mb-4">Quick FAQ</h4>
            <ul className="space-y-4 text-neutral-700">
              <li>
                <strong>What is the minimum order?</strong>
                <div>Minimum 100 pieces per product.</div>
              </li>
              <li>
                <strong>How fast is delivery?</strong>
                <div>Within 3 days by air, about a week by train (pan-India).</div>
              </li>
              <li>
                <strong>What about returns?</strong>
                <div>Easy returns for damaged or defective items.</div>
              </li>
              <li>
                <strong>How to contact quickly?</strong>
                <div>Connect with us on WhatsApp 24x7 for instant support.</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseSection


