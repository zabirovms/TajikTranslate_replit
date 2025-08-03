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

## ✅ Fixed Issues

- **Production Path Resolution**: Fixed `import.meta.dirname` issue in production builds
- **Static Asset Serving**: Images and files now serve correctly in both development and production
- **Build Process**: Custom build script handles all asset copying and compilation
- **Railway Configuration**: Added nixpacks.toml and Procfile for proper deployment

## Troubleshooting Railway Deployment

If you encounter "service unavailable" errors:

1. **Check Build Logs**: Ensure the build completes successfully
2. **Port Configuration**: Railway automatically assigns PORT environment variable
3. **Health Check**: The app should respond on the root path `/`
4. **Build Process**: Uses nixpacks.toml configuration for proper build steps

## Alternative Deployment Options

If Railway continues to have issues, you can also deploy to:
- **Vercel**: Add `vercel.json` configuration
- **Netlify**: Build static version and deploy
- **Heroku**: Uses existing Procfile configuration

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