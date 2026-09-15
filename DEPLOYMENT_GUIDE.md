# Cloudflare Pages Deployment Guide

This guide will help you deploy the GN Packaging website to Cloudflare Pages using GitHub integration.

## 🚀 Quick Start Deployment

### Step 1: Push to GitHub

```bash
# Push to your GitHub repository
git push -u origin main
```

### Step 2: Connect to Cloudflare Pages

1. **Go to Cloudflare Dashboard:**
   - Visit https://dash.cloudflare.com/
   - Login to your Cloudflare account

2. **Create a new Pages project:**
   - Navigate to **Workers & Pages** → **Create application**
   - Select **Connect to Git**

3. **Connect your repository:**
   - Click **Connect to GitHub**
   - Authorize Cloudflare to access your GitHub account
   - Select repository: `Rahul-New-Technology/Box_Manufecturing`

4. **Configure build settings:**
   ```
   Project name: gnpackaging
   Production branch: main
   Framework preset: None
   Build command: cd frontend && npm install && npm run build
   Build output directory: frontend/build
   Root directory: (leave empty)
   ```

5. **Environment variables (optional):**
   - Click **Environment variables**
   - Add any required environment variables if needed

6. **Deploy:**
   - Click **Save and Deploy**
   - Wait for the build to complete (usually 2-5 minutes)

### Step 3: Configure SPA Routing

1. **After successful deployment:**
   - Go to your Pages project in Cloudflare Dashboard
   - Click **Settings** → **Builds & deployments**

2. **Configure Single Page App routing:**
   - Scroll to **Single Page Application** section
   - Enable **SPA fallback**
   - This will redirect all routes to index.html for React Router

**Note:** The `_redirects` file in `frontend/public/` handles specific route redirects as a backup.

### Step 4: Configure Custom Domain

1. **Add your domain:**
   - Click **Custom domains**
   - Click **Set up a custom domain**
   - Enter: `gnpackaging.in`
   - For the main domain, add: `www.gnpackaging.in`

2. **Update DNS records:**
   - Cloudflare will automatically create the required DNS records
   - Update your domain's nameservers to Cloudflare if not already done

## 📋 Build Configuration Details

### Build Command
```bash
cd frontend && npm install && npm run build
```

This command:
- Changes to the frontend directory
- Installs all npm dependencies
- Runs the production build using CRACO

### Build Output Directory
```
frontend/build
```

This is where React creates the optimized production files.

### Root Directory
Leave empty (uses repository root)

## 🔧 Configuration Files

### `frontend/public/_redirects`
This file handles SPA routing for React Router:
```
# Cloudflare Pages SPA redirect configuration
# This file handles client-side routing for React Router

# Static assets - serve directly without redirect
/static/* /static/:splat 200
/images/* /images/:splat 200
/robots.txt /robots.txt 200
/sitemap.xml /sitemap.xml 200
/favicon.ico /favicon.ico 200
/manifest.json /manifest.json 200

# SPA fallback - exclude files with extensions, redirect routes to index.html
/custom-packaging /index.html 200
/products /index.html 200
/about /index.html 200
/contact /index.html 200
/industries /index.html 200
/manufacturing /index.html 200
/gallery /index.html 200
/blog /index.html 200
/quote /index.html 200
/products/* /index.html 200
/blog/* /index.html 200
```

### `frontend/public/_headers`
This file sets security headers for your website:
```
# Cloudflare Pages headers configuration
# This helps with SPA routing and caching

/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
```

## 🔄 Automatic Deployments

Once connected, Cloudflare Pages will automatically:

1. **Watch for changes** on the `main` branch
2. **Trigger builds** when you push new commits
3. **Deploy updates** automatically after successful builds
4. **Provide preview URLs** for pull requests

### Manual Trigger Deployment

To manually trigger a deployment:

1. Go to your Pages project in Cloudflare Dashboard
2. Click **Create deployment**
3. Select the branch and commit
4. Click **Deploy**

## 🐛 Troubleshooting

### Build Fails

**Problem:** Build fails during deployment

**Solutions:**
- Check build logs in Cloudflare Dashboard
- Ensure `package.json` has correct scripts
- Verify all dependencies are in `package.json`
- Check for Node.js version compatibility

### 404 Errors on Routes

**Problem:** Direct URLs return 404 errors

**Solution:** Ensure both configurations are in place:
1. **_redirects file** - Check that `frontend/public/_redirects` exists with correct route patterns
2. **SPA fallback** - Enable in Cloudflare Pages Dashboard:
   - Go to your Pages project
   - Click **Settings** → **Builds & deployments**
   - Enable **SPA fallback** in the Single Page Application section

### Images Not Loading

**Problem:** Product images fail to load

**Solutions:**
- Verify image paths in `frontend/src/lib/imageLoader.js`
- Check that images exist in `frontend/public/images/products/`
- Ensure image filenames match exactly (case-sensitive)

### Environment Variables Missing

**Problem:** Build fails due to missing environment variables

**Solution:** Add required environment variables in Cloudflare Pages settings:
- Go to your Pages project
- Click **Settings** → **Environment variables**
- Add the required variables

## 📊 Monitoring

### View Build Logs

1. Go to your Pages project
2. Click **Deployments**
3. Select a deployment to view detailed logs

### Analytics

1. Go to your Pages project
2. Click **Analytics**
3. View bandwidth, requests, and visitor data

## 🌐 Preview Deployments

For testing before production:

1. Create a new branch: `git checkout -b feature/new-feature`
2. Make changes and commit
3. Push to GitHub: `git push origin feature/new-feature`
4. Cloudflare will create a preview deployment
5. Share the preview URL for testing
6. Merge to main when ready for production

## 📞 Support

- **Cloudflare Pages Docs:** https://developers.cloudflare.com/pages/
- **GitHub Integration Guide:** https://developers.cloudflare.com/pages/git-integration/
- **Build Configuration:** https://developers.cloudflare.com/pages/configuration/build-configuration/

## 🔄 Future Updates

After initial setup, simply:
```bash
git add .
git commit -m "Your update message"
git push origin main
```

Cloudflare will automatically build and deploy your changes!

## ✅ Pre-Deployment Checklist

- [ ] Repository pushed to GitHub
- [ ] `_redirects` file in `frontend/public/`
- [ ] All dependencies in `package.json`
- [ ] Build command tested locally
- [ ] Environment variables configured (if needed)
- [ ] SPA fallback enabled in Cloudflare Pages Dashboard
- [ ] Custom domain configured
- [ ] DNS records updated
- [ ] SSL certificate active (automatic with Cloudflare)

## 🎉 Success Indicators

Your deployment is successful when:
- Build completes without errors
- Website loads at the Cloudflare Pages URL
- Custom domain redirects correctly
- All routes work (including direct URLs)
- Images load properly
- "View Images" functionality works
- Forms and WhatsApp links function