#!/bin/bash

# Create directories if they don't exist
mkdir -p public/images/projects

# Download and optimize images
declare -a images=(
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    "https://images.unsplash.com/photo-1483058712412-4245e9b90334"
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
)

for i in "${!images[@]}"; do
    url="${images[$i]}"
    filename="project-$(($i + 1))"
    
    # Download original image
    echo "Downloading image $((i + 1))..."
    curl -s "$url" -o "public/images/projects/$filename-original.jpg"
    
    # Optimize image - create multiple sizes
    echo "Optimizing image $((i + 1))..."
    
    # Large version (800px width)
    gm convert "public/images/projects/$filename-original.jpg" \
        -resize 800x \
        -quality 80 \
        -strip \
        "public/images/projects/$filename-800.webp"
    
    # Medium version (400px width)
    gm convert "public/images/projects/$filename-original.jpg" \
        -resize 400x \
        -quality 80 \
        -strip \
        "public/images/projects/$filename-400.webp"
    
    # Remove original
    rm "public/images/projects/$filename-original.jpg"
    
    echo "Completed image $((i + 1))"
done

echo "All images have been optimized!"
