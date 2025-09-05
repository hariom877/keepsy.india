# Keepsy B2B Wholesale Website

A professional B2B wholesale website for **Keepsy**, India's trusted supplier of toys, gift accessories, car dashboard items, and showpieces.

## 🎯 Project Overview

Keepsy is a wholesale B2B supplier specializing in:
- **Toys**: Wooden, safe toys for ages 1-5
- **Gift Accessories**: Premium gift wrapping & accessories
- **Car Dashboard Items**: Collectibles & decorative items
- **Home Décor & Showpieces**: Elegant showpieces for home & office

## 🚀 Features

### Design & UX
- **Modern, Professional Design**: Clean, corporate yet warm aesthetic
- **Mobile-First Responsive**: Optimized for all devices
- **Brand-Consistent Colors**: Deep Blue (#004AAD) & Orange (#FF8C00)
- **Smooth Animations**: Hover effects and transitions
- **Accessibility**: WCAG compliant design

### B2B Focused Features
- **Wholesale Inquiry Forms**: Comprehensive business inquiry forms
- **Product Catalogues**: Downloadable product catalogues
- **Bulk Order Management**: MOQ and pricing information
- **Trust Indicators**: GST registration, ISO certification badges
- **WhatsApp Integration**: Direct business communication

### Technical Features
- **Next.js 14**: Latest React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **Lucide Icons**: Modern icon library
- **SEO Optimized**: Meta tags and structured data

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Poppins, Nunito, Open Sans
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd keepsy-b2b-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
keepsy-b2b-website/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── HeroSection.tsx      # Hero section with CTAs
│   ├── CategoriesSection.tsx # Product categories grid
│   ├── WhyChooseSection.tsx # Benefits and trust factors
│   ├── FeaturedProducts.tsx # Product showcase
│   ├── AboutSection.tsx     # Company story and values
│   ├── ContactSection.tsx   # Inquiry forms and contact info
│   └── Footer.tsx           # Footer with links and info
├── public/                  # Static assets
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

## 🎨 Design System

### Colors
- **Primary**: Deep Blue (#004AAD) - Trust & professionalism
- **Secondary**: Orange (#FF8C00) - Joy & friendliness
- **Neutral**: White & Light Grey backgrounds

### Typography
- **Headings**: Poppins Bold (modern, professional)
- **Body**: Nunito / Open Sans (clean, approachable)

### Components
- **Buttons**: Rounded corners with hover effects
- **Cards**: Soft shadows with hover animations
- **Forms**: Clean, accessible form design
- **Navigation**: Sticky header with mobile menu

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Customization

### Brand Colors
Update colors in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    DEFAULT: '#004AAD',
    dark: '#003A8A',
    light: '#0056CC',
  },
  secondary: {
    DEFAULT: '#FF8C00',
    dark: '#E67E00',
    light: '#FFA500',
  }
}
```

### Content Updates
- **Company Information**: Update in respective components
- **Product Data**: Modify in `FeaturedProducts.tsx`
- **Contact Details**: Update in `ContactSection.tsx` and `Footer.tsx`
- **Images**: Replace placeholder images in `public/` directory

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
```bash
npm run build
npm start
```

## 📋 TODO / Future Enhancements

- [ ] Add product image gallery
- [ ] Implement search functionality
- [ ] Add user authentication for retailers
- [ ] Integrate with inventory management system
- [ ] Add multi-language support
- [ ] Implement analytics tracking
- [ ] Add blog/news section
- [ ] Create admin dashboard

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support or questions:
- **Email**: info@keepsy.in
- **Phone**: +91 98765 43210
- **WhatsApp**: [Direct Link](https://wa.me/919876543210)

---

**Built with ❤️ for Keepsy India**












