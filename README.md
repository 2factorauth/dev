# [WIP] Restyling of twofactorauth.org

This repository is a rework of the current twofactorauth.org website. It's currently in development and not ready to be used to serve content.

## Installation
Ubuntu:
```bash
sudo snap install ruby --classic
sudo apt install webp npm
npm i babel-minify
bundle install --path vendor/bundle
```

Windows Subsystem for Linux (WSL)
```bash
sudo apt install build-essential ruby-bundler ruby-dev make gcc g++ zlib1g-dev npm webp
npm i babel-minify
bundle install --path vendor/bundle
```

MacOS (_Requires Xcode_)
```bash
# Install homebrew
xcode-select --install
curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh

# Install ruby, webp & nodejs(npm)
brew install ruby
brew install webp
brew install nodejs
echo 'export PATH="/usr/local/opt/ruby/bin:$PATH"' >> ~/.bash_profile

# Install Bundler and gem dependencies
gem install bundler
bundle install --path vendor/bundle
```

## Running locally
Ubuntu/WSL/MacOS:
```bash
# Generating regional sites (Optional)
ruby ./_deployment/regions.rb

# Minify JS (Optional)
./_deployment/minify-js.sh

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
