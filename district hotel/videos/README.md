# Hero Video

## Required Video File

Place your hero video file here as `hero-video.mp4`

### Video Specifications

**Recommended Settings:**
- **Format:** MP4 (H.264 codec)
- **Resolution:** 1920x1080 (Full HD) or higher
- **Duration:** 10-30 seconds (looping)
- **File Size:** Under 5MB for optimal performance
- **Frame Rate:** 30fps or 60fps
- **Aspect Ratio:** 16:9

### Video Content Suggestions

The video will be masked to show through the hero title text. Consider videos with:
- Dynamic movement (flowing water, clouds, city lights)
- High contrast and vibrant colors
- Smooth, continuous motion
- Abstract patterns or textures
- Hospitality-related imagery (hotels, landmarks, tourism)

### Example Video Sources

**Free Stock Video Sites:**
- Pexels Videos (https://www.pexels.com/videos/)
- Pixabay Videos (https://pixabay.com/videos/)
- Videvo (https://www.videvo.net/)
- Coverr (https://coverr.co/)

**Recommended Search Terms:**
- "Kathmandu city timelapse"
- "Hotel luxury interior"
- "Nepal tourism"
- "Abstract motion background"
- "Flowing water"
- "City lights night"

### Fallback

If no video is provided, the component will fall back to displaying regular text with the existing styling.

### File Location

```
public/
  └── videos/
      └── hero-video.mp4  ← Place your video here
```

### Usage in Code

The video is used in `components/hero-section.tsx`:

```tsx
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

### Performance Tips

1. **Compress your video** using tools like:
   - HandBrake (https://handbrake.fr/)
   - FFmpeg
   - Online compressors

2. **Optimize for web:**
   ```bash
   ffmpeg -i input.mp4 -vcodec h264 -acodec aac -strict -2 -b:v 1M -b:a 128k hero-video.mp4
   ```

3. **Consider multiple formats** for browser compatibility:
   - MP4 (primary)
   - WebM (fallback)

### Testing

After adding your video:
1. Clear browser cache
2. Reload the homepage
3. Check that video plays smoothly
4. Verify text mask effect works correctly
5. Test on mobile devices

---

**Note:** The video file is not included in the repository. You must add it manually.
