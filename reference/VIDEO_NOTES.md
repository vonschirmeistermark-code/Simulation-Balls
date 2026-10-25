# Reference video: "crusher arms" ball multiplication

Notes on the inspiration video (a TikTok clip with "NexusBoxLab" printed on
the arms). It's a 44 s portrait video (576×1024, 30 fps); the simulation runs
for about 41 s, then a TikTok outro plays.

- `video-contact-sheet.jpg`: one frame every 4 s across the whole clip
- `video-key-moments.jpg`: close-ups of a crush (row 1), a crush with a new
  colour bursting out (row 2), and the circle filling up and breaking open
  (row 3)

## Scene

- White background with one large circle outlined in thin black; balls stay
  inside it.
- Two grey **arms** stick into the circle from opposite sides: one from the
  right edge near the top, one from the left edge near the bottom. Each arm
  is a long horizontal bar with a pivot dot near its inner end, and an end
  section that folds down (right arm) or up (left arm) at that pivot.
- The balls are small and glossy, with one solid colour per batch. They
  collide with each other, the arms and the circle wall. There's no visible
  gravity; balls drift and bounce freely.

## Core loop

1. **Open:** the arms are straight and pulled apart, leaving the middle of the
   circle open while balls bounce around.
2. **Close:** the end sections swing 90° on their pivots, and the two arms
   slide toward each other to form a **rectangular box** in the middle.
3. **Crush:** the box squeezes flat until the two vertical sections slam
   together. A magnifier circle zooms in on the crush point.
4. **Burst:** a faint shockwave ring spreads out, and every ball caught in the
   crush is replaced by about **4 new balls of the next colour**, which fly out
   in small pairs or clumps.
5. **Reopen:** the arms swing back, and the loop repeats about every 2–4 s.

Balls that weren't crushed keep their colour, so several colours mix during
the transitions (blue mixed into red, for example). The ball count grows
exponentially: 1 → 4 → ~12 → … → hundreds that pack the circle completely.

## Colour sequence observed

red (1 ball) → teal → magenta/pink → dark green → lavender → brown → blue →
red → green → pink/violet → olive

## Finale

- Around 33–35 s the circle is packed solid and its outline disappears. The
  balls spill out past the edge as the camera zooms in and pans.
- At 37–41 s, olive and lavender clumps scatter across the white space while
  the arms keep crushing in the middle.
- About 41 s: TikTok outro (handle @us.numbar.1).

## Build notes (to confirm with the user)

- Portrait canvas (9:16) to match the video
- Ball–ball and ball–wall collisions with high restitution and no gravity
- Kinematic arms: an animated rotation of the end sections plus a slide, with
  ball collisions against moving line segments
- Detect a crush when a ball is squeezed between the two closing vertical
  sections, then replace it with N balls of the next palette colour
- Cap the ball count, or switch to the "circle bursts" finale at a threshold
- Optional extras: magnifier zoom on each crush, shockwave ring, watermark
  text on the arms
