#!/bin/bash
echo "Building site..."
npm run build

echo "Deploying to server..."
rsync -avz --delete dist/ rg@104.237.128.61:/var/www/preview.88restaurants.com/_site/rocky-mountain-thai/

echo "Deployment complete!"