# Microsoft MakeCode Arcade Game Archive

This is a collection of 3 arcade games built with [Microsoft MakeCode Arcade](https://arcade.makecode.com/), archived as a self-contained static site. I built each of these 3 games back in middle school lol in Mr lang or long or whatever's cs/coding(?) class in MS makecode. Those were genuinly some good times I must say👀. 

The code is written extremely noobishly, but since this is an archive, changing anything kinda defeats the purpose of recording my middle school coding skills lol (plus this was all coded in blocks so the generated TypeScript is... not great). Because of this, I've basically left the code as-is, except for this one case of `/Galaga/` where I had to get rid of a memory leak that genuinly made the game unplayable after half a min or so (by adding a destroying the object after it goes off-screen), but yeah otherwise nothing else is changed. Feel free to look at the horror of `/Maze/` with like 50 copy paste duplicate code plastic bag sprites lmfao.

| Game | Description | Play |
|------|-------------|------|
| **Collect** | Grab food before time runs out; regular = 25 pts, superfood = 50. | [Play](https://theaviary.me/Microsoft-MakeCode-Archive/Collect/) |
| **Galaga** | A side-scrolling space shooter with meteors/asteroids + power-ups. | [Play](https://theaviary.me/Microsoft-MakeCode-Archive/Galaga/) |
| **Maze** | Guide turtle through a maze. Dodge plastic bags, eat straws, sksksksk and i oop. | [Play](https://theaviary.me/Microsoft-MakeCode-Archive/Maze/) |

## Project structure

```
/
├── index.html              <- retro landing page
├── game.html               <- conserved game player (loads any game via ?g=Name)
├── 404.html                <- retro 404 with redirect fallback
├── loader.js               <- shared game loader
├── PressStart2P.woff2      <- retro font (404.html has this hardcoded in base64 due to pathing issues)
├── simulator/              <- shared MakeCode Arcade v1.8.22 runtime/blobs
│   ├── index.html
│   ├── pxtsim.js
│   ├── sim.js
│   ├── sim.css
│   └── icons.css
├── Collect/
│   ├── binary.js           <- compiled game (built by CI or locally)
│   ├── main.ts             <- source code
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

The original MakeCode project import was a genuine clusterfuck of a mess lol. 
<details><summary>This was the structure for <b>one</b> game.</summary>
<pre><code>/
├── .gitattributes
├── .gitignore
├── assets.json
├── Gemfile
├── index.html
├── main.blocks
├── main.py
├── main.ts
├── Makefile
├── pxt.json
├── README.md
├── test.ts
├── tsconfig.json
├── _config.yml
├── .github/
│   └── workflows/
│       ├── cfg-check.yml
│       ├── makecode-release.yml
│       └── makecode.yml
├── .vscode/
│   ├── settings.json
│   └── tasks.json
└── assets/
    ├── index.html
    ├── version.txt
    └── js/
        ├── binary.js
        ├── custom.js
        └── loader.js
</code></pre>
</details><br>

highkey spent like ~4-5 hours figuring everything out, including what I could delete, what I could optimize/polish etc, and ended up with the current repo structure. As it turns out, most of this garbage that makecode autogenerates was indeed garbage :)) If you want to make your own archive, I can detail what I did as follows. You are to delete everything <b>EXCEPT</b> three files, namely `./assets/js/loader.js`, `pxt.json` and `main.ts`, which are the source code and the project config file that the compiler needs. You can also keep `assets.json` if you want to use custom assets, but I didn't use any so I just deleted it. Basically for a general project with nonexotic configs, you only need the source, config, and any asset config/assets. You then need to arrange the files in the same structure as the current repo, make/copy the files you don't have (html, simulator blob mirror, gitignore, etc). Then make key changes on a few things. 

Noted is in loader, parameters in the `makeCodeRun` function were adjusted to reflect the current structure (such as removing `cdnUrl` etc), and in addition I've also changed `document.getElementById("simframe").setAttribute("src", "./simulator/index.html");` to `document.getElementById("simframe").setAttribute("src", options.simUrl || "./simulator/index.html");` to be able to pass a custom `simUrl`, but nothing really came out of this and it was harmless to keep. 

`pxt.json` needs stripping from 
```json
"files": ["main.blocks", "main.ts", "README.md"]
"testFiles": ["test.ts"]
"targetVersions": {
    "branch": "v0.14.9",
    "tag": "v0.14.9",
    "commits": "https://github.com/microsoft/pxt-arcade/commits/...",
    "target": "1.8.22",
    "pxt": "5.21.14",
    "targetId": "arcade"
}
"preferredEditor": "blocksprj"
```
to
```json
"files": ["main.ts"]
"testFiles": []
"targetVersions": {
    "target": "1.8.22",
    "targetId": "arcade"
}
"preferredEditor": "tsprj"
```
which is the most optimal version with all uneccessary files and configs removed (i.e. you are only keeping the `main.ts`). 

With this setup, you have finished the project cleanup and restructuring. You can then compile the game using the MakeCode CLI, which will generate the `binary.js` that you can then copy to the appropriate folder in the current repo structure.

### In this current repo, the structure is as follows:<br>
1. `game.html` is the single shared game player. It reads the game name from the URL (`?g=Collect`), fetches that game's `binary.js` as raw text, then boots the simulator in a sandboxed iframe. After loading, it rewrites the URL to a clean path (e.g. `/Collect/`) using the History API.

2. `loader.js` orchestrates the handoff. It fetches `binary.js` via XHR, points the iframe at `simulator/index.html`, waits for a `ready` postMessage from the simulator, then sends the game code in as a `run` message.

3. `binary.js` is the compiled game via `main.ts` --> JavaScript bytecode by `pxt build`. It's never loaded as a script tag, and it's held as a string/injected into the simulator at runtime.

4. `simulator/` is a local mirror of the MakeCode Arcade v1.8.22 runtime: `pxtsim.js` (core engine), `sim.js` (Arcade-specific rendering), and two CSS files. These are downloaded from MakeCode's CDN and checked in for offline use. This folder is conserved for all games.

| File | CDN URL |
|------|---------|
| `index.html` | `https://trg-arcade.userpxt.io/v1.8.22/---simulator` |
| `sim.css` | `https://cdn.makecode.com/blob/bdfc7f775d7167c006b73f1fa400694f7da1036a/sim.css` |
| `icons.css` | `https://cdn.makecode.com/blob/829ec32a4649358f92bec09c6b049eba4c4121a3/icons.css` |
| `pxtsim.js` | `https://cdn.makecode.com/blob/df78ad8b3764856aaf00cc872cc92b0667d13c66/pxtsim.js` |
| `sim.js` | `https://cdn.makecode.com/blob/5e841f672cfdbc196158187269aad7a04095472e/sim.js` |

5. `404.html` checks if the requested game exists. If so, it redirects to `game.html`. If not, it shows a retro 404 page.

Concretely, you can refer to this flowchart-ish thing for what happpens.
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

Most of this is based on the original code. Especially for the loader/simulator, where the simulator is exactly bit for bit, while I made some minor modifications to the loader to allow it to be used as a general conserved file for all games. 

## Rebuilding from source

Microsoft MakeCode's code isn't real code. It's somewhat of a fake type of typescript that gets translated by a special npm library into a fake type of javascript that can only be interpreted by makecode's own simulator. So compilation will take some effort.

First time setup, you need to install/set up the MakeCode typescript compiler for Arcade v1.8.22 (the version I used to build these games, which I will keep in order to be faithful to the original code). Newer versions will break the code, so use this specific version. You can always uninstall after compilation. You can do this as follows, for one game at a time,
```bash
# Install the MakeCode CLI globally
npm install -g pxt

# Navigate into the game's project folder
cd Collect            # or Galaga, Maze

# Install the MakeCode Arcade target at the specific version these projects were built with
pxt target arcade@1.8.22

# Rename the installed target to the expected name that the installer wants (has the @version after)
# mv node_modules/pxt-arcade node_modules/pxt-arcade@1.8.22    # Linux/Mac
Rename-Item .\node_modules\pxt-arcade pxt-arcade@1.8.22        # Windows PowerShell

# Install project dependencies defined in pxt.json
pxt install

# Compile the project using cloud compilation (cloud flag offloads ARM compilation to MS's servers)
# can be omitted if you only need the simulator for browser stuff, or not if you don't feel like it lol
pxt build --cloud

# Copy the compiled output to the project root for easier access
cp built/debug/binary.js .
```
You will need to repeat this for each game.

Subsequent builds (after setup) are shorter,
```bash
cd Collect            # or Galaga, Maze
pxt build --cloud     # again, cloud flag is optional
cp built/debug/binary.js .
```

To test locally, go back to the repo root and serve,
```bash
npx http-server . -c-1 # serve without caching
```