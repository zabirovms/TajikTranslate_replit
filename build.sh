#!/bin/bash

# Build the frontend
vite build

# Copy attached assets to dist directory
mkdir -p dist/attached_assets
cp -r attached_assets/* dist/attached_assets/

# Build the backend
esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist

echo "Build completed successfully!"