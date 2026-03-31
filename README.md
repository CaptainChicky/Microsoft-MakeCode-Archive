# MakeCode Arcade Games

A collection of arcade games built with [Microsoft MakeCode Arcade](https://arcade.makecode.com/).

| Game | Description | Play |
|------|-------------|------|
| **Collect** | Move your character to collect food before time runs out. Regular food = 25 pts, superfood = 50 pts. | [Play](https://captainchicky.github.io/Collect/Collect/) |
| **Galaga** | A Galaga-style space shooter. | [Play](https://captainchicky.github.io/Collect/Galaga/) |

## Project structure

```
/
├── loader.js               ← shared game loader
├── simulator/              ← shared MakeCode Arcade v1.8.22 runtime
│   ├── index.html
│   ├── pxtsim.js
│   ├── sim.js
│   ├── sim.css
│   └── icons.css
├── Collect/
│   ├── index.html          ← game page
│   ├── binary.js           ← compiled game
│   ├── main.ts             ← source code
│   └── pxt.json
└── Galaga/
    ├── index.html
    ├── binary.js
    ├── main.ts
    └── pxt.json
```

## Architecture

Each game's `index.html` loads the shared `loader.js` from the root. The loader fetches that game's `binary.js` as raw text via XHR, then points a sandboxed iframe at the shared `simulator/index.html` to boot the game engine.

`binary.js` is the compiled game — a game folder's `main.ts` compiled to JavaScript bytecode by `pxt build`. It's never loaded as a script tag; it's held as a string and passed into the simulator at runtime.

`simulator/` contains a local mirror of the MakeCode Arcade v1.8.22 runtime: `pxtsim.js` (core engine), `sim.js` (Arcade-specific rendering for sprites, screen, and input), and two CSS files for the simulator UI.

The parent page and the simulator iframe communicate entirely through `postMessage`. Once the simulator finishes loading, it sends a `ready` message to the parent. The loader responds by sending the game code into the iframe as a `run` message. The simulator executes it. State changes (like high scores) flow back up as `setstate` messages, and the loader persists them to `localStorage`.

```
GameName/index.html
  └─ loads ../loader.js
       ├─ fetches ./binary.js (game code as text)
       └─ boots ../simulator/index.html in iframe
            ├─ simulator loads pxtsim.js + sim.js
            ├─ simulator sends "ready" to parent
            ├─ loader sends game code to simulator
            └─ simulator executes the game
```

## Rebuilding a game from source

```bash
npm install -g pxt
cd Collect            # or Galaga, etc.
pxt target arcade@1.8.22
Rename-Item .\node_modules\pxt-arcade pxt-arcade@1.8.22
pxt install
pxt build --cloud
cp built/debug/binary.js .
```

To test locally, go back to the repo root and serve:

```bash
cd ..
npx http-server . -c-1
```

Then open `http://localhost:8080/Collect/` or `http://localhost:8080/Galaga/`.

## Simulator files

The `simulator/` folder contains a local mirror of MakeCode Arcade's simulator runtime. These files are downloaded from MakeCode's CDN and shared across all games:

| File | CDN URL |
|------|---------|
| `sim.css` | `https://cdn.makecode.com/blob/bdfc7f775d7167c006b73f1fa400694f7da1036a/sim.css` |
| `icons.css` | `https://cdn.makecode.com/blob/829ec32a4649358f92bec09c6b049eba4c4121a3/icons.css` |
| `pxtsim.js` | `https://cdn.makecode.com/blob/df78ad8b3764856aaf00cc872cc92b0667d13c66/pxtsim.js` |
| `sim.js` | `https://cdn.makecode.com/blob/5e841f672cfdbc196158187269aad7a04095472e/sim.js` |