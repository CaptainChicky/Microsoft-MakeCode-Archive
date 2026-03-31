var pxsim;
(function (pxsim) {
    let Key;
    (function (Key) {
        Key[Key["None"] = 0] = "None";
        Key[Key["Left"] = 1] = "Left";
        Key[Key["Up"] = 2] = "Up";
        Key[Key["Right"] = 3] = "Right";
        Key[Key["Down"] = 4] = "Down";
        Key[Key["A"] = 5] = "A";
        Key[Key["B"] = 6] = "B";
        Key[Key["Menu"] = 7] = "Menu";
        // Player 2 keys here too
        // system keys
        Key[Key["Screenshot"] = -1] = "Screenshot";
        Key[Key["Gif"] = -2] = "Gif";
        Key[Key["Reset"] = -3] = "Reset";
        Key[Key["TogglePause"] = -4] = "TogglePause";
    })(Key = pxsim.Key || (pxsim.Key = {}));
    function mapKey(which) {
        switch (which) {
            case 65: // A
            case 37: // Left arrow
                return Key.Left;
            case 87: // W
            case 38: // Up arrow
                return Key.Up;
            case 68: // D
            case 39: // right arrow
                return Key.Right;
            case 83: // S
            case 40: // down arrow
                return Key.Down;
            case 32: // Space
            case 81: // Q
            case 90: // Z
                return Key.A;
            case 13: // Enter
            case 88: // X
            case 69: // E
                return Key.B;
            // Player two (see the local-multiplayer package)
            case 74: // J
                return Key.Left + 7;
            case 73: // I
                return Key.Up + 7;
            case 76: // L
                return Key.Right + 7;
            case 75: // K
                return Key.Down + 7;
            case 85: // U
                return Key.A + 7;
            case 79: // O
                return Key.B + 7;
            // system keys
            // screenshot
            case 80: // P
                return Key.Screenshot;
            case 82: // R
                return Key.Gif;
            default: return Key.None;
        }
    }
    pxsim.mapKey = mapKey;
    function pauseAsync(ms) {
        return pxsim.U.delay(ms);
    }
    pxsim.pauseAsync = pauseAsync;
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var game;
    (function (game) {
        function takeScreenshot() {
            const b = pxsim.board();
            b.tryScreenshot();
        }
        game.takeScreenshot = takeScreenshot;
    })(game = pxsim.game || (pxsim.game = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var control;
    (function (control) {
        function programList() {
            let m = pxsim.Array_.mk();
            m.push("flappy_duck");
            m.push("chase_the_pizza");
            m.push("happy_flower");
            for (let i = 0; i < 10; ++i) {
                m.push(`game_${i}`);
            }
            return m;
        }
        control.programList = programList;
        function runProgram(name) {
            // TODO
            console.log(`run ${name}`);
        }
        control.runProgram = runProgram;
    })(control = pxsim.control || (pxsim.control = {}));
})(pxsim || (pxsim = {}));
var DAL;
(function (DAL) {
    DAL.DEVICE_PIN_EVENT_NONE = 0;
    DAL.DEVICE_PIN_EVENT_ON_EDGE = 1;
    DAL.DEVICE_PIN_EVENT_ON_PULSE = 2;
    DAL.DEVICE_PIN_EVENT_ON_TOUCH = 3;
    DAL.DEVICE_PIN_EVT_RISE = 2;
    DAL.DEVICE_PIN_EVT_FALL = 3;
    DAL.DEVICE_PIN_EVT_PULSE_HI = 4;
    DAL.DEVICE_PIN_EVT_PULSE_LO = 5;
    DAL.DEVICE_ID_IO_P0 = 100;
    DAL.ACCELEROMETER_IMU_DATA_VALID = 2, DAL.ACCELEROMETER_EVT_DATA_UPDATE = 1, DAL.ACCELEROMETER_EVT_NONE = 0, DAL.ACCELEROMETER_EVT_TILT_UP = 1, DAL.ACCELEROMETER_EVT_TILT_DOWN = 2, DAL.ACCELEROMETER_EVT_TILT_LEFT = 3, DAL.ACCELEROMETER_EVT_TILT_RIGHT = 4, DAL.ACCELEROMETER_EVT_FACE_UP = 5, DAL.ACCELEROMETER_EVT_FACE_DOWN = 6, DAL.ACCELEROMETER_EVT_FREEFALL = 7, DAL.ACCELEROMETER_EVT_3G = 8, DAL.ACCELEROMETER_EVT_6G = 9, DAL.ACCELEROMETER_EVT_8G = 10, DAL.ACCELEROMETER_EVT_SHAKE = 11, DAL.ACCELEROMETER_REST_TOLERANCE = 200, DAL.ACCELEROMETER_TILT_TOLERANCE = 200, DAL.ACCELEROMETER_FREEFALL_TOLERANCE = 400, DAL.ACCELEROMETER_SHAKE_TOLERANCE = 400, DAL.ACCELEROMETER_3G_TOLERANCE = 3072, DAL.ACCELEROMETER_6G_TOLERANCE = 6144, DAL.ACCELEROMETER_8G_TOLERANCE = 8192, DAL.ACCELEROMETER_GESTURE_DAMPING = 5, DAL.ACCELEROMETER_SHAKE_DAMPING = 10, DAL.ACCELEROMETER_SHAKE_RTX = 30, DAL.ACCELEROMETER_SHAKE_COUNT_THRESHOLD = 4, DAL.DEVICE_ID_GESTURE = 13, DAL.DEVICE_ID_ACCELEROMETER = 5, DAL.SENSOR_THRESHOLD_LOW = 1, DAL.SENSOR_THRESHOLD_HIGH = 2, DAL.LEVEL_THRESHOLD_LOW = 1, DAL.LEVEL_THRESHOLD_HIGH = 2, DAL.DEVICE_ID_THERMOMETER = 8, DAL.DEVICE_ID_LIGHT_SENSOR = 17, DAL.DEVICE_ID_RADIO = 9, DAL.DEVICE_RADIO_EVT_DATAGRAM = 1, DAL.DEVICE_ID_MICROPHONE = 3001;
})(DAL || (DAL = {}));
var pxsim;
(function (pxsim) {
    let PlayerNumber;
    (function (PlayerNumber) {
        PlayerNumber[PlayerNumber["One"] = 1] = "One";
        PlayerNumber[PlayerNumber["Two"] = 2] = "Two";
        PlayerNumber[PlayerNumber["Three"] = 3] = "Three";
        PlayerNumber[PlayerNumber["Four"] = 4] = "Four";
    })(PlayerNumber || (PlayerNumber = {}));
    let init = false;
    let connected = false;
    let all = {};
    let player = PlayerNumber.One;
    function initGamepad() {
        if (init)
            return;
        init = true;
        window.addEventListener("gamepadconnected", (e) => {
            if (connected)
                return;
            connected = true;
            setInterval(() => {
                onUpdate();
            }, 20);
        });
    }
    pxsim.initGamepad = initGamepad;
    function onUpdate() {
        const g = navigator.getGamepads();
        if (g) {
            for (let i = 0; i < g.length; i++) {
                const gamepad = g[i];
                if (gamepad && gamepad.buttons && gamepad.buttons.length) {
                    const ctrl = getState(gamepad);
                    updateState(ctrl, pxsim.Key.A, 0, gamepad);
                    updateState(ctrl, pxsim.Key.B, 1, gamepad);
                    updateState(ctrl, pxsim.Key.Menu, 9, gamepad);
                    updateState(ctrl, pxsim.Key.Up, 12, gamepad, 1, false);
                    updateState(ctrl, pxsim.Key.Down, 13, gamepad, 1, true);
                    updateState(ctrl, pxsim.Key.Left, 14, gamepad, 0, false);
                    updateState(ctrl, pxsim.Key.Right, 15, gamepad, 0, true);
                }
            }
        }
    }
    pxsim.onUpdate = onUpdate;
    function getState(gamepad) {
        if (all[gamepad.index])
            return all[gamepad.index];
        const newState = { state: {}, player };
        all[gamepad.index] = newState;
        player++;
        return newState;
    }
    function updateState(ctrl, key, buttonIndex, gamepad, axis, axisPositive) {
        let btn = gamepad.buttons[buttonIndex];
        let pressed = btn && btn.pressed;
        if (axis != undefined && gamepad.axes && gamepad.axes[axis]) {
            const value = gamepad.axes[axis];
            if (Math.abs(value) > 0.5) {
                pressed = pressed || (axisPositive === value > 0);
            }
        }
        const old = ctrl.state[key];
        if (old != pressed) {
            ctrl.state[key] = pressed;
            pxsim.board().handleKeyEvent(key + (7 * (ctrl.player - 1)), pressed);
        }
    }
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    let forcedUpdateLoop;
    /**
     * This function gets called each time the program restarts
     */
    pxsim.initCurrentRuntime = () => {
        pxsim.runtime.board = new Board();
        pxsim.initGamepad();
        if (!forcedUpdateLoop) {
            forcedUpdateLoop = true;
            // this is used to force screen update if game loop is stuck or not set up properly
            //forcedUpdateLoop = setInterval(() => {
            //board().screenState.maybeForceUpdate()
            //}, 100)
            window.onfocus = function (e) {
                indicateFocus(true);
                return false;
            };
            window.onblur = function (e) {
                indicateFocus(false);
                return false;
            };
            window.onkeydown = function (e) {
                const b = board();
                if (b)
                    b.setKey((typeof e.which == "number") ? e.which : e.keyCode, true, e);
            };
            window.onkeyup = function (e) {
                const b = board();
                if (b)
                    b.setKey((typeof e.which == "number") ? e.which : e.keyCode, false, e);
            };
            window.oncontextmenu = function (e) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            };
            window.onmouseover = function () {
                if (!document.hasFocus())
                    window.focus();
            };
            window.addEventListener("message", ev => {
                if (ev.data.button !== undefined) {
                    let key;
                    switch (ev.data.button) {
                        case 0:
                            key = pxsim.Key.A;
                            break;
                        case 1:
                            key = pxsim.Key.B;
                            break;
                        case 2:
                            key = pxsim.Key.Up;
                            break;
                        case 3:
                            key = pxsim.Key.Down;
                            break;
                        case 4:
                            key = pxsim.Key.Left;
                            break;
                        case 5:
                            key = pxsim.Key.Right;
                            break;
                        case 6:
                            key = pxsim.Key.Menu;
                            break;
                        case 7:
                            key = pxsim.Key.Reset;
                            break;
                    }
                    const b = board();
                    if (b)
                        b.setButton(key, ev.data.pressed);
                }
            });
        }
    };
    /**
     * Gets the current 'board', eg. program state.
     */
    function board() {
        return pxsim.runtime.board;
    }
    pxsim.board = board;
    /**
     * Represents the entire state of the executing program.
     * Do not store state anywhere else!
     */
    class Board extends pxsim.BaseBoard {
        constructor() {
            super();
            this.startTime = Date.now();
            this.isPaused = false;
            this.lightState = {};
            this.screenState = new pxsim.ScreenState(null);
            this.audioState = new pxsim.AudioState();
            this.accelerometerState = new pxsim.AccelerometerState(pxsim.runtime);
            this.microphoneState = new pxsim.AnalogSensorState(DAL.DEVICE_ID_MICROPHONE, 0, 255, 50, 120);
            this.controlMessageState = new pxsim.ControlMessageState(this);
            // set all pin ids
            [{
                    prefix: "PIN_A",
                    id: 100,
                    count: 32
                }, {
                    prefix: "PIN_B",
                    id: 300,
                    count: 32
                }, {
                    prefix: "PIN_C",
                    id: 350,
                    count: 32
                }, {
                    prefix: "PIN_D",
                    id: 150,
                    count: 32
                }, {
                    prefix: "PIN_P",
                    id: 400,
                    count: 20
                }].forEach(pinp => {
                for (let i = 0; i < pinp.count; ++i) {
                    const id = pinp.id + i;
                    pxsim.setConfigKey(pinp.prefix + i, id);
                    if (pxsim.getConfig(id) == null)
                        pxsim.setConfig(id, id);
                }
            });
            // add pins from config
            const pins = pxsim.getAllConfigKeys()
                .filter(k => /^PIN_/.test(k))
                .map(k => pxsim.getConfig(pxsim.getConfigKey(k)))
                .filter(id => !!id);
            this.edgeConnectorState = new pxsim.EdgeConnectorState({
                pins
            });
            this.lightSensorState = new pxsim.AnalogSensorState(DAL.DEVICE_ID_LIGHT_SENSOR);
            this.thermometerState = new pxsim.AnalogSensorState(DAL.DEVICE_ID_THERMOMETER);
            this.thermometerUnitState = pxsim.TemperatureUnit.Celsius;
            this.radioState = new pxsim.RadioState(pxsim.runtime, this, {
                ID_RADIO: DAL.DEVICE_ID_RADIO,
                RADIO_EVT_DATAGRAM: DAL.DEVICE_RADIO_EVT_DATAGRAM
            });
            const scale = (isEdge() || isIE()) ? 10 : 1;
            this.gameplayer = new pxsim.visuals.GamePlayer(scale);
            throttleAnimation(cb => this.screenState.onChange = cb, () => this.gameplayer.draw(this.screenState));
        }
        getDefaultPitchPin() {
            return undefined;
        }
        setKey(which, isPressed, e) {
            let k = pxsim.mapKey(which);
            if (k) {
                this.setButton(k, isPressed);
                e.preventDefault();
                e.stopPropagation();
            }
        }
        setButton(which, isPressed) {
            if (which)
                this.handleKeyEvent(which, isPressed);
        }
        handleKeyEvent(key, isPressed) {
            // handle system keys
            switch (key) {
                case pxsim.Key.Reset:
                    if (!isPressed) {
                        this.gameplayer.dispose();
                        pxsim.Runtime.postMessage({
                            type: "simulator",
                            command: "restart"
                        });
                    }
                    return;
                case pxsim.Key.Screenshot:
                    if (!isPressed) {
                        pxsim.Runtime.postScreenshotAsync();
                    }
                    return;
                case pxsim.Key.Gif:
                    if (!isPressed)
                        pxsim.Runtime.requestToggleRecording();
                    break;
                case pxsim.Key.TogglePause:
                    if (!isPressed) {
                        // TODO: https://github.com/microsoft/pxt-arcade/issues/1580
                        // Add pause/resume screen to simulator when clicking (YouTube style)
                        this.isPaused = !this.isPaused;
                    }
                    break;
            }
            //this.lastKey = Date.now()
            this.bus.queue(isPressed ? INTERNAL_KEY_DOWN : INTERNAL_KEY_UP, key);
            this.bus.queue(isPressed ? INTERNAL_KEY_DOWN : INTERNAL_KEY_UP, 0); // "any" key
            if (this.gameplayer)
                this.gameplayer.buttonChanged(key, isPressed);
        }
        screenshotAsync() {
            const cvs = this.gameplayer.screen;
            const ctx = cvs.getContext("2d");
            const id = ctx.getImageData(0, 0, cvs.width, cvs.height);
            return Promise.resolve(id);
        }
        tryScreenshot() {
            // ignore
        }
        resize() {
        }
        initAsync(msg) {
            this.runOptions = msg;
            this.stats = document.getElementById("debug-stats");
            this.stats.className = "stats no-select";
            this.id = msg.id;
            indicateFocus(document.hasFocus());
            this.accelerometerState.attachEvents(document.body);
            this.updateStats();
            return Promise.resolve();
        }
        updateStats() {
            this.stats.textContent = this.screenState.stats || '';
            // screenshots are handled in the share dialog
        }
        tryGetNeopixelState(pinId) {
            return this.lightState[pinId];
        }
        neopixelState(pinId) {
            if (pinId === undefined)
                pinId = this.edgeConnectorState.pins[0].id;
            let state = this.lightState[pinId];
            if (!state)
                state = this.lightState[pinId] = new pxsim.CommonNeoPixelState();
            return state;
        }
    }
    pxsim.Board = Board;
    function indicateFocus(hasFocus) {
        document.getElementById("root").setAttribute("class", hasFocus ? "" : "blur");
    }
    pxsim.indicateFocus = indicateFocus;
    function throttleAnimation(event, handler) {
        let requested = false;
        event(() => {
            if (!requested) {
                window.requestAnimationFrame(() => {
                    handler();
                    requested = false;
                });
            }
        });
    }
})(pxsim || (pxsim = {}));
// Copied verbatim from pxt-core
function hasNavigator() {
    return typeof navigator !== "undefined";
}
function isEdge() {
    return hasNavigator() && /Edge/i.test(navigator.userAgent);
}
function isIE() {
    return hasNavigator() && /Trident/i.test(navigator.userAgent);
}
//MacIntel on modern Macs
function isMac() {
    return hasNavigator() && /Mac/i.test(navigator.platform);
}
//Microsoft Edge and IE11 lie about being Chrome
function isChrome() {
    return !isEdge() && !isIE() && !!navigator && (/Chrome/i.test(navigator.userAgent) || /Chromium/i.test(navigator.userAgent));
}
(function (pxsim) {
    var pxtcore;
    (function (pxtcore) {
        function getButtonByPinCfg(key) {
            return { id: key };
        }
        pxtcore.getButtonByPinCfg = getButtonByPinCfg;
    })(pxtcore = pxsim.pxtcore || (pxsim.pxtcore = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var ButtonMethods;
    (function (ButtonMethods) {
        function id(button) {
            return (button).id;
        }
        ButtonMethods.id = id;
    })(ButtonMethods = pxsim.ButtonMethods || (pxsim.ButtonMethods = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var visuals;
    (function (visuals) {
        const SVG_WIDTH = 40;
        class GameButtons {
            // <div id="game-buttons-container" class="game-buttons">
            //     <div class="spacer" />
            //     <div class="action-button">
            //         <button class="share-mod-button">Share</button>
            //     </div>
            //     <svg xmlns="http://www.w3.org/2000/svg" class="game-button-svg" viewBox="0 0 40 40" width="200px" height="200px">
            //         <circle class="button-b" cx="13" cy="28" r="9" fill="#333" stroke="#397382" strokeWidth="2.5" />
            //         <text class="label-b" x="13" y="28" textAnchor="middle" dy="2.5" fontSize="8">B</text>
            //         <circle class="button-a" cx="28" cy="11" r="9" fill="#333" stroke="#397382" strokeWidth="2.5" />
            //         <text class="label-a" x="28" y="11" textAnchor="middle" dy="2.5" fontSize="8">A</text>
            //     </svg>
            // </div>
            constructor(container) {
                this.buttonPressCount = {};
                this.bindings = [];
                this.logEvents = () => {
                    if (Object.keys(this.buttonPressCount).some(x => !!this.buttonPressCount[x])) {
                        // tickEvent("shareExperiment.play.buttonPress", this.buttonPressCount);
                        Object.keys(this.buttonPressCount).forEach(k => this.buttonPressCount[k] = 0);
                    }
                };
                this.cleanupInterval = () => {
                    clearInterval(this.buttonPressInterval);
                    this.buttonPressCount = {};
                };
                this.parent = container || document.getElementById("game-buttons-container");
                this.aButton = this.parent.getElementsByClassName("button-a").item(0);
                this.aLabel = this.parent.getElementsByClassName("label-a").item(0);
                this.bButton = this.parent.getElementsByClassName("button-b").item(0);
                ;
                this.bLabel = this.parent.getElementsByClassName("label-b").item(0);
                this.dragSurface = this.parent.getElementsByClassName("game-button-svg").item(0);
                this.bindEvents(this.dragSurface);
            }
            buttonChanged(button, isPressed) {
                switch (button) {
                    case visuals.SimulatorButton.A:
                        this.setButtonState(button, isPressed, true);
                        break;
                    case visuals.SimulatorButton.B:
                        this.setButtonState(button, isPressed, true);
                        break;
                    default:
                        break;
                }
            }
            dispose() {
                this.aButton = undefined;
                this.aLabel = undefined;
                this.bButton = undefined;
                this.bLabel = undefined;
                this.parent = undefined;
                this.dragSurface = undefined;
                this.cleanupInterval();
                this.bindings.forEach(b => {
                    const [el, ev, cb] = b;
                    el.removeEventListener(ev, cb);
                });
                this.bindings = [];
            }
            updateButtonGesture(x, y) {
                const bounds = this.dragSurface.getBoundingClientRect();
                const dx = ((x - bounds.left) * (SVG_WIDTH / bounds.width));
                const dy = ((y - bounds.top) * (SVG_WIDTH / bounds.height));
                const aDistance = Math.sqrt(Math.pow(dx - 30, 2) + Math.pow(dy - 15, 2));
                const bDistance = Math.sqrt(Math.pow(dx - 15, 2) + Math.pow(dy - 28, 2));
                this.setButtonState(visuals.SimulatorButton.A, aDistance < 8);
                this.setButtonState(visuals.SimulatorButton.B, bDistance < 8);
                pxsim.indicateFocus(true);
            }
            clearButtonPresses() {
                this.setButtonState(visuals.SimulatorButton.A, false);
                this.setButtonState(visuals.SimulatorButton.B, false);
            }
            setButtonState(button, pressed, quiet = false) {
                const isAButton = button === visuals.SimulatorButton.A;
                const circle = isAButton ? this.aButton : this.bButton;
                const label = isAButton ? this.aLabel : this.bLabel;
                if (circle && label) {
                    const pressedColor = "#249ca3";
                    circle.setAttribute("fill", pressed ? pressedColor : "#333");
                    label.setAttribute("fill", pressed ? "#333" : "");
                }
                if (!quiet) {
                    if (pressed) {
                        if (!this.buttonPressCount[visuals.SimulatorButton[button]])
                            this.buttonPressCount[visuals.SimulatorButton[button]] = 0;
                        this.buttonPressCount[visuals.SimulatorButton[button]] += 1;
                        visuals.pressButton(button);
                    }
                    else
                        visuals.releaseButton(button);
                }
            }
            bindEvents(surface) {
                if (!surface)
                    return;
                if (visuals.hasPointerEvents()) {
                    this.bindPointerEvents(surface);
                }
                else if (visuals.isTouchEnabled()) {
                    this.bindTouchEvents(surface);
                }
                else {
                    this.bindMouseEvents(surface);
                }
                this.buttonPressInterval = setInterval(this.logEvents, 5000);
            }
            bindPointerEvents(surface) {
                let inGesture = false;
                this.bindEvent(surface, "pointerup", (ev) => {
                    if (inGesture) {
                        this.clearButtonPresses();
                    }
                    inGesture = false;
                });
                this.bindEvent(surface, "pointerdown", (ev) => {
                    this.updateButtonGesture(ev.clientX, ev.clientY);
                    inGesture = true;
                });
                this.bindEvent(surface, "pointermove", (ev) => {
                    if (inGesture)
                        this.updateButtonGesture(ev.clientX, ev.clientY);
                });
                this.bindEvent(surface, "pointerleave", (ev) => {
                    if (inGesture) {
                        this.clearButtonPresses();
                    }
                    inGesture = false;
                });
            }
            bindMouseEvents(surface) {
                let inGesture = false;
                this.bindEvent(surface, "mouseup", (ev) => {
                    if (inGesture) {
                        this.clearButtonPresses();
                    }
                    inGesture = false;
                });
                this.bindEvent(surface, "mousedown", (ev) => {
                    this.updateButtonGesture(ev.clientX, ev.clientY);
                    inGesture = true;
                });
                this.bindEvent(surface, "mousemove", (ev) => {
                    if (inGesture)
                        this.updateButtonGesture(ev.clientX, ev.clientY);
                });
                this.bindEvent(surface, "mouseleave", (ev) => {
                    if (inGesture) {
                        this.clearButtonPresses();
                    }
                    inGesture = false;
                });
            }
            bindTouchEvents(surface) {
                let touchIdentifier;
                this.bindEvent(surface, "touchend", (ev) => {
                    if (touchIdentifier) {
                        const touch = visuals.getTouch(ev, touchIdentifier);
                        if (touch) {
                            this.clearButtonPresses();
                            ev.preventDefault();
                        }
                    }
                    touchIdentifier = undefined;
                });
                this.bindEvent(surface, "touchstart", (ev) => {
                    touchIdentifier = ev.changedTouches[0].identifier;
                    this.updateButtonGesture(ev.changedTouches[0].clientX, ev.changedTouches[0].clientY);
                });
                this.bindEvent(surface, "touchmove", (ev) => {
                    if (touchIdentifier) {
                        const touch = visuals.getTouch(ev, touchIdentifier);
                        if (touch) {
                            this.updateButtonGesture(touch.clientX, touch.clientY);
                            ev.preventDefault();
                        }
                    }
                });
                this.bindEvent(surface, "touchcancel", (ev) => {
                    if (touchIdentifier) {
                        const touch = visuals.getTouch(ev, touchIdentifier);
                        if (touch) {
                            this.clearButtonPresses();
                        }
                    }
                    touchIdentifier = undefined;
                });
            }
            bindEvent(element, event, callback) {
                this.bindings.push([
                    element,
                    event,
                    callback
                ]);
                element.addEventListener(event, callback);
            }
        }
        visuals.GameButtons = GameButtons;
    })(visuals = pxsim.visuals || (pxsim.visuals = {}));
})(pxsim || (pxsim = {}));
/// <reference path="../simulator.ts" />
var pxsim;
(function (pxsim) {
    var visuals;
    (function (visuals) {
        class GamePlayer {
            constructor(scaleFactor = 1) {
                this.scaleFactor = scaleFactor;
                this.isDisposed = false;
                this.buttons = new visuals.GameButtons();
                this.joystick = new visuals.Joystick();
                this.screen = document.getElementById("game-screen");
                this.menu = document.getElementsByClassName("game-menu-button")[0];
                this.reset = document.getElementsByClassName("game-reset-button")[0];
                if (this.menu) {
                    this.menu.onclick = () => {
                        visuals.pressButton(visuals.SimulatorButton.Menu);
                        visuals.releaseButton(visuals.SimulatorButton.Menu);
                        pxsim.indicateFocus(true);
                    };
                }
                if (this.reset) {
                    this.reset.onclick = () => {
                        visuals.pressButton(visuals.SimulatorButton.Reset);
                        visuals.releaseButton(visuals.SimulatorButton.Reset);
                    };
                }
            }
            buttonChanged(button, isPressed) {
                this.joystick.buttonChanged(button, isPressed);
                this.buttons.buttonChanged(button, isPressed);
            }
            dispose() {
                this.buttons.dispose();
                this.joystick.dispose();
                this.screen = undefined;
                this.menu = undefined;
                this.reset = undefined;
                this.isDisposed = true;
            }
            draw(state) {
                if (this.isDisposed)
                    return;
                const context = this.screen.getContext("2d");
                if (this.scaleFactor === 1) {
                    if (state.width !== this.screen.width || state.height !== this.screen.height) {
                        this.screen.width = state.width;
                        this.screen.height = state.height;
                        this.screen.className = "";
                    }
                    let img = context.getImageData(0, 0, state.width, state.height);
                    new Uint32Array(img.data.buffer).set(state.screen);
                    context.putImageData(img, 0, 0);
                }
                else {
                    if (this.paletteDidChange(state)) {
                        this.refreshPalette(state);
                    }
                    if (state.width !== (this.screen.width * this.scaleFactor) || state.height !== (this.screen.height * this.scaleFactor)) {
                        this.screen.width = state.width * this.scaleFactor;
                        this.screen.height = state.height * this.scaleFactor;
                        this.screen.className = "";
                    }
                    const mask = this.palette.length - 1;
                    for (let x = 0; x < state.width; x++) {
                        for (let y = 0; y < state.height; y++) {
                            context.fillStyle = this.palette[state.lastImage.data[x + y * state.width] & mask];
                            context.fillRect(x * this.scaleFactor, y * this.scaleFactor, this.scaleFactor, this.scaleFactor);
                        }
                    }
                }
            }
            refreshPalette(state) {
                this.palette = [];
                for (let i = 0; i < state.palette.length; i++) {
                    const c = state.palette[i];
                    this.palette.push(`rgb(${c & 0xff},${(c >> 8) & 0xff},${(c >> 16) & 0xff})`);
                }
            }
            paletteDidChange(state) {
                if (!this.cachedPalette || this.cachedPalette.length != state.palette.length)
                    return true;
                for (let i = 0; i < this.cachedPalette.length; i++) {
                    if (this.cachedPalette[i] != state.palette[i])
                        return true;
                }
                return false;
            }
        }
        visuals.GamePlayer = GamePlayer;
    })(visuals = pxsim.visuals || (pxsim.visuals = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var visuals;
    (function (visuals) {
        const SVG_WIDTH = 40;
        const HALF_WIDTH = SVG_WIDTH >> 1;
        class Joystick {
            // <div id="joystick-container" class="game-joystick">
            //     <div class="spacer" />
            //     <div class="action-button">
            //         <button class="share-mod-button">Mod</button>
            //     </div>
            //     <svg xmlns="http://www.w3.org/2000/svg" class="game-joystick-svg" viewBox="1 0 40 40" width="200px" height="200px">
            //         <circle class="joystick-background" cx="20" cy="20" r="16" fill="#397382" stroke="#397382" strokeWidth="2"/>
            //         <rect class="dpad-up" x="16" y="6" width="8" height="12" rx="2" fill="#cecece" stroke="none" strokeWidth="1" />
            //         <rect class="dpad-down" x="16" y="22" width="8" height="12" rx="2" fill="#cecece" stroke="none" strokeWidth="1" />
            //         <rect class="dpad-right" x="22" y="16" width="12" height="8" ry="2" fill="#cecece" stroke="none" strokeWidth="1" />
            //         <rect class="dpad-left" x="6" y="16" width="12" height="8" ry="2" fill="#cecece" stroke="none" strokeWidth="1" />
            //         <circle cx="20" cy="20" r="6" fill="#cecece" />
            //         <circle class="joystick-handle" cx="20" cy="20" r="6" fill="#333" stroke="#999" strokeWidth="2" />
            //     </svg>
            // </div>
            constructor(container) {
                this.handleX = SVG_WIDTH >> 1;
                this.handleY = SVG_WIDTH >> 1;
                this.joystickGestureCount = 0;
                this.bindings = [];
                this.logEvents = () => {
                    if (this.joystickGestureCount > 0) {
                        // tickEvent("shareExperiment.play.joystickGestureUp", {"count": this.joystickGestureCount});
                        this.joystickGestureCount = 0;
                    }
                };
                this.cleanupInterval = () => {
                    clearInterval(this.joystickGestureInterval);
                    this.joystickGestureCount = 0;
                };
                this.parent = container || document.getElementById("joystick-container");
                this.dPadUp = this.parent.getElementsByClassName("dpad-up").item(0);
                this.dPadDown = this.parent.getElementsByClassName("dpad-down").item(0);
                this.dPadLeft = this.parent.getElementsByClassName("dpad-left").item(0);
                this.dPadRight = this.parent.getElementsByClassName("dpad-right").item(0);
                this.joystickHandle = this.parent.getElementsByClassName("joystick-handle").item(0);
                this.dragSurface = this.parent.getElementsByClassName("game-joystick-svg").item(0);
                this.bindEvents(this.dragSurface);
            }
            dispose() {
                this.dPadUp = undefined;
                this.dPadDown = undefined;
                this.dPadLeft = undefined;
                this.dPadRight = undefined;
                this.joystickHandle = undefined;
                this.parent = undefined;
                this.dragSurface = undefined;
                this.cleanupInterval();
                this.bindings.forEach(b => {
                    const [el, ev, cb] = b;
                    el.removeEventListener(ev, cb);
                });
                this.bindings = [];
            }
            buttonChanged(button, isPressed) {
                switch (button) {
                    case visuals.SimulatorButton.Down:
                        this.updateDirection(this.dPadDown, isPressed);
                        break;
                    case visuals.SimulatorButton.Up:
                        this.updateDirection(this.dPadUp, isPressed);
                        break;
                    case visuals.SimulatorButton.Left:
                        this.updateDirection(this.dPadLeft, isPressed);
                        break;
                    case visuals.SimulatorButton.Right:
                        this.updateDirection(this.dPadRight, isPressed);
                        break;
                    default:
                        break;
                }
            }
            updateDirection(button, isPressed) {
                if (button) {
                    button.setAttribute("fill", isPressed ? "#249ca3" : "#cecece");
                }
            }
            bindEvents(surface) {
                if (!surface)
                    return;
                if (visuals.hasPointerEvents()) {
                    this.bindPointerEvents(surface);
                }
                else if (visuals.isTouchEnabled()) {
                    this.bindTouchEvents(surface);
                }
                else {
                    this.bindMouseEvents(surface);
                }
                this.joystickGestureInterval = setInterval(this.logEvents, 5000);
            }
            bindPointerEvents(surface) {
                let inGesture = false;
                this.bindEvent(surface, "pointerup", (ev) => {
                    if (inGesture) {
                        this.updateJoystickDrag(ev.clientX, ev.clientY);
                        this.startAnimation();
                    }
                    inGesture = false;
                });
                this.bindEvent(surface, "pointerdown", (ev) => {
                    this.updateJoystickDrag(ev.clientX, ev.clientY);
                    inGesture = true;
                });
                this.bindEvent(surface, "pointermove", (ev) => {
                    if (inGesture)
                        this.updateJoystickDrag(ev.clientX, ev.clientY);
                });
                this.bindEvent(surface, "pointerleave", (ev) => {
                    if (inGesture) {
                        this.updateJoystickDrag(ev.clientX, ev.clientY);
                        this.startAnimation();
                    }
                    inGesture = false;
                });
            }
            bindMouseEvents(surface) {
                let inGesture = false;
                this.bindEvent(surface, "mouseup", (ev) => {
                    if (inGesture) {
                        this.updateJoystickDrag(ev.clientX, ev.clientY);
                        this.startAnimation();
                    }
                    inGesture = false;
                });
                this.bindEvent(surface, "mousedown", (ev) => {
                    this.updateJoystickDrag(ev.clientX, ev.clientY);
                    inGesture = true;
                });
                this.bindEvent(surface, "mousemove", (ev) => {
                    if (inGesture)
                        this.updateJoystickDrag(ev.clientX, ev.clientY);
                });
                this.bindEvent(surface, "mouseleave", (ev) => {
                    if (inGesture) {
                        this.updateJoystickDrag(ev.clientX, ev.clientY);
                        this.startAnimation();
                    }
                    inGesture = false;
                });
            }
            bindTouchEvents(surface) {
                let touchIdentifier;
                this.bindEvent(surface, "touchend", (ev) => {
                    if (touchIdentifier) {
                        const touch = visuals.getTouch(ev, touchIdentifier);
                        if (touch) {
                            this.updateJoystickDrag(touch.clientX, touch.clientY);
                            this.startAnimation();
                            ev.preventDefault();
                        }
                    }
                    touchIdentifier = undefined;
                });
                this.bindEvent(surface, "touchstart", (ev) => {
                    touchIdentifier = ev.changedTouches[0].identifier;
                    this.updateJoystickDrag(ev.changedTouches[0].clientX, ev.changedTouches[0].clientY);
                });
                this.bindEvent(surface, "touchmove", (ev) => {
                    if (touchIdentifier) {
                        const touch = visuals.getTouch(ev, touchIdentifier);
                        if (touch) {
                            this.updateJoystickDrag(touch.clientX, touch.clientY);
                            ev.preventDefault();
                        }
                    }
                });
                this.bindEvent(surface, "touchcancel", (ev) => {
                    if (touchIdentifier) {
                        const touch = visuals.getTouch(ev, touchIdentifier);
                        if (touch) {
                            this.updateJoystickDrag(touch.clientX, touch.clientY);
                            this.startAnimation();
                        }
                    }
                    touchIdentifier = undefined;
                });
            }
            updateJoystickDrag(x, y) {
                if (this.joystickHandle) {
                    pxsim.indicateFocus(true);
                    const bounds = this.dragSurface.getBoundingClientRect();
                    const dx = ((x - bounds.left) * (SVG_WIDTH / bounds.width)) - HALF_WIDTH;
                    const dy = ((y - bounds.top) * (SVG_WIDTH / bounds.height)) - HALF_WIDTH;
                    const angle = Math.atan2(dy, dx);
                    const distance = Math.min(Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)), 10);
                    this.setHandlePosition(HALF_WIDTH + distance * Math.cos(angle), HALF_WIDTH + distance * Math.sin(angle));
                }
            }
            startAnimation() {
                this.clearButtonPresses();
                if (this.joystickHandle) {
                    this.stopAnimation();
                    const animationFrame = () => {
                        let distance = this.getHandleDistance();
                        if (distance < 0.5) {
                            this.setHandlePosition(HALF_WIDTH, HALF_WIDTH, true);
                            this.stopAnimation();
                        }
                        else {
                            const angle = this.getHandleAngle();
                            distance = Math.max(distance - 1, 0);
                            this.setHandlePosition(HALF_WIDTH + distance * Math.cos(angle), HALF_WIDTH + distance * Math.sin(angle), true);
                            this.joystickAnimation = requestAnimationFrame(animationFrame);
                        }
                    };
                    this.joystickAnimation = requestAnimationFrame(animationFrame);
                }
            }
            stopAnimation() {
                if (this.joystickAnimation) {
                    cancelAnimationFrame(this.joystickAnimation);
                    this.joystickAnimation = undefined;
                    this.joystickGestureCount += 1;
                }
            }
            /**
             *
             * @param x The x location in SVG coordinates
             * @param y The y location in SVG coordinates
             */
            setHandlePosition(x, y, animation = false) {
                if (this.joystickHandle) {
                    this.joystickHandle.setAttribute("cx", "" + x);
                    this.joystickHandle.setAttribute("cy", "" + y);
                    this.handleX = x;
                    this.handleY = y;
                    if (!animation) {
                        if (this.getHandleDistance() < 5) {
                            this.clearButtonPresses();
                        }
                        else {
                            const angle = this.getHandleAngle();
                            const octet = (5 + Math.floor((angle / (Math.PI / 4)) - 0.5)) % 8;
                            if (octet === this.lastOctet)
                                return;
                            this.lastOctet = octet;
                            let left = false;
                            let right = false;
                            let up = false;
                            let down = false;
                            switch (octet) {
                                case 0:
                                    left = true;
                                    break;
                                case 1:
                                    left = true;
                                    up = true;
                                    break;
                                case 2:
                                    up = true;
                                    break;
                                case 3:
                                    up = true;
                                    right = true;
                                    break;
                                case 4:
                                    right = true;
                                    break;
                                case 5:
                                    right = true;
                                    down = true;
                                    break;
                                case 6:
                                    down = true;
                                    break;
                                case 7:
                                    left = true;
                                    down = true;
                                    break;
                            }
                            if (down)
                                visuals.pressButton(visuals.SimulatorButton.Down);
                            else
                                visuals.releaseButton(visuals.SimulatorButton.Down);
                            if (up)
                                visuals.pressButton(visuals.SimulatorButton.Up);
                            else
                                visuals.releaseButton(visuals.SimulatorButton.Up);
                            if (left)
                                visuals.pressButton(visuals.SimulatorButton.Left);
                            else
                                visuals.releaseButton(visuals.SimulatorButton.Left);
                            if (right)
                                visuals.pressButton(visuals.SimulatorButton.Right);
                            else
                                visuals.releaseButton(visuals.SimulatorButton.Right);
                        }
                    }
                }
            }
            getHandleAngle() {
                return Math.atan2(this.handleY - HALF_WIDTH, this.handleX - HALF_WIDTH);
                ;
            }
            getHandleDistance() {
                return Math.sqrt(Math.pow(this.handleX - HALF_WIDTH, 2) + Math.pow(this.handleY - HALF_WIDTH, 2));
            }
            clearButtonPresses() {
                visuals.releaseButton(visuals.SimulatorButton.Down);
                visuals.releaseButton(visuals.SimulatorButton.Up);
                visuals.releaseButton(visuals.SimulatorButton.Left);
                visuals.releaseButton(visuals.SimulatorButton.Right);
                this.lastOctet = undefined;
            }
            bindEvent(element, event, callback) {
                this.bindings.push([
                    element,
                    event,
                    callback
                ]);
                element.addEventListener(event, callback);
            }
        }
        visuals.Joystick = Joystick;
    })(visuals = pxsim.visuals || (pxsim.visuals = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var visuals;
    (function (visuals) {
        let SimulatorButton;
        (function (SimulatorButton) {
            SimulatorButton[SimulatorButton["Left"] = 1] = "Left";
            SimulatorButton[SimulatorButton["Up"] = 2] = "Up";
            SimulatorButton[SimulatorButton["Right"] = 3] = "Right";
            SimulatorButton[SimulatorButton["Down"] = 4] = "Down";
            SimulatorButton[SimulatorButton["A"] = 5] = "A";
            SimulatorButton[SimulatorButton["B"] = 6] = "B";
            SimulatorButton[SimulatorButton["Menu"] = 7] = "Menu";
            // system keys
            SimulatorButton[SimulatorButton["Reset"] = -3] = "Reset";
            SimulatorButton[SimulatorButton["TogglePause"] = -4] = "TogglePause";
        })(SimulatorButton = visuals.SimulatorButton || (visuals.SimulatorButton = {}));
        function pressButton(button) {
            pxsim.board().handleKeyEvent(button, true);
        }
        visuals.pressButton = pressButton;
        function releaseButton(button) {
            pxsim.board().handleKeyEvent(button, false);
        }
        visuals.releaseButton = releaseButton;
        function hasPointerEvents() {
            return typeof window != "undefined" && !!window.PointerEvent;
        }
        visuals.hasPointerEvents = hasPointerEvents;
        function isTouchEnabled() {
            return typeof window !== "undefined" &&
                ('ontouchstart' in window // works on most browsers
                    || (navigator && navigator.maxTouchPoints > 0)); // works on IE10/11 and Surface);
        }
        visuals.isTouchEnabled = isTouchEnabled;
        function getTouch(ev, identifier) {
            for (let i = 0; i < ev.changedTouches.length; i++) {
                if (ev.changedTouches[i].identifier === identifier) {
                    return ev.changedTouches[i];
                }
            }
            return undefined;
        }
        visuals.getTouch = getTouch;
    })(visuals = pxsim.visuals || (pxsim.visuals = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var encoders;
    (function (encoders) {
        const ROT_EV_CHANGED = 0x2233;
        function createRotaryEncoder(pinA, pinB) {
            return new RotaryEncoder(pinA, pinB, 0);
        }
        encoders.createRotaryEncoder = createRotaryEncoder;
        class RotaryEncoder {
            constructor(pinA, pinB, position) {
                this.pinA = pinA;
                this.pinB = pinB;
                this.position = position;
            }
            get id() {
                return this.pinA.id;
            }
            onChanged(handler) {
                pxsim.control.internalOnEvent(this.id, ROT_EV_CHANGED, handler);
            }
        }
        encoders.RotaryEncoder = RotaryEncoder;
    })(encoders = pxsim.encoders || (pxsim.encoders = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var RotaryEncoderMethods;
    (function (RotaryEncoderMethods) {
        function onChanged(encoder, handler) {
            encoder.onChanged(handler);
        }
        RotaryEncoderMethods.onChanged = onChanged;
        function position(encoder) {
            return encoder.position;
        }
        RotaryEncoderMethods.position = position;
    })(RotaryEncoderMethods = pxsim.RotaryEncoderMethods || (pxsim.RotaryEncoderMethods = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    class RefImage extends pxsim.RefObject {
        constructor(w, h, bpp) {
            super();
            this.isStatic = true;
            this.revision = 0;
            this.data = new Uint8Array(w * h);
            this._width = w;
            this._height = h;
            this._bpp = bpp;
        }
        scan(mark) { }
        gcKey() { return "Image"; }
        gcSize() { return 4 + (this.data.length + 3 >> 3); }
        gcIsStatic() { return this.isStatic; }
        pix(x, y) {
            return (x | 0) + (y | 0) * this._width;
        }
        inRange(x, y) {
            return 0 <= (x | 0) && (x | 0) < this._width &&
                0 <= (y | 0) && (y | 0) < this._height;
        }
        color(c) {
            return c & 0xff;
        }
        clamp(x, y) {
            x |= 0;
            y |= 0;
            if (x < 0)
                x = 0;
            else if (x >= this._width)
                x = this._width - 1;
            if (y < 0)
                y = 0;
            else if (y >= this._height)
                y = this._height - 1;
            return [x, y];
        }
        makeWritable() {
            this.revision++;
            this.isStatic = false;
        }
        toDebugString() {
            return this._width + "x" + this._height;
        }
    }
    pxsim.RefImage = RefImage;
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var ImageMethods;
    (function (ImageMethods) {
        function XX(x) { return (x << 16) >> 16; }
        function YY(x) { return x >> 16; }
        function width(img) { return img._width; }
        ImageMethods.width = width;
        function height(img) { return img._height; }
        ImageMethods.height = height;
        function isMono(img) { return img._bpp == 1; }
        ImageMethods.isMono = isMono;
        function isStatic(img) { return img.gcIsStatic(); }
        ImageMethods.isStatic = isStatic;
        function revision(img) { return img.revision; }
        ImageMethods.revision = revision;
        function setPixel(img, x, y, c) {
            img.makeWritable();
            if (img.inRange(x, y))
                img.data[img.pix(x, y)] = img.color(c);
        }
        ImageMethods.setPixel = setPixel;
        function getPixel(img, x, y) {
            if (img.inRange(x, y))
                return img.data[img.pix(x, y)];
            return 0;
        }
        ImageMethods.getPixel = getPixel;
        function fill(img, c) {
            img.makeWritable();
            img.data.fill(img.color(c));
        }
        ImageMethods.fill = fill;
        function fillRect(img, x, y, w, h, c) {
            if (w == 0 || h == 0 || x >= img._width || y >= img._height || x + w - 1 < 0 || y + h - 1 < 0)
                return;
            img.makeWritable();
            let [x2, y2] = img.clamp(x + w - 1, y + h - 1);
            [x, y] = img.clamp(x, y);
            let p = img.pix(x, y);
            w = x2 - x + 1;
            h = y2 - y + 1;
            let d = img._width - w;
            c = img.color(c);
            while (h-- > 0) {
                for (let i = 0; i < w; ++i)
                    img.data[p++] = c;
                p += d;
            }
        }
        ImageMethods.fillRect = fillRect;
        function _fillRect(img, xy, wh, c) {
            fillRect(img, XX(xy), YY(xy), XX(wh), YY(wh), c);
        }
        ImageMethods._fillRect = _fillRect;
        function mapRect(img, x, y, w, h, c) {
            if (c.data.length < 16)
                return;
            img.makeWritable();
            let [x2, y2] = img.clamp(x + w - 1, y + h - 1);
            [x, y] = img.clamp(x, y);
            let p = img.pix(x, y);
            w = x2 - x + 1;
            h = y2 - y + 1;
            let d = img._width - w;
            while (h-- > 0) {
                for (let i = 0; i < w; ++i) {
                    img.data[p] = c.data[img.data[p]];
                    p++;
                }
                p += d;
            }
        }
        ImageMethods.mapRect = mapRect;
        function _mapRect(img, xy, wh, c) {
            mapRect(img, XX(xy), YY(xy), XX(wh), YY(wh), c);
        }
        ImageMethods._mapRect = _mapRect;
        function equals(img, other) {
            if (!other || img._bpp != other._bpp || img._width != other._width || img._height != other._height) {
                return false;
            }
            let imgData = img.data;
            let otherData = other.data;
            let len = imgData.length;
            for (let i = 0; i < len; i++) {
                if (imgData[i] != otherData[i]) {
                    return false;
                }
            }
            return true;
        }
        ImageMethods.equals = equals;
        function getRows(img, x, dst) {
            x |= 0;
            if (!img.inRange(x, 0))
                return;
            let dp = 0;
            let len = Math.min(dst.data.length, (img._width - x) * img._height);
            let sp = x;
            let hh = 0;
            while (len--) {
                if (hh++ >= img._height) {
                    hh = 0;
                    sp = ++x;
                }
                dst.data[dp++] = img.data[sp];
                sp += img._width;
            }
        }
        ImageMethods.getRows = getRows;
        function setRows(img, x, src) {
            x |= 0;
            if (!img.inRange(x, 0))
                return;
            let sp = 0;
            let len = Math.min(src.data.length, (img._width - x) * img._height);
            let dp = x;
            let hh = 0;
            while (len--) {
                if (hh++ >= img._height) {
                    hh = 0;
                    dp = ++x;
                }
                img.data[dp] = src.data[sp++];
                dp += img._width;
            }
        }
        ImageMethods.setRows = setRows;
        function clone(img) {
            let r = new pxsim.RefImage(img._width, img._height, img._bpp);
            r.data.set(img.data);
            return r;
        }
        ImageMethods.clone = clone;
        function flipX(img) {
            img.makeWritable();
            const w = img._width;
            const h = img._height;
            for (let i = 0; i < h; ++i) {
                img.data.subarray(i * w, (i + 1) * w).reverse();
            }
        }
        ImageMethods.flipX = flipX;
        function flipY(img) {
            img.makeWritable();
            const w = img._width;
            const h = img._height;
            const d = img.data;
            for (let i = 0; i < w; ++i) {
                let top = i;
                let bot = i + (h - 1) * w;
                while (top < bot) {
                    let c = d[top];
                    d[top] = d[bot];
                    d[bot] = c;
                    top += w;
                    bot -= w;
                }
            }
        }
        ImageMethods.flipY = flipY;
        function transposed(img) {
            const w = img._width;
            const h = img._height;
            const d = img.data;
            const r = new pxsim.RefImage(h, w, img._bpp);
            const n = r.data;
            let src = 0;
            for (let i = 0; i < h; ++i) {
                let dst = i;
                for (let j = 0; j < w; ++j) {
                    n[dst] = d[src++];
                    dst += w;
                }
            }
            return r;
        }
        ImageMethods.transposed = transposed;
        function copyFrom(img, from) {
            if (img._width != from._width || img._height != from._height ||
                img._bpp != from._bpp)
                return;
            img.data.set(from.data);
        }
        ImageMethods.copyFrom = copyFrom;
        function scroll(img, dx, dy) {
            img.makeWritable();
            dx |= 0;
            dy |= 0;
            if (dx != 0) {
                const img2 = clone(img);
                img.data.fill(0);
                drawTransparentImage(img, img2, dx, dy);
            }
            else if (dy < 0) {
                dy = -dy;
                if (dy < img._height)
                    img.data.copyWithin(0, dy * img._width);
                else
                    dy = img._height;
                img.data.fill(0, (img._height - dy) * img._width);
            }
            else if (dy > 0) {
                if (dy < img._height)
                    img.data.copyWithin(dy * img._width, 0);
                else
                    dy = img._height;
                img.data.fill(0, 0, dy * img._width);
            }
            // TODO implement dx
        }
        ImageMethods.scroll = scroll;
        function replace(img, from, to) {
            to &= 0xf;
            const d = img.data;
            for (let i = 0; i < d.length; ++i)
                if (d[i] == from)
                    d[i] = to;
        }
        ImageMethods.replace = replace;
        function doubledX(img) {
            const w = img._width;
            const h = img._height;
            const d = img.data;
            const r = new pxsim.RefImage(w * 2, h, img._bpp);
            const n = r.data;
            let dst = 0;
            for (let src = 0; src < d.length; ++src) {
                let c = d[src];
                n[dst++] = c;
                n[dst++] = c;
            }
            return r;
        }
        ImageMethods.doubledX = doubledX;
        function doubledY(img) {
            const w = img._width;
            const h = img._height;
            const d = img.data;
            const r = new pxsim.RefImage(w, h * 2, img._bpp);
            const n = r.data;
            let src = 0;
            let dst0 = 0;
            let dst1 = w;
            for (let i = 0; i < h; ++i) {
                for (let j = 0; j < w; ++j) {
                    let c = d[src++];
                    n[dst0++] = c;
                    n[dst1++] = c;
                }
                dst0 += w;
                dst1 += w;
            }
            return r;
        }
        ImageMethods.doubledY = doubledY;
        function doubled(img) {
            return doubledX(doubledY(img));
        }
        ImageMethods.doubled = doubled;
        function drawImageCore(img, from, x, y, clear, check) {
            x |= 0;
            y |= 0;
            const w = from._width;
            let h = from._height;
            const sh = img._height;
            const sw = img._width;
            if (x + w <= 0)
                return false;
            if (x >= sw)
                return false;
            if (y + h <= 0)
                return false;
            if (y >= sh)
                return false;
            if (clear)
                fillRect(img, x, y, from._width, from._height, 0);
            else if (!check)
                img.makeWritable();
            const len = x < 0 ? Math.min(sw, w + x) : Math.min(sw - x, w);
            const fdata = from.data;
            const tdata = img.data;
            for (let p = 0; h--; y++, p += w) {
                if (0 <= y && y < sh) {
                    let dst = y * sw;
                    let src = p;
                    if (x < 0)
                        src += -x;
                    else
                        dst += x;
                    for (let i = 0; i < len; ++i) {
                        const v = fdata[src++];
                        if (v) {
                            if (check) {
                                if (tdata[dst])
                                    return true;
                            }
                            else {
                                tdata[dst] = v;
                            }
                        }
                        dst++;
                    }
                }
            }
            return false;
        }
        function drawImage(img, from, x, y) {
            drawImageCore(img, from, x, y, true, false);
        }
        ImageMethods.drawImage = drawImage;
        function drawTransparentImage(img, from, x, y) {
            drawImageCore(img, from, x, y, false, false);
        }
        ImageMethods.drawTransparentImage = drawTransparentImage;
        function overlapsWith(img, other, x, y) {
            return drawImageCore(img, other, x, y, false, true);
        }
        ImageMethods.overlapsWith = overlapsWith;
        function drawLineLow(img, x0, y0, x1, y1, c) {
            let dx = x1 - x0;
            let dy = y1 - y0;
            let yi = img._width;
            if (dy < 0) {
                yi = -yi;
                dy = -dy;
            }
            let D = 2 * dy - dx;
            dx <<= 1;
            dy <<= 1;
            c = img.color(c);
            let ptr = img.pix(x0, y0);
            for (let x = x0; x <= x1; ++x) {
                img.data[ptr] = c;
                if (D > 0) {
                    ptr += yi;
                    D -= dx;
                }
                D += dy;
                ptr++;
            }
        }
        function drawLineHigh(img, x0, y0, x1, y1, c) {
            let dx = x1 - x0;
            let dy = y1 - y0;
            let xi = 1;
            if (dx < 0) {
                xi = -1;
                dx = -dx;
            }
            let D = 2 * dx - dy;
            dx <<= 1;
            dy <<= 1;
            c = img.color(c);
            let ptr = img.pix(x0, y0);
            for (let y = y0; y <= y1; ++y) {
                img.data[ptr] = c;
                if (D > 0) {
                    ptr += xi;
                    D -= dy;
                }
                D += dx;
                ptr += img._width;
            }
        }
        function _drawLine(img, xy, wh, c) {
            drawLine(img, XX(xy), YY(xy), XX(wh), YY(wh), c);
        }
        ImageMethods._drawLine = _drawLine;
        function drawLine(img, x0, y0, x1, y1, c) {
            x0 |= 0;
            y0 |= 0;
            x1 |= 0;
            y1 |= 0;
            if (x1 < x0) {
                drawLine(img, x1, y1, x0, y0, c);
                return;
            }
            let w = x1 - x0;
            let h = y1 - y0;
            if (h == 0) {
                if (w == 0)
                    setPixel(img, x0, y0, c);
                else
                    fillRect(img, x0, y0, w + 1, 1, c);
                return;
            }
            if (w == 0) {
                if (h > 0)
                    fillRect(img, x0, y0, 1, h + 1, c);
                else
                    fillRect(img, x0, y1, 1, -h + 1, c);
                return;
            }
            if (x1 < 0 || x0 >= img._width)
                return;
            if (x0 < 0) {
                y0 -= (h * x0 / w) | 0;
                x0 = 0;
            }
            if (x1 >= img._width) {
                let d = (img._width - 1) - x1;
                y1 += (h * d / w) | 0;
                x1 = img._width - 1;
            }
            if (y0 < y1) {
                if (y0 >= img._height || y1 < 0)
                    return;
                if (y0 < 0) {
                    x0 -= (w * y0 / h) | 0;
                    y0 = 0;
                }
                if (y1 >= img._height) {
                    let d = (img._height - 1) - y1;
                    x1 += (w * d / h) | 0;
                    y1 = img._height;
                }
            }
            else {
                if (y1 >= img._height || y0 < 0)
                    return;
                if (y1 < 0) {
                    x1 -= (w * y1 / h) | 0;
                    y1 = 0;
                }
                if (y0 >= img._height) {
                    let d = (img._height - 1) - y0;
                    x0 += (w * d / h) | 0;
                    y0 = img._height;
                }
            }
            img.makeWritable();
            if (h < 0) {
                h = -h;
                if (h < w)
                    drawLineLow(img, x0, y0, x1, y1, c);
                else
                    drawLineHigh(img, x1, y1, x0, y0, c);
            }
            else {
                if (h < w)
                    drawLineLow(img, x0, y0, x1, y1, c);
                else
                    drawLineHigh(img, x0, y0, x1, y1, c);
            }
        }
        ImageMethods.drawLine = drawLine;
        function drawIcon(img, icon, x, y, color) {
            const img2 = icon.data;
            if (!pxsim.image.isValidImage(icon))
                return;
            if (img2[1] != 1)
                return; // only mono
            let w = pxsim.image.bufW(img2);
            let h = pxsim.image.bufH(img2);
            let byteH = pxsim.image.byteHeight(h, 1);
            x |= 0;
            y |= 0;
            const sh = img._height;
            const sw = img._width;
            if (x + w <= 0)
                return;
            if (x >= sw)
                return;
            if (y + h <= 0)
                return;
            if (y >= sh)
                return;
            img.makeWritable();
            let p = 8;
            color = img.color(color);
            const screen = img.data;
            for (let i = 0; i < w; ++i) {
                let xxx = x + i;
                if (0 <= xxx && xxx < sw) {
                    let dst = xxx + y * sw;
                    let src = p;
                    let yy = y;
                    let end = Math.min(sh, h + y);
                    if (y < 0) {
                        src += ((-y) >> 3);
                        yy += ((-y) >> 3) * 8;
                    }
                    let mask = 0x01;
                    let v = img2[src++];
                    while (yy < end) {
                        if (yy >= 0 && (v & mask)) {
                            screen[dst] = color;
                        }
                        mask <<= 1;
                        if (mask == 0x100) {
                            mask = 0x01;
                            v = img2[src++];
                        }
                        dst += sw;
                        yy++;
                    }
                }
                p += byteH;
            }
        }
        ImageMethods.drawIcon = drawIcon;
        function _drawIcon(img, icon, xy, color) {
            drawIcon(img, icon, XX(xy), YY(xy), color);
        }
        ImageMethods._drawIcon = _drawIcon;
        function fillCircle(img, cx, cy, r, c) {
            let x = r - 1;
            let y = 0;
            let dx = 1;
            let dy = 1;
            let err = dx - (r << 1);
            while (x >= y) {
                fillRect(img, cx + x, cy - y, 1, 1 + (y << 1), c);
                fillRect(img, cx + y, cy - x, 1, 1 + (x << 1), c);
                fillRect(img, cx - x, cy - y, 1, 1 + (y << 1), c);
                fillRect(img, cx - y, cy - x, 1, 1 + (x << 1), c);
                if (err <= 0) {
                    y++;
                    err += dy;
                    dy += 2;
                }
                if (err > 0) {
                    x--;
                    dx += 2;
                    err += dx - (r << 1);
                }
            }
        }
        ImageMethods.fillCircle = fillCircle;
        function _fillCircle(img, cxy, r, c) {
            fillCircle(img, XX(cxy), YY(cxy), r, c);
        }
        ImageMethods._fillCircle = _fillCircle;
        function _blitRow(img, xy, from, xh) {
            blitRow(img, XX(xy), YY(xy), from, XX(xh), YY(xh));
        }
        ImageMethods._blitRow = _blitRow;
        function blitRow(img, x, y, from, fromX, fromH) {
            x |= 0;
            y |= 0;
            fromX |= 0;
            fromH |= 0;
            if (!img.inRange(x, 0) || !img.inRange(fromX, 0) || fromH <= 0)
                return;
            let fy = 0;
            let stepFY = ((from._width << 16) / fromH) | 0;
            let endY = y + fromH;
            if (endY > img._height)
                endY = img._height;
            if (y < 0) {
                fy += -y * stepFY;
                y = 0;
            }
            while (y < endY) {
                img.data[img.pix(x, y)] = from.data[from.pix(fromX, fy >> 16)];
                y++;
                fy += stepFY;
            }
        }
        ImageMethods.blitRow = blitRow;
        function _blit(img, src, args) {
            return blit(img, src, args);
        }
        ImageMethods._blit = _blit;
        function blit(dst, src, args) {
            const xDst = args.getAt(0);
            const yDst = args.getAt(1);
            const wDst = args.getAt(2);
            const hDst = args.getAt(3);
            const xSrc = args.getAt(4);
            const ySrc = args.getAt(5);
            const wSrc = args.getAt(6);
            const hSrc = args.getAt(7);
            const transparent = args.getAt(8);
            const check = args.getAt(9);
            const xSrcStep = ((wSrc << 16) / wDst) | 0;
            const ySrcStep = ((hSrc << 16) / hDst) | 0;
            const xDstClip = Math.abs(Math.min(0, xDst));
            const yDstClip = Math.abs(Math.min(0, yDst));
            const xDstStart = xDst + xDstClip;
            const yDstStart = yDst + yDstClip;
            const xDstEnd = Math.min(dst._width, xDst + wDst);
            const yDstEnd = Math.min(dst._height, yDst + hDst);
            const xSrcStart = Math.max(0, (xSrc << 16) + xDstClip * xSrcStep);
            const ySrcStart = Math.max(0, (ySrc << 16) + yDstClip * ySrcStep);
            const xSrcEnd = Math.min(src._width, xSrc + wSrc) << 16;
            const ySrcEnd = Math.min(src._height, ySrc + hSrc) << 16;
            if (!check)
                dst.makeWritable();
            for (let yDstCur = yDstStart, ySrcCur = ySrcStart; yDstCur < yDstEnd && ySrcCur < ySrcEnd; ++yDstCur, ySrcCur += ySrcStep) {
                const ySrcCurI = ySrcCur >> 16;
                for (let xDstCur = xDstStart, xSrcCur = xSrcStart; xDstCur < xDstEnd && xSrcCur < xSrcEnd; ++xDstCur, xSrcCur += xSrcStep) {
                    const xSrcCurI = xSrcCur >> 16;
                    const cSrc = getPixel(src, xSrcCurI, ySrcCurI);
                    if (check && cSrc) {
                        const cDst = getPixel(dst, xDstCur, yDstCur);
                        if (cDst) {
                            return true;
                        }
                        continue;
                    }
                    if (!transparent || cSrc) {
                        setPixel(dst, xDstCur, yDstCur, cSrc);
                    }
                }
            }
            return false;
        }
        ImageMethods.blit = blit;
    })(ImageMethods = pxsim.ImageMethods || (pxsim.ImageMethods = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var image;
    (function (image) {
        function byteHeight(h, bpp) {
            if (bpp == 1)
                return h * bpp + 7 >> 3;
            else
                return ((h * bpp + 31) >> 5) << 2;
        }
        image.byteHeight = byteHeight;
        function isLegacyImage(buf) {
            if (!buf || buf.data.length < 5)
                return false;
            if (buf.data[0] != 0xe1 && buf.data[0] != 0xe4)
                return false;
            const bpp = buf.data[0] & 0xf;
            const sz = buf.data[1] * byteHeight(buf.data[2], bpp);
            if (4 + sz != buf.data.length)
                return false;
            return true;
        }
        function bufW(data) {
            return data[2] | (data[3] << 8);
        }
        image.bufW = bufW;
        function bufH(data) {
            return data[4] | (data[5] << 8);
        }
        image.bufH = bufH;
        function isValidImage(buf) {
            if (!buf || buf.data.length < 5)
                return false;
            if (buf.data[0] != 0x87)
                return false;
            if (buf.data[1] != 1 && buf.data[1] != 4)
                return false;
            const bpp = buf.data[1];
            const sz = bufW(buf.data) * byteHeight(bufH(buf.data), bpp);
            if (8 + sz != buf.data.length)
                return false;
            return true;
        }
        image.isValidImage = isValidImage;
        function create(w, h) {
            return new pxsim.RefImage(w, h, pxsim.getScreenState().bpp());
        }
        image.create = create;
        function ofBuffer(buf) {
            const src = buf.data;
            let srcP = 4;
            let w = 0, h = 0, bpp = 0;
            if (isLegacyImage(buf)) {
                w = src[1];
                h = src[2];
                bpp = src[0] & 0xf;
                // console.log("using legacy image")
            }
            else if (isValidImage(buf)) {
                srcP = 8;
                w = bufW(src);
                h = bufH(src);
                bpp = src[1];
            }
            if (w == 0 || h == 0)
                return null;
            const r = new pxsim.RefImage(w, h, bpp);
            const dst = r.data;
            r.isStatic = buf.isStatic;
            if (bpp == 1) {
                for (let i = 0; i < w; ++i) {
                    let dstP = i;
                    let mask = 0x01;
                    let v = src[srcP++];
                    for (let j = 0; j < h; ++j) {
                        if (mask == 0x100) {
                            mask = 0x01;
                            v = src[srcP++];
                        }
                        if (v & mask)
                            dst[dstP] = 1;
                        dstP += w;
                        mask <<= 1;
                    }
                }
            }
            else if (bpp == 4) {
                for (let i = 0; i < w; ++i) {
                    let dstP = i;
                    for (let j = 0; j < h >> 1; ++j) {
                        const v = src[srcP++];
                        dst[dstP] = v & 0xf;
                        dstP += w;
                        dst[dstP] = v >> 4;
                        dstP += w;
                    }
                    if (h & 1)
                        dst[dstP] = src[srcP++] & 0xf;
                    srcP = (srcP + 3) & ~3;
                }
            }
            return r;
        }
        image.ofBuffer = ofBuffer;
        function toBuffer(img) {
            let col = byteHeight(img._height, img._bpp);
            let sz = 8 + img._width * col;
            let r = new Uint8Array(sz);
            r[0] = 0x87;
            r[1] = img._bpp;
            r[2] = img._width & 0xff;
            r[3] = img._width >> 8;
            r[4] = img._height & 0xff;
            r[5] = img._height >> 8;
            let dstP = 8;
            const w = img._width;
            const h = img._height;
            const data = img.data;
            for (let i = 0; i < w; ++i) {
                if (img._bpp == 4) {
                    let p = i;
                    for (let j = 0; j < h; j += 2) {
                        r[dstP++] = ((data[p + w] & 0xf) << 4) | ((data[p] || 0) & 0xf);
                        p += 2 * w;
                    }
                    dstP = (dstP + 3) & ~3;
                }
                else if (img._bpp == 1) {
                    let mask = 0x01;
                    let p = i;
                    for (let j = 0; j < h; j++) {
                        if (data[p])
                            r[dstP] |= mask;
                        mask <<= 1;
                        p += w;
                        if (mask == 0x100) {
                            mask = 0x01;
                            dstP++;
                        }
                    }
                    if (mask != 0x01)
                        dstP++;
                }
            }
            return new pxsim.RefBuffer(r);
        }
        image.toBuffer = toBuffer;
        function doubledIcon(buf) {
            let img = ofBuffer(buf);
            if (!img)
                return null;
            img = pxsim.ImageMethods.doubled(img);
            return toBuffer(img);
        }
        image.doubledIcon = doubledIcon;
    })(image = pxsim.image || (pxsim.image = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var pxtcore;
    (function (pxtcore) {
        function updateScreen(img) {
            const state = pxsim.getScreenState();
            if (state)
                state.showImage(img);
        }
        pxtcore.updateScreen = updateScreen;
        function updateStats(s) {
            const state = pxsim.getScreenState();
            if (state)
                state.updateStats(s);
        }
        pxtcore.updateStats = updateStats;
        function setPalette(b) {
            const state = pxsim.getScreenState();
            if (state)
                state.setPalette(b);
        }
        pxtcore.setPalette = setPalette;
        function setupScreenStatusBar(barHeight) {
            const state = pxsim.getScreenState();
            if (state)
                state.setupScreenStatusBar(barHeight);
        }
        pxtcore.setupScreenStatusBar = setupScreenStatusBar;
        function updateScreenStatusBar(img) {
            const state = pxsim.getScreenState();
            if (state)
                state.updateScreenStatusBar(img);
        }
        pxtcore.updateScreenStatusBar = updateScreenStatusBar;
        function setScreenBrightness(b) {
            // I guess we could at least turn the screen off, when b==0,
            // otherwise, it probably doesn't make much sense to do anything.
            const state = pxsim.getScreenState();
            if (state)
                state.setScreenBrightness(b);
        }
        pxtcore.setScreenBrightness = setScreenBrightness;
    })(pxtcore = pxsim.pxtcore || (pxsim.pxtcore = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    function htmlColorToUint32(hexColor) {
        const ca = new Uint8ClampedArray(4);
        const ui = new Uint32Array(ca.buffer);
        const v = parseInt(hexColor.replace(/#/, ""), 16);
        ca[0] = (v >> 16) & 0xff;
        ca[1] = (v >> 8) & 0xff;
        ca[2] = (v >> 0) & 0xff;
        ca[3] = 0xff; // alpha
        // convert to uint32 using target endian
        return new Uint32Array(ca.buffer)[0];
    }
    class ScreenState {
        constructor(paletteSrc, w = 0, h = 0) {
            this.width = 0;
            this.height = 0;
            this.lastImageFlushTime = 0;
            this.changed = true;
            this.brightness = 255;
            this.onChange = () => { };
            if (!paletteSrc)
                paletteSrc = ["#000000", "#ffffff"];
            this.palette = new Uint32Array(paletteSrc.length);
            for (let i = 0; i < this.palette.length; ++i) {
                this.palette[i] = htmlColorToUint32(paletteSrc[i]);
            }
            if (w) {
                this.width = w;
                this.height = h;
                this.screen = new Uint32Array(this.width * this.height);
                this.screen.fill(this.palette[0]);
            }
        }
        setScreenBrightness(b) {
            this.brightness = b | 0;
        }
        setPalette(buf) {
            const ca = new Uint8ClampedArray(4);
            const rd = new Uint32Array(ca.buffer);
            const src = buf.data;
            if (48 != src.length)
                pxsim.pxtrt.panic(911 /* PANIC_SCREEN_ERROR */);
            this.palette = new Uint32Array((src.length / 3) | 0);
            for (let i = 0; i < this.palette.length; ++i) {
                const p = i * 3;
                ca[0] = src[p + 0];
                ca[1] = src[p + 1];
                ca[2] = src[p + 2];
                ca[3] = 0xff; // alpha
                // convert to uint32 using target endian
                this.palette[i] = rd[0];
            }
        }
        bpp() {
            return this.palette.length > 2 ? 4 : 1;
        }
        didChange() {
            let res = this.changed;
            this.changed = false;
            return res;
        }
        maybeForceUpdate() {
            if (Date.now() - this.lastImageFlushTime > 200) {
                this.showImage(null);
            }
        }
        showImage(img) {
            pxsim.runtime.startPerfCounter(0);
            if (!img)
                img = this.lastImage;
            if (!img)
                return;
            if (this.width == 0) {
                this.width = img._width;
                this.height = img._height;
                this.screen = new Uint32Array(this.width * this.height);
            }
            this.lastImageFlushTime = Date.now();
            this.lastImage = img;
            this.changed = true;
            const src = img.data;
            const dst = this.screen;
            if (this.width != img._width || this.height != img._height || src.length != dst.length)
                pxsim.U.userError("wrong size");
            const p = this.palette;
            const mask = p.length - 1;
            for (let i = 0; i < src.length; ++i) {
                dst[i] = p[src[i] & mask];
            }
            this.onChange();
            pxsim.runtime.stopPerfCounter(0);
        }
        updateStats(stats) {
            this.stats = stats;
            const b = pxsim.board();
            if (b && b.updateStats) {
                b.updateStats();
            }
        }
        bindToSvgImage(lcd) {
            const screenCanvas = document.createElement("canvas");
            screenCanvas.width = this.width;
            screenCanvas.height = this.height;
            const ctx = screenCanvas.getContext("2d");
            ctx.imageSmoothingEnabled = false;
            const imgdata = ctx.getImageData(0, 0, this.width, this.height);
            const arr = new Uint32Array(imgdata.data.buffer);
            const flush = function () {
                requested = false;
                ctx.putImageData(imgdata, 0, 0);
                lcd.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", screenCanvas.toDataURL());
            };
            let requested = false;
            this.onChange = () => {
                arr.set(this.screen);
                // paint rect
                pxsim.runtime.queueDisplayUpdate();
                if (!requested) {
                    requested = true;
                    window.requestAnimationFrame(flush);
                }
            };
        }
        setupScreenStatusBar(barHeight) {
            // TODO
        }
        updateScreenStatusBar(img) {
            // TODO
        }
    }
    pxsim.ScreenState = ScreenState;
    function getScreenState() {
        return pxsim.board().screenState;
    }
    pxsim.getScreenState = getScreenState;
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var visuals;
    (function (visuals) {
        const SCREEN_PART_WIDTH = 158.439;
        const SCREEN_PART_HEIGHT = 146.803;
        const SCREEN_PART = `
  <svg xmlns="http://www.w3.org/2000/svg" id="svg8" width="158.439" height="146.803" viewBox="0 0 158.439 146.803">
  <g id="layer1" transform="translate(-18.95 -27.866)">
    <path id="rect4487" fill="#00f" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.306" d="M19.603 28.519h157.133v145.497H19.603z"/>
    <image id="thescreen" width="136.673" height="109.33" x="26.118" y="61.528" fill="#c8beb7" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".427"/>
    <path id="GND" fill="#d4d4d4" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.139" d="M23.177 31.031h11.864v11.864H23.177z"/>
    <path id="VCC" fill="#d4d4d4" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.139" d="M37.119 31.031h11.864v11.864H37.119z"/>
    <path id="DISPLAY_DC" fill="#d4d4d4" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.139" d="M65.004 31.031h11.864v11.864H65.004z"/>
    <path id="DISPLAY_CS" fill="#d4d4d4" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.139" d="M78.947 31.031h11.864v11.864H78.947z"/>
    <path id="DISPLAY_MOSI" fill="#d4d4d4" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.139" d="M92.889 31.031h11.864v11.864H92.889z"/>
    <path id="DISPLAY_SCK" fill="#d4d4d4" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.139" d="M106.831 31.031h11.864v11.864h-11.864z"/>
    <path id="DISPLAY_MISO" fill="#d4d4d4" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.139" d="M120.774 31.031h11.864v11.864h-11.864z"/>
    <text id="text4619" x="45.309" y="-27.057" fill="#fff" stroke-width=".226" font-family="consolas" font-size="6.63" font-weight="400" letter-spacing="0" style="line-height:1.25;-inkscape-font-specification:consolas" transform="rotate(90)" word-spacing="0">
      <tspan id="tspan4617" x="45.309" y="-27.057">Gnd</tspan>
    </text>
    <text id="text4619-4" x="45.51" y="-41.166" fill="#fff" stroke-width=".226" font-family="consolas" font-size="6.63" font-weight="400" letter-spacing="0" style="line-height:1.25;-inkscape-font-specification:consolas" transform="rotate(90)" word-spacing="0">
      <tspan id="tspan4617-3" x="45.51" y="-41.166">VCC</tspan>
    </text>
    <text id="text4619-4-9" x="45.17" y="-69.274" fill="#fff" stroke-width=".226" font-family="consolas" font-size="6.63" font-weight="400" letter-spacing="0" style="line-height:1.25;-inkscape-font-specification:consolas" transform="rotate(90)" word-spacing="0">
      <tspan id="tspan4617-3-1" x="45.17" y="-69.274">D/C</tspan>
    </text>
    <text id="text4619-4-9-2" x="45.225" y="-83.064" fill="#fff" stroke-width=".226" font-family="consolas" font-size="6.63" font-weight="400" letter-spacing="0" style="line-height:1.25;-inkscape-font-specification:consolas" transform="rotate(90)" word-spacing="0">
      <tspan id="tspan4617-3-1-5" x="45.225" y="-83.064">CS</tspan>
    </text>
    <text id="text4619-4-9-8" x="45.364" y="-97.03" fill="#fff" stroke-width=".226" font-family="consolas" font-size="6.63" font-weight="400" letter-spacing="0" style="line-height:1.25;-inkscape-font-specification:consolas" transform="rotate(90)" word-spacing="0">
      <tspan id="tspan4617-3-1-9" x="45.364" y="-97.03">MOSI</tspan>
    </text>
    <text id="text4619-4-9-3" x="45.163" y="-110.996" fill="#fff" stroke-width=".226" font-family="consolas" font-size="6.63" font-weight="400" letter-spacing="0" style="line-height:1.25;-inkscape-font-specification:consolas" transform="rotate(90)" word-spacing="0">
      <tspan id="tspan4617-3-1-7" x="45.163" y="-110.996">SCK</tspan>
    </text>
    <text id="text4619-4-9-0" x="46.078" y="-138.962" fill="#fff" stroke-width=".226" font-family="consolas" font-size="6.63" font-weight="400" letter-spacing="0" style="line-height:1.25;-inkscape-font-specification:consolas" transform="rotate(90)" word-spacing="0">
      <tspan id="tspan4617-3-1-72" x="46.078" y="-138.962">BL</tspan>
    </text>
    <path id="DISPLAY_RST" fill="#d4d4d4" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.139" d="M51.062 31.031h11.864v11.864H51.062z"/>
    <text id="text4619-4-94" x="44.972" y="-55.132" fill="#fff" stroke-width=".226" font-family="consolas" font-size="6.63" font-weight="400" letter-spacing="0" style="line-height:1.25;-inkscape-font-specification:consolas" transform="rotate(90)" word-spacing="0">
      <tspan id="tspan4617-3-6" x="44.972" y="-55.132">RST</tspan>
    </text>
    <path id="DISPLAY_BL" fill="#d4d4d4" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.139" d="M134.638 31.031h11.864v11.864h-11.864z"/>
    <text id="text4619-4-9-0-6" x="45.403" y="-124.163" fill="#fff" stroke-width=".226" font-family="consolas" font-size="6.63" font-weight="400" letter-spacing="0" style="line-height:1.25;-inkscape-font-specification:consolas" transform="rotate(90)" word-spacing="0">
      <tspan id="tspan4617-3-1-72-8" x="45.403" y="-124.163">MISO</tspan>
    </text>
  </g>
</svg>
  `;
        function mkScreenPart(xy = [0, 0]) {
            let [x, y] = xy;
            let l = x;
            let t = y;
            let w = SCREEN_PART_WIDTH;
            let h = SCREEN_PART_HEIGHT;
            let img = pxsim.svg.elt("image");
            pxsim.svg.hydrate(img, {
                class: "sim-screen", x: l, y: t, width: w, height: h,
                href: pxsim.svg.toDataUri(SCREEN_PART)
            });
            return { el: img, x: l, y: t, w: w, h: h };
        }
        visuals.mkScreenPart = mkScreenPart;
        class ScreenView {
            constructor() {
            }
            init(bus, state, svgEl, otherParams) {
                this.bus = bus;
                this.state = state;
                this.overElement = undefined;
                this.defs = [];
                this.lastLocation = [0, 0];
                const partSvg = pxsim.svg.parseString(SCREEN_PART);
                this.canvas = partSvg.getElementById('thescreen');
                this.element = pxsim.svg.elt("g");
                this.element.appendChild(partSvg.firstElementChild);
                this.state.bindToSvgImage(this.canvas);
            }
            moveToCoord(xy) {
                let [x, y] = xy;
                const loc = [x, y];
                this.lastLocation = loc;
                this.updateLoc();
            }
            updateLoc() {
                let [x, y] = this.lastLocation;
                visuals.translateEl(this.element, [x, y]);
            }
            updateState() { }
            updateTheme() { }
        }
        visuals.ScreenView = ScreenView;
    })(visuals = pxsim.visuals || (pxsim.visuals = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    class AudioState {
        constructor() {
            this.outputDestination_ = 0;
            this.volume = 100;
            this.playing = false;
        }
        startPlaying() {
            this.playing = true;
        }
        stopPlaying() {
            this.playing = false;
        }
        isPlaying() {
            return this.playing;
        }
    }
    pxsim.AudioState = AudioState;
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var music;
    (function (music) {
        function noteFrequency(note) {
            return note;
        }
        music.noteFrequency = noteFrequency;
        function setOutput(mode) {
            const audioState = pxsim.getAudioState();
            audioState.outputDestination_ = mode;
        }
        music.setOutput = setOutput;
        function setVolume(volume) {
            const audioState = pxsim.getAudioState();
            audioState.volume = Math.max(0, 1024, volume * 4);
        }
        music.setVolume = setVolume;
        function setPitchPin(pin) {
            const audioState = pxsim.getAudioState();
            audioState.pitchPin_ = pin;
        }
        music.setPitchPin = setPitchPin;
        function setTone(buffer) {
            // TODO: implement set tone in the audio context
        }
        music.setTone = setTone;
        function enableAmp(enabled) {
            // TODO
        }
        music.enableAmp = enableAmp;
        function playTone(frequency, ms) {
            const b = pxsim.board();
            if (!b)
                return;
            const audioState = pxsim.getAudioState();
            const currentOutput = audioState.outputDestination_;
            audioState.startPlaying();
            pxsim.runtime.queueDisplayUpdate();
            pxsim.AudioContextManager.tone(frequency, 1);
            let cb = pxsim.getResume();
            if (ms <= 0)
                cb();
            else {
                pxsim.runtime.schedule(() => {
                    pxsim.AudioContextManager.stop();
                    audioState.stopPlaying();
                    pxsim.runtime.queueDisplayUpdate();
                    cb();
                }, ms);
            }
        }
        music.playTone = playTone;
        function getPitchPin() {
            const audioState = pxsim.getAudioState();
            if (!audioState.pitchPin_) {
                audioState.pitchPin_ = pxsim.board().getDefaultPitchPin();
            }
            return audioState.pitchPin_;
        }
    })(music = pxsim.music || (pxsim.music = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    function getAudioState() {
        return pxsim.board().audioState;
    }
    pxsim.getAudioState = getAudioState;
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var music;
    (function (music) {
        function playInstructions(b) {
            return pxsim.AudioContextManager.playInstructionsAsync(b);
        }
        music.playInstructions = playInstructions;
        function queuePlayInstructions(when, b) {
            pxsim.AudioContextManager.queuePlayInstructions(when, b);
        }
        music.queuePlayInstructions = queuePlayInstructions;
        function stopPlaying() {
            pxsim.AudioContextManager.muteAllChannels();
        }
        music.stopPlaying = stopPlaying;
        function forceOutput(mode) { }
        music.forceOutput = forceOutput;
    })(music = pxsim.music || (pxsim.music = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var settings;
    (function (settings) {
        let currSize = 0;
        const MAX_SIZE = 16 * 1024;
        function encodeKey(key) {
            return "S/" + key;
        }
        function allKeys() {
            const pref = encodeKey("");
            const st = pxsim.board().storedState;
            return Object.keys(st).filter(k => k.slice(0, pref.length) == pref);
        }
        function userKeys() {
            return allKeys().filter(s => s[2] != "#");
        }
        function computeSize() {
            let sz = 0;
            const storage = pxsim.board().storedState;
            for (let k of allKeys()) {
                sz += k.length + storage[k].length;
            }
            currSize = sz;
        }
        function _set(key, buf) {
            key = encodeKey(key);
            const storage = pxsim.board().storedState;
            const prev = storage[key];
            const val = btoa(pxsim.U.uint8ArrayToString(buf.data));
            const newSize = prev == null
                ? currSize + key.length + val.length
                : currSize + val.length - prev.length;
            if (newSize > MAX_SIZE)
                return -1;
            pxsim.board().setStoredState(key, val);
            currSize = newSize;
            return 0;
        }
        settings._set = _set;
        function _remove(key) {
            key = encodeKey(key);
            const storage = pxsim.board().storedState;
            if (storage[key] == null)
                return -1;
            currSize -= key.length + storage[key].length;
            pxsim.board().setStoredState(key, null);
            return 0;
        }
        settings._remove = _remove;
        function _exists(key) {
            return _get(key) != undefined;
        }
        settings._exists = _exists;
        function _get(key) {
            key = encodeKey(key);
            const storage = pxsim.board().storedState;
            const val = storage[key];
            if (val == null)
                return undefined;
            return new pxsim.RefBuffer(pxsim.U.stringToUint8Array(atob(val)));
        }
        settings._get = _get;
        function _userClean() {
            for (let k of userKeys())
                pxsim.board().setStoredState(k, null);
            computeSize();
            // if system keys take more than 25% of space, delete everything
            if (currSize > MAX_SIZE / 4) {
                for (let k of allKeys())
                    pxsim.board().setStoredState(k, null);
                computeSize();
            }
        }
        settings._userClean = _userClean;
        function _list(prefix) {
            const r = new pxsim.RefCollection();
            const emptyPref = encodeKey("");
            for (let k of prefix[0] == "#" ? allKeys() : userKeys()) {
                const n = k.slice(emptyPref.length);
                if (n.slice(0, prefix.length) != prefix)
                    continue;
                r.push(n);
            }
            return r;
        }
        settings._list = _list;
    })(settings = pxsim.settings || (pxsim.settings = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var input;
    (function (input) {
        function onGesture(gesture, handler) {
            let b = pxsim.accelerometer();
            b.accelerometer.activate();
            if (gesture == DAL.ACCELEROMETER_EVT_SHAKE && !b.useShake) {
                b.useShake = true;
                pxsim.runtime.queueDisplayUpdate();
            }
            pxsim.pxtcore.registerWithDal(DAL.DEVICE_ID_GESTURE, gesture, handler);
        }
        input.onGesture = onGesture;
        function rotation(kind) {
            let b = pxsim.accelerometer();
            let acc = b.accelerometer;
            acc.activate();
            let x = acc.getX(pxsim.MicroBitCoordinateSystem.NORTH_EAST_DOWN);
            let y = acc.getY(pxsim.MicroBitCoordinateSystem.NORTH_EAST_DOWN);
            let z = acc.getZ(pxsim.MicroBitCoordinateSystem.NORTH_EAST_DOWN);
            let roll = Math.atan2(y, z);
            let pitch = Math.atan(-x / (y * Math.sin(roll) + z * Math.cos(roll)));
            let r = 0;
            switch (kind) {
                case 0:
                    r = pitch;
                    break;
                case 1:
                    r = roll;
                    break;
            }
            return Math.floor(r / Math.PI * 180);
        }
        input.rotation = rotation;
        function setAccelerometerRange(range) {
            let b = pxsim.accelerometer();
            b.accelerometer.setSampleRange(range);
        }
        input.setAccelerometerRange = setAccelerometerRange;
        function acceleration(dimension) {
            let b = pxsim.accelerometer();
            let acc = b.accelerometer;
            acc.activate();
            switch (dimension) {
                case 0: return acc.getX();
                case 1: return acc.getY();
                case 2: return acc.getZ();
                default: return Math.floor(Math.sqrt(acc.instantaneousAccelerationSquared()));
            }
        }
        input.acceleration = acceleration;
    })(input = pxsim.input || (pxsim.input = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
    /**
      * Co-ordinate systems that can be used.
      * RAW: Unaltered data. Data will be returned directly from the accelerometer.
      *
      * SIMPLE_CARTESIAN: Data will be returned based on an easy to understand alignment, consistent with the cartesian system taught in schools.
      * When held upright, facing the user:
      *
      *                            /
      *    +--------------------+ z
      *    |                    |
      *    |       .....        |
      *    | *     .....      * |
      * ^  |       .....        |
      * |  |                    |
      * y  +--------------------+  x-->
      *
      *
      * NORTH_EAST_DOWN: Data will be returned based on the industry convention of the North East Down (NED) system.
      * When held upright, facing the user:
      *
      *                            z
      *    +--------------------+ /
      *    |                    |
      *    |       .....        |
      *    | *     .....      * |
      * ^  |       .....        |
      * |  |                    |
      * x  +--------------------+  y-->
      *
      */
    let MicroBitCoordinateSystem;
    (function (MicroBitCoordinateSystem) {
        MicroBitCoordinateSystem[MicroBitCoordinateSystem["RAW"] = 0] = "RAW";
        MicroBitCoordinateSystem[MicroBitCoordinateSystem["SIMPLE_CARTESIAN"] = 1] = "SIMPLE_CARTESIAN";
        MicroBitCoordinateSystem[MicroBitCoordinateSystem["NORTH_EAST_DOWN"] = 2] = "NORTH_EAST_DOWN";
    })(MicroBitCoordinateSystem = pxsim.MicroBitCoordinateSystem || (pxsim.MicroBitCoordinateSystem = {}));
    class Accelerometer {
        constructor(runtime) {
            this.runtime = runtime;
            this.sigma = 0; // the number of ticks that the instantaneous gesture has been stable.
            this.lastGesture = 0; // the last, stable gesture recorded.
            this.currentGesture = 0; // the instantaneous, unfiltered gesture detected.
            this.sample = { x: 0, y: 0, z: -1023 };
            this.shake = { x: false, y: false, z: false, count: 0, shaken: 0, timer: 0 }; // State information needed to detect shake events.
            this.isActive = false;
            this.sampleRange = 2;
            this.id = DAL.DEVICE_ID_ACCELEROMETER;
        }
        setSampleRange(range) {
            this.activate();
            this.sampleRange = Math.max(1, Math.min(8, range));
        }
        activate() {
            if (!this.isActive) {
                this.isActive = true;
                this.runtime.queueDisplayUpdate();
            }
        }
        /**
         * Reads the acceleration data from the accelerometer, and stores it in our buffer.
         * This is called by the tick() member function, if the interrupt is set!
         */
        update(x, y, z) {
            // read MSB values...
            this.sample.x = Math.floor(x);
            this.sample.y = Math.floor(y);
            this.sample.z = Math.floor(z);
            // Update gesture tracking
            this.updateGesture();
            // Indicate that a new sample is available
            pxsim.board().bus.queue(this.id, DAL.ACCELEROMETER_EVT_DATA_UPDATE);
        }
        instantaneousAccelerationSquared() {
            // Use pythagoras theorem to determine the combined force acting on the device.
            return this.sample.x * this.sample.x + this.sample.y * this.sample.y + this.sample.z * this.sample.z;
        }
        /**
         * Service function. Determines the best guess posture of the device based on instantaneous data.
         * This makes no use of historic data (except for shake), and forms this input to the filter implemented in updateGesture().
         *
         * @return A best guess of the current posture of the device, based on instantaneous data.
         */
        instantaneousPosture() {
            let force = this.instantaneousAccelerationSquared();
            let shakeDetected = false;
            // Test for shake events.
            // We detect a shake by measuring zero crossings in each axis. In other words, if we see a strong acceleration to the left followed by
            // a string acceleration to the right, then we can infer a shake. Similarly, we can do this for each acxis (left/right, up/down, in/out).
            //
            // If we see enough zero crossings in succession (MICROBIT_ACCELEROMETER_SHAKE_COUNT_THRESHOLD), then we decide that the device
            // has been shaken.
            if ((this.getX() < -DAL.ACCELEROMETER_SHAKE_TOLERANCE && this.shake.x) || (this.getX() > DAL.ACCELEROMETER_SHAKE_TOLERANCE && !this.shake.x)) {
                shakeDetected = true;
                this.shake.x = !this.shake.x;
            }
            if ((this.getY() < -DAL.ACCELEROMETER_SHAKE_TOLERANCE && this.shake.y) || (this.getY() > DAL.ACCELEROMETER_SHAKE_TOLERANCE && !this.shake.y)) {
                shakeDetected = true;
                this.shake.y = !this.shake.y;
            }
            if ((this.getZ() < -DAL.ACCELEROMETER_SHAKE_TOLERANCE && this.shake.z) || (this.getZ() > DAL.ACCELEROMETER_SHAKE_TOLERANCE && !this.shake.z)) {
                shakeDetected = true;
                this.shake.z = !this.shake.z;
            }
            if (shakeDetected && this.shake.count < DAL.ACCELEROMETER_SHAKE_COUNT_THRESHOLD && ++this.shake.count == DAL.ACCELEROMETER_SHAKE_COUNT_THRESHOLD)
                this.shake.shaken = 1;
            if (++this.shake.timer >= DAL.ACCELEROMETER_SHAKE_DAMPING) {
                this.shake.timer = 0;
                if (this.shake.count > 0) {
                    if (--this.shake.count == 0)
                        this.shake.shaken = 0;
                }
            }
            if (this.shake.shaken)
                return DAL.ACCELEROMETER_EVT_SHAKE;
            let sq = (n) => n * n;
            if (force < sq(DAL.ACCELEROMETER_FREEFALL_TOLERANCE))
                return DAL.ACCELEROMETER_EVT_FREEFALL;
            if (force > sq(DAL.ACCELEROMETER_3G_TOLERANCE))
                return DAL.ACCELEROMETER_EVT_3G;
            if (force > sq(DAL.ACCELEROMETER_6G_TOLERANCE))
                return DAL.ACCELEROMETER_EVT_6G;
            if (force > sq(DAL.ACCELEROMETER_8G_TOLERANCE))
                return DAL.ACCELEROMETER_EVT_8G;
            // Determine our posture.
            if (this.getX() < (-1000 + DAL.ACCELEROMETER_TILT_TOLERANCE))
                return DAL.ACCELEROMETER_EVT_TILT_LEFT;
            if (this.getX() > (1000 - DAL.ACCELEROMETER_TILT_TOLERANCE))
                return DAL.ACCELEROMETER_EVT_TILT_RIGHT;
            if (this.getY() < (-1000 + DAL.ACCELEROMETER_TILT_TOLERANCE))
                return DAL.ACCELEROMETER_EVT_TILT_UP;
            if (this.getY() > (1000 - DAL.ACCELEROMETER_TILT_TOLERANCE))
                return DAL.ACCELEROMETER_EVT_TILT_DOWN;
            if (this.getZ() < (-1000 + DAL.ACCELEROMETER_TILT_TOLERANCE))
                return DAL.ACCELEROMETER_EVT_FACE_UP;
            if (this.getZ() > (1000 - DAL.ACCELEROMETER_TILT_TOLERANCE))
                return DAL.ACCELEROMETER_EVT_FACE_DOWN;
            return 0;
        }
        updateGesture() {
            // Determine what it looks like we're doing based on the latest sample...
            let g = this.instantaneousPosture();
            // Perform some low pass filtering to reduce jitter from any detected effects
            if (g == this.currentGesture) {
                if (this.sigma < DAL.ACCELEROMETER_GESTURE_DAMPING)
                    this.sigma++;
            }
            else {
                this.currentGesture = g;
                this.sigma = 0;
            }
            // If we've reached threshold, update our record and raise the relevant event...
            if (this.currentGesture != this.lastGesture && this.sigma >= DAL.ACCELEROMETER_GESTURE_DAMPING) {
                this.lastGesture = this.currentGesture;
                pxsim.board().bus.queue(DAL.DEVICE_ID_GESTURE, this.lastGesture);
            }
        }
        /**
          * Reads the X axis value of the latest update from the accelerometer.
          * @param system The coordinate system to use. By default, a simple cartesian system is provided.
          * @return The force measured in the X axis, in milli-g.
          *
          * Example:
          * @code
          * uBit.accelerometer.getX();
          * uBit.accelerometer.getX(RAW);
          * @endcode
          */
        getX(system = MicroBitCoordinateSystem.SIMPLE_CARTESIAN) {
            this.activate();
            let val;
            switch (system) {
                case MicroBitCoordinateSystem.SIMPLE_CARTESIAN:
                    val = -this.sample.x;
                case MicroBitCoordinateSystem.NORTH_EAST_DOWN:
                    val = this.sample.y;
                //case MicroBitCoordinateSystem.SIMPLE_CARTESIAN.RAW:
                default:
                    val = this.sample.x;
            }
            return pxsim.board().invertAccelerometerXAxis ? val * -1 : val;
        }
        /**
          * Reads the Y axis value of the latest update from the accelerometer.
          * @param system The coordinate system to use. By default, a simple cartesian system is provided.
          * @return The force measured in the Y axis, in milli-g.
          *
          * Example:
          * @code
          * uBit.accelerometer.getY();
          * uBit.accelerometer.getY(RAW);
          * @endcode
          */
        getY(system = MicroBitCoordinateSystem.SIMPLE_CARTESIAN) {
            this.activate();
            let val;
            switch (system) {
                case MicroBitCoordinateSystem.SIMPLE_CARTESIAN:
                    val = -this.sample.y;
                case MicroBitCoordinateSystem.NORTH_EAST_DOWN:
                    val = -this.sample.x;
                //case RAW:
                default:
                    val = this.sample.y;
            }
            return pxsim.board().invertAccelerometerYAxis ? val * -1 : val;
        }
        /**
          * Reads the Z axis value of the latest update from the accelerometer.
          * @param system The coordinate system to use. By default, a simple cartesian system is provided.
          * @return The force measured in the Z axis, in milli-g.
          *
          * Example:
          * @code
          * uBit.accelerometer.getZ();
          * uBit.accelerometer.getZ(RAW);
          * @endcode
          */
        getZ(system = MicroBitCoordinateSystem.SIMPLE_CARTESIAN) {
            this.activate();
            let val;
            switch (system) {
                case MicroBitCoordinateSystem.NORTH_EAST_DOWN:
                    val = -this.sample.z;
                //case MicroBitCoordinateSystem.SIMPLE_CARTESIAN:
                //case MicroBitCoordinateSystem.RAW:
                default:
                    val = this.sample.z;
            }
            return pxsim.board().invertAccelerometerZAxis ? val * -1 : val;
        }
        /**
          * Provides a rotation compensated pitch of the device, based on the latest update from the accelerometer.
          * @return The pitch of the device, in degrees.
          *
          * Example:
          * @code
          * uBit.accelerometer.getPitch();
          * @endcode
          */
        getPitch() {
            this.activate();
            return Math.floor((360 * this.getPitchRadians()) / (2 * Math.PI));
        }
        getPitchRadians() {
            this.recalculatePitchRoll();
            return this.pitch;
        }
        /**
          * Provides a rotation compensated roll of the device, based on the latest update from the accelerometer.
          * @return The roll of the device, in degrees.
          *
          * Example:
          * @code
          * uBit.accelerometer.getRoll();
          * @endcode
          */
        getRoll() {
            this.activate();
            return Math.floor((360 * this.getRollRadians()) / (2 * Math.PI));
        }
        getRollRadians() {
            this.recalculatePitchRoll();
            return this.roll;
        }
        /**
         * Recalculate roll and pitch values for the current sample.
         * We only do this at most once per sample, as the necessary trigonemteric functions are rather
         * heavyweight for a CPU without a floating point unit...
         */
        recalculatePitchRoll() {
            let x = this.getX(MicroBitCoordinateSystem.NORTH_EAST_DOWN);
            let y = this.getY(MicroBitCoordinateSystem.NORTH_EAST_DOWN);
            let z = this.getZ(MicroBitCoordinateSystem.NORTH_EAST_DOWN);
            this.roll = Math.atan2(y, z);
            this.pitch = Math.atan(-x / (y * Math.sin(this.roll) + z * Math.cos(this.roll)));
        }
    }
    pxsim.Accelerometer = Accelerometer;
    class AccelerometerState {
        constructor(runtime) {
            this.useShake = false;
            this.tiltDecayer = 0;
            this.accelerometer = new Accelerometer(runtime);
        }
        attachEvents(element) {
            this.element = element;
            this.tiltDecayer = 0;
            this.element.addEventListener(pxsim.pointerEvents.move, (ev) => {
                if (!this.accelerometer.isActive)
                    return;
                if (this.tiltDecayer) {
                    clearInterval(this.tiltDecayer);
                    this.tiltDecayer = 0;
                }
                let bbox = element.getBoundingClientRect();
                let ax = (ev.clientX - bbox.width / 2) / (bbox.width / 3);
                let ay = (ev.clientY - bbox.height / 2) / (bbox.height / 3);
                let x = -Math.max(-1023, Math.min(1023, Math.floor(ax * 1023)));
                let y = Math.max(-1023, Math.min(1023, Math.floor(ay * 1023)));
                let z2 = 1023 * 1023 - x * x - y * y;
                let z = Math.floor((z2 > 0 ? -1 : 1) * Math.sqrt(Math.abs(z2)));
                this.accelerometer.update(-x, y, z);
                this.updateTilt();
            }, false);
            this.element.addEventListener(pxsim.pointerEvents.leave, (ev) => {
                if (!this.accelerometer.isActive)
                    return;
                if (!this.tiltDecayer) {
                    this.tiltDecayer = setInterval(() => {
                        let accx = this.accelerometer.getX();
                        accx = Math.floor(Math.abs(accx) * 0.85) * (accx > 0 ? 1 : -1);
                        let accy = this.accelerometer.getY();
                        accy = Math.floor(Math.abs(accy) * 0.85) * (accy > 0 ? 1 : -1);
                        let accz = -Math.sqrt(Math.max(0, 1023 * 1023 - accx * accx - accy * accy));
                        if (Math.abs(accx) <= 24 && Math.abs(accy) <= 24) {
                            clearInterval(this.tiltDecayer);
                            this.tiltDecayer = 0;
                            accx = 0;
                            accy = 0;
                            accz = -1023;
                        }
                        this.accelerometer.update(accx, accy, accz);
                        this.updateTilt();
                    }, 50);
                }
            }, false);
        }
        updateTilt() {
            if (!this.accelerometer.isActive || !this.element)
                return;
            const x = this.accelerometer.getX();
            const y = this.accelerometer.getY();
            const af = 8 / 1023;
            const s = 1 - Math.min(0.1, Math.pow(Math.max(Math.abs(x), Math.abs(y)) / 1023, 2) / 35);
            this.element.style.transform = `perspective(30em) rotateX(${y * af}deg) rotateY(${x * af}deg) scale(${s}, ${s})`;
            this.element.style.perspectiveOrigin = "50% 50% 50%";
            this.element.style.perspective = "30em";
        }
    }
    pxsim.AccelerometerState = AccelerometerState;
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    function accelerometer() {
        return pxsim.board().accelerometerState;
    }
    pxsim.accelerometer = accelerometer;
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var input;
    (function (input) {
        function lightLevel() {
            let b = pxsim.lightSensorState();
            b.setUsed();
            return b.getLevel();
        }
        input.lightLevel = lightLevel;
        function onLightConditionChanged(condition, body) {
            let b = pxsim.lightSensorState();
            b.setUsed();
            pxsim.pxtcore.registerWithDal(b.id, condition, body);
        }
        input.onLightConditionChanged = onLightConditionChanged;
        function setLightThreshold(condition, value) {
            let b = pxsim.lightSensorState();
            b.setUsed();
            switch (condition) {
                case DAL.SENSOR_THRESHOLD_LOW:
                    b.setLowThreshold(value);
                    break;
                case DAL.SENSOR_THRESHOLD_HIGH:
                    b.setHighThreshold(value);
                    break;
            }
        }
        input.setLightThreshold = setLightThreshold;
    })(input = pxsim.input || (pxsim.input = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    function lightSensorState() {
        return pxsim.board().lightSensorState;
    }
    pxsim.lightSensorState = lightSensorState;
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    function thermometerState() {
        return pxsim.board().thermometerState;
    }
    pxsim.thermometerState = thermometerState;
    function setThermometerUnit(unit) {
        pxsim.board().thermometerUnitState = unit;
    }
    pxsim.setThermometerUnit = setThermometerUnit;
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    let TemperatureUnit;
    (function (TemperatureUnit) {
        TemperatureUnit[TemperatureUnit["Celsius"] = 0] = "Celsius";
        TemperatureUnit[TemperatureUnit["Fahrenheit"] = 1] = "Fahrenheit";
    })(TemperatureUnit = pxsim.TemperatureUnit || (pxsim.TemperatureUnit = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var input;
    (function (input) {
        function temperature(unit) {
            let b = pxsim.thermometerState();
            b.setUsed();
            pxsim.setThermometerUnit(unit);
            const deg = b.getLevel();
            return unit == pxsim.TemperatureUnit.Celsius ? deg
                : ((deg * 18) / 10 + 32) >> 0;
        }
        input.temperature = temperature;
        function onTemperatureConditionChanged(condition, temperature, unit, body) {
            let b = pxsim.thermometerState();
            b.setUsed();
            pxsim.setThermometerUnit(unit);
            const t = unit == pxsim.TemperatureUnit.Celsius
                ? temperature
                : (((temperature - 32) * 10) / 18 >> 0);
            if (condition === DAL.LEVEL_THRESHOLD_HIGH) {
                b.setHighThreshold(t);
            }
            else {
                b.setLowThreshold(t);
            }
            pxsim.pxtcore.registerWithDal(b.id, condition, body);
        }
        input.onTemperatureConditionChanged = onTemperatureConditionChanged;
    })(input = pxsim.input || (pxsim.input = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var radio;
    (function (radio) {
        function raiseEvent(id, eventid) {
            const state = pxsim.getRadioState();
            state.raiseEvent(id, eventid);
        }
        radio.raiseEvent = raiseEvent;
        function setGroup(id) {
            const state = pxsim.getRadioState();
            state.setGroup(id);
        }
        radio.setGroup = setGroup;
        function setTransmitPower(power) {
            const state = pxsim.getRadioState();
            state.setTransmitPower(power);
        }
        radio.setTransmitPower = setTransmitPower;
        function setFrequencyBand(band) {
            const state = pxsim.getRadioState();
            state.setFrequencyBand(band);
        }
        radio.setFrequencyBand = setFrequencyBand;
        function sendRawPacket(buf) {
            let cb = pxsim.getResume();
            const state = pxsim.getRadioState();
            state.datagram.send({
                type: 0,
                groupId: state.groupId,
                bufferData: buf.data
            });
            setTimeout(cb, 1);
        }
        radio.sendRawPacket = sendRawPacket;
        function readRawPacket() {
            const state = pxsim.getRadioState();
            const packet = state.datagram.recv();
            const buf = packet.payload.bufferData;
            const n = buf.length;
            if (!n)
                return undefined;
            const rbuf = pxsim.BufferMethods.createBuffer(n + 4);
            for (let i = 0; i < buf.length; ++i)
                rbuf.data[i] = buf[i];
            // append RSSI
            pxsim.BufferMethods.setNumber(rbuf, pxsim.BufferMethods.NumberFormat.Int32LE, n, packet.rssi);
            return rbuf;
        }
        radio.readRawPacket = readRawPacket;
        function onDataReceived(handler) {
            const state = pxsim.getRadioState();
            state.datagram.onReceived(handler);
        }
        radio.onDataReceived = onDataReceived;
    })(radio = pxsim.radio || (pxsim.radio = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    function getRadioState() {
        return pxsim.board().radioState;
    }
    pxsim.getRadioState = getRadioState;
    class RadioDatagram {
        constructor(runtime, dal) {
            this.runtime = runtime;
            this.dal = dal;
            this.datagram = [];
            this.lastReceived = RadioDatagram.defaultPacket();
            this._rssi = undefined; // not set yet
        }
        get rssi() {
            return this._rssi;
        }
        set rssi(value) {
            this._rssi = value | 0;
        }
        queue(packet) {
            if (this.datagram.length < 4)
                this.datagram.push(packet);
            pxsim.runtime.board.bus.queue(this.dal.ID_RADIO, this.dal.RADIO_EVT_DATAGRAM);
        }
        send(payload) {
            const state = getRadioState();
            pxsim.Runtime.postMessage({
                type: "radiopacket",
                broadcast: true,
                rssi: this._rssi || -75,
                serial: state.transmitSerialNumber ? pxsim.control.deviceSerialNumber() : 0,
                time: new Date().getTime(),
                payload
            });
        }
        recv() {
            let r = this.datagram.shift();
            if (!r)
                r = RadioDatagram.defaultPacket();
            return this.lastReceived = r;
        }
        onReceived(handler) {
            pxsim.pxtcore.registerWithDal(this.dal.ID_RADIO, this.dal.RADIO_EVT_DATAGRAM, handler);
            this.recv();
        }
        static defaultPacket() {
            return {
                rssi: -1,
                serial: 0,
                time: 0,
                payload: { type: -1, groupId: 0, bufferData: new Uint8Array(0) }
            };
        }
    }
    pxsim.RadioDatagram = RadioDatagram;
    class RadioState {
        constructor(runtime, board, dal) {
            this.runtime = runtime;
            this.board = board;
            this.power = 0;
            this.transmitSerialNumber = false;
            this.datagram = new RadioDatagram(runtime, dal);
            this.power = 6; // default value
            this.groupId = 0;
            this.band = 7; // https://github.com/lancaster-university/microbit-dal/blob/master/inc/core/MicroBitConfig.h#L320
            this.board.addMessageListener(this.handleMessage.bind(this));
        }
        handleMessage(msg) {
            if (msg.type == "radiopacket") {
                let packet = msg;
                this.receivePacket(packet);
            }
        }
        setGroup(id) {
            this.groupId = id & 0xff; // byte only
        }
        setTransmitPower(power) {
            power = power | 0;
            this.power = Math.max(0, Math.min(7, power));
        }
        setTransmitSerialNumber(sn) {
            this.transmitSerialNumber = !!sn;
        }
        setFrequencyBand(band) {
            band = band | 0;
            if (band < 0 || band > 83)
                return;
            this.band = band;
        }
        raiseEvent(id, eventid) {
            pxsim.Runtime.postMessage({
                type: "eventbus",
                broadcast: true,
                id,
                eventid,
                power: this.power,
                group: this.groupId
            });
        }
        receivePacket(packet) {
            if (this.groupId == packet.payload.groupId)
                this.datagram.queue(packet);
        }
    }
    pxsim.RadioState = RadioState;
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var input;
    (function (input) {
        function soundLevel() {
            let b = pxsim.microphoneState();
            if (!b)
                return 0;
            b.setUsed();
            return b.getLevel();
        }
        input.soundLevel = soundLevel;
        function onLoudSound(body) {
            let b = pxsim.microphoneState();
            if (!b)
                return;
            b.setUsed();
            pxsim.pxtcore.registerWithDal(b.id, DAL.LEVEL_THRESHOLD_HIGH, body);
        }
        input.onLoudSound = onLoudSound;
        function setLoudSoundThreshold(value) {
            let b = pxsim.microphoneState();
            if (!b)
                return;
            b.setUsed();
            b.setHighThreshold(value);
        }
        input.setLoudSoundThreshold = setLoudSoundThreshold;
    })(input = pxsim.input || (pxsim.input = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    function microphoneState() {
        return pxsim.board().microphoneState;
    }
    pxsim.microphoneState = microphoneState;
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var keyboard;
    (function (keyboard) {
        const events = [
            "press",
            "up",
            "down"
        ];
        function __flush() {
            console.log(`kb: flush`);
        }
        keyboard.__flush = __flush;
        function __type(s) {
            console.log(`kb: type ${s}`);
        }
        keyboard.__type = __type;
        function __key(c, event) {
            console.log(`kb: key ${c} ${events[event]}`);
        }
        keyboard.__key = __key;
        function __mediaKey(key, event) {
            console.log(`kb: media ${key} ${events[event]}`);
        }
        keyboard.__mediaKey = __mediaKey;
        function __functionKey(key, event) {
            console.log(`kb: function ${key} ${events[event]}`);
        }
        keyboard.__functionKey = __functionKey;
        function __modifierKey(key, event) {
            console.log(`kb: modifier ${key} ${events[event]}`);
        }
        keyboard.__modifierKey = __modifierKey;
    })(keyboard = pxsim.keyboard || (pxsim.keyboard = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var mouse;
    (function (mouse) {
        function setButton(button, down) {
        }
        mouse.setButton = setButton;
        function move(x, y) {
        }
        mouse.move = move;
        function turnWheel(w) {
        }
        mouse.turnWheel = turnWheel;
    })(mouse = pxsim.mouse || (pxsim.mouse = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var pxtcore;
    (function (pxtcore) {
        function getPin(id) {
            const b = pxsim.board();
            if (b && b.edgeConnectorState)
                return b.edgeConnectorState.getPin(id);
            return undefined;
        }
        pxtcore.getPin = getPin;
        function lookupPinCfg(key) {
            return getPinCfg(key);
        }
        pxtcore.lookupPinCfg = lookupPinCfg;
        function getPinCfg(key) {
            return getPin(pxtcore.getConfig(key, -1));
        }
        pxtcore.getPinCfg = getPinCfg;
    })(pxtcore = pxsim.pxtcore || (pxsim.pxtcore = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var pxtcore;
    (function (pxtcore) {
        // TODO: add in support for mode, as in CODAL
        function registerWithDal(id, evid, handler, mode = 0) {
            pxsim.board().bus.listen(id, evid, handler);
        }
        pxtcore.registerWithDal = registerWithDal;
        function deepSleep() {
            // TODO?
            console.log("deep sleep requested");
        }
        pxtcore.deepSleep = deepSleep;
    })(pxtcore = pxsim.pxtcore || (pxsim.pxtcore = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var BufferMethods;
    (function (BufferMethods) {
        function fnv1(data) {
            let h = 0x811c9dc5;
            for (let i = 0; i < data.length; ++i) {
                h = Math.imul(h, 0x1000193) ^ data[i];
            }
            return h;
        }
        function hash(buf, bits) {
            bits |= 0;
            if (bits < 1)
                return 0;
            const h = fnv1(buf.data);
            if (bits >= 32)
                return h >>> 0;
            else
                return ((h ^ (h >>> bits)) & ((1 << bits) - 1)) >>> 0;
        }
        BufferMethods.hash = hash;
    })(BufferMethods = pxsim.BufferMethods || (pxsim.BufferMethods = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var control;
    (function (control) {
        control.runInParallel = pxsim.thread.runInBackground;
        control.delay = pxsim.thread.pause;
        function reset() {
            pxsim.Runtime.postMessage({
                type: "simulator",
                command: "restart",
                controlReset: true
            });
            const cb = pxsim.getResume();
        }
        control.reset = reset;
        function waitMicros(micros) {
            pxsim.thread.pause(micros / 1000); // it prempts not much we can do here.
        }
        control.waitMicros = waitMicros;
        function deviceName() {
            let b = pxsim.board();
            return b && b.id
                ? b.id.slice(0, 4)
                : "abcd";
        }
        control.deviceName = deviceName;
        function _ramSize() {
            return 32 * 1024 * 1024;
        }
        control._ramSize = _ramSize;
        function deviceSerialNumber() {
            let b = pxsim.board();
            if (!b)
                return 42;
            let n = 0;
            if (b.id) {
                n = parseInt(b.id.slice(1));
                if (isNaN(n)) {
                    n = 0;
                    for (let i = 0; i < b.id.length; ++i) {
                        n = ((n << 5) - n) + b.id.charCodeAt(i);
                        n |= 0;
                    }
                    n = Math.abs(n);
                }
            }
            if (!n)
                n = 42;
            return n;
        }
        control.deviceSerialNumber = deviceSerialNumber;
        function deviceLongSerialNumber() {
            let b = control.createBuffer(8);
            pxsim.BufferMethods.setNumber(b, pxsim.BufferMethods.NumberFormat.UInt32LE, 0, deviceSerialNumber());
            return b;
        }
        control.deviceLongSerialNumber = deviceLongSerialNumber;
        function deviceDalVersion() {
            return "sim";
        }
        control.deviceDalVersion = deviceDalVersion;
        function internalOnEvent(id, evid, handler) {
            pxsim.pxtcore.registerWithDal(id, evid, handler);
        }
        control.internalOnEvent = internalOnEvent;
        function waitForEvent(id, evid) {
            const cb = pxsim.getResume();
            pxsim.board().bus.wait(id, evid, cb);
        }
        control.waitForEvent = waitForEvent;
        function allocateNotifyEvent() {
            let b = pxsim.board();
            return b.bus.nextNotifyEvent++;
        }
        control.allocateNotifyEvent = allocateNotifyEvent;
        function raiseEvent(id, evid, mode) {
            // TODO mode?
            pxsim.board().bus.queue(id, evid);
        }
        control.raiseEvent = raiseEvent;
        function millis() {
            return pxsim.runtime.runningTime();
        }
        control.millis = millis;
        function micros() {
            return pxsim.runtime.runningTimeUs() & 0x3fffffff;
        }
        control.micros = micros;
        function delayMicroseconds(us) {
            control.delay(us / 0.001);
        }
        control.delayMicroseconds = delayMicroseconds;
        function createBuffer(size) {
            return pxsim.BufferMethods.createBuffer(size);
        }
        control.createBuffer = createBuffer;
        function dmesg(msg) {
            console.log(`DMESG: ${msg}`);
        }
        control.dmesg = dmesg;
        function setDebugFlags(flags) {
            console.log(`debug flags: ${flags}`);
        }
        control.setDebugFlags = setDebugFlags;
        function heapSnapshot() {
            console.log(pxsim.runtime.traceObjects());
        }
        control.heapSnapshot = heapSnapshot;
        function toStr(v) {
            if (v instanceof pxsim.RefRecord) {
                return `${v.vtable.name}@${v.id}`;
            }
            if (v instanceof pxsim.RefCollection) {
                let r = "[";
                for (let e of v.toArray()) {
                    if (r.length > 200) {
                        r += "...";
                        break;
                    }
                    r += toStr(e) + ", ";
                }
                r += "]";
                return r;
            }
            if (typeof v == "function") {
                return (v + "").slice(0, 60) + "...";
            }
            return v + "";
        }
        function dmesgPtr(msg, ptr) {
            console.log(`DMESG: ${msg} ${toStr(ptr)}`);
        }
        control.dmesgPtr = dmesgPtr;
        function dmesgValue(ptr) {
            console.log(`DMESG: ${toStr(ptr)}`);
        }
        control.dmesgValue = dmesgValue;
        function gc() { }
        control.gc = gc;
        function profilingEnabled() {
            return !!pxsim.runtime.perfCounters;
        }
        control.profilingEnabled = profilingEnabled;
        function __log(priority, str) {
            switch (priority) {
                case 0:
                    console.debug("d>" + str);
                    break;
                case 1:
                    console.log("l>" + str);
                    break;
                case 2:
                    console.warn("w>" + str);
                    break;
                case 3:
                    console.error("e>" + str);
                    break;
            }
            pxsim.runtime.board.writeSerial(str);
        }
        control.__log = __log;
        function heapDump() {
            // TODO something better
        }
        control.heapDump = heapDump;
        function isUSBInitialized() {
            return false;
        }
        control.isUSBInitialized = isUSBInitialized;
    })(control = pxsim.control || (pxsim.control = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var pxtcore;
    (function (pxtcore) {
        // general purpose message sending mechanism
        function sendMessage(channel, message, parentOnly) {
            if (!channel)
                return;
            pxsim.Runtime.postMessage({
                type: "messagepacket",
                broadcast: !parentOnly,
                channel: channel,
                data: message && message.data
            });
        }
        pxtcore.sendMessage = sendMessage;
        function peekMessageChannel() {
            const state = pxsim.getControlMessageState();
            const msg = state && state.peek();
            return msg && msg.channel;
        }
        pxtcore.peekMessageChannel = peekMessageChannel;
        function readMessageData() {
            const state = pxsim.getControlMessageState();
            const msg = state && state.read();
            return msg && new pxsim.RefBuffer(msg.data);
        }
        pxtcore.readMessageData = readMessageData;
    })(pxtcore = pxsim.pxtcore || (pxsim.pxtcore = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
    // keep in sync with ts
    pxsim.CONTROL_MESSAGE_EVT_ID = 2999;
    pxsim.CONTROL_MESSAGE_RECEIVED = 1;
    class ControlMessageState {
        constructor(board) {
            this.board = board;
            this.messages = [];
            this.enabled = false;
            this.board.addMessageListener(msg => this.messageHandler(msg));
        }
        messageHandler(msg) {
            if (msg.type == "messagepacket") {
                let packet = msg;
                this.enqueue(packet);
            }
        }
        enqueue(message) {
            this.messages.push(message);
            this.board.bus.queue(pxsim.CONTROL_MESSAGE_EVT_ID, pxsim.CONTROL_MESSAGE_RECEIVED);
        }
        peek() {
            return this.messages[0];
        }
        read() {
            return this.messages.shift();
        }
    }
    pxsim.ControlMessageState = ControlMessageState;
    function getControlMessageState() {
        return pxsim.board().controlMessageState;
    }
    pxsim.getControlMessageState = getControlMessageState;
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var loops;
    (function (loops) {
        loops.pause = pxsim.thread.pause;
        loops.forever = pxsim.thread.forever;
    })(loops = pxsim.loops || (pxsim.loops = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    let PinFlags;
    (function (PinFlags) {
        PinFlags[PinFlags["Unused"] = 0] = "Unused";
        PinFlags[PinFlags["Digital"] = 1] = "Digital";
        PinFlags[PinFlags["Analog"] = 2] = "Analog";
        PinFlags[PinFlags["Input"] = 4] = "Input";
        PinFlags[PinFlags["Output"] = 8] = "Output";
        PinFlags[PinFlags["Touch"] = 16] = "Touch";
    })(PinFlags = pxsim.PinFlags || (pxsim.PinFlags = {}));
    class Pin {
        constructor(id) {
            this.id = id;
            this.touched = false;
            this.value = 0;
            this.period = 0;
            this.servoAngle = 0;
            this.mode = PinFlags.Unused;
            this.pitch = false;
            this.pull = 0; // PullDown
            this.eventMode = 0;
            this.used = false;
        }
        setValue(value) {
            // value set from the simulator
            const old = this.value;
            this.value = value;
            const b = pxsim.board();
            if (b && this.eventMode == DAL.DEVICE_PIN_EVENT_ON_EDGE && old != this.value)
                b.bus.queue(this.id, this.value > 0 ? DAL.DEVICE_PIN_EVT_RISE : DAL.DEVICE_PIN_EVT_FALL);
        }
        digitalReadPin() {
            this.mode = PinFlags.Digital | PinFlags.Input;
            return this.value > 100 ? 1 : 0;
        }
        digitalWritePin(value) {
            const b = pxsim.board();
            this.mode = PinFlags.Digital | PinFlags.Output;
            const v = this.value;
            this.value = value > 0 ? 1023 : 0;
            pxsim.runtime.queueDisplayUpdate();
        }
        setPull(pull) {
            this.pull = pull;
            switch (pull) {
                case 2 /*PinPullMode.PullDown*/:
                    this.value = 0;
                    break;
                case 1 /*PinPullMode.PullUp*/:
                    this.value = 1023;
                    break;
                default:
                    this.value = pxsim.Math_.randomRange(0, 1023);
                    break;
            }
        }
        analogReadPin() {
            this.mode = PinFlags.Analog | PinFlags.Input;
            return this.value || 0;
        }
        analogWritePin(value) {
            const b = pxsim.board();
            this.mode = PinFlags.Analog | PinFlags.Output;
            const v = this.value;
            this.value = Math.max(0, Math.min(1023, value));
            pxsim.runtime.queueDisplayUpdate();
        }
        analogSetPeriod(micros) {
            this.mode = PinFlags.Analog | PinFlags.Output;
            this.period = micros;
            pxsim.runtime.queueDisplayUpdate();
        }
        servoWritePin(value) {
            this.analogSetPeriod(20000);
            this.servoAngle = Math.max(0, Math.min(180, value));
            pxsim.runtime.queueDisplayUpdate();
        }
        servoSetContinuous(continuous) {
            this.servoContinuous = continuous;
        }
        servoSetPulse(pinId, micros) {
            // TODO
        }
        isTouched() {
            this.mode = PinFlags.Touch | PinFlags.Analog | PinFlags.Input;
            return this.touched;
        }
        onEvent(ev, handler) {
            const b = pxsim.board();
            switch (ev) {
                case DAL.DEVICE_PIN_EVT_PULSE_HI:
                case DAL.DEVICE_PIN_EVT_PULSE_LO:
                    this.eventMode = DAL.DEVICE_PIN_EVENT_ON_PULSE;
                    break;
                case DAL.DEVICE_PIN_EVT_RISE:
                case DAL.DEVICE_PIN_EVT_FALL:
                    this.eventMode = DAL.DEVICE_PIN_EVENT_ON_EDGE;
                    break;
                default:
                    return;
            }
            b.bus.listen(this.id, ev, handler);
        }
    }
    pxsim.Pin = Pin;
    class SerialDevice {
        constructor(tx, rx, id) {
            this.tx = tx;
            this.rx = rx;
            this.id = id;
            this.baudRate = 115200;
            this.setRxBufferSize(64);
            this.setTxBufferSize(64);
        }
        setTxBufferSize(size) {
            this.txBuffer = pxsim.control.createBuffer(size);
        }
        setRxBufferSize(size) {
            this.rxBuffer = pxsim.control.createBuffer(size);
        }
        read() {
            return -1;
        }
        readBuffer() {
            const buf = pxsim.control.createBuffer(0);
            return buf;
        }
        writeBuffer(buffer) {
        }
        setBaudRate(rate) {
            this.baudRate = rate;
        }
        redirect(tx, rx, rate) {
            this.tx = tx;
            this.rx = rx;
            this.baudRate = rate;
        }
        onEvent(event, handler) {
            pxsim.control.internalOnEvent(this.id, event, handler);
        }
        onDelimiterReceived(delimiter, handler) {
            // TODO
        }
    }
    pxsim.SerialDevice = SerialDevice;
    class SPI {
        constructor(mosi, miso, sck) {
            this.mosi = mosi;
            this.miso = miso;
            this.sck = sck;
            this.frequency = 250000;
            this.mode = 0;
        }
        write(value) {
            return 0;
        }
        transfer(command, response) {
        }
        setFrequency(frequency) {
            this.frequency = frequency;
        }
        setMode(mode) {
            this.mode = mode;
        }
    }
    pxsim.SPI = SPI;
    class I2C {
        constructor(sda, scl) {
            this.sda = sda;
            this.scl = scl;
        }
        readBuffer(address, size, repeat) {
            return pxsim.control.createBuffer(0);
        }
        writeBuffer(address, buf, repeat) {
            return 0;
        }
    }
    pxsim.I2C = I2C;
    class EdgeConnectorState {
        constructor(props) {
            this.props = props;
            this._i2cs = [];
            this._spis = [];
            this._serials = [];
            this.pins = props.pins.map(id => id != undefined ? new Pin(id) : null);
        }
        getPin(id) {
            return this.pins.filter(p => p && p.id == id)[0] || null;
        }
        createI2C(sda, scl) {
            let ser = this._i2cs.filter(s => s.sda == sda && s.scl == scl)[0];
            if (!ser)
                this._i2cs.push(ser = new I2C(sda, scl));
            return ser;
        }
        createSPI(mosi, miso, sck) {
            let ser = this._spis.filter(s => s.mosi == mosi && s.miso == miso && s.sck == sck)[0];
            if (!ser)
                this._spis.push(ser = new SPI(mosi, miso, sck));
            return ser;
        }
        createSerialDevice(tx, rx, id) {
            let ser = this._serials.filter(s => s.tx == tx && s.rx == rx)[0];
            if (!ser)
                this._serials.push(ser = new SerialDevice(tx, rx, id));
            return ser;
        }
    }
    pxsim.EdgeConnectorState = EdgeConnectorState;
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    let ThresholdState;
    (function (ThresholdState) {
        ThresholdState[ThresholdState["High"] = 0] = "High";
        ThresholdState[ThresholdState["Low"] = 1] = "Low";
        ThresholdState[ThresholdState["Normal"] = 2] = "Normal";
    })(ThresholdState || (ThresholdState = {}));
    class AnalogSensorState {
        constructor(id, min = 0, max = 255, lowThreshold = 64, highThreshold = 192) {
            this.id = id;
            this.min = min;
            this.max = max;
            this.lowThreshold = lowThreshold;
            this.highThreshold = highThreshold;
            this.sensorUsed = false;
            this.state = ThresholdState.Normal;
            this.level = Math.ceil((max - min) / 2);
        }
        setUsed() {
            if (!this.sensorUsed) {
                this.sensorUsed = true;
                pxsim.runtime.queueDisplayUpdate();
            }
        }
        setLevel(level) {
            this.level = this.clampValue(level);
            if (this.level >= this.highThreshold) {
                this.setState(ThresholdState.High);
            }
            else if (this.level <= this.lowThreshold) {
                this.setState(ThresholdState.Low);
            }
            else {
                this.setState(ThresholdState.Normal);
            }
        }
        getLevel() {
            return this.level;
        }
        setLowThreshold(value) {
            this.lowThreshold = this.clampValue(value);
            this.highThreshold = Math.max(this.lowThreshold + 1, this.highThreshold);
        }
        setHighThreshold(value) {
            this.highThreshold = this.clampValue(value);
            this.lowThreshold = Math.min(this.highThreshold - 1, this.lowThreshold);
        }
        clampValue(value) {
            if (value < this.min) {
                return this.min;
            }
            else if (value > this.max) {
                return this.max;
            }
            return value;
        }
        setState(state) {
            if (this.state === state) {
                return;
            }
            this.state = state;
            switch (state) {
                case ThresholdState.High:
                    pxsim.board().bus.queue(this.id, DAL.SENSOR_THRESHOLD_HIGH);
                    break;
                case ThresholdState.Low:
                    pxsim.board().bus.queue(this.id, DAL.SENSOR_THRESHOLD_LOW);
                    break;
                case ThresholdState.Normal:
                    break;
            }
        }
    }
    pxsim.AnalogSensorState = AnalogSensorState;
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var pins;
    (function (pins) {
        class CommonPin extends pxsim.Pin {
        }
        pins.CommonPin = CommonPin;
        class DigitalInOutPin extends CommonPin {
        }
        pins.DigitalInOutPin = DigitalInOutPin;
        class AnalogInOutPin extends CommonPin {
        }
        pins.AnalogInOutPin = AnalogInOutPin;
        class PwmOnlyPin extends CommonPin {
        }
        pins.PwmOnlyPin = PwmOnlyPin;
        class PwmPin extends CommonPin {
        }
        pins.PwmPin = PwmPin;
        function markUsed(pin) {
            if (pin && !pin.used) {
                pin.used = true;
                pxsim.runtime.queueDisplayUpdate();
            }
        }
        pins.markUsed = markUsed;
    })(pins = pxsim.pins || (pxsim.pins = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var DigitalInOutPinMethods;
    (function (DigitalInOutPinMethods) {
        function digitalRead(name) {
            pxsim.pins.markUsed(name);
            return name.digitalReadPin();
        }
        DigitalInOutPinMethods.digitalRead = digitalRead;
        /**
        * Set a pin or connector value to either 0 or 1.
        * @param value value to set on the pin, 1 eg,0
        */
        function digitalWrite(name, value) {
            pxsim.pins.markUsed(name);
            name.digitalWritePin(value);
        }
        DigitalInOutPinMethods.digitalWrite = digitalWrite;
        /**
        * Configures this pin to a digital input, and generates events where the timestamp is the duration
        * that this pin was either ``high`` or ``low``.
        */
        function onPulsed(name, high, body) {
            pxsim.pins.markUsed(name);
            onEvent(name, high ? DAL.DEVICE_PIN_EVT_PULSE_HI : DAL.DEVICE_PIN_EVT_PULSE_LO, body);
        }
        DigitalInOutPinMethods.onPulsed = onPulsed;
        function onEvent(name, ev, body) {
            pxsim.pins.markUsed(name);
            name.onEvent(ev, body);
        }
        DigitalInOutPinMethods.onEvent = onEvent;
        /**
        * Returns the duration of a pulse in microseconds
        * @param value the value of the pulse (default high)
        * @param maximum duration in micro-seconds
        */
        function pulseIn(name, high, maxDuration = 2000000) {
            pxsim.pins.markUsed(name);
            const pulse = high ? DAL.DEVICE_PIN_EVT_PULSE_HI : DAL.DEVICE_PIN_EVT_PULSE_LO;
            // Always return default value, can't simulate
            return 500;
        }
        DigitalInOutPinMethods.pulseIn = pulseIn;
        /**
        * Configures the pull of this pin.
        * @param pull one of the mbed pull configurations: PullUp, PullDown, PullNone
        */
        function setPull(name, pull) {
            pxsim.pins.markUsed(name);
            name.setPull(pull);
        }
        DigitalInOutPinMethods.setPull = setPull;
        /**
         * Get the pin state (pressed or not). Requires to hold the ground to close the circuit.
         * @param name pin used to detect the touch
         */
        function isPressed(name) {
            pxsim.pins.markUsed(name);
            return name.isTouched();
        }
        DigitalInOutPinMethods.isPressed = isPressed;
    })(DigitalInOutPinMethods = pxsim.DigitalInOutPinMethods || (pxsim.DigitalInOutPinMethods = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var AnalogInPinMethods;
    (function (AnalogInPinMethods) {
        /**
         * Read the connector value as analog, that is, as a value comprised between 0 and 1023.
         */
        function analogRead(name) {
            pxsim.pins.markUsed(name);
            return name.analogReadPin();
        }
        AnalogInPinMethods.analogRead = analogRead;
    })(AnalogInPinMethods = pxsim.AnalogInPinMethods || (pxsim.AnalogInPinMethods = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var AnalogOutPinMethods;
    (function (AnalogOutPinMethods) {
        /**
     * Set the connector value as analog. Value must be comprised between 0 and 1023.
     * @param value value to write to the pin between ``0`` and ``1023``. eg:1023,0
     */
        function analogWrite(name, value) {
            pxsim.pins.markUsed(name);
            name.analogWritePin(value);
        }
        AnalogOutPinMethods.analogWrite = analogWrite;
    })(AnalogOutPinMethods = pxsim.AnalogOutPinMethods || (pxsim.AnalogOutPinMethods = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var PwmOnlyPinMethods;
    (function (PwmOnlyPinMethods) {
        function analogSetPeriod(name, micros) {
            pxsim.pins.markUsed(name);
            name.analogSetPeriod(micros);
        }
        PwmOnlyPinMethods.analogSetPeriod = analogSetPeriod;
        function servoWrite(name, value) {
            pxsim.pins.markUsed(name);
            name.servoWritePin(value);
        }
        PwmOnlyPinMethods.servoWrite = servoWrite;
        function servoSetContinuous(name, continuous) {
            pxsim.pins.markUsed(name);
            name.servoSetContinuous(continuous);
        }
        PwmOnlyPinMethods.servoSetContinuous = servoSetContinuous;
        function servoSetPulse(name, micros) {
            pxsim.pins.markUsed(name);
            name.servoSetPulse(name.id, micros);
        }
        PwmOnlyPinMethods.servoSetPulse = servoSetPulse;
    })(PwmOnlyPinMethods = pxsim.PwmOnlyPinMethods || (pxsim.PwmOnlyPinMethods = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var pins;
    (function (pins) {
        function pinByCfg(key) {
            const pin = pxsim.pxtcore.getPinCfg(key);
            pins.markUsed(pin);
            return pin;
        }
        pins.pinByCfg = pinByCfg;
        function pulseDuration() {
            // bus last event timestamp
            return 500;
        }
        pins.pulseDuration = pulseDuration;
        function createBuffer(sz) {
            return pxsim.BufferMethods.createBuffer(sz);
        }
        pins.createBuffer = createBuffer;
        function createI2C(sda, scl) {
            const b = pxsim.board();
            pins.markUsed(sda);
            pins.markUsed(scl);
            return b && b.edgeConnectorState && b.edgeConnectorState.createI2C(sda, scl);
        }
        pins.createI2C = createI2C;
        function createSPI(mosi, miso, sck) {
            const b = pxsim.board();
            pins.markUsed(mosi);
            pins.markUsed(miso);
            pins.markUsed(sck);
            return b && b.edgeConnectorState && b.edgeConnectorState.createSPI(mosi, miso, sck);
        }
        pins.createSPI = createSPI;
    })(pins = pxsim.pins || (pxsim.pins = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var I2CMethods;
    (function (I2CMethods) {
        function readBuffer(i2c, address, size, repeat) {
            return pxsim.control.createBuffer(0);
        }
        I2CMethods.readBuffer = readBuffer;
        function writeBuffer(i2c, address, buf, repeat) {
            return 0;
        }
        I2CMethods.writeBuffer = writeBuffer;
    })(I2CMethods = pxsim.I2CMethods || (pxsim.I2CMethods = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var SPIMethods;
    (function (SPIMethods) {
        function write(device, value) {
            return device.write(value);
        }
        SPIMethods.write = write;
        function transfer(device, command, response) {
            device.transfer(command, response);
        }
        SPIMethods.transfer = transfer;
        function setFrequency(device, frequency) {
            device.setFrequency(frequency);
        }
        SPIMethods.setFrequency = setFrequency;
        function setMode(device, mode) {
            device.setMode(mode);
        }
        SPIMethods.setMode = setMode;
    })(SPIMethods = pxsim.SPIMethods || (pxsim.SPIMethods = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var configStorage;
    (function (configStorage) {
        function setBuffer(key, value) {
            // TODO
        }
        configStorage.setBuffer = setBuffer;
        function getBuffer(key) {
            // TODO
            return undefined;
        }
        configStorage.getBuffer = getBuffer;
        function removeItem(key) {
            // TODO
        }
        configStorage.removeItem = removeItem;
        function clear() {
            // TODO
        }
        configStorage.clear = clear;
    })(configStorage = pxsim.configStorage || (pxsim.configStorage = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var SerialDeviceMethods;
    (function (SerialDeviceMethods) {
        function setTxBufferSize(device, size) {
            device.setTxBufferSize(size);
        }
        SerialDeviceMethods.setTxBufferSize = setTxBufferSize;
        function setRxBufferSize(device, size) {
            device.setRxBufferSize(size);
        }
        SerialDeviceMethods.setRxBufferSize = setRxBufferSize;
        function read(device) {
            return device.read();
        }
        SerialDeviceMethods.read = read;
        function readBuffer(device) {
            return device.readBuffer();
        }
        SerialDeviceMethods.readBuffer = readBuffer;
        function writeBuffer(device, buffer) {
            device.writeBuffer(buffer);
        }
        SerialDeviceMethods.writeBuffer = writeBuffer;
        function setBaudRate(device, rate) {
            device.setBaudRate(rate);
        }
        SerialDeviceMethods.setBaudRate = setBaudRate;
        function redirect(device, tx, rx, rate) {
            device.redirect(tx, rx, rate);
        }
        SerialDeviceMethods.redirect = redirect;
        function onEvent(device, event, handler) {
            device.onEvent(event, handler);
        }
        SerialDeviceMethods.onEvent = onEvent;
        function onDelimiterReceived(device, delimiter, handler) {
            device.onDelimiterReceived(delimiter, handler);
        }
        SerialDeviceMethods.onDelimiterReceived = onDelimiterReceived;
    })(SerialDeviceMethods = pxsim.SerialDeviceMethods || (pxsim.SerialDeviceMethods = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var serial;
    (function (serial) {
        function internalCreateSerialDevice(tx, rx, id) {
            const b = pxsim.board();
            return b && b.edgeConnectorState ? b.edgeConnectorState.createSerialDevice(tx, rx, id) : new pxsim.SerialDevice(tx, rx, id);
        }
        serial.internalCreateSerialDevice = internalCreateSerialDevice;
    })(serial = pxsim.serial || (pxsim.serial = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    let NeoPixelMode;
    (function (NeoPixelMode) {
        NeoPixelMode[NeoPixelMode["RGB"] = 1] = "RGB";
        NeoPixelMode[NeoPixelMode["RGBW"] = 2] = "RGBW";
        NeoPixelMode[NeoPixelMode["RGB_RGB"] = 3] = "RGB_RGB";
        NeoPixelMode[NeoPixelMode["DotStar"] = 4] = "DotStar";
    })(NeoPixelMode = pxsim.NeoPixelMode || (pxsim.NeoPixelMode = {}));
    class CommonNeoPixelState {
        constructor() {
            this.mode = NeoPixelMode.RGB; // GRB
            this.width = 1;
        }
        get length() {
            return this.buffer ? (this.buffer.length / this.stride) | 0 : 0;
        }
        get stride() {
            return this.mode == NeoPixelMode.RGBW || this.mode == NeoPixelMode.DotStar ? 4 : 3;
        }
        pixelColor(pixel) {
            const offset = pixel * this.stride;
            // RBG
            switch (this.mode) {
                case NeoPixelMode.RGBW:
                    return [this.buffer[offset + 1], this.buffer[offset], this.buffer[offset + 2], this.buffer[offset + 3]];
                case NeoPixelMode.RGB_RGB:
                    return [this.buffer[offset], this.buffer[offset + 1], this.buffer[offset + 2]];
                case NeoPixelMode.DotStar:
                    return [this.buffer[offset + 3], this.buffer[offset + 2], this.buffer[offset + 1]];
                default:
                    return [this.buffer[offset + 1], this.buffer[offset + 0], this.buffer[offset + 2]];
            }
        }
    }
    pxsim.CommonNeoPixelState = CommonNeoPixelState;
    function neopixelState(pinId) {
        return pxsim.board().neopixelState(pinId);
    }
    pxsim.neopixelState = neopixelState;
    function sendBufferAsm(buffer, pin) {
        const b = pxsim.board();
        if (!b)
            return;
        const p = b.edgeConnectorState.getPin(pin);
        if (!p)
            return;
        const lp = neopixelState(p.id);
        if (!lp)
            return;
        const mode = lp.mode;
        pxsim.light.sendBuffer(p, undefined, mode, buffer);
    }
    pxsim.sendBufferAsm = sendBufferAsm;
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var light;
    (function (light) {
        // Currently only modifies the builtin pixels
        function sendBuffer(pin, clk, mode, b) {
            const state = pxsim.neopixelState(pin.id);
            if (!state)
                return;
            state.mode = mode & 0xff;
            state.buffer = b.data;
            pxsim.runtime.queueDisplayUpdate();
        }
        light.sendBuffer = sendBuffer;
    })(light = pxsim.light || (pxsim.light = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var visuals;
    (function (visuals) {
        const PIXEL_SPACING = visuals.PIN_DIST * 2.5; // 3
        const PIXEL_RADIUS = visuals.PIN_DIST;
        const CANVAS_WIDTH = 1.2 * visuals.PIN_DIST;
        const CANVAS_HEIGHT = 12 * visuals.PIN_DIST;
        const CANVAS_VIEW_PADDING = visuals.PIN_DIST * 4;
        const CANVAS_LEFT = 1.4 * visuals.PIN_DIST;
        const CANVAS_TOP = visuals.PIN_DIST;
        // For the instructions parts list
        function mkNeoPixelPart(xy = [0, 0]) {
            const NP_PART_XOFF = -13.5;
            const NP_PART_YOFF = -11;
            const NP_PART_WIDTH = 87.5;
            const NP_PART_HEIGHT = 190;
            const NEOPIXEL_PART_IMG = `<svg viewBox="-5 -1 53 112" xmlns="http://www.w3.org/2000/svg" xmlns:bx="https://boxy-svg.com">
  <rect x="2.5" width="38" height="100" style="fill: rgb(68, 68, 68);"/>
  <rect x="11.748" y="3.2" width="1.391" height="2.553" style="fill: none; stroke-linejoin: round; stroke-width: 3; stroke: rgb(165, 103, 52);"/>
  <rect x="20.75" y="3.2" width="1.391" height="2.553" style="fill: none; stroke-linejoin: round; stroke-width: 3; stroke: rgb(165, 103, 52);"/>
  <rect x="29.75" y="3.2" width="1.391" height="2.553" style="fill: none; stroke-linejoin: round; stroke-width: 3; stroke: rgb(165, 103, 52);"/>
  <g>
    <rect x="9" y="16.562" width="25" height="3.238" style="fill: rgb(216, 216, 216);"/>
    <rect x="9" y="22.562" width="25" height="3.238" style="fill: rgb(216, 216, 216);"/>
    <rect x="9" y="28.563" width="25" height="3.238" style="fill: rgb(216, 216, 216);"/>
    <rect x="11.607" y="14.833" width="19.787" height="18.697" style="fill: rgb(0, 0, 0);"/>
    <ellipse style="fill: rgb(216, 216, 216);" cx="21.5" cy="24.181" rx="7" ry="7"/>
  </g>
  <path d="M -7.25 -103.2 L -2.5 -100.003 L -12 -100.003 L -7.25 -103.2 Z" style="fill: rgb(68, 68, 68);" transform="matrix(-1, 0, 0, -1, 0, 0)" bx:shape="triangle -12 -103.2 9.5 3.197 0.5 0 1@ad6f5cac"/>
  <path d="M -16.75 -103.197 L -12 -100 L -21.5 -100 L -16.75 -103.197 Z" style="fill: rgb(68, 68, 68);" transform="matrix(-1, 0, 0, -1, 0, 0)" bx:shape="triangle -21.5 -103.197 9.5 3.197 0.5 0 1@07d73149"/>
  <path d="M -26.25 -103.2 L -21.5 -100.003 L -31 -100.003 L -26.25 -103.2 Z" style="fill: rgb(68, 68, 68);" transform="matrix(-1, 0, 0, -1, 0, 0)" bx:shape="triangle -31 -103.2 9.5 3.197 0.5 0 1@54403e2d"/>
  <path d="M -35.75 -103.197 L -31 -100 L -40.5 -100 L -35.75 -103.197 Z" style="fill: rgb(68, 68, 68);" transform="matrix(-1, 0, 0, -1, 0, 0)" bx:shape="triangle -40.5 -103.197 9.5 3.197 0.5 0 1@21c9b772"/>
  <g transform="matrix(1, 0, 0, 1, 0.000002, 29.999994)">
    <rect x="9" y="16.562" width="25" height="3.238" style="fill: rgb(216, 216, 216);"/>
    <rect x="9" y="22.562" width="25" height="3.238" style="fill: rgb(216, 216, 216);"/>
    <rect x="9" y="28.563" width="25" height="3.238" style="fill: rgb(216, 216, 216);"/>
    <rect x="11.607" y="14.833" width="19.787" height="18.697" style="fill: rgb(0, 0, 0);"/>
    <ellipse style="fill: rgb(216, 216, 216);" cx="21.5" cy="24.181" rx="7" ry="7"/>
  </g>
  <g transform="matrix(1, 0, 0, 1, 0.000005, 59.999992)">
    <rect x="9" y="16.562" width="25" height="3.238" style="fill: rgb(216, 216, 216);"/>
    <rect x="9" y="22.562" width="25" height="3.238" style="fill: rgb(216, 216, 216);"/>
    <rect x="9" y="28.563" width="25" height="3.238" style="fill: rgb(216, 216, 216);"/>
    <rect x="11.607" y="14.833" width="19.787" height="18.697" style="fill: rgb(0, 0, 0);"/>
    <ellipse style="fill: rgb(216, 216, 216);" cx="21.5" cy="24.181" rx="7" ry="7"/>
  </g>
</svg>`;
            let [x, y] = xy;
            let l = x + NP_PART_XOFF;
            let t = y + NP_PART_YOFF;
            let w = NP_PART_WIDTH;
            let h = NP_PART_HEIGHT;
            let img = pxsim.svg.elt("image");
            pxsim.svg.hydrate(img, {
                class: "sim-neopixel-strip", x: l, y: t, width: w, height: h,
                href: pxsim.svg.toDataUri(NEOPIXEL_PART_IMG)
            });
            return { el: img, x: l, y: t, w: w, h: h };
        }
        visuals.mkNeoPixelPart = mkNeoPixelPart;
        class NeoPixel {
            constructor(xy = [0, 0], width = 1) {
                let el = pxsim.svg.elt("rect");
                let r = PIXEL_RADIUS;
                let [cx, cy] = xy;
                let y = cy - r;
                if (width <= 1)
                    pxsim.svg.hydrate(el, { x: "-50%", y: y, width: "100%", height: r * 2, class: "sim-neopixel" });
                else {
                    let x = cx - r;
                    pxsim.svg.hydrate(el, { x: x, y: y, width: r * 2, height: r * 2, class: "sim-neopixel" });
                }
                this.el = el;
                this.cy = cy;
            }
            setRgb(rgb) {
                let hsl = visuals.rgbToHsl(rgb);
                let [h, s, l] = hsl;
                // at least 70% luminosity
                l = Math.max(l, 60);
                let fill = `hsl(${h}, ${s}%, ${l}%)`;
                this.el.setAttribute("fill", fill);
            }
        }
        visuals.NeoPixel = NeoPixel;
        class NeoPixelCanvas {
            constructor(pin, cols = 1) {
                this.cols = cols;
                this.pixels = [];
                let el = pxsim.svg.elt("svg");
                pxsim.svg.hydrate(el, {
                    "class": `sim-neopixel-canvas`,
                    "x": "0px",
                    "y": "0px",
                    "width": `${CANVAS_WIDTH}px`,
                    "height": `${CANVAS_HEIGHT}px`,
                });
                this.canvas = el;
                this.background = pxsim.svg.child(el, "rect", { class: "sim-neopixel-background hidden" });
                this.updateViewBox(-CANVAS_WIDTH / 2, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            }
            updateViewBox(x, y, w, h) {
                this.viewBox = [x, y, w, h];
                pxsim.svg.hydrate(this.canvas, { "viewBox": `${x} ${y} ${w} ${h}` });
                pxsim.svg.hydrate(this.background, { "x": x, "y": y, "width": w, "height": h });
            }
            update(colors) {
                if (!colors || colors.length <= 0)
                    return;
                if (this.pixels.length == 0 && this.cols > 1) {
                    // first time, so redo width of canvas
                    let rows = Math.ceil(colors.length / this.cols);
                    let rt = CANVAS_HEIGHT / rows;
                    let width = this.cols * rt;
                    this.canvas.setAttributeNS(null, "width", `${width}px`);
                    this.updateViewBox(0, 0, width, CANVAS_HEIGHT);
                }
                for (let i = 0; i < colors.length; i++) {
                    let pixel = this.pixels[i];
                    if (!pixel) {
                        let cxy = [0, CANVAS_VIEW_PADDING + i * PIXEL_SPACING];
                        if (this.cols > 1) {
                            const row = Math.floor(i / this.cols);
                            const col = i - row * this.cols;
                            cxy = [(col + 1) * PIXEL_SPACING, (row + 1) * PIXEL_SPACING];
                        }
                        pixel = this.pixels[i] = new NeoPixel(cxy, this.cols);
                        pxsim.svg.hydrate(pixel.el, { title: `offset: ${i}` });
                        this.canvas.appendChild(pixel.el);
                    }
                    pixel.setRgb(colors[i]);
                }
                //show the canvas if it's hidden
                pxsim.U.removeClass(this.background, "hidden");
                // resize
                let [first, last] = [this.pixels[0], this.pixels[this.pixels.length - 1]];
                let yDiff = last.cy - first.cy;
                let newH = yDiff + CANVAS_VIEW_PADDING * 2;
                let [oldX, oldY, oldW, oldH] = this.viewBox;
                if (newH > oldH) {
                    let scalar = newH / oldH;
                    let newW = oldW * scalar;
                    if (this.cols > 1) {
                        // different computation for matrix
                        let rows = Math.ceil(colors.length / this.cols);
                        newH = PIXEL_SPACING * (rows + 1);
                        newW = PIXEL_SPACING * (this.cols + 1);
                        this.updateViewBox(0, oldY, newW, newH);
                    }
                    else
                        this.updateViewBox(-newW / 2, oldY, newW, newH);
                }
            }
            setLoc(xy) {
                let [x, y] = xy;
                pxsim.svg.hydrate(this.canvas, { x: x, y: y });
            }
        }
        visuals.NeoPixelCanvas = NeoPixelCanvas;
        ;
        class NeoPixelView {
            constructor(parsePinString) {
                this.parsePinString = parsePinString;
                this.style = `
            .sim-neopixel-canvas {
            }
            .sim-neopixel-canvas-parent:hover {
                transform-origin: center;
                transform: scale(4) translateY(-220px);
                -moz-transform: scale(4) translateY(-220px);
            }
            .sim-neopixel-canvas .hidden {
                visibility:hidden;
            }
            .sim-neopixel-background {
                fill: rgba(255,255,255,0.9);
            }
            .sim-neopixel-strip {
            }
        `;
            }
            init(bus, state, svgEl, otherParams) {
                this.stripGroup = pxsim.svg.elt("g");
                this.element = this.stripGroup;
                this.pin = this.parsePinString(otherParams["dataPin"] || otherParams["pin"])
                    || this.parsePinString("pins.NEOPIXEL")
                    || this.parsePinString("pins.MOSI");
                this.lastLocation = [0, 0];
                this.state = state(this.pin);
                let part = mkNeoPixelPart();
                this.part = part;
                this.stripGroup.appendChild(part.el);
                this.overElement = null;
                this.makeCanvas();
            }
            makeCanvas() {
                let canvas = new NeoPixelCanvas(this.pin.id, this.state.width);
                if (this.overElement) {
                    this.overElement.removeChild(this.canvas.canvas);
                    this.overElement.appendChild(canvas.canvas);
                }
                else {
                    let canvasG = pxsim.svg.elt("g", { class: "sim-neopixel-canvas-parent" });
                    canvasG.appendChild(canvas.canvas);
                    this.overElement = canvasG;
                }
                this.canvas = canvas;
                this.updateStripLoc();
            }
            moveToCoord(xy) {
                let [x, y] = xy;
                let loc = [x, y];
                this.lastLocation = loc;
                this.updateStripLoc();
            }
            updateStripLoc() {
                let [x, y] = this.lastLocation;
                pxsim.U.assert(typeof x === "number" && typeof y === "number", "invalid x,y for NeoPixel strip");
                this.canvas.setLoc([x + CANVAS_LEFT, y + CANVAS_TOP]);
                pxsim.svg.hydrate(this.part.el, { transform: `translate(${x} ${y})` }); //TODO: update part's l,h, etc.
            }
            updateState() {
                if (this.state.width != this.canvas.cols) {
                    this.makeCanvas();
                }
                let colors = [];
                for (let i = 0; i < this.state.length; i++) {
                    colors.push(this.state.pixelColor(i));
                }
                this.canvas.update(colors);
            }
            updateTheme() { }
        }
        visuals.NeoPixelView = NeoPixelView;
    })(visuals = pxsim.visuals || (pxsim.visuals = {}));
})(pxsim || (pxsim = {}));
const KEY_UP = 2048;
const KEY_DOWN = 2049;
const INTERNAL_KEY_UP = 2050;
const INTERNAL_KEY_DOWN = 2051;
const SYSTEM_KEY_UP = 2052;
const SYSTEM_KEY_DOWN = 2053;
const KEY_REPEAT = 2054;
const SYSTEM_KEY_REPEAT = 2055;
