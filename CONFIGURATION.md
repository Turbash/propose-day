# Propose Day Website - Configuration Guide 📝

## Quick Customization

All customization can be done in **one file**: `src/config.ts`

## Step-by-Step Configuration

### 1. Personal Names

```typescript
personName: 'Beautiful',  // Their name or nickname
petName: 'Love',          // Your special name for them
```

**Examples:**
- `personName: 'Sarah'`
- `personName: 'My Queen'`
- `petName: 'Sweetheart'`

### 2. Opening Quote (Page 1)

```typescript
openingQuote: 'Will you be the reason I smile forever?',
```

**Ideas:**
- "In your eyes, I found my home"
- "You are my today and all of my tomorrows"
- "Every love story is beautiful, but ours is my favorite"

### 3. Page 2 - Teaser

```typescript
page2: {
  title: 'hey! i have something special to ask you 🥺',
  subtitle: 'do you wanna hear it??',
  gif: 'https://...',  // Cute couple GIF URL
  note: 'just a little question...'
}
```

### 4. Page 3 - Warning Lines

```typescript
page3: {
  title: 'ARE YOU READY FOR THIS?? 👀',
  warningTitle: '⚠️ WARNING ⚠️',
  warningLines: [
    'EXTREME',
    'ROMANTIC',
    'PROPOSAL',
    'INCOMING',
    'PROCEED AT YOUR',
    'HEART\'S RISK 💕'
  ]
}
```

Make it funny or dramatic!

### 5. Page 4 - Envelope

```typescript
page4: {
  title: 'Open this letter',
  subtitle: 'I poured my heart into it'
}
```

### 6. Page 5 - Love Letter

```typescript
page5: {
  greeting: 'My Dearest,',
  letter: `Your heartfelt message here.
  
Use \\n\\n for new paragraphs.

Express your feelings genuinely.`,
  signature: 'Forever Yours'
}
```

**Tips:**
- Be genuine and heartfelt
- Mention specific memories
- Express what they mean to you
- Keep it personal and honest

### 7. Page 6 - Experience Options

```typescript
page6: {
  title: '💕 Choose Your Experience 💕',
  subtitle: 'Pick what you\'d like to see first',
  options: [
    { id: 'roses', emoji: '🌹', title: '100 Roses', subtitle: 'For You' },
    { id: 'memories', emoji: '📸', title: 'Our Memories', subtitle: 'Together' },
    { id: 'presentation', emoji: '💝', title: 'Special PPT', subtitle: 'Love Story' }
  ]
}
```

### 8. Photos (Page 8 - Memories)

```typescript
photos: [
  {
    url: 'https://images.unsplash.com/photo-...',  // Your photo URL
    label: 'First Photo'  // Caption
  },
  // Add 6 photos total
]
```

**How to add your photos:**

1. **Option A: Use Imgur or similar**
   - Upload your photos to imgur.com
   - Get direct image link
   - Paste URL in config

2. **Option B: Use local images**
   - Place photos in `public/my-photos/`
   - Use: `url: '/my-photos/photo1.jpg'`

3. **Option C: Use stock photos**
   - Get URLs from Unsplash.com
   - Search for couple/love photos
   - Use the image URLs

**Photo tips:**
- Use 6 photos for best layout
- Horizontal (landscape) photos work best
- Keep file size under 500KB each
- Use meaningful captions

### 9. Final Page

```typescript
finalPage: {
  title: 'So... Will You Say Yes?',
  question: 'Will you be mine forever?',
  gif: 'https://...',  // Proposal GIF
  message: 'This is my heart asking yours... 💕'
}
```

## Finding Good GIFs

**Best sites for romantic GIFs:**
1. **Giphy.com** - Search "cute couple" or "proposal"
2. **Tenor.com** - Search "romantic" or "love"
3. **Pinterest** - Find GIF URLs

**How to get GIF URL:**
1. Find GIF you like
2. Right-click → "Copy image address"
3. Paste in config

## Example Customizations

### Sweet & Simple

```typescript
personName: 'Emma'
petName: 'Sunshine'
openingQuote: 'You light up my world'
```

### Funny & Playful

```typescript
personName: 'Partner in Crime'
petName: 'Troublemaker'
openingQuote: 'Ready for a lifetime of adventures?'
```

### Romantic & Deep

```typescript
personName: 'My Forever'
petName: 'Soulmate'
openingQuote: 'In you, I found everything I never knew I needed'
```

## Advanced: Change Page Order

Edit `src/App.tsx` to change route order or skip pages:

```typescript
<Routes>
  <Route path="/" element={<AutoRedirect />} />
  <Route path="/page1" element={<Page1Opening />} />
  // Skip page 2 by not adding it
  // Or change route names
</Routes>
```

## Testing Your Changes

1. Save `config.ts`
2. Check browser (auto-refreshes)
3. Click through all pages
4. Test on mobile view
5. Share with someone special! 💕

## Common Mistakes

❌ **Don't forget quotes around text**
```typescript
personName: Sarah  // WRONG
personName: 'Sarah'  // CORRECT
```

❌ **Don't forget commas between array items**
```typescript
photos: [
  { url: '...', label: 'Photo 1' }  // Missing comma
  { url: '...', label: 'Photo 2' }  // WRONG
]
```

✅ **Correct:**
```typescript
photos: [
  { url: '...', label: 'Photo 1' },  // Comma here
  { url: '...', label: 'Photo 2' }
]
```

❌ **Don't break line in quotes without \\n**
```typescript
letter: 'Line 1
Line 2'  // WRONG
```

✅ **Correct:**
```typescript
letter: 'Line 1\\n\\nLine 2'  // Use \\n\\n for paragraphs
```

## Need Help?

1. Check browser console for errors (F12)
2. Make sure syntax is correct
3. Test incrementally (save and check after each change)
4. Keep a backup of original config

---

**Happy Customizing! Make it uniquely yours! 💕**
