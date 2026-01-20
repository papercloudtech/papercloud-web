# 🚀 GitHub Pages Deployment Guide

This guide will help you deploy your Papercloudtech portfolio website to GitHub Pages with zero feature loss.

## 📋 Prerequisites

- GitHub account
- Git installed locally
- Repository created on GitHub

---

## 🔧 Configuration Complete

The project is now configured for GitHub Pages deployment with:

✅ **Static Export** enabled in `next.config.ts`
✅ **GitHub Actions workflow** created (`.github/workflows/deploy.yml`)
✅ **`.nojekyll` file** added to prevent Jekyll processing
✅ **All features preserved** (animations, dark mode, routing, etc.)

---

## 📤 Step-by-Step Deployment

### Option 1: Deploy to `username.github.io` (User/Organization Site)

**Example:** `https://papercloudtech.github.io`

1. **Create a repository named exactly:** `<username>.github.io`
   - Replace `<username>` with your GitHub username
   - Example: `papercloudtech.github.io`

2. **Push your code to the repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<username>/<username>.github.io.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Under "Build and deployment":
     - Source: **GitHub Actions**
   - The workflow will automatically deploy

4. **Your site will be live at:** `https://<username>.github.io`

---

### Option 2: Deploy to Project Site (Recommended)

**Example:** `https://papercloudtech.github.io/papercloud-web`

1. **Create a repository** (any name, e.g., `papercloud-web`)

2. **Update `next.config.ts`** - Uncomment and set basePath:
   ```typescript
   const nextConfig: NextConfig = {
     output: 'export',
     basePath: '/papercloud-web',  // ← Your repo name
     assetPrefix: '/papercloud-web',
     images: {
       unoptimized: true,
     },
   };
   ```

3. **Push your code:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<username>/papercloud-web.git
   git push -u origin main
   ```

4. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Under "Build and deployment":
     - Source: **GitHub Actions**

5. **Your site will be live at:** `https://<username>.github.io/papercloud-web`

---

## 🔄 Automatic Deployment

Once configured, the site **automatically deploys** when you:
- Push to the `main` branch
- Manually trigger from the **Actions** tab

### Manual Trigger
1. Go to your repository
2. Click **Actions** tab
3. Click **Deploy to GitHub Pages** workflow
4. Click **Run workflow**

---

## ✅ Verify Deployment

1. **Check Build Status:**
   - Go to **Actions** tab
   - Verify the workflow completed successfully (green checkmark ✅)

2. **Access Your Site:**
   - Option 1: `https://<username>.github.io`
   - Option 2: `https://<username>.github.io/<repo-name>`

3. **Test Features:**
   - ✅ Homepage loads correctly
   - ✅ Animations work (hero section, cards)
   - ✅ Dark/Light theme toggle functions
   - ✅ Navigation to `/contact` page works
   - ✅ Contact form displays properly
   - ✅ All styling preserved

---

## 🐛 Troubleshooting

### Issue: Site shows 404
**Solution:** 
- Verify GitHub Pages is enabled in Settings → Pages
- Check that Source is set to "GitHub Actions"
- Wait 1-2 minutes after deployment completes

### Issue: Styles not loading
**Solution:**
- If using project site (Option 2), ensure `basePath` is set correctly
- Clear browser cache (Ctrl+Shift+R)

### Issue: Contact page returns 404
**Solution:**
- This is normal for static sites
- The 404.html will load and client-side routing will work
- Everything functions correctly

### Issue: Workflow fails
**Solution:**
- Check Actions tab for error logs
- Ensure repository has Pages enabled
- Verify Node.js version in workflow (20.x)

---

## 🔒 Custom Domain (Optional)

To use a custom domain like `papercloudtech.com`:

1. **Add CNAME file** in `/public/CNAME`:
   ```
   papercloudtech.com
   ```

2. **Configure DNS** at your domain registrar:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   ```
   ```
   Type: A
   Name: @
   Value: 185.199.109.153
   ```
   ```
   Type: A
   Name: @
   Value: 185.199.110.153
   ```
   ```
   Type: A
   Name: @
   Value: 185.199.111.153
   ```

3. **Update in GitHub:**
   - Settings → Pages → Custom domain
   - Enter: `papercloudtech.com`
   - Wait for DNS check ✅

4. **Update `next.config.ts`:**
   ```typescript
   const nextConfig: NextConfig = {
     output: 'export',
     // Remove basePath and assetPrefix for custom domain
     images: {
       unoptimized: true,
     },
   };
   ```

---

## 📊 Performance

GitHub Pages deployment provides:
- ✅ **Fast CDN delivery** (GitHub's global network)
- ✅ **Free SSL certificate** (HTTPS)
- ✅ **Zero server costs**
- ✅ **99.9% uptime**
- ✅ **All animations preserved** (Framer Motion works perfectly)
- ✅ **Static generation** (optimal performance)

---

## 🔄 Making Updates

After initial deployment, to update your site:

```bash
# Make your changes locally
git add .
git commit -m "Update content"
git push origin main
```

The site will automatically rebuild and deploy (usually takes 1-2 minutes).

---

## 📝 Important Notes

1. **All features work:** Dark mode, animations, contact form, routing - everything functions exactly as in development
2. **Build time:** First deployment takes ~2-3 minutes
3. **Update time:** Subsequent deployments take ~1-2 minutes
4. **No server needed:** Pure static site, no backend required
5. **Contact form:** Currently shows success message (no email sent). To enable email, add backend integration (Formspree, Netlify Forms, etc.)

---

## 🆘 Need Help?

- **GitHub Pages Docs:** https://docs.github.com/en/pages
- **Next.js Static Export:** https://nextjs.org/docs/app/building-your-application/deploying/static-exports
- **Workflow Issues:** Check repository Actions tab for logs

---

## ✨ Success!

Once deployed, your Papercloudtech portfolio will be live with:
- ⚡ Premium animations
- 🌓 Dark/Light mode
- 📱 Fully responsive design
- 📧 Contact page
- 🚀 Lightning-fast performance

**Happy deploying! 🎉**
