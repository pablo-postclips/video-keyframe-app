# Video Keyframe Animation Challenge

## 🎯 Challenge Overview

Transform a landscape video into an animated portrait view using a keyframe timeline system. You'll build a video player that dynamically crops and pans across a landscape video, creating smooth animations between user-defined keyframes.

## 📹 What You're Building

### Current State
- The app displays a full landscape video (16:9) on a portrait screen
- You can see the entire video with black bars (letterboxing)
- Basic play/pause functionality exists

### Your Task
Create a system that:
1. **Shows only a portrait section** (9:16) of the landscape video
2. **Allows users to define keyframes** on a timeline
3. **Animates the viewport** smoothly between keyframes as the video plays

Think of it like Ken Burns effect, but user-controlled!

## 🎨 Visual Example

```
LANDSCAPE VIDEO (What we have):
┌─────────────────────────────────┐
│                                 │
│      Full Landscape Video       │
│                                 │
└─────────────────────────────────┘

PORTRAIT VIEW (What you'll create):
┌───────────┐
│           │ ← This box moves/pans
│  Visible  │   across the landscape
│   Area    │   video based on keyframes
│           │
└───────────┘
```

## 📋 Requirements

### 1. Portrait Viewport System
- [ ] Display only a 9:16 portion of the landscape video
- [ ] Hide the rest of the video (no letterboxing)
- [ ] Viewport should be draggable to reposition
- [ ] Show viewport boundaries when editing

### 2. Keyframe Management
- [ ] Minimum 2 keyframes (start & end)
- [ ] Maximum 10 keyframes
- [ ] Each keyframe stores:
  - Timestamp (seconds)
  - X position (horizontal offset)
  - Y position (vertical offset)
  - (Bonus: Scale/zoom level)

### 3. Timeline Interface
- [ ] Visual timeline showing video duration
- [ ] Keyframe markers on timeline
- [ ] Click timeline to add keyframes
- [ ] Drag keyframes to change timing
- [ ] Select keyframes to edit position
- [ ] Delete keyframes (except first/last)
- [ ] Show current playback position

### 4. Viewport Editing
When a keyframe is selected:
- [ ] Drag the video to reposition viewport
- [ ] See real-time preview of viewport position
- [ ] Visual indicator of selected keyframe
- [ ] Save position to keyframe

### 5. Animation Playback
- [ ] Smooth interpolation between keyframes
- [ ] Sync with video playback time
- [ ] No stuttering or jumping
- [ ] 60fps smooth animations

## 🏗️ Technical Implementation Guide

### Step 1: Create Portrait Viewport
```javascript
// Instead of showing full video, show only a portion:
// - Calculate portrait dimensions (screenWidth × screenWidth * 16/9)
// - Use View with overflow:'hidden' as mask
// - Position video inside with transform translateX/Y
```

### Step 2: Implement Keyframe Data Structure
```javascript
const [keyframes, setKeyframes] = useState([
  { id: '1', timestamp: 0, position: { x: 0, y: 0 } },
  { id: '2', timestamp: videoDuration, position: { x: 0, y: 0 } }
]);
```

### Step 3: Build Timeline Component
- Use React Native's `View` and `TouchableOpacity`
- Calculate keyframe positions: `(timestamp / duration) * timelineWidth`
- Implement tap-to-add and drag-to-move

### Step 4: Add Gesture Handling
- Use `react-native-gesture-handler` for dragging
- Update video position with `Animated.View` and transforms
- Save final position to selected keyframe

### Step 5: Implement Animation System
- Use `react-native-reanimated` for performance
- Interpolate position between keyframes based on current time
- Update viewport position every frame during playback

## 📁 File Structure
```
app/
├── index.tsx (current video screen)
├── components/
│   ├── Timeline.tsx (create this)
│   ├── VideoViewport.tsx (create this)
│   └── KeyframeEditor.tsx (create this)
```

## 🛠️ Helpful Libraries (Already Installed)
- `expo-av` - Video playback control
- `react-native-reanimated` - Smooth 60fps animations
- `react-native-gesture-handler` - Drag gestures

## ✅ Acceptance Criteria

### Must Have
- [ ] Portrait viewport shows portion of landscape video
- [ ] Can add/edit/delete keyframes
- [ ] Smooth animation between keyframes
- [ ] Timeline shows keyframes and playback position
- [ ] Drag to reposition viewport
- [ ] Animations sync with video playback

### Nice to Have
- [ ] Zoom/scale support
- [ ] Easing curves between keyframes
- [ ] Undo/redo functionality
- [ ] Export keyframe data as JSON
- [ ] Playback speed control

## 🎮 User Flow

1. **Initial State**: Video plays showing center portion in portrait
2. **Add Keyframe**: Tap timeline to add keyframe at current time
3. **Edit Position**: Select keyframe, drag video to desired position
4. **Preview**: Play video to see smooth animation between keyframes
5. **Refine**: Adjust keyframe positions and timing as needed

## 💡 Tips

- Start with static portrait cropping before adding animations
- Test with 2 keyframes before supporting multiple
- Use `console.log` to debug animation interpolation
- Consider performance on older devices
- Make UI feedback obvious (selected states, drag indicators)

## 🚫 What NOT to Do

- Don't implement save/load functionality

## 🚀 Getting Started

1. Run the project: `npx expo start`
2. Study the current video implementation
3. Plan your component architecture
4. Start with the viewport masking
5. Add timeline UI
6. Implement keyframe logic
7. Add animations last

Good luck! Remember: Start simple, iterate, and focus on smooth user experience.

---

**Questions?** Think about:
- How will you calculate viewport boundaries?
- How will you interpolate between keyframes?
- How will you handle edge cases (keyframes at same time)?
- How will you ensure smooth performance?