# Microsoft MakeCode Arcade Game Archive

A collection of arcade games built with [Microsoft MakeCode Arcade](https://arcade.makecode.com/), archived as a self-contained static site.

| Game | Description | Play |
|------|-------------|------|
| **Collect** | Grab food before time runs out. Regular = 25 pts, superfood = 50. | [Play](https://theaviary.me/Microsoft-MakeCode-Archive/game.html?g=Collect) |
| **Galaga** | A side-scrolling space shooter with bosses, power-ups, and invincibility. | [Play](https://theaviary.me/Microsoft-MakeCode-Archive/game.html?g=Galaga) |
| **Maze** | Guide a turtle through a maze. Dodge plastic bags, collect straws, escape. | [Play](https://theaviary.me/Microsoft-MakeCode-Archive/game.html?g=Maze) |

## Project structure

```
/
├── index.html              ← landing page
├── game.html               ← shared game player (loads any game via ?g=Name)
├── 404.html                ← retro 404 with redirect fallback
├── loader.js               ← shared game loader
├── PressStart2P.woff2      ← self-hosted font
├── simulator/              ← shared MakeCode Arcade v1.8.22 runtime
│   ├── index.html
│   ├── pxtsim.js
│   ├── sim.js
│   ├── sim.css
│   └── icons.css
├── Collect/
│   ├── binary.js           ← compiled game (built by CI or locally)
│   ├── main.ts             ← source code
│   └── pxt.json
├── Galaga/
│   ├── binary.js
│   ├── main.ts
│   └── pxt.json
└── Maze/
    ├── binary.js
    ├── main.ts
    └── pxt.json
```

## Architecture

`game.html` is the single shared game player. It reads the game name from the URL (`?g=Collect`), fetches that game's `binary.js` as raw text, then boots the simulator in a sandboxed iframe. After loading, it rewrites the URL to a clean path (`/Collect/`) using the History API.

`loader.js` orchestrates the handoff. It fetches `binary.js` via XHR, points the iframe at `simulator/index.html`, waits for a `ready` postMessage from the simulator, then sends the game code in as a `run` message.

`binary.js` is the compiled game — `main.ts` compiled to JavaScript bytecode by `pxt build`. It's never loaded as a script tag; it's held as a string and injected into the simulator at runtime.

`simulator/` is a local mirror of the MakeCode Arcade v1.8.22 runtime: `pxtsim.js` (core engine), `sim.js` (Arcade-specific rendering), and two CSS files. These are downloaded from MakeCode's CDN and checked in for offline use.

`404.html` checks if the requested game exists. If so, it redirects to `game.html`. If not, it shows a retro 404 page.

```
game.html?g=Collect
  └─ loads loader.js
       ├─ fetches Collect/binary.js (game code as text)
       └─ boots simulator/index.html in iframe
            ├─ simulator loads pxtsim.js + sim.js
            ├─ simulator sends "ready" to parent
            ├─ loader sends game code to simulator
            └─ simulator executes the game
```

## Rebuilding from source

First time setup:

```bash
npm install -g pxt
cd Collect            # or Galaga, Maze
pxt target arcade@1.8.22
mv node_modules/pxt-arcade node_modules/pxt-arcade@1.8.22   # Linux/Mac
# Rename-Item .\node_modules\pxt-arcade pxt-arcade@1.8.22   # Windows
pxt install
pxt build --cloud
cp built/debug/binary.js .
```

Subsequent builds (after setup):

```bash
cd Collect            # or Galaga, Maze
pxt build --cloud
cp built/debug/binary.js .
```

To test locally, go back to the repo root and serve:

```bash
cd ..
npx http-server . -c-1
```

Then open `http://localhost:8080`.

Deployment is handled automatically by GitHub Actions — pushing to `main` triggers a build of all three games and deploys the site.

## Simulator files

The `simulator/` folder contains a local mirror of MakeCode Arcade's simulator runtime. These files are downloaded from MakeCode's CDN and shared across all games:

| File | CDN URL |
|------|---------|
| `sim.css` | `https://cdn.makecode.com/blob/bdfc7f775d7167c006b73f1fa400694f7da1036a/sim.css` |
| `icons.css` | `https://cdn.makecode.com/blob/829ec32a4649358f92bec09c6b049eba4c4121a3/icons.css` |
| `pxtsim.js` | `https://cdn.makecode.com/blob/df78ad8b3764856aaf00cc872cc92b0667d13c66/pxtsim.js` |
| `sim.js` | `https://cdn.makecode.com/blob/5e841f672cfdbc196158187269aad7a04095472e/sim.js` |