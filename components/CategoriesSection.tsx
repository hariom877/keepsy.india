import { Baby, Gift, Car, Home, ArrowRight } from 'lucide-react'

const CategoriesSection = () => {
  const categories = [
    {
      id: 'toys',
      name: 'Toys',
      description: 'Wooden, safe toys for ages 1-5',
      icon: Baby,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      count: '200+ SKUs',
      features: ['Safe for Kids', 'Wooden Material', 'Educational']
    },
    {
      id: 'gifts',
      name: 'Gift Accessories',
      description: 'Premium gift wrapping & accessories',
      icon: Gift,
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      count: '150+ SKUs',
      features: ['Premium Quality', 'Wide Variety', 'Trending Designs']
    },
    {
      id: 'dashboard',
      name: 'Car Dashboard Items',
      description: 'Collectibles & decorative items',
      icon: Car,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      count: '100+ SKUs',
      features: ['Unique Designs', 'Durable Material', 'Popular Items']
    },
    {
      id: 'showpieces',
      name: 'Home Décor & Showpieces',
      description: 'Elegant showpieces for home & office',
      icon: Home,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      count: '50+ SKUs',
      features: ['Elegant Designs', 'Premium Finish', 'Versatile Use']
    }
  ]

  return (
    <section id="categories" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Our Product <span className="text-gradient">Categories</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Explore our comprehensive range of wholesale products designed for retailers 
            who want to offer quality items to their customers.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="group">
              <div className={`${category.bgColor} rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-medium hover:transform hover:-translate-y-2`}>
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon size={32} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                  {category.name}
                </h3>
                <p className="text-neutral-600 mb-4">
                  {category.description}
                </p>

                {/* SKU Count */}
                <div className="text-sm font-semibold text-primary mb-4">
                  {category.count}
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {category.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-neutral-600">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a 
                  href={`#${category.id}`}
                  className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors duration-200 group-hover:translate-x-1"
                >
                  View Products
                  <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-soft max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Need Custom Products?
            </h3>
            <p className="text-neutral-600 mb-6">
              We can customize products according to your requirements. 
              Get in touch for bulk customization orders.
            </p>
            <a href="#contact" className="btn-secondary">
              Request Custom Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CategoriesSection


