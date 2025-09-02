# Setup Instructions for Keepsy B2B Website

## Prerequisites

Before running this project, you need to install Node.js and npm.

### Installing Node.js and npm

#### Option 1: Download from Official Website
1. Go to [https://nodejs.org/](https://nodejs.org/)
2. Download the LTS (Long Term Support) version
3. Run the installer and follow the setup wizard
4. Verify installation by opening a new terminal/command prompt:
   ```bash
   node --version
   npm --version
   ```

#### Option 2: Using Chocolatey (Windows)
```bash
choco install nodejs
```

#### Option 3: Using Homebrew (macOS)
```bash
brew install node
```

## Project Setup

Once Node.js and npm are installed:

1. **Open terminal/command prompt in the project directory**
   ```bash
   cd D:\Keepsy.India
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Alternative: Static HTML Version

If you prefer not to install Node.js, you can use the static HTML version:

1. Open `index.html` directly in your browser
2. All assets are included locally
3. No server setup required

## Troubleshooting

### Common Issues

1. **"npm is not recognized"**
   - Node.js is not installed or not in PATH
   - Restart your terminal after installation
   - Reinstall Node.js if needed

2. **Port 3000 already in use**
   - Use a different port: `npm run dev -- -p 3001`
   - Or kill the process using port 3000

3. **Permission errors**
   - Run terminal as administrator (Windows)
   - Use `sudo` on macOS/Linux

### Getting Help

- **Node.js Documentation**: [https://nodejs.org/docs/](https://nodejs.org/docs/)
- **npm Documentation**: [https://docs.npmjs.com/](https://docs.npmjs.com/)
- **Next.js Documentation**: [https://nextjs.org/docs](https://nextjs.org/docs)

## System Requirements

- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 8.0.0 or higher
- **RAM**: Minimum 4GB (8GB recommended)
- **Storage**: 1GB free space
- **Browser**: Chrome, Firefox, Safari, or Edge (latest versions)

## Quick Start (After Installation)

```bash
# Clone or navigate to project directory
cd D:\Keepsy.India

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

---

**Need help?** Contact us at info@keepsy.in or call +91 98765 43210

