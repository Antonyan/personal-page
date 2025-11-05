# Customization Guide

This guide will help you personalize the portfolio website with your own information.

## Quick Start Checklist

- [ ] Update contact information
- [ ] Replace metrics with your own numbers
- [ ] Customize case studies
- [ ] Update tech stack and skills
- [ ] Add your testimonials
- [ ] Update social media links
- [ ] Replace placeholder text

## 1. Contact Information & Social Links

### Footer.tsx & Leadership.tsx

**File**: `components/Footer.tsx` and `components/Leadership.tsx`

Update the following:

```typescript
// In Footer.tsx (line 5-10)
const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/in/YOUR_PROFILE', icon: 'linkedin' },
  { name: 'GitHub', href: 'https://github.com/YOUR_PROFILE', icon: 'github' },
  { name: 'Twitter', href: 'https://twitter.com/YOUR_PROFILE', icon: 'twitter' },
  { name: 'Email', href: 'mailto:YOUR_EMAIL@example.com', icon: 'email' },
]

// In Leadership.tsx (line 143-160)
// Update email, LinkedIn, and calendar links
```

## 2. Metrics & Impact Numbers

### ImpactDashboard.tsx

**File**: `components/ImpactDashboard.tsx`

Update metrics array (line 6-39):

```typescript
const metrics = [
  {
    value: YOUR_NUMBER,
    suffix: 'x',
    label: 'Your Metric Label',
    description: 'Description of your achievement',
    color: 'from-blue-500 to-cyan-500',
  },
  // Add more metrics...
]
```

### Hero.tsx

**File**: `components/Hero.tsx`

Update quick stats (line 98-110):
```typescript
<div className="text-3xl font-bold gradient-text">YOUR_NUMBER</div>
<div className="text-sm text-gray-600">Your Label</div>
```

## 3. Case Studies

### CaseStudies.tsx

**File**: `components/CaseStudies.tsx`

Replace the `caseStudies` array (line 5-63) with your own projects:

```typescript
{
  id: 1,
  title: 'Your Project Title',
  challenge: 'What problem did you solve?',
  solution: 'How did you solve it?',
  impact: [
    'Measurable result 1',
    'Measurable result 2',
    'Measurable result 3',
  ],
  tech: ['Tech1', 'Tech2', 'Tech3'],
  category: 'AI/ML', // or 'Leadership', 'Architecture'
  color: 'from-blue-500 to-cyan-500',
}
```

## 4. Technical Skills

### TechnicalDNA.tsx

**File**: `components/TechnicalDNA.tsx`

Update `techStack` object (line 5-37):

```typescript
const techStack = {
  'Your Category': [
    {
      name: 'Skill Name',
      level: 90, // 0-100
      projects: ['Project1', 'Project2']
    },
    // More skills...
  ],
}
```

Update architecture patterns (line 39-63):
```typescript
{
  name: 'Pattern Name',
  description: 'Description of the pattern',
  usedIn: 'Where you used it',
}
```

Update tools/technologies list (line 85-107):
```typescript
['Tool1', 'Tool2', 'Tool3', ...]
```

## 5. Leadership Content

### Leadership.tsx

**File**: `components/Leadership.tsx`

Update leadership principles (line 5-35):
```typescript
{
  title: 'Your Framework/Principle',
  description: 'What it is',
  impact: 'What impact it had',
  icon: '🎯', // Choose an emoji
}
```

Update testimonials (line 37-64):
```typescript
{
  quote: 'Testimonial text',
  author: 'Person Name',
  company: 'Company Name',
  role: 'Category label',
}
```

Update blog posts (line 66-93):
```typescript
{
  title: 'Article Title',
  excerpt: 'Brief description',
  date: '2024',
  readTime: '10 min',
  category: 'Category',
}
```

## 6. Hero Section

### Hero.tsx

**File**: `components/Hero.tsx`

Update rotating roles (line 5-10):
```typescript
const roles = [
  'Your Role 1',
  'Your Role 2',
  'Your Role 3',
]
```

Update main heading (line 37-40):
```typescript
<h1>
  Your Main Headline
  <span className="gradient-text">Highlighted Words</span>
</h1>
```

Update description (line 63-68):
```typescript
<p>
  Your elevator pitch and key achievements summary
</p>
```

## 7. SEO & Metadata

### layout.tsx

**File**: `app/layout.tsx`

Update metadata (line 4-11):
```typescript
export const metadata: Metadata = {
  title: 'Your Name - Your Title',
  description: 'Your unique value proposition and key achievements',
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  authors: [{ name: 'Your Name' }],
}
```

## 8. Colors & Branding

### tailwind.config.ts

**File**: `tailwind.config.ts`

Customize colors (line 9-19):
```typescript
colors: {
  primary: {
    // Customize your primary color shades
    500: '#YOUR_COLOR',
    600: '#YOUR_DARKER_COLOR',
  },
}
```

### globals.css

**File**: `app/globals.css`

Update gradient text colors (line 51-55):
```css
.gradient-text {
  background: linear-gradient(135deg, #YOUR_COLOR1 0%, #YOUR_COLOR2 100%);
}
```

## 9. Navigation

### Navigation.tsx

**File**: `components/Navigation.tsx`

Update navigation items (line 5-11):
```typescript
const navItems = [
  { name: 'Section Name', href: '#section-id' },
  // More items...
]
```

Update logo/name (line 41-47):
```typescript
<motion.a href="#" className="...">
  Your Name
</motion.a>
```

## 10. Advanced Customization

### Adding New Sections

1. Create a new component in `/components` folder
2. Import it in `app/page.tsx`
3. Add it to the page between existing sections
4. Add navigation link in `Navigation.tsx`

### Modifying Animations

All animations use Framer Motion. Common patterns:

```typescript
// Fade in
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}

// Slide up
initial={{ opacity: 0, y: 50 }}
animate={{ opacity: 1, y: 0 }}

// Scale
initial={{ scale: 0.9 }}
animate={{ scale: 1 }}
```

### Changing Fonts

In `app/globals.css`, update the font-family:

```css
body {
  font-family: 'Your Font', sans-serif;
}
```

Then add the font via Google Fonts in `app/layout.tsx`.

## Common Issues

### Build Errors
- Make sure all single quotes in contractions use `&apos;` (e.g., `Let&apos;s`)
- Ensure all images have alt text
- Check that all links have proper href attributes

### Styling Issues
- Clear `.next` cache: `rm -rf .next && npm run dev`
- Restart dev server after config changes
- Check Tailwind classes are spelled correctly

### Animation Issues
- Ensure Framer Motion is imported: `import { motion } from 'framer-motion'`
- Use 'use client' directive at top of files with animations
- Check viewport prop on `whileInView` animations

## Testing Your Changes

1. **Development**: `npm run dev` - See changes instantly
2. **Production Build**: `npm run build` - Test for errors
3. **Preview**: `npm run start` - Preview production build locally

## Need Help?

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/

Remember to commit your changes regularly with git!
