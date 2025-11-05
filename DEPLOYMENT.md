# Deployment Guide

This guide covers deploying your AI-Driven Engineering Leader portfolio to various platforms.

## Quick Deploy to Vercel (Recommended - 5 minutes)

Vercel is the recommended platform because:
- Created by Next.js team
- Zero-config deployment
- Automatic HTTPS
- Global CDN
- Free for personal projects
- Perfect for portfolios

### Steps:

1. **Push to GitHub**
   ```bash
   cd ai-leader-portfolio
   git init
   git add .
   git commit -m "Initial commit: AI Leader Portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Connect your GitHub account
   - Select your repository
   - Click "Deploy"
   - Done! Your site is live in ~2 minutes

3. **Custom Domain (Optional)**
   - In Vercel dashboard, go to "Settings" → "Domains"
   - Add your custom domain (e.g., artemantonenko.com)
   - Follow DNS configuration instructions
   - HTTPS is automatic

### Vercel CLI (Alternative)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Deploy to Netlify

### Via Git

1. **Push to GitHub** (same as above)

2. **Deploy on Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Choose your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy"

### Via CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod
```

## Deploy to AWS Amplify

1. **Push to GitHub**

2. **AWS Amplify Console**
   - Open [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
   - Click "New app" → "Host web app"
   - Connect GitHub
   - Select repository
   - Build settings (auto-detected):
     ```yaml
     version: 1
     frontend:
       phases:
         preBuild:
           commands:
             - npm install
         build:
           commands:
             - npm run build
       artifacts:
         baseDirectory: .next
         files:
           - '**/*'
       cache:
         paths:
           - node_modules/**/*
     ```
   - Deploy

## Deploy to Digital Ocean

### Using App Platform

1. **Push to GitHub**

2. **Digital Ocean App Platform**
   - Go to [Digital Ocean](https://www.digitalocean.com/)
   - Click "Apps" → "Create App"
   - Connect GitHub
   - Select repository
   - Configure:
     - Build Command: `npm run build`
     - Run Command: `npm run start`
   - Choose plan (starts at $5/month)
   - Launch

### Using Docker

Create `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

Build and deploy:

```bash
docker build -t ai-leader-portfolio .
docker run -p 3000:3000 ai-leader-portfolio
```

## Self-Hosted (VPS)

### Prerequisites
- Ubuntu/Debian server
- Node.js 18+ installed
- Domain pointing to server IP

### Setup

```bash
# SSH into your server
ssh user@your-server-ip

# Install Node.js (if not installed)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clone your repository
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO

# Install dependencies
npm install

# Build
npm run build

# Install PM2 for process management
sudo npm install -g pm2

# Start application
pm2 start npm --name "portfolio" -- start

# Save PM2 process list
pm2 save

# Configure PM2 to start on boot
pm2 startup
```

### Nginx Configuration

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### SSL with Let's Encrypt

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

## Environment Variables

If you add environment variables later (API keys, etc.):

### Vercel
- Dashboard → Settings → Environment Variables
- Add key-value pairs
- Redeploy

### Netlify
- Site settings → Build & deploy → Environment
- Add variables
- Trigger new deploy

### Self-hosted
Create `.env.local`:
```
NEXT_PUBLIC_API_KEY=your_key
```

Add to `.gitignore`:
```
.env.local
```

## Post-Deployment Checklist

- [ ] Test all pages and sections
- [ ] Verify all links work
- [ ] Check mobile responsiveness
- [ ] Test contact form/links
- [ ] Verify analytics (if added)
- [ ] Test page load speed (aim for <3s)
- [ ] Check SEO with [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Submit sitemap to Google Search Console
- [ ] Test dark mode
- [ ] Verify animations work smoothly

## Performance Optimization

### Already Included
✅ Automatic code splitting
✅ Image optimization
✅ CSS minification
✅ JavaScript minification
✅ Gzip compression

### Optional Improvements

1. **Add Analytics**
   ```bash
   npm install @vercel/analytics
   ```

   In `app/layout.tsx`:
   ```typescript
   import { Analytics } from '@vercel/analytics/react'

   export default function RootLayout({ children }) {
     return (
       <html>
         <body>
           {children}
           <Analytics />
         </body>
       </html>
     )
   }
   ```

2. **Add SEO Component**
   Create `components/SEO.tsx` for dynamic meta tags

3. **Add Sitemap**
   Create `app/sitemap.ts`:
   ```typescript
   export default function sitemap() {
     return [
       {
         url: 'https://yourdomain.com',
         lastModified: new Date(),
       },
     ]
   }
   ```

## Monitoring

### Vercel
- Built-in analytics dashboard
- Deployment logs
- Performance metrics

### Self-hosted
```bash
# View logs
pm2 logs portfolio

# Monitor resources
pm2 monit

# Restart if needed
pm2 restart portfolio
```

## Updating Your Site

### Vercel/Netlify/Amplify (Git-based)
```bash
# Make changes locally
git add .
git commit -m "Update: description of changes"
git push

# Automatic deployment triggered
```

### Self-hosted
```bash
ssh user@your-server
cd YOUR_REPO
git pull
npm install
npm run build
pm2 restart portfolio
```

## Custom Domain Setup

### DNS Configuration

For `artemantonenko.com`:

**Type** | **Name** | **Value**
---------|----------|----------
A | @ | Your-Server-IP or Vercel-IP
CNAME | www | yourdomain.com

For Vercel, use their provided values.

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

### Port Already in Use
```bash
# Find process on port 3000
lsof -i :3000

# Kill process
kill -9 [PID]
```

### PM2 Issues
```bash
# Reset PM2
pm2 delete all
pm2 start npm --name "portfolio" -- start
```

## Cost Comparison

| Platform | Cost | Best For |
|----------|------|----------|
| Vercel | Free | Personal portfolios |
| Netlify | Free | Static sites |
| AWS Amplify | ~$2-5/mo | AWS ecosystem |
| Digital Ocean | $5/mo | Full control |
| Self-hosted | $5-20/mo | Custom setup |

## Support

- **Next.js**: https://nextjs.org/docs
- **Vercel**: https://vercel.com/docs
- **Deployment Issues**: Check build logs first

---

**Recommendation**: Start with Vercel for fastest deployment, migrate to self-hosted only if you need specific customizations.
