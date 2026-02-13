# Deployment Guide for UK Indian Community Hub

This guide will help you deploy the UK Indian Community Hub to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your computer
- Basic command line knowledge

## Initial Setup

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right and select "New repository"
3. Repository settings:
   - **Name**: `community-hub`
   - **Description**: "UK Indian Community Hub - Essential Services & Resources"
   - **Visibility**: Public
   - **Initialize**: Do NOT initialize with README (we have our own files)
4. Click "Create repository"

### Step 2: Prepare Your Local Files

1. Download/have all these files ready in a folder:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
   - `CONTRIBUTING.md`
   - `LICENSE`
   - `.gitignore`

### Step 3: Initialize Git and Push

Open your terminal/command prompt in the project folder and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: UK Indian Community Hub"

# Add your GitHub repository as remote
git remote add origin https://github.com/hariprasadms/community-hub.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/hariprasadms/community-hub`
2. Click on **Settings** (gear icon)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
5. Click **Save**
6. Wait 1-2 minutes for deployment

Your site will be live at: `https://hariprasadms.github.io/community-hub/`

## Making Updates

### Update Content

1. Edit the files locally
2. Commit and push changes:

```bash
git add .
git commit -m "Update resources and fix links"
git push origin main
```

3. GitHub Pages will automatically redeploy (usually within 1-2 minutes)

### Common Updates

**Add a new resource:**
- Edit `index.html`
- Find the appropriate category section
- Add your resource item
- Commit and push

**Update styling:**
- Edit `styles.css`
- Test locally first
- Commit and push

**Fix bugs:**
- Edit `script.js` or other files
- Test locally
- Commit and push

## Custom Domain (Optional)

If you want to use a custom domain like `www.ukindiacommunity.com`:

1. Buy a domain from a registrar (GoDaddy, Namecheap, Google Domains, etc.)
2. Create a file named `CNAME` in your repository with your domain:
   ```
   www.ukindiacommunity.com
   ```
3. Configure DNS settings at your registrar:
   - Add a CNAME record pointing to `hariprasadms.github.io`
4. In GitHub Settings > Pages, enter your custom domain
5. Enable "Enforce HTTPS"

## Troubleshooting

### Site not loading?
- Check Settings > Pages to ensure it's enabled
- Verify the branch and folder are correct
- Wait 5-10 minutes after pushing changes
- Clear your browser cache

### Links not working?
- Ensure all file paths are relative
- Check that all files are in the root directory
- Verify file names match exactly (case-sensitive)

### Styling looks broken?
- Check that `styles.css` is in the same directory as `index.html`
- Verify the `<link>` tag in HTML points to `styles.css`
- Check browser console for errors (F12)

### JavaScript not working?
- Verify `script.js` is in the same directory
- Check the `<script>` tag in HTML
- Look for errors in browser console (F12)

## Best Practices

1. **Test Locally First**: Always test changes on your computer before pushing
2. **Commit Messages**: Write clear commit messages describing your changes
3. **Branch Strategy**: For major changes, create a new branch:
   ```bash
   git checkout -b feature/new-category
   # Make changes
   git add .
   git commit -m "Add new category"
   git push origin feature/new-category
   # Create pull request on GitHub
   ```
4. **Backup**: Keep local copies of your files
5. **Version Control**: Use semantic versioning for major updates

## Monitoring

### Check Site Status
- Visit your live site regularly
- Test all links periodically
- Monitor GitHub Actions (if enabled)

### Analytics (Optional)
To track visitors, add Google Analytics:
1. Get a tracking ID from Google Analytics
2. Add tracking code to `index.html` before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-ID');
</script>
```

## Maintenance Schedule

- **Weekly**: Check for broken links
- **Monthly**: Update outdated resources
- **Quarterly**: Review and add new categories
- **Annually**: Major design/functionality updates

## Support

If you encounter issues:
1. Check [GitHub Pages documentation](https://docs.github.com/pages)
2. Search existing [GitHub Issues](https://github.com/hariprasadms/community-hub/issues)
3. Create a new issue with details about your problem

## Additional Resources

- [GitHub Pages Basics](https://docs.github.com/en/pages/getting-started-with-github-pages)
- [Git Tutorial](https://git-scm.com/docs/gittutorial)
- [Markdown Guide](https://www.markdownguide.org/)

---

Need help? Open an issue or contact the maintainers!
