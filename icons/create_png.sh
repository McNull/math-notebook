#!/bin/bash

# Define the sizes for the icons
sizes=(48 96 144 192 256)

# Loop over the sizes and create the icons
for size in "${sizes[@]}"; do
    echo convert icon.psd[0] -resize ${size}x${size} icon-${size}x${size}.png
    convert icon.psd[0] -resize ${size}x${size} icon-${size}x${size}.png
done