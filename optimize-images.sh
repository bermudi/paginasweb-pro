#!/bin/bash

# Create backup directory
mkdir -p public/images/original_backup

# Backup original images
cp public/*.{png,webp,ico} public/images/original_backup/ 2>/dev/null || true

# Optimize PNG images
for img in public/*.png; do
    if [ -f "$img" ]; then
        echo "Optimizing $img..."
        gm convert "$img" -strip -quality 85 -resize "$(identify -format "%wx%h" "$img")\>" "$img"
    fi
done

# Optimize WebP images
for img in public/*.webp; do
    if [ -f "$img" ]; then
        echo "Optimizing $img..."
        gm convert "$img" -strip -quality 85 "$img"
    fi
done

# Create WebP versions of PNG images
for img in public/*.png; do
    if [ -f "$img" ]; then
        webp_name="${img%.*}.webp"
        echo "Creating WebP version: $webp_name"
        gm convert "$img" -strip -quality 85 "$webp_name"
    fi
done

# Optimize favicon
if [ -f "public/favicon.ico" ]; then
    echo "Optimizing favicon.ico..."
    gm convert "public/favicon.ico" -strip "public/favicon.ico"
fi

echo "Image optimization complete!"
