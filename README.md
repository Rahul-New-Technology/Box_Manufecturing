# GN Packaging Website

Industrial packaging manufacturer website built with React, deployed on Cloudflare Pages.

## 🌐 Live Website
- **URL:** https://www.gnpackaging.in/
- **Status:** Production

## 📁 Project Structure
```
Box_Manufecturing-main/
├── frontend/               # React application
│   ├── public/            # Static assets & build config
│   │   ├── _redirects     # Cloudflare Pages SPA routing
│   │   └── images/        # Product images
│   ├── src/               # Source code
│   │   ├── components/    # React components
│   │   ├── lib/           # Utilities & data
│   │   ├── pages/         # Page components
│   │   └── config/        # Configuration files
│   ├── package.json       # Frontend dependencies
│   └── craco.config.js    # Build configuration
├── package.json           # Root package.json
├── README.md             # This file
└── DEPLOYMENT_GUIDE.md   # Deployment instructions
```

## 🚀 Deployment Instructions

### Method 1: GitHub Integration (Recommended)
This is the easiest method for automatic deployments.

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Cloudflare Pages:**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to **Workers & Pages** → **Create application**
   - Select **Connect to Git**
   - Choose your repository: `Rahul-New-Technology/Box_Manufecturing`
   - Configure build settings:
     - **Build command:** `cd frontend && npm install && npm run build`
     - **Build output directory:** `frontend/build`
     - **Root directory:** `/` (leave empty for root)
   - Click **Save and Deploy**

3. **Automatic Deployments:**
   - Every push to the main branch will trigger a new deployment
   - Cloudflare will automatically handle the build process

### Method 2: Direct Deploy with Wrangler CLI
For manual deployments when needed.

1. **Install Wrangler CLI:**
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare:**
   ```bash
   wrangler login
   ```

3. **Build the project:**
   ```bash
   cd frontend
   npm install
   npm run build
   ```

4. **Deploy to Cloudflare Pages:**
   ```bash
   cd ..
   npx wrangler pages deploy frontend/build --project-name=gnpackaging
   ```

**Note:** For GitHub integration deployment, Method 1 is recommended and requires no Wrangler CLI.

## 🔧 Configuration Files

### `frontend/public/_redirects`
Handles SPA routing for React Router:
- Redirects all routes to `index.html` for client-side routing
- Excludes static assets (images, CSS, JS)

### `.gitignore`
Excludes unnecessary files from Git:
- `node_modules/` - Dependencies
- `frontend/build/` - Build output
- `.env.*` - Environment files
- `*.log` - Log files

## 🛠️ Local Development

1. **Install dependencies:**
   ```bash
   cd frontend
   npm install
   ```

2. **Start development server:**
   ```bash
   npm start
   ```
   Website will be available at `http://localhost:3000`

3. **Build for production:**
   ```bash
   npm run build
   ```
   Output will be in `frontend/build/`

## 📦 Technologies Used

- **Frontend:** React 19, React Router DOM
- **Styling:** Tailwind CSS
- **Build Tool:** Create React App with CRACO
- **Deployment:** Cloudflare Pages
- **Package Manager:** npm

## 🐛 Troubleshooting

### Build Issues
- **Problem:** Build fails on Cloudflare
- **Solution:** Check build logs in Cloudflare Dashboard, ensure `npm install` succeeds

### Routing Issues (404 on refresh)
- **Problem:** Direct URLs return 404
- **Solution:** Ensure `_redirects` file exists in `frontend/public/`

### Image Loading Issues
- **Problem:** Product images not loading
- **Solution:** Verify image paths in `frontend/src/lib/imageLoader.js`

## 📞 Support

For deployment issues:
- Cloudflare Pages Documentation: https://developers.cloudflare.com/pages/
- React Documentation: https://react.dev/

## 📄 License

MIT License - GN Packaging