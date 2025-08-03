# Railway Deployment Guide

## Quick Deploy

1. **Connect to Railway**:
   - Go to [railway.app](https://railway.app)
   - Connect your GitHub repository

2. **Deploy Settings**:
   - Railway will automatically detect the `railway.json` configuration
   - The build command will run `./build.sh && npm start`
   - Port: Railway automatically assigns PORT environment variable

3. **Environment Variables** (if needed):
   - No additional environment variables required for basic deployment
   - The app will run on the assigned Railway port

4. **Custom Domain** (optional):
   - In Railway dashboard, go to Settings > Domains
   - Add your custom domain if desired

## Build Process

The custom build script (`build.sh`) handles:
- Frontend build with Vite
- Copying attached assets to dist directory
- Backend compilation with esbuild

## Features Ready for Production

✅ Static asset serving for images and files
✅ Contact form with Formspree integration
✅ Responsive mobile-first design
✅ Dark/light theme support
✅ Professional portfolio layout

## Contact Information Preserved

- Email: zabirovms@gmail.com
- Phone: +992 98 889 4346
- ProZ Profile: https://www.proz.com/profile/3974887
- Upwork Profile: https://www.upwork.com/freelancers/~014a96385c75074d91
- Fiverr Profile: https://www.fiverr.com/muhammadzabirov