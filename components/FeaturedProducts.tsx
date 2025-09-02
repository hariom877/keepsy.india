import { ShoppingCart, Star, Eye } from 'lucide-react'

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Wooden Building Blocks Set',
      category: 'Toys',
      price: '₹450',
      wholesalePrice: '₹380',
      rating: 4.8,
      reviews: 156,
      image: '/api/placeholder/300/300',
      moq: '100 pieces',
      description: 'Safe wooden blocks for ages 2-5'
    },
    {
      id: 2,
      name: 'Premium Gift Wrapping Paper',
      category: 'Gift Accessories',
      price: '₹120',
      wholesalePrice: '₹95',
      rating: 4.6,
      reviews: 89,
      image: '/api/placeholder/300/300',
      moq: '100 pieces',
      description: 'High-quality decorative paper'
    },
    {
      id: 3,
      name: 'Car Dashboard Buddha Statue',
      category: 'Dashboard Items',
      price: '₹280',
      wholesalePrice: '₹220',
      rating: 4.9,
      reviews: 234,
      image: '/api/placeholder/300/300',
      moq: '100 pieces',
      description: 'Peaceful meditation statue'
    },
    {
      id: 4,
      name: 'Crystal Showpiece Set',
      category: 'Showpieces',
      price: '₹850',
      wholesalePrice: '₹680',
      rating: 4.7,
      reviews: 67,
      image: '/api/placeholder/300/300',
      moq: '100 pieces',
      description: 'Elegant home decoration'
    },
    {
      id: 5,
      name: 'Educational Puzzle Set',
      category: 'Toys',
      price: '₹320',
      wholesalePrice: '₹260',
      rating: 4.8,
      reviews: 198,
      image: '/api/placeholder/300/300',
      moq: '100 pieces',
      description: 'Learning through play'
    },
    {
      id: 6,
      name: 'Gift Bags & Ribbons',
      category: 'Gift Accessories',
      price: '₹180',
      wholesalePrice: '₹145',
      rating: 4.5,
      reviews: 112,
      image: '/api/placeholder/300/300',
      moq: '100 pieces',
      description: 'Complete gift packaging'
    }
  ]

  return (
    <section id="featured-products" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Featured <span className="text-gradient">Products</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Our best-selling products that retailers love. High quality, competitive pricing, 
            and consistent availability for your business.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="bg-white rounded-2xl shadow-soft overflow-hidden hover:shadow-medium transition-all duration-300 hover:transform hover:-translate-y-2">
                {/* Product Image */}
                <div className="relative h-64 bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                    <span className="text-4xl">📦</span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-secondary text-white px-2 py-1 rounded-full text-xs font-semibold">
                      {product.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white/90 p-2 rounded-full shadow-soft hover:bg-white transition-colors duration-200">
                      <Eye size={16} className="text-neutral-600" />
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-neutral-600 text-sm mb-4">
                    {product.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={14} 
                          className={`${i < Math.floor(product.rating) ? 'text-secondary fill-current' : 'text-neutral-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-neutral-600 ml-2">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-sm text-neutral-500 line-through">
                        MRP: {product.price}
                      </div>
                      <div className="text-xl font-bold text-primary">
                        Wholesale: {product.wholesalePrice}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-neutral-600">
                        MOQ: {product.moq}
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full btn-secondary flex items-center justify-center space-x-2">
                    <ShoppingCart size={16} />
                    <span>Request Bulk Price</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-soft max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Want to See More Products?
            </h3>
            <p className="text-neutral-600 mb-6">
              Download our complete product catalogue with 500+ SKUs, 
              pricing, and bulk order information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#catalogue" className="btn-secondary">
                Download Full Catalogue
              </a>
              <a href="#contact" className="btn-outline">
                Schedule Product Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts


