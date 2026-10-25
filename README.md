# Simulation-Balls

**Ball Multiplier Lab** is a browser app for building TikTok-style ball
multiplier simulations. You can start from a template or from scratch, tweak
every part, run it, and record the result as a video.

Everything is in one file, `index.html`, with no build step and no
dependencies. Open it in a browser, or use the published claude.ai Artifact.

## Templates

| Template | What happens |
| --- | --- |
| Crusher arms | Two arms fold into a box and crush the balls inside into 4 new ones of the next colour. When the circle fills, it bursts. |
| Spiral multiplier | A spinning spiral pumps balls toward its centre through three ×2 gates, then sends them back to the top. |
| Plinko multiplier | Balls drop through pegs into slots that multiply them and send them back up. |
| Ring escape | Spinning rings with gaps. Every ball that escapes spawns 2 more in the middle. |
| Hourglass race | A spinner at the neck splits balls into a blue ×2 side and an orange ×3 side. |
| Colour battle | Teams convert each other when they collide, and ×2 pads add balls. The last colour standing wins. |
| Conveyor factory | Belts carry balls through ×2 and ×3 gates and a press, into a pile at the bottom. |
| Bouncing growth | Every wall hit adds a ball until the circle is full. |
| Blank | An empty circle and one spawner. |

## Building your own

- **Scene tab:** gravity, bounce, drag, ball size, ball cap, the finale (burst,
  freeze or keep running), colour battle rules, caption, counters and the
  colour order.
- **Parts tab:** add, edit, reorder, duplicate or delete parts. The parts are
  circle walls (with gaps, spin and on-hit effects), walls, spinners,
  conveyors, crusher arms, presses, spirals, peg boards, multiplier slots,
  trigger zones, multiplier gates, spawners and force fields.
- **Edit mode:** drag parts around on the stage by their dots.
- **Saved tab:** save setups in your browser, export or import them as JSON
  files, or copy and paste the JSON.

## Running and recording

- Each run uses a seed, and the same seed always plays out the same way.
  The dice button rolls a new seed.
- **Record** restarts the run and records it as a 9:16 video (MP4 where the
  browser supports it, otherwise WebM) with sound. Recording stops on its own
  after the finale.
- Keyboard: Space plays or pauses, R restarts, E toggles edit mode.

## Tests

`node tests/smoke.cjs [seconds]` loads the app in headless Chromium, checks
for script errors, and runs every template's physics. It prints the ball
count over time and when each finale happens. Playwright must be installed.

Notes on the video that inspired this are in
[`reference/`](reference/VIDEO_NOTES.md).
