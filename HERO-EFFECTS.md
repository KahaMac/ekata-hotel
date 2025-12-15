# Hero Section Effects - Implementation Guide

## Overview
The DHBA website hero section now features two stunning visual effects:
1. **Meteors Effect** - Animated shooting stars across the hero background
2. **Video Text Effect** - Video content masked to show through the hero title text

---

## 1. Meteors Effect

### What It Does
Creates animated shooting stars (meteors) that fall across the hero section, adding dynamic movement and visual interest.

### Implementation
```tsx
import { Meteors } from "@/components/ui/meteors"

<Meteors number={30} className="opacity-70" />
```

### Configuration Options
- **number**: Number of meteors (default: 20)
- **minDelay**: Minimum animation delay in seconds (default: 0.2)
- **maxDelay**: Maximum animation delay in seconds (default: 1.2)
- **minDuration**: Minimum animation duration in seconds (default: 2)
- **maxDuration**: Maximum animation duration in seconds (default: 10)
- **angle**: Angle of meteor trajectory in degrees (default: 215)
- **className**: Additional CSS classes

### Current Settings
```tsx
<Meteors 
  number={30}           // 30 meteors for good coverage
  className="opacity-70" // 70% opacity for subtle effect
/>
```

### Customization Examples

**More Meteors:**
```tsx
<Meteors number={50} />
```

**Faster Meteors:**
```tsx
<Meteors minDuration={1} maxDuration={5} />
```

**Different Angle:**
```tsx
<Meteors angle={180} /> // Straight down
```

**Brighter Meteors:**
```tsx
<Meteors className="opacity-100" />
```

---

## 2. Video Text Effect

### What It Does
Displays a video that is masked to only show through the text of the hero title, creating a stunning cinematic effect.

### Implementation
```tsx
import { VideoText } from "@/components/ui/video-text"

<VideoText
  src="/videos/hero-video.mp4"
  className="h-[200px] sm:h-[250px] lg:h-[300px]"
  fontSize={8}
  fontWeight="bold"
  autoPlay
  muted
  loop
>
  {slides[currentSlide].title}
</VideoText>
```

### Configuration Options
- **src**: Video source URL (required)
- **className**: Container CSS classes
- **autoPlay**: Auto-play video (default: true)
- **muted**: Mute video (default: true)
- **loop**: Loop video (default: true)
- **preload**: Preload strategy (default: "auto")
- **fontSize**: Font size in viewport width units (default: 20)
- **fontWeight**: Font weight (default: "bold")
- **textAnchor**: Text alignment (default: "middle")
- **dominantBaseline**: Vertical alignment (default: "middle")
- **fontFamily**: Font family (default: "sans-serif")
- **as**: HTML element type (default: "div")

### Current Settings
```tsx
<VideoText
  src="/videos/hero-video.mp4"
  className="h-[200px] sm:h-[250px] lg:h-[300px]"
  fontSize={8}              // 8vw for responsive sizing
  fontWeight="bold"         // Bold text
  autoPlay                  // Auto-play on load
  muted                     // Muted for autoplay
  loop                      // Continuous loop
>
  {slides[currentSlide].title}
</VideoText>
```

### Responsive Behavior
- **Desktop (md+)**: Shows video text effect
- **Mobile**: Shows regular text (fallback)

This ensures optimal performance on mobile devices.

---

## Video Requirements

### File Location
```
public/
  └── videos/
      └── hero-video.mp4
```

### Recommended Specifications
- **Format:** MP4 (H.264 codec)
- **Resolution:** 1920x1080 (Full HD)
- **Duration:** 10-30 seconds
- **File Size:** Under 5MB
- **Frame Rate:** 30fps or 60fps
- **Aspect Ratio:** 16:9

### Video Content Suggestions
Choose videos with:
- Dynamic movement (flowing water, clouds, city lights)
- High contrast and vibrant colors
- Smooth, continuous motion
- Hospitality-related imagery

### Free Video Sources
- **Pexels Videos:** https://www.pexels.com/videos/
- **Pixabay Videos:** https://pixabay.com/videos/
- **Videvo:** https://www.videvo.net/
- **Coverr:** https://coverr.co/

