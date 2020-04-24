# [WIP] Restyling of twofactorauth.org

This repository is a rework of the current twofactorauth.org website. It's currently in development and not ready to be used to serve content.

## Installation
Ubuntu/WSL:
```bash
snap install ruby --classic #(Unless you already have Ruby installed)
npm i babel-minify
sudo apt install webp
bundle install --path vendor/bundle
```

## Running locally
```bash
# Generating regional sites (Optional)
ruby ./_deployment/regions.rb

# Minify JS (Optional)
./_deployment/minify-js

# Generate WebP images
./_deployment/webp.sh

# Building the site
JEKYLL_ENV=production bundle exec jekyll build
```