# Propose Day Website - Quick Start Guide

## 🚀 Getting Started

Your Propose Day website is now ready! Follow these simple steps:

### 1. View the Website

The development server is running at: **http://localhost:5173**

Open this URL in your browser to see your beautiful Propose Day website.

### 2. What You'll See

- **Landing Page**: A stunning page with animated hearts, gradient backgrounds, and information about Propose Day
- **Interactive Carousel**: Click the "View Love Proposal Presentation" button to see your PPT slides in a beautiful circular carousel
- **Navigation**: Use the circular thumbnails at the bottom or the Previous/Next buttons to navigate through slides

## 📁 Project Files

```
propose-day-website/
├── public/
│   └── slides/           ← Your 10 PPT slides (1.jpg - 10.jpg)
├── src/
│   ├── components/ui/    ← Carousel component
│   ├── App.tsx           ← Landing page
│   └── index.css         ← Global styles
└── package.json
```

## 🎨 Customization Guide

### Change Text Content

Edit `src/App.tsx` to modify:
- Page title and headings
- Description text
- Button text
- Tips and advice cards

### Change Colors

The website uses a romantic pink/rose/red color scheme. To customize:

1. **Component colors**: Edit gradient classes in `src/App.tsx`
   - `from-pink-500` → `from-blue-500`
   - `via-rose-500` → `via-purple-500`
   - `to-red-500` → `to-indigo-500`

2. **Global theme**: Edit `src/index.css` CSS variables

### Modify Carousel Behavior

Edit `src/components/ui/carousel-circular-image-gallery.tsx`:

```typescript
// Change autoplay speed (line ~125)
autoplayTimer.current = window.setInterval(next, 4500) // 4500ms = 4.5 seconds

// Add more slides
const images: ImageData[] = [
  { title: "Slide 1", url: "/slides/1.jpg" },
  // Add more here...
]
```

### Replace PPT Slides

Simply replace the images in `public/slides/` folder with your own:
- Keep filenames: 1.jpg, 2.jpg, 3.jpg, etc.
- Recommended size: 1920x1080px or similar 16:9 aspect ratio

## 🔧 Available Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 🌐 Deployment Options

### Option 1: Netlify (Easiest)
1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag & drop the `dist` folder

### Option 2: Vercel
1. Push code to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Deploy automatically

### Option 3: GitHub Pages
```bash
npm run build
# Push the dist folder to gh-pages branch
```

## 🎯 Features

✅ Fully responsive design
✅ Animated floating hearts background
✅ Circular carousel with GSAP animations
✅ Auto-play with 4.5-second intervals
✅ Click thumbnails to jump to any slide
✅ Previous/Next navigation buttons
✅ Beautiful gradient UI
✅ TypeScript for type safety
✅ Fast Vite build system

## 🐛 Troubleshooting

**Slides not showing?**
- Verify files exist in `public/slides/`
- Check browser console for errors
- Refresh the page

**Port already in use?**
- Change port in `vite.config.ts`
- Or kill the process using port 5173

**Styles not applying?**
- Make sure Tailwind CSS is configured
- Check `tailwind.config.js` content paths

## 📱 Mobile Responsive

The website automatically adapts to:
- Desktop (1920px+)
- Tablet (768px - 1919px)
- Mobile (320px - 767px)

## 💡 Tips for Best Results

1. **Image Quality**: Use high-resolution images (1920x1080 recommended)
2. **Image Format**: JPG works best, but PNG is also supported
3. **File Size**: Optimize images to keep them under 500KB each
4. **Browser**: Works best in Chrome, Firefox, Safari, Edge (latest versions)

## 🎉 Share Your Love

Once deployed, share your Propose Day website URL with your special someone!

---

**Need help?** Check the main README.md file for more detailed information.

**Made with 💕 for Propose Day 2026**