### Recommended Search Terms
- "Kathmandu city timelapse"
- "Hotel luxury interior"
- "Nepal tourism"
- "Abstract motion background"
- "Flowing water"
- "City lights night"

---

## Performance Optimization

### Video Compression
Use FFmpeg to optimize your video:

```bash
ffmpeg -i input.mp4 -vcodec h264 -acodec aac -strict -2 -b:v 1M -b:a 128k hero-video.mp4
```

### Lazy Loading
The video text effect is hidden on mobile devices to improve performance:

```tsx
<div className="hidden md:block">
  <VideoText ... />
</div>
```

### Meteor Performance
Meteors use CSS animations which are GPU-accelerated for smooth performance.

---

## CSS Animations

### Meteor Animation
Added to `app/globals.css`:

```css
@keyframes meteor {
  0% {
    transform: rotate(var(--angle)) translateX(0);
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    transform: rotate(var(--angle)) translateX(-500px);
    opacity: 0;
  }
}

.animate-meteor {
  animation: meteor linear infinite;
}
```

---

## Browser Compatibility

### Meteors Effect
✅ All modern browsers (Chrome, Firefox, Safari, Edge)

### Video Text Effect
✅ Chrome, Edge, Safari, Firefox
⚠️ Requires browser support for:
- CSS mask-image
- HTML5 video
- SVG data URLs

### Fallback Strategy
If video fails to load or browser doesn't support the effect:
- Regular text is displayed
- No JavaScript errors
- Graceful degradation

---

## Troubleshooting

### Video Not Showing
1. Check video file exists at `/public/videos/hero-video.mp4`
2. Verify video format is MP4 (H.264)
3. Check browser console for errors
4. Try a different video file
5. Clear browser cache

### Meteors Not Animating
1. Check `app/globals.css` has meteor animation
2. Verify no CSS conflicts
3. Check browser console for errors
4. Try reducing number of meteors

### Performance Issues
1. Reduce number of meteors (try 15-20)
2. Compress video file (target under 3MB)
3. Disable video text on mobile (already implemented)
4. Use lower resolution video

---

## Customization Examples

### Subtle Effect
```tsx
<Meteors 
  number={15} 
  className="opacity-40"
  minDuration={5}
  maxDuration={15}
/>
```

### Intense Effect
```tsx
<Meteors 
  number={50} 
  className="opacity-90"
  minDuration={1}
  maxDuration={5}
/>
```

### Different Video Size
```tsx
<VideoText
  src="/videos/hero-video.mp4"
  className="h-[300px]"
  fontSize={10}
>
  {title}
</VideoText>
```

### Custom Font
```tsx
<VideoText
  src="/videos/hero-video.mp4"
  fontFamily="'Geist', sans-serif"
  fontWeight="900"
>
  {title}
</VideoText>
```

---

## Files Modified

### Components
- ✅ `components/hero-section.tsx` - Added Meteors and VideoText
- ✅ `components/ui/meteors.tsx` - Meteors component (auto-generated)
- ✅ `components/ui/video-text.tsx` - VideoText component (auto-generated)

### Styles
- ✅ `app/globals.css` - Added meteor animation

### Documentation
- ✅ `public/videos/README.md` - Video requirements guide
- ✅ `HERO-EFFECTS.md` - This file

---

## Installation Commands Used

```bash
# Install Meteors component
npx shadcn@latest add https://magicui.design/r/meteors

# Install VideoText component
npx shadcn@latest add https://magicui.design/r/video-text
```

---

## Next Steps

1. **Add Video File:**
   - Find or create a suitable video
   - Compress to under 5MB
   - Place at `/public/videos/hero-video.mp4`

2. **Test Effects:**
   - View on desktop and mobile
   - Check performance
   - Adjust settings as needed

3. **Fine-tune:**
   - Adjust meteor count and opacity
   - Modify video text size
   - Test with different videos

---

## Support

For issues or questions:
- Check browser console for errors
- Review this documentation
- Test in different browsers
- Contact development team

---

**Status:** ✅ Implemented and Ready  
**Last Updated:** November 2025  
**Version:** 1.0.0
