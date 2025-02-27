# Deployment Guide for Oahu Surf Co

## Prerequisites
- Node.js (v18.x recommended)
- npm

## Steps for Deployment

### 1. Preparing Your Code
Make sure your codebase is ready for production:
- All features are working correctly
- Environment variables are configured
- No console errors or warnings

### 2. Building for Production
The project uses Next.js, which requires a build step before deployment:

```bash
npm run build
```

### 3. Testing the Production Build Locally
You can test the production build locally before deploying:

```bash
npm start
```

### 4. Deployment Options

#### Option A: Vercel (Recommended)
Vercel is optimized for Next.js applications:

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository in the Vercel dashboard
3. Configure environment variables if needed
4. Deploy

#### Option B: Netlify
Netlify also supports Next.js applications:

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository in the Netlify dashboard
3. Set build command to `npm run build`
4. Set publish directory to `.next`
5. Configure environment variables if needed
6. Deploy

#### Option C: Traditional Hosting
For traditional hosting:

1. Run `npm run build`
2. Upload the `.next` folder, `public` folder, and other necessary files
3. Set up server to serve the application

### 5. Post-Deployment Checks
After deployment, verify:
- All pages load correctly
- Images and assets are displaying properly
- Forms and interactive elements work as expected
- Mobile responsiveness

## Troubleshooting Common Issues

### Build Failures
- Check your Node.js version
- Ensure all dependencies are correctly installed
- Verify environment variables are properly set

### Missing Assets
- Check your image paths
- Ensure assets are in the public directory

### Performance Issues
- Consider optimizing images further
- Use Next.js analytics to identify bottlenecks 