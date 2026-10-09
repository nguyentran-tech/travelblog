# Couple Travel Blog
## Overview
This project is purely for personal purpose. Initially, I wanted to make a website that stores our travel memories and showcases highlight images. When I first started this project, I had several thoughts like how could I manage and optimize image files to ensure low loading time while maintaining high quality images; how the overall design should look like; etc. I drew some wireframes and moodboards to turn my idea in the mind into a product, and I used Vercel to deploy it online.

## Live Demo
https://xnma.vercel.app/

## Features
- Destination carousel
- Day-by-day travel journals
- Responsive photo gallery
- Full-screen photo viewer
- Mobile-friendly interactions
- Interactive mascot welcome screen
- Responsive image optimization
- React Router navigation
- Direct URL support on Vercel

## Tech Stack
- React
- Vite
- Tailwind CSS
- React Router
- Embla Carousel
- page-mascot
- Vercel

## Project Structure
src/
── components/
── pages/
── assets/
── ...

## Challenges & Solutions
1. Image loading performance: I believe this is the primary challenge that I had to monitor throughout the development. My intention is to have around 10 images/day and a trip duration may be 7-10 days, so it is roughly more than 70 images. At first, I tried the original JPG/JPEG photos but it took quite some time for loading, so I did not accept it that way. After researching, I thought it may be better to use AVIF/WebP variants with an image optimization architecture like below:
  70+ original JPG/JPEG photos
  ↓
  image optimization script
  ↓
  AVIF + WebP
  ↓
  480 / 768 / 1200 / 2000 widths
  ↓
  ResponsiveImage
  ↓
  browser chooses appropriate size

2. Destination Carousel & Day Navigation: at first, I was considering to use GSAP for some scroll effects, but after trying, I felt that it was not really necessary to use GSAP. I decided to choose Embla Carousel library because I just needed smooth touch interaction while keeping it lightweight.
