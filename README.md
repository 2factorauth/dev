# [WIP] Restyling of twofactorauth.org

This repository is a rework of the current twofactorauth.org website. It's currently in development and not ready to be used to serve content.

## Installation
Ubuntu/WSL:
```bash
snap install ruby --classic # For WSL: apt-get install ruby-full
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

## Directory map
```YAML
- .github: Files used by GitHub
- _data: Contains all data used when compiling the site
- _deployment: Contains tests and scripts for generating subcomponents of the site.
- _includes: HTML snippets used by one or more pages
- _layouts: Site templates
- api: twofactorauth.org/api/
- css: All CSS/SASS for the site
- img: All images
- js: All javascript
- notes: twofactorauth.org/notes/
```
