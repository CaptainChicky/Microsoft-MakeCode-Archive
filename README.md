# Collect

A simple arcade game built with [Microsoft MakeCode Arcade](https://arcade.makecode.com/). Move your character to collect food items before time runs out — regular food scores 25 points, superfood scores 50.

**[Play it here](https://captainchicky.github.io/Collect/)**

## How it works

- `main.ts` — the original MakeCode Arcade source code
- `assets/js/binary.js` — compiled game bytecode (built by MakeCode's `pxt build`)
- `assets/js/loader.js` — loads the compiled game into the simulator iframe
- `simulator/` — local mirror of the MakeCode Arcade simulator runtime (game engine + console UI)
- `index.html` — host page that ties everything together

## Rebuilding from source

If you want to modify `main.ts` and recompile:

```bash
npm install -g pxt
pxt target arcade@1.8.22
pxt install
pxt build --cloud
```

This outputs a new `built/binary.js` — copy it to `assets/binary.js`, then run `npx http-server . -c-1` to serve the updated game locally.

## Simulator files

The `simulator/` folder contains a local mirror of MakeCode Arcade's simulator runtime. These files need to be downloaded from MakeCode's CDN:

| File | CDN URL |
|------|---------|
| `sim.css` | `https://cdn.makecode.com/blob/bdfc7f775d7167c006b73f1fa400694f7da1036a/sim.css` |
| `icons.css` | `https://cdn.makecode.com/blob/829ec32a4649358f92bec09c6b049eba4c4121a3/icons.css` |
| `pxtsim.js` | `https://cdn.makecode.com/blob/df78ad8b3764856aaf00cc872cc92b0667d13c66/pxtsim.js` |
| `sim.js` | `https://cdn.makecode.com/blob/5e841f672cfdbc196158187269aad7a04095472e/sim.js` |

```
simulator/
├── index.html    (already here)
├── sim.css
├── icons.css
├── pxtsim.js
└── sim.js
```

These are shared across all MakeCode Arcade v1.8.22 games.

## Architecture

`index.html` is the entry point. It loads `loader.js`, creates a sandboxed iframe, and calls `makeCodeRun()`.

`assets/loader.js` orchestrates startup. It fetches `binary.js` as raw text via XHR, then points the iframe at `simulator/index.html` to boot the game engine.

`assets/binary.js` is the compiled game — your `main.ts` source compiled to JavaScript bytecode by `pxt build`. It's never loaded as a script tag; it's held as a string and passed into the simulator at runtime.

`simulator/` contains a local mirror of the MakeCode Arcade v1.8.22 runtime: `pxtsim.js` (core engine), `sim.js` (Arcade-specific rendering for sprites, screen, and input), and two CSS files for the simulator UI. These are served from the CDN blobs listed below and checked into the repo for offline use.

The parent page and the simulator iframe communicate entirely through `postMessage`. Once the simulator finishes loading, it sends a `ready` message to the parent. `loader.js` responds by sending the game code into the iframe as a `run` message. The simulator executes it. State changes (like high scores) flow back up as `setstate` messages, and `loader.js` persists them to `localStorage`.
```
index.html
  └─ loads assets/loader.js
       ├─ fetches assets/binary.js (game code as text)
       └─ boots simulator/index.html in iframe
            ├─ simulator loads pxtsim.js + sim.js
            ├─ simulator sends "ready" to parent
            ├─ loader sends game code to simulator
            └─ simulator executes the game
```