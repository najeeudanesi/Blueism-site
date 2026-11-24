#!/bin/sh
# Builds the site and packages it for Hostinger: everything inside
# build-hostinger/ goes into public_html; blueism-hostinger.zip is the same as a zip.
set -e
cd "$(dirname "$0")/.."

npm run build

rm -rf build-hostinger blueism-hostinger.zip
cp -R dist build-hostinger
cp -R hostinger/. build-hostinger/
rm -f build-hostinger/_redirects           # Netlify-only file
find build-hostinger -name .DS_Store -delete

(cd build-hostinger && zip -qr ../blueism-hostinger.zip . -x '.DS_Store')
echo "Ready: build-hostinger/ and blueism-hostinger.zip"
