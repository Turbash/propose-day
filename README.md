# Propose Day Website 2026 💕

A beautiful, interactive Propose Day website inspired by Rose Day designs, built with React, TypeScript, Vite, Tailwind CSS, and featuring a stunning circular carousel for your love proposal presentation. Nice website on a tragic day, really really really tragic day. Such a sad day. such a sad day.

## ✨ Features

### Complete Multi-Page Experience

**Page 1 - Opening Quote** 
- Animated starry background
- Romantic opening quote
- Auto-advances to next page

**Page 2 - Do You Wanna Hear It?** 🥺
- Interactive YES/NO buttons
- NO button runs away when clicked!
- Funny cat GIF warnings after multiple NO clicks
- Floating hearts animation

**Page 3 - Warning Page** ⚠️
- Caution tape design
- "Romantic Proposal Incoming" warning
- Continue button to proceed

**Page 4 - Open The Envelope** 💌
- Beautiful envelope animation
- Floating hearts background
- Click to open

**Page 5 - Love Letter** 💝
- Heartfelt customizable letter
- Beautiful typography
- Animated entrance

**Page 6 - Choose Your Experience** 🎁
- Three interactive options:
  - 🌹 100 Roses
  - 📸 Our Memories (Photo Gallery)
  - 💝 Special PPT (Circular Carousel)
- Skip to final question button

**Page 7 - 100 Roses** 🌹
- Grid of 100 animated roses
- Falling petals animation
- Romantic message

**Page 8 - Photo Memories** 📸
- Polaroid-style photo gallery
- Rotated cards that hover and expand
- Fullscreen photo view on click
- Customizable photos

**Page 9 - Love Proposal PPT** 💕
- Circular carousel gallery
- 10 PPT slides with smooth GSAP animations
- Auto-play with 4.5s intervals
- Navigation buttons and thumbnails
- Beautiful pink gradient background

**Page 10 - The Final Question** 💍
- "Will you be mine forever?"
- YES button (leads to celebration)
- NO button (runs away!)
- Victory confetti animation when YES is clicked

## Tech Stack

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite 6
- **Routing:** React Router DOM
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion + GSAP
- **Icons:** Lucide React
- **Utilities:** clsx, tailwind-merge, class-variance-authority

## Setup Instructions

### 1. Install Dependencies

```bash
cd propose-day-website
npm install
```

### 2. Customize Your Content

Edit `src/config.ts` to personalize your website:

```typescript
export const CONFIG = {
  personName: 'Beautiful',  // Change to your loved one's name
  petName: 'Love',          // Your pet name for them
  
  // Customize all text for each page
  openingQuote: 'Your custom quote',
  page2: { /*...*/ },
  // ... and more
}
```

### 3. Add Your Photos

Replace photos in `src/config.ts` > `photos` array with your own images:

```typescript
photos: [
  { url: 'your-image-url', label: 'Your Caption' },
  // Add 6 photos total
]
```

### 4. Add Your PPT Slides

Place your 10 love proposal PPT slide images in:
```
public/slides/
  ├── 1.jpg
  ├── 2.jpg
  ├── 3.jpg
  ...
  └── 10.jpg
```

### 5. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` to see your website!

### 6. Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## Customization Guide

### Change Colors

The website uses a romantic pink/rose/red theme. To customize:

**Global Theme Colors:**  
Edit `src/index.css` CSS variables:
```css
:root {
  --primary: 330 81% 60%;  /* Pink */
  --secondary: 340 85% 70%;  /* Rose */
  /* etc */
}
```

**Component Colors:**  
Change Tailwind classes in component files:
- `from-pink-500` → `from-blue-500`
- `via-rose-500` → `via-purple-500`
- `to-red-500` → `to-indigo-500`

### Modify Page Flow

To change page order or add/remove pages:

1. Edit routes in `src/App.tsx`
2. Update navigation buttons in page components
3. Modify `src/config.ts` accordingly

### Customize Animations

**Framer Motion animations:**  
Each page component uses `motion` components. Adjust:
```typescript
<motion.div
  initial={{ y: 30, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5 }}
>
```

**Carousel speed:**  
In `src/components/ui/carousel-circular-image-gallery.tsx`:
```typescript
autoplayTimer.current = window.setInterval(next, 4500) // Change 4500ms
```

### Add More Photos

