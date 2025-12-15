# Committee Member Photos

## Overview
This folder contains profile photos for DHBA committee members displayed on the website.

---

## Photo Requirements

### Technical Specifications
- **Format:** JPG or PNG
- **Size:** 400x400 pixels (square)
- **File Size:** Under 200KB
- **Aspect Ratio:** 1:1 (square)
- **Background:** Professional, neutral background preferred

### Quality Guidelines
- **Resolution:** High quality, clear face
- **Lighting:** Well-lit, professional lighting
- **Framing:** Head and shoulders, centered
- **Expression:** Professional, friendly
- **Attire:** Business/formal attire

---

## File Naming Convention

Use the following format for consistency:
```
[position]-[lastname].jpg
```

### Examples:
- `president-baral.jpg`
- `senior-vp-dubey.jpg`
- `vp-giri.jpg`
- `general-secretary-thapa.jpg`
- `treasurer-thapa.jpg`

### Alternative Format:
```
member-[number].jpg
```
- `member-01.jpg` (President)
- `member-02.jpg` (Senior VP)
- `member-03.jpg` (VP)
- etc.

---

## Current Members (Top 5 Leadership)

### 1. President
- **Name:** Mr. Suresh Baral
- **File:** `president-baral.jpg` or `/members/suresh-baral.jpg`
- **Current:** Using `/placeholder-user.jpg`

### 2. Senior Vice President
- **Name:** Bhavishwar Dubey
- **File:** `senior-vp-dubey.jpg` or `/members/bhavishwar-dubey.jpg`
- **Current:** Using `/placeholder-user.jpg`

### 3. Vice President
- **Name:** Mr. Jitendra Giri
- **File:** `vp-giri.jpg` or `/members/jitendra-giri.jpg`
- **Current:** Using `/placeholder-user.jpg`

### 4. General Secretary
- **Name:** Mr. Sailendra Bikram Thapa
- **File:** `general-secretary-thapa.jpg` or `/members/sailendra-thapa.jpg`
- **Current:** Using `/placeholder-user.jpg`

### 5. Treasurer
- **Name:** Mr. Shalikram Thapa
- **File:** `treasurer-thapa.jpg` or `/members/shalikram-thapa.jpg`
- **Current:** Using `/placeholder-user.jpg`

---

## How to Add Photos

### Step 1: Prepare Photos
1. Collect professional photos of committee members
2. Crop to square (1:1 aspect ratio)
3. Resize to 400x400 pixels
4. Optimize file size (under 200KB)
5. Save as JPG or PNG

### Step 2: Add to Project
1. Place photos in `/public/members/` folder
2. Name files according to convention
3. Update `components/central-committee.tsx`

### Step 3: Update Component

Edit `components/central-committee.tsx`:

```tsx
const members: CommitteeMember[] = [
  { 
    position: "President", 
    name: "Mr. Suresh Baral", 
    phone: "9851040296", 
    photo: "/members/president-baral.jpg"  // Update this path
  },
  // ... other members
]
```

---

## Photo Optimization

### Using Online Tools
- **TinyPNG:** https://tinypng.com/
- **Squoosh:** https://squoosh.app/
- **ImageOptim:** https://imageoptim.com/

### Using Command Line (ImageMagick)
```bash
# Resize to 400x400
magick input.jpg -resize 400x400^ -gravity center -extent 400x400 output.jpg

# Optimize quality
magick input.jpg -quality 85 output.jpg
```

### Using Photoshop
1. Open image
2. Image → Image Size → 400x400px
3. File → Export → Save for Web
4. Quality: 80-85%
5. Format: JPEG

---

## Fallback Behavior

If a member photo is not available:
- System uses `/placeholder-user.jpg`
- No broken images
- Graceful degradation

### Code Implementation
```tsx
<Image
  src={member.photo || "/placeholder-user.jpg"}
  alt={member.name}
  width={96}
  height={96}
/>
```

---

## Photo Display

### Homepage
- **Size:** 96x96 pixels (24x24 in Tailwind)
- **Shape:** Circular with gradient border
- **Effect:** Scale on hover (110%)
- **Border:** Gradient from primary to accent

### About Page
- **Size:** Larger display (128x128 or more)
- **Layout:** Grid or list view
- **Details:** Full member information

---

## Best Practices

### Do's ✅
- Use professional headshots
- Ensure consistent lighting
- Maintain similar framing for all photos
- Use neutral backgrounds
- Keep file sizes optimized
- Use descriptive file names

### Don'ts ❌
- Don't use casual/informal photos
- Don't use low-resolution images
- Don't use photos with busy backgrounds
- Don't exceed 200KB file size
- Don't use inconsistent aspect ratios

---

## Accessibility

### Alt Text
Each photo includes alt text with member name:
```tsx
alt={member.name}  // "Mr. Suresh Baral"
```

### Semantic HTML
Photos are wrapped in proper semantic structure with:
- Position labels
- Name headings
- Contact information

---

## Responsive Behavior

### Desktop
- Full size display (96x96px)
- Hover effects active
- High quality images

### Tablet
- Slightly smaller (80x80px)
- Touch-friendly
- Optimized loading

### Mobile
- Compact size (64x64px)
- Fast loading
- Touch interactions

---

## Future Enhancements

Possible improvements:
- [ ] Add photo upload interface in admin panel
- [ ] Implement image cropping tool
- [ ] Add multiple photo sizes (thumbnails)
- [ ] Support for WebP format
- [ ] Lazy loading for better performance
- [ ] Photo gallery view
- [ ] Member bio pages with larger photos

---

## Troubleshooting

### Photo Not Showing
1. Check file path is correct
2. Verify file exists in `/public/members/`
3. Check file name spelling
4. Clear browser cache
5. Check console for errors

### Photo Quality Issues
1. Use higher resolution source
2. Reduce compression
3. Check lighting in original
4. Re-crop and optimize

### Slow Loading
1. Reduce file size
2. Use JPG instead of PNG
3. Implement lazy loading
4. Use Next.js Image optimization

---

## Contact

For photo submissions or questions:
- **Email:** info@dhbakathmandu.org
- **Phone:** +977-XXX-XXXXXX

---

## File Structure

```
public/
  └── members/
      ├── README.md (this file)
      ├── president-baral.jpg
      ├── senior-vp-dubey.jpg
      ├── vp-giri.jpg
      ├── general-secretary-thapa.jpg
      ├── treasurer-thapa.jpg
      └── ... (other member photos)
```

---

**Status:** ✅ Ready for photos  
**Placeholder:** `/placeholder-user.jpg` (currently in use)  
**Last Updated:** November 2025
