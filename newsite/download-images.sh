#!/bin/bash
# Download all images from Gamma CDN into images/ directory
set -e

cd "$(dirname "$0")"
mkdir -p images

echo "Downloading images..."

curl -L -o images/Heliotrope-Imaginal-logo.horizongal.black-text.png \
  "https://cdn.gamma.app/d8jz92w05htvuyh/4d3cfe01b11443cc9e5b8c9cf492175a/original/Heliotrope-Imaginal-logo.horizongal.black-text.png"

curl -L -o images/new-ast-logo.png \
  "https://cdn.gamma.app/d8jz92w05htvuyh/82b688c4caf04dd2a9e418b354bb457e/original/new-ast-logo.png"

curl -L -o images/IA-NEW-LOGO.png \
  "https://cdn.gamma.app/d8jz92w05htvuyh/da574a879ed44efeb79960bd78f11660/original/IA-NEW-LOGO.png"

curl -L -o images/field-with-sunflowers-against-blue-sky-beautiful-landscape-banner.jpg \
  "https://cdn.gamma.app/d8jz92w05htvuyh/fa82614433094993b25f12d6b7352d00/optimized/field-with-sunflowers-against-blue-sky-beautiful-landscape-banner.jpg"

curl -L -o images/lejla-bilal.jpeg \
  "https://cdn.gamma.app/d8jz92w05htvuyh/e3c40dc703194ab3838bbca5186cba41/original/lejla-bilal.jpeg"

curl -L -o images/rachel.png \
  "https://cdn.gamma.app/d8jz92w05htvuyh/e5f7772554e94c64b9a7f5ca11d56c26/original/rachel.png"

curl -L -o images/Gianluca-Gambatesa.jpeg \
  "https://cdn.gamma.app/d8jz92w05htvuyh/01c6cf52acae448cac7b4275601f37e8/original/Gianluca-Gambatesa.jpeg"

curl -L -o images/Brad-Topliff.jpeg \
  "https://cdn.gamma.app/d8jz92w05htvuyh/e91c5a75b4c44f5eb2fd8ce4f7bc6a8d/original/Brad-Topliff.jpeg"

curl -L -o images/cassio.png \
  "https://cdn.gamma.app/d8jz92w05htvuyh/d02d6b9022904b8bbe2c9ddd0796153a/original/cassio.png"

curl -L -o images/Mark-Tippin.jpeg \
  "https://cdn.gamma.app/d8jz92w05htvuyh/0da708cd5ad34310b0553d297a4ae991/original/Mark-Tippin.jpeg"

echo "All images downloaded successfully."