In `src/config.ts`, expand the `photos` array and update the grid in `Page8Memories.tsx`.

## Project Structure

```
propose-day-website/
├── public/
│   └── slides/              # PPT slide images (1.jpg - 10.jpg)
├── src/
│   ├── components/
│   │   └── ui/
│   │       └── carousel-circular-image-gallery.tsx  # Circular carousel
│   ├── pages/
│   │   ├── Page1Opening.tsx      # Opening quote
│   │   ├── Page2DoYouWanna.tsx   # Interactive yes/no
│   │   ├── Page3Warning.tsx      # Warning page
│   │   ├── Page4Envelope.tsx     # Envelope animation
│   │   ├── Page5Letter.tsx       # Love letter
│   │   ├── Page6Choose.tsx       # Choose experience
│   │   ├── Page7Roses.tsx        # 100 roses
│   │   ├── Page8Memories.tsx     # Photo gallery
│   │   ├── Page9Presentation.tsx # PPT carousel
│   │   └── Page10Final.tsx       # Final question
│   ├── lib/
│   │   └── utils.ts             # Utility functions
│   ├── App.tsx                  # Router setup
│   ├── main.tsx                 # Entry point
│   ├── config.ts                # Configuration file
│   └── index.css                # Global styles
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Page Flow

```
Start → Page 1 (Quote) → Page 2 (Yes/No) → Page 3 (Warning) → 
Page 4 (Envelope) → Page 5 (Letter) → Page 6 (Choose)
                                            ↓
                                    ┌───────┼───────┐
                                    ↓       ↓       ↓
                               Roses   Memories   PPT
                               (Page7)  (Page8)  (Page9)
                                    ↓       ↓       ↓
                                    └───────┼───────┘
                                            ↓
                                      Page 10 (Final Question)
```

## Interactive Features

### Running NO Button
- Page 2 and Page 10 have NO buttons that run away when clicked
- After multiple clicks, funny warnings appear
- Eventually forces user to click YES 😄

### Animated Backgrounds
- Floating hearts (multiple pages)
- Falling rose petals (Roses page)
- Animated gradient blobs (all pages)
- Twinkling stars (Opening page)

### Photo Gallery
- Polaroid-style cards with rotation
- Tape decoration on top
- Hover effects with scale and straighten
- Click to view fullscreen
- Random rotation on each card

### Circular Carousel
- 10 PPT slides with circular morphing animation
- GSAP-powered smooth transitions
- Click thumbnails to jump to any slide
- Previous/Next navigation buttons
- Auto-play every 4.5 seconds
- Pause on interaction

## Deployment

### Option 1: Netlify (Easiest)
1. Build: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag & drop the `dist` folder
4. Get your live URL!

### Option 2: Vercel
1. Push code to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Deploy automatically

### Option 3: GitHub Pages
```bash
npm run build
# Push dist folder to gh-pages branch
```

## Browser Support

- Chrome (latest) ✅
- Firefox (latest) ✅
- Safari (latest) ✅
- Edge (latest) ✅
- Mobile browsers ✅

## Performance

- Fast Vite HMR (Hot Module Replacement)
- Optimized builds with code splitting
- Lazy-loaded animations
- Responsive images
- CSS purging with Tailwind

## Tips

1. **High-Quality Images:** Use 1920x1080 or similar for PPT slides
2. **Photo Size:** Optimize photos to under 500KB each
3. **Testing:** Test on multiple devices before sharing
4. **Backup:** Keep original config.ts as backup before customizing
5. **Preview:** Always preview before deploying

## Troubleshooting

**Images not showing?**
- Check file paths in config.ts and public/slides folder
- Ensure image filenames match exactly (1.jpg, 2.jpg, etc.)

**Animations not working?**
- Clear browser cache
- Check JavaScript console for errors
- Ensure GSAP scripts loaded correctly

**Routing issues?**
- Make sure React Router is installed
- Check that all page components are imported in App.tsx

## Credits

- Built with ❤️ for Propose Day 2026
- Inspired by Rose Day website designs
- Circular carousel from shadcn/ui patterns
- Icons by Lucide React
- Animations by Framer Motion & GSAP

## License

Free to use for personal romantic proposals! 💕

---

**Made with 💕 for expressing your love on Propose Day 2026!**

Share this with someone special and make their day unforgettable! ✨
