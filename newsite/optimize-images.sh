#!/bin/bash
# Optimize/resize images using macOS sips (no install required)
# Run AFTER download-images.sh
set -e

cd "$(dirname "$0")/images"

echo "Optimizing images..."

# Logo — resize to max 600px wide
echo "  Resizing logo to max 600px wide..."
sips --resampleWidth 600 Heliotrope-Imaginal-logo.horizongal.black-text.png

# AllStarTeams program logo — resize to max 400px wide
echo "  Resizing AllStarTeams logo to max 400px wide..."
sips --resampleWidth 400 new-ast-logo.png

# Background image — resize to max 1600px wide
echo "  Resizing background image to max 1600px wide..."
sips --resampleWidth 1600 field-with-sunflowers-against-blue-sky-beautiful-landscape-banner.jpg

# Profile photos — resize to max 400x400
echo "  Resizing profile photos to max 400x400..."
for photo in lejla-bilal.jpeg rachel.png cassio.png Mark-Tippin.jpeg; do
  echo "    $photo"
  sips --resampleWidth 400 "$photo"
done

# Already reasonable — no resize needed:
#   IA-NEW-LOGO.png           (525x141)
#   Gianluca-Gambatesa.jpeg   (400x400)
#   Brad-Topliff.jpeg         (400x400)

echo "Optimization complete."
