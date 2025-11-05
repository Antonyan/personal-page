# How to Add Your Professional Photo

Your portfolio has been updated to display your professional photo in the Hero section with a beautiful gradient border and animated glow effect!

## Quick Steps

### 1. Save Your Photo

Save your professional photo as:
```
/Users/artemantonenko/Documents/Development/js/artem-maggadda/ai-leader-portfolio/public/images/profile.jpg
```

**OR** use the command line:
```bash
# Navigate to the project
cd /Users/artemantonenko/Documents/Development/js/artem-maggadda/ai-leader-portfolio

# Copy your photo (replace SOURCE_PATH with your photo location)
cp /path/to/your/photo.jpg public/images/profile.jpg
```

### 2. Photo Requirements

**Recommended Specifications:**
- **Format**: JPG or PNG
- **Dimensions**: 900x1100px or similar portrait ratio (aspect ratio ~0.82)
- **File Size**: Under 500KB for optimal loading
- **Quality**: High resolution for crisp display
- **Background**: Clean, professional background (the white background in your current photo is perfect!)

**Your Current Photo:**
- ✅ Professional attire (white shirt)
- ✅ Clean white background
- ✅ Good lighting
- ✅ Natural pose with hand gestures
- ✅ Clear facial features

### 3. File Naming Options

The Hero component looks for: `/images/profile.jpg`

If you want to use a different name or format:

**Edit** `components/Hero.tsx` line 157:
```typescript
// Change from:
src="/images/profile.jpg"

// To your filename:
src="/images/your-photo-name.png"
```

### 4. View Your Photo

Once you save the photo:

1. The dev server will hot-reload automatically
2. Visit: http://localhost:3002
3. Your photo will appear in the Hero section with:
   - Gradient border (blue → purple → pink)
   - Animated background glow
   - Floating accent elements
   - Hover scale effect

## What Was Changed

### Updated Files:

1. **components/Hero.tsx**
   - Added Next.js Image component
   - Replaced abstract shapes with professional photo
   - Added gradient border container
   - Added animated background glow
   - Added floating accent elements

2. **next.config.js**
   - Enabled image optimization
   - Added AVIF and WebP format support

3. **Created**:
   - `public/images/` directory (ready for your photo)

## Design Features

Your photo will be displayed with:

### Gradient Border
- Blue → Purple → Pink gradient (1px border)
- Matches your site's color scheme
- Creates premium, modern look

### Animated Glow
- Pulsing blue-purple glow behind photo
- Subtle scaling animation (1 → 1.1 → 1)
- Opacity animation for smooth effect

### Floating Accents
- Cyan accent (top-right) - slow float up/down
- Pink accent (bottom-left) - slow float down/up
- Adds depth and visual interest

### Hover Effect
- Photo scales to 1.02x on hover
- Smooth transition (0.3s)
- Interactive feel

## Responsive Behavior

- **Desktop (>768px)**: Photo displays on right side of Hero
- **Mobile (<768px)**: Photo hidden to prioritize content
- **Tablet**: Photo displays at reduced size

## Image Optimization

Next.js automatically optimizes your photo:
- ✅ Converts to AVIF/WebP for modern browsers
- ✅ Generates multiple sizes for responsive display
- ✅ Lazy loads for better performance
- ✅ Adds blur placeholder while loading

## Alternative: Using a Different Photo

If you want to use multiple photos or change the design:

### Option 1: Circular Photo
Replace the `rounded-3xl` classes with `rounded-full`:

```typescript
className="relative w-[450px] h-[450px] rounded-full ..."
```

### Option 2: Different Size
Adjust width and height:

```typescript
className="relative w-[400px] h-[500px] rounded-3xl ..."
```

### Option 3: No Border
Remove the gradient border wrapper:

```typescript
<Image
  src="/images/profile.jpg"
  alt="Artem Antonenko"
  width={450}
  height={550}
  className="rounded-3xl shadow-2xl"
/>
```

## Troubleshooting

### Photo Doesn't Show
1. Check file path: `public/images/profile.jpg`
2. Check file extension matches (.jpg vs .png)
3. Restart dev server: `npm run dev`
4. Check browser console for errors

### Photo Looks Distorted
1. Adjust the `object-cover` class:
   - `object-cover` - fills container, may crop
   - `object-contain` - fits container, may show padding
   - `object-fill` - stretches to fit

### Photo Too Large/Small
1. Edit width/height in Hero.tsx:
```typescript
className="relative w-[YOUR_WIDTH] h-[YOUR_HEIGHT] ..."
```

### Slow Loading
1. Compress your photo (use tools like TinyPNG)
2. Ensure file size < 500KB
3. Use JPG instead of PNG for photos

## Before/After

### Before
- Abstract floating shapes
- Generic tech visualization
- No personal branding

### After
- ✅ Your professional photo
- ✅ Personal brand identity
- ✅ Recruiter recognition
- ✅ Premium gradient styling
- ✅ Animated effects

## Next Steps

1. **Save your photo** to `public/images/profile.jpg`
2. **Refresh browser** to see it live
3. **Adjust sizing** if needed (edit Hero.tsx)
4. **Test on mobile** to ensure responsive behavior
5. **Take screenshots** for LinkedIn/resume

## Tips for Best Results

1. **Lighting**: Ensure good, even lighting on your face
2. **Background**: Keep it clean and uncluttered (your white background is perfect)
3. **Cropping**: Leave some space above head and below shoulders
4. **Expression**: Professional but approachable (your current expression is great!)
5. **Attire**: Business casual or formal (white shirt looks professional)

---

**Your photo is now integrated into your portfolio!** Just add the image file and you're ready to go! 📸

If you need help or want to customize the design further, all the code is in `components/Hero.tsx` lines 127-194.
