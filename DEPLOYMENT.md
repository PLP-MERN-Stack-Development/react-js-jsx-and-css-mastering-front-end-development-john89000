# Git and Deployment Guide

## 📤 Pushing to GitHub

### First Time Setup (if not done already)

1. Configure Git (if not configured):
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Push Your Code

1. Check your current status:
```bash
git status
```

2. Add all files to staging:
```bash
git add .
```

3. Commit your changes:
```bash
git commit -m "Complete Week 3 assignment: Add TaskManager, API integration, and Tailwind styling"
```

4. Push to GitHub:
```bash
git push origin main
```

If you get an error, try:
```bash
git push -u origin main
```

## 🚀 Deployment Options

### Option 1: Vercel (Easiest & Recommended)

1. Go to https://vercel.com
2. Sign up/Login with your GitHub account
3. Click "New Project"
4. Import your repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"
7. Done! Your site will be live in ~2 minutes

**OR use Vercel CLI:**
```bash
npm install -g vercel
vercel login
vercel
```

### Option 2: Netlify

1. Build your project:
```bash
npm run build
```

2. Go to https://app.netlify.com
3. Drag and drop the `dist` folder
4. Done!

**OR use Netlify CLI:**
```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

**OR connect GitHub:**
1. Go to https://app.netlify.com
2. Click "New site from Git"
3. Connect your GitHub repo
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Deploy!

### Option 3: GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add scripts to `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update `vite.config.js`:
```js
export default defineConfig({
  base: '/react-js-jsx-and-css-mastering-front-end-development-john89000/',
  plugins: [react({ jsxRuntime: 'automatic' })]
})
```

4. Deploy:
```bash
npm run deploy
```

5. Enable GitHub Pages:
   - Go to your repo → Settings → Pages
   - Source: `gh-pages` branch
   - Save

## 📝 After Deployment

1. Update README.md with your live URL
2. Commit and push the update:
```bash
git add README.md
git commit -m "Add deployment URL to README"
git push origin main
```

## 🔄 Making Changes After Deployment

1. Make your code changes
2. Test locally: `npm run dev`
3. Commit and push:
```bash
git add .
git commit -m "Description of your changes"
git push origin main
```

4. Vercel/Netlify will auto-deploy the changes
5. For GitHub Pages, run `npm run deploy` again

## ⚡ Quick Deploy Commands

**Vercel:**
```bash
vercel --prod
```

**Netlify:**
```bash
netlify deploy --prod
```

**GitHub Pages:**
```bash
npm run deploy
```

## 🐛 Troubleshooting

### If push is rejected:
```bash
git pull origin main --rebase
git push origin main
```

### If build fails:
```bash
npm run build
```
Check for errors and fix them before deploying.

### Clear cache and rebuild:
```bash
rm -rf node_modules dist
npm install
npm run build
```

## 📊 Checking Your Deployment

After deployment, test these features:
- ✅ Home page loads
- ✅ Task Manager works (add/delete/filter)
- ✅ API data loads
- ✅ Dark mode toggle works
- ✅ Mobile responsive design
- ✅ All routes work
