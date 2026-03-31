namespace SpriteKind {
    export const F2 = SpriteKind.create()
    export const End = SpriteKind.create()
    export const Portal = SpriteKind.create()
    export const Portal2 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Portal2, function (sprite, otherSprite) {
    PortalEndTile2 = scene.getTile(9, 3)
    PortalEndTile2.place(Turtle)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Portal, function (sprite, otherSprite) {
    PortalEndTile = scene.getTile(10, 11)
    PortalEndTile.place(Turtle)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.End, function (sprite, otherSprite) {
    game.over(true, effects.confetti)
})
info.onLifeZero(function () {
    game.over(false, effects.melt)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeLifeBy(1)
    otherSprite.destroy(effects.hearts, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.F2, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy(effects.hearts, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.fire, 500)
})
let PortalEndTile: tiles.Tile = null
let PortalEndTile2: tiles.Tile = null
let Turtle: Sprite = null
scene.setTileMap(img`
    5 1 1 1 1 1 2 1 7 f f f f f f f 
    f f f 1 1 f 1 f 1 1 1 1 1 1 1 1 
    7 1 1 1 1 f 7 f f f f f f f f 1 
    1 f f f 1 f f f 1 1 1 1 1 1 2 1 
    2 1 5 f 1 1 1 1 2 3 f f f f 1 f 
    f f f f 1 f f f 1 1 1 1 2 f 1 f 
    f 1 1 1 1 f 5 f f f 1 f 1 f 1 f 
    f 1 f f f f 1 f 7 1 2 1 1 f 1 f 
    f 1 f 1 1 1 1 f f f 1 1 f f 1 f 
    f 1 f 1 f f f f 7 f f 1 f 2 7 f 
    f 1 f 2 1 1 1 1 1 1 3 1 f 1 f f 
    f 1 f 1 f f f f f 1 1 1 f 5 1 f 
    f 1 f 1 f 5 1 1 f 1 f f f f 1 f 
    f 1 f 1 f f f 1 f 2 1 1 1 f 1 f 
    f 1 f 2 1 1 1 1 f f f f 1 f 1 f 
    f 1 f 7 f f f f f 5 1 1 1 f 1 f 
    `, TileScale.Sixteen)
scene.setTile(15, img`
    d f d d d d d d d f d d d d d d 
    d f d d d d d d d f d d d d d d 
    d f d d d d d d d f d d d d d d 
    f f f f f f f f f f f f f f f f 
    d d d d d f d d d d d d d f d d 
    d d d d d f d d d d d d d f d d 
    d d d d d f d d d d d d d f d d 
    f f f f f f f f f f f f f f f f 
    d f d d d d d d d f d d d d d d 
    d f d d d d d d d f d d d d d d 
    d f d d d d d d d f d d d d d d 
    f f f f f f f f f f f f f f f f 
    d d d d d f d d d d d d d f d d 
    d d d d d f d d d d d d d f d d 
    d d d d d f d d d d d d d f d d 
    f f f f f f f f f f f f f f f f 
    `, true)
scene.setTile(1, img`
    7 6 7 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 1 6 6 
    6 6 6 1 1 6 6 6 6 6 6 6 1 6 1 6 
    6 6 3 1 1 3 6 6 6 7 6 6 8 1 8 6 
    6 1 1 8 8 1 1 6 6 7 6 6 6 6 6 6 
    6 d 1 6 6 1 d 6 6 8 6 6 6 6 6 6 
    6 8 3 1 1 3 8 6 6 6 6 7 6 6 6 6 
    6 6 8 d d 8 6 6 6 6 7 7 8 6 6 6 
    6 6 6 6 6 6 6 1 6 6 7 8 6 6 6 6 
    6 6 6 6 6 6 1 6 1 6 6 6 1 1 6 6 
    6 6 1 6 6 6 8 1 8 6 6 3 1 1 3 6 
    6 1 6 1 6 6 6 6 6 6 1 1 8 8 1 1 
    6 8 1 8 6 6 6 6 6 6 d 1 6 6 1 d 
    6 6 6 6 6 6 6 6 6 6 8 3 1 1 3 8 
    6 6 6 6 6 6 6 6 6 6 6 8 d d 8 6 
    6 6 7 6 6 6 6 6 6 6 6 6 6 6 6 6 
    `, false)
scene.setTile(5, img`
    7 6 7 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 7 6 6 6 6 6 6 6 6 6 6 
    6 6 6 7 6 7 7 6 6 6 6 6 7 6 6 6 
    6 6 8 7 7 6 7 6 7 7 6 6 6 6 6 6 
    6 6 6 8 7 6 6 7 7 8 6 6 6 6 6 6 
    6 6 6 6 8 6 6 7 8 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 7 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 7 7 6 6 6 
    6 6 6 6 6 6 6 6 6 6 7 7 8 6 6 6 
    6 6 6 6 6 6 6 6 7 7 6 8 6 6 6 6 
    6 6 6 6 6 6 6 6 6 7 7 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 7 
    6 6 7 6 6 6 6 6 6 6 6 6 6 6 6 7 
    `, false)
scene.setTile(2, img`
    7 6 7 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 7 6 6 6 6 6 6 6 6 6 6 
    6 6 6 7 6 7 7 6 6 6 6 6 7 6 6 6 
    6 6 8 7 7 6 7 6 7 7 6 6 6 6 6 6 
    6 6 6 8 7 6 6 7 7 8 6 6 6 6 6 6 
    6 6 6 6 8 6 6 7 8 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 7 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 7 7 6 6 6 
    6 6 6 6 6 6 6 6 6 6 7 7 8 6 6 6 
    6 6 6 6 6 6 6 6 7 7 6 8 6 6 6 6 
    6 6 6 6 6 6 6 6 6 7 7 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 7 
    6 6 7 6 6 6 6 6 6 6 6 6 6 6 6 7 
    `, false)
scene.setTile(7, img`
    7 6 7 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 7 6 6 6 6 6 6 6 6 6 6 
    6 6 6 7 6 7 7 6 6 6 6 6 7 6 6 6 
    6 6 8 7 7 6 7 6 7 7 6 6 6 6 6 6 
    6 6 6 8 7 6 6 7 7 8 6 6 6 6 6 6 
    6 6 6 6 8 6 6 7 8 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 7 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 7 7 6 6 6 
    6 6 6 6 6 6 6 6 6 6 7 7 8 6 6 6 
    6 6 6 6 6 6 6 6 7 7 6 8 6 6 6 6 
    6 6 6 6 6 6 6 6 6 7 7 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 7 
    6 6 7 6 6 6 6 6 6 6 6 6 6 6 6 7 
    `, false)
scene.setTile(3, img`
    d d d d d d d d d d d d d d d d 
    d d d 1 1 d d d d d d d d b d d 
    d d d 1 1 d d d d d d d d d d d 
    d d d d d d d d d d d d d d d d 
    d d b d d d d d d b b d d d d d 
    d d d d d d d d d b b d d d d d 
    d d d d d d d d d d d d d d d d 
    d d d d d d d d d d d d d d d d 
    d d d d d b d d d d d d d d d d 
    d d d d d d d d d d d d d d d d 
    d d d d d d d d d d d d d d d d 
    1 1 d d d d d d d d d d d d d d 
    1 1 d d d d d d d d d d b d d d 
    d d d d d d 1 d d d d d d d d d 
    d d d d d d d d d d d d d d d d 
    d d d d d d d d d d d d d d b d 
    `, false)
Turtle = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . e e . . . . . . . . 
    . . . . . e c e c . 7 7 . . . . 
    . . . . c e e e e e 7 f 7 . . . 
    . . . . e e e c e c 7 7 7 . . . 
    . . . 7 e c e e e e 7 7 . . . . 
    . . 7 . 7 7 7 7 7 7 . . . . . . 
    . . . . 7 7 . . 7 7 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
info.setLife(1)
controller.moveSprite(Turtle, 100, 100)
let myTile = scene.getTile(1, 15)
myTile.place(Turtle)
scene.cameraFollowSprite(Turtle)
let PlasticStraw = sprites.create(img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 7 6 6 6 6 6 6 6 6 6 6 6 1 6 6 
    6 7 6 6 1 1 1 1 2 6 6 6 1 6 1 6 
    6 c 6 6 1 1 1 2 1 2 6 6 c 1 c 6 
    6 6 6 6 6 6 6 6 2 1 2 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 2 1 2 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 2 1 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 1 1 6 6 6 6 
    6 6 6 7 6 6 6 6 6 6 1 1 6 6 6 6 
    6 6 7 7 c 6 6 6 6 6 1 1 6 6 6 6 
    6 6 7 c 6 6 6 6 6 6 1 1 6 6 6 6 
    6 6 6 6 6 6 6 7 6 6 1 1 6 6 6 6 
    6 6 6 6 6 6 6 7 6 6 1 1 6 6 6 6 
    6 6 6 6 6 6 6 c 6 6 1 1 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    `, SpriteKind.Food)
let MT3 = scene.getTile(0, 2)
MT3.place(PlasticStraw)
let PS2 = sprites.create(img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 7 6 6 6 6 6 6 6 6 6 6 6 1 6 6 
    6 7 6 6 1 1 1 1 2 6 6 6 1 6 1 6 
    6 c 6 6 1 1 1 2 1 2 6 6 c 1 c 6 
    6 6 6 6 6 6 6 6 2 1 2 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 2 1 2 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 2 1 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 1 1 6 6 6 6 
    6 6 6 7 6 6 6 6 6 6 1 1 6 6 6 6 
    6 6 7 7 c 6 6 6 6 6 1 1 6 6 6 6 
    6 6 7 c 6 6 6 6 6 6 1 1 6 6 6 6 
    6 6 6 6 6 6 6 7 6 6 1 1 6 6 6 6 
    6 6 6 6 6 6 6 7 6 6 1 1 6 6 6 6 
    6 6 6 6 6 6 6 c 6 6 1 1 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    `, SpriteKind.Food)
let MT2 = scene.getTile(3, 15)
MT2.place(PS2)
let PS3 = sprites.create(img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 7 6 6 6 6 6 6 6 6 6 6 6 1 6 6 
    6 7 6 6 1 1 1 1 2 6 6 6 1 6 1 6 
    6 c 6 6 1 1 1 2 1 2 6 6 c 1 c 6 
    6 6 6 6 6 6 6 6 2 1 2 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 2 1 2 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 2 1 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 1 1 6 6 6 6 
    6 6 6 7 6 6 6 6 6 6 1 1 6 6 6 6 
    6 6 7 7 c 6 6 6 6 6 1 1 6 6 6 6 
    6 6 7 c 6 6 6 6 6 6 1 1 6 6 6 6 
    6 6 6 6 6 6 6 7 6 6 1 1 6 6 6 6 
    6 6 6 6 6 6 6 7 6 6 1 1 6 6 6 6 
    6 6 6 6 6 6 6 c 6 6 1 1 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    `, SpriteKind.Food)
let MT4 = scene.getTile(6, 2)
MT4.place(PS3)
let PS4 = sprites.create(img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 7 6 6 6 6 6 6 6 6 6 6 6 1 6 6 
    6 7 6 6 1 1 1 1 2 6 6 6 1 6 1 6 
    6 c 6 6 1 1 1 2 1 2 6 6 c 1 c 6 
    6 6 6 6 6 6 6 6 2 1 2 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 2 1 2 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 2 1 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 1 1 6 6 6 6 
    6 6 6 7 6 6 6 6 6 6 1 1 6 6 6 6 
    6 6 7 7 c 6 6 6 6 6 1 1 6 6 6 6 
    6 6 7 c 6 6 6 6 6 6 1 1 6 6 6 6 
    6 6 6 6 6 6 6 7 6 6 1 1 6 6 6 6 
    6 6 6 6 6 6 6 7 6 6 1 1 6 6 6 6 
    6 6 6 6 6 6 6 c 6 6 1 1 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    `, SpriteKind.Food)
let MT5 = scene.getTile(8, 0)
MT5.place(PS4)
let PS5 = sprites.create(img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 7 6 6 6 6 6 6 6 6 6 6 6 1 6 6 
    6 7 6 6 1 1 1 1 2 6 6 6 1 6 1 6 
    6 c 6 6 1 1 1 2 1 2 6 6 c 1 c 6 
    6 6 6 6 6 6 6 6 2 1 2 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 2 1 2 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 2 1 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 1 1 6 6 6 6 
    6 6 6 7 6 6 6 6 6 6 1 1 6 6 6 6 
    6 6 7 7 c 6 6 6 6 6 1 1 6 6 6 6 
    6 6 7 c 6 6 6 6 6 6 1 1 6 6 6 6 
    6 6 6 6 6 6 6 7 6 6 1 1 6 6 6 6 
    6 6 6 6 6 6 6 7 6 6 1 1 6 6 6 6 
    6 6 6 6 6 6 6 c 6 6 1 1 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    `, SpriteKind.Food)
let MT6 = scene.getTile(8, 7)
MT6.place(PS5)
let PS6 = sprites.create(img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 7 6 6 6 6 6 6 6 6 6 6 6 1 6 6 
    6 7 6 6 1 1 1 1 2 6 6 6 1 6 1 6 
    6 c 6 6 1 1 1 2 1 2 6 6 c 1 c 6 
    6 6 6 6 6 6 6 6 2 1 2 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 2 1 2 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 2 1 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 1 1 6 6 6 6 
    6 6 6 7 6 6 6 6 6 6 1 1 6 6 6 6 
    6 6 7 7 c 6 6 6 6 6 1 1 6 6 6 6 
    6 6 7 c 6 6 6 6 6 6 1 1 6 6 6 6 
    6 6 6 6 6 6 6 7 6 6 1 1 6 6 6 6 
    6 6 6 6 6 6 6 7 6 6 1 1 6 6 6 6 
    6 6 6 6 6 6 6 c 6 6 1 1 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    `, SpriteKind.Food)
let MT7 = scene.getTile(8, 9)
MT7.place(PS6)
let PS7 = sprites.create(img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 7 6 6 6 6 6 6 6 6 6 6 6 1 6 6 
    6 7 6 6 1 1 1 1 2 6 6 6 1 6 1 6 
    6 c 6 6 1 1 1 2 1 2 6 6 c 1 c 6 
    6 6 6 6 6 6 6 6 2 1 2 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 2 1 2 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 2 1 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 1 1 6 6 6 6 
    6 6 6 7 6 6 6 6 6 6 1 1 6 6 6 6 
    6 6 7 7 c 6 6 6 6 6 1 1 6 6 6 6 
    6 6 7 c 6 6 6 6 6 6 1 1 6 6 6 6 
    6 6 6 6 6 6 6 7 6 6 1 1 6 6 6 6 
    6 6 6 6 6 6 6 7 6 6 1 1 6 6 6 6 
    6 6 6 6 6 6 6 c 6 6 1 1 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    `, SpriteKind.Food)
let MT8 = scene.getTile(14, 9)
MT8.place(PS7)
let PlasticBag = sprites.create(img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 1 1 1 1 6 6 6 6 6 
    6 7 6 6 6 1 1 1 1 6 1 1 6 6 6 6 
    6 7 6 1 1 1 1 6 1 1 6 1 1 6 6 6 
    6 c 6 1 6 6 1 6 6 1 6 6 1 6 6 6 
    6 6 6 1 6 6 1 6 6 1 6 6 6 1 6 6 
    6 6 6 1 6 6 1 6 6 1 6 6 9 1 6 6 
    6 6 6 1 6 1 9 1 1 9 1 1 1 9 1 6 
    6 6 6 9 1 1 1 9 9 1 1 1 1 1 9 6 
    6 6 1 1 9 9 1 1 1 9 1 1 1 9 1 6 
    6 6 1 9 1 1 1 1 1 9 1 1 1 9 1 6 
    6 6 1 1 1 9 9 9 1 1 9 9 9 1 1 6 
    6 6 9 1 1 1 1 1 1 1 1 1 1 1 1 6 
    6 6 1 1 9 1 1 9 9 1 9 9 9 1 1 6 
    6 6 6 1 1 1 9 1 1 1 1 1 9 1 6 6 
    6 6 6 6 6 1 9 1 1 1 1 6 6 6 6 6 
    `, SpriteKind.Enemy)
let PBT1 = scene.getTile(0, 4)
PBT1.place(PlasticBag)
let PB2 = sprites.create(img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 1 1 1 1 6 6 6 6 6 
    6 7 6 6 6 1 1 1 1 6 1 1 6 6 6 6 
    6 7 6 1 1 1 1 6 1 1 6 1 1 6 6 6 
    6 c 6 1 6 6 1 6 6 1 6 6 1 6 6 6 
    6 6 6 1 6 6 1 6 6 1 6 6 6 1 6 6 
    6 6 6 1 6 6 1 6 6 1 6 6 9 1 6 6 
    6 6 6 1 6 1 9 1 1 9 1 1 1 9 1 6 
    6 6 6 9 1 1 1 9 9 1 1 1 1 1 9 6 
    6 6 1 1 9 9 1 1 1 9 1 1 1 9 1 6 
    6 6 1 9 1 1 1 1 1 9 1 1 1 9 1 6 
    6 6 1 1 1 9 9 9 1 1 9 9 9 1 1 6 
    6 6 9 1 1 1 1 1 1 1 1 1 1 1 1 6 
    6 6 1 1 9 1 1 9 9 1 9 9 9 1 1 6 
    6 6 6 1 1 1 9 1 1 1 1 1 9 1 6 6 
    6 6 6 6 6 1 9 1 1 1 1 6 6 6 6 6 
    `, SpriteKind.Enemy)
let PBT2 = scene.getTile(3, 10)
PBT2.place(PB2)
let PB3 = sprites.create(img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 1 1 1 1 6 6 6 6 6 
    6 7 6 6 6 1 1 1 1 6 1 1 6 6 6 6 
    6 7 6 1 1 1 1 6 1 1 6 1 1 6 6 6 
    6 c 6 1 6 6 1 6 6 1 6 6 1 6 6 6 
    6 6 6 1 6 6 1 6 6 1 6 6 6 1 6 6 
    6 6 6 1 6 6 1 6 6 1 6 6 9 1 6 6 
    6 6 6 1 6 1 9 1 1 9 1 1 1 9 1 6 
    6 6 6 9 1 1 1 9 9 1 1 1 1 1 9 6 
    6 6 1 1 9 9 1 1 1 9 1 1 1 9 1 6 
    6 6 1 9 1 1 1 1 1 9 1 1 1 9 1 6 
    6 6 1 1 1 9 9 9 1 1 9 9 9 1 1 6 
    6 6 9 1 1 1 1 1 1 1 1 1 1 1 1 6 
    6 6 1 1 9 1 1 9 9 1 9 9 9 1 1 6 
    6 6 6 1 1 1 9 1 1 1 1 1 9 1 6 6 
    6 6 6 6 6 1 9 1 1 1 1 6 6 6 6 6 
    `, SpriteKind.Enemy)
let PBT3 = scene.getTile(3, 14)
PBT3.place(PB3)
let PB4 = sprites.create(img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 1 1 1 1 6 6 6 6 6 
    6 7 6 6 6 1 1 1 1 6 1 1 6 6 6 6 
    6 7 6 1 1 1 1 6 1 1 6 1 1 6 6 6 
    6 c 6 1 6 6 1 6 6 1 6 6 1 6 6 6 
    6 6 6 1 6 6 1 6 6 1 6 6 6 1 6 6 
    6 6 6 1 6 6 1 6 6 1 6 6 9 1 6 6 
    6 6 6 1 6 1 9 1 1 9 1 1 1 9 1 6 
    6 6 6 9 1 1 1 9 9 1 1 1 1 1 9 6 
    6 6 1 1 9 9 1 1 1 9 1 1 1 9 1 6 
    6 6 1 9 1 1 1 1 1 9 1 1 1 9 1 6 
    6 6 1 1 1 9 9 9 1 1 9 9 9 1 1 6 
    6 6 9 1 1 1 1 1 1 1 1 1 1 1 1 6 
    6 6 1 1 9 1 1 9 9 1 9 9 9 1 1 6 
    6 6 6 1 1 1 9 1 1 1 1 1 9 1 6 6 
    6 6 6 6 6 1 9 1 1 1 1 6 6 6 6 6 
    `, SpriteKind.Enemy)
let PBT4 = scene.getTile(6, 0)
PBT4.place(PB4)
let PB5 = sprites.create(img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 1 1 1 1 6 6 6 6 6 
    6 7 6 6 6 1 1 1 1 6 1 1 6 6 6 6 
    6 7 6 1 1 1 1 6 1 1 6 1 1 6 6 6 
    6 c 6 1 6 6 1 6 6 1 6 6 1 6 6 6 
    6 6 6 1 6 6 1 6 6 1 6 6 6 1 6 6 
    6 6 6 1 6 6 1 6 6 1 6 6 9 1 6 6 
    6 6 6 1 6 1 9 1 1 9 1 1 1 9 1 6 
    6 6 6 9 1 1 1 9 9 1 1 1 1 1 9 6 
    6 6 1 1 9 9 1 1 1 9 1 1 1 9 1 6 
    6 6 1 9 1 1 1 1 1 9 1 1 1 9 1 6 
    6 6 1 1 1 9 9 9 1 1 9 9 9 1 1 6 
    6 6 9 1 1 1 1 1 1 1 1 1 1 1 1 6 
    6 6 1 1 9 1 1 9 9 1 9 9 9 1 1 6 
    6 6 6 1 1 1 9 1 1 1 1 1 9 1 6 6 
    6 6 6 6 6 1 9 1 1 1 1 6 6 6 6 6 
    `, SpriteKind.Enemy)
let PBT5 = scene.getTile(8, 4)
PBT5.place(PB5)
let PB6 = sprites.create(img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 1 1 1 1 6 6 6 6 6 
    6 7 6 6 6 1 1 1 1 6 1 1 6 6 6 6 
    6 7 6 1 1 1 1 6 1 1 6 1 1 6 6 6 
    6 c 6 1 6 6 1 6 6 1 6 6 1 6 6 6 
    6 6 6 1 6 6 1 6 6 1 6 6 6 1 6 6 
    6 6 6 1 6 6 1 6 6 1 6 6 9 1 6 6 
    6 6 6 1 6 1 9 1 1 9 1 1 1 9 1 6 
    6 6 6 9 1 1 1 9 9 1 1 1 1 1 9 6 
    6 6 1 1 9 9 1 1 1 9 1 1 1 9 1 6 
    6 6 1 9 1 1 1 1 1 9 1 1 1 9 1 6 
    6 6 1 1 1 9 9 9 1 1 9 9 9 1 1 6 
    6 6 9 1 1 1 1 1 1 1 1 1 1 1 1 6 
    6 6 1 1 9 1 1 9 9 1 9 9 9 1 1 6 
    6 6 6 1 1 1 9 1 1 1 1 1 9 1 6 6 
    6 6 6 6 6 1 9 1 1 1 1 6 6 6 6 6 
    `, SpriteKind.Enemy)
let PBT6 = scene.getTile(9, 13)
PBT6.place(PB6)
let PB7 = sprites.create(img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 1 1 1 1 6 6 6 6 6 
    6 7 6 6 6 1 1 1 1 6 1 1 6 6 6 6 
    6 7 6 1 1 1 1 6 1 1 6 1 1 6 6 6 
    6 c 6 1 6 6 1 6 6 1 6 6 1 6 6 6 
    6 6 6 1 6 6 1 6 6 1 6 6 6 1 6 6 
    6 6 6 1 6 6 1 6 6 1 6 6 9 1 6 6 
    6 6 6 1 6 1 9 1 1 9 1 1 1 9 1 6 
    6 6 6 9 1 1 1 9 9 1 1 1 1 1 9 6 
    6 6 1 1 9 9 1 1 1 9 1 1 1 9 1 6 
    6 6 1 9 1 1 1 1 1 9 1 1 1 9 1 6 
    6 6 1 1 1 9 9 9 1 1 9 9 9 1 1 6 
    6 6 9 1 1 1 1 1 1 1 1 1 1 1 1 6 
    6 6 1 1 9 1 1 9 9 1 9 9 9 1 1 6 
    6 6 6 1 1 1 9 1 1 1 1 1 9 1 6 6 
    6 6 6 6 6 1 9 1 1 1 1 6 6 6 6 6 
    `, SpriteKind.Enemy)
let PBT7 = scene.getTile(10, 7)
PBT7.place(PB7)
let PB8 = sprites.create(img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 1 1 1 1 6 6 6 6 6 
    6 7 6 6 6 1 1 1 1 6 1 1 6 6 6 6 
    6 7 6 1 1 1 1 6 1 1 6 1 1 6 6 6 
    6 c 6 1 6 6 1 6 6 1 6 6 1 6 6 6 
    6 6 6 1 6 6 1 6 6 1 6 6 6 1 6 6 
    6 6 6 1 6 6 1 6 6 1 6 6 9 1 6 6 
    6 6 6 1 6 1 9 1 1 9 1 1 1 9 1 6 
    6 6 6 9 1 1 1 9 9 1 1 1 1 1 9 6 
    6 6 1 1 9 9 1 1 1 9 1 1 1 9 1 6 
    6 6 1 9 1 1 1 1 1 9 1 1 1 9 1 6 
    6 6 1 1 1 9 9 9 1 1 9 9 9 1 1 6 
    6 6 9 1 1 1 1 1 1 1 1 1 1 1 1 6 
    6 6 1 1 9 1 1 9 9 1 9 9 9 1 1 6 
    6 6 6 1 1 1 9 1 1 1 1 1 9 1 6 6 
    6 6 6 6 6 1 9 1 1 1 1 6 6 6 6 6 
    `, SpriteKind.Enemy)
let PBT8 = scene.getTile(12, 5)
PBT8.place(PB8)
let PB9 = sprites.create(img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 1 1 1 1 6 6 6 6 6 
    6 7 6 6 6 1 1 1 1 6 1 1 6 6 6 6 
    6 7 6 1 1 1 1 6 1 1 6 1 1 6 6 6 
    6 c 6 1 6 6 1 6 6 1 6 6 1 6 6 6 
    6 6 6 1 6 6 1 6 6 1 6 6 6 1 6 6 
    6 6 6 1 6 6 1 6 6 1 6 6 9 1 6 6 
    6 6 6 1 6 1 9 1 1 9 1 1 1 9 1 6 
    6 6 6 9 1 1 1 9 9 1 1 1 1 1 9 6 
    6 6 1 1 9 9 1 1 1 9 1 1 1 9 1 6 
    6 6 1 9 1 1 1 1 1 9 1 1 1 9 1 6 
    6 6 1 1 1 9 9 9 1 1 9 9 9 1 1 6 
    6 6 9 1 1 1 1 1 1 1 1 1 1 1 1 6 
    6 6 1 1 9 1 1 9 9 1 9 9 9 1 1 6 
    6 6 6 1 1 1 9 1 1 1 1 1 9 1 6 6 
    6 6 6 6 6 1 9 1 1 1 1 6 6 6 6 6 
    `, SpriteKind.Enemy)
let PBT9 = scene.getTile(13, 9)
PBT9.place(PB9)
let PB10 = sprites.create(img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 1 1 1 1 6 6 6 6 6 
    6 7 6 6 6 1 1 1 1 6 1 1 6 6 6 6 
    6 7 6 1 1 1 1 6 1 1 6 1 1 6 6 6 
    6 c 6 1 6 6 1 6 6 1 6 6 1 6 6 6 
    6 6 6 1 6 6 1 6 6 1 6 6 6 1 6 6 
    6 6 6 1 6 6 1 6 6 1 6 6 9 1 6 6 
    6 6 6 1 6 1 9 1 1 9 1 1 1 9 1 6 
    6 6 6 9 1 1 1 9 9 1 1 1 1 1 9 6 
    6 6 1 1 9 9 1 1 1 9 1 1 1 9 1 6 
    6 6 1 9 1 1 1 1 1 9 1 1 1 9 1 6 
    6 6 1 1 1 9 9 9 1 1 9 9 9 1 1 6 
    6 6 9 1 1 1 1 1 1 1 1 1 1 1 1 6 
    6 6 1 1 9 1 1 9 9 1 9 9 9 1 1 6 
    6 6 6 1 1 1 9 1 1 1 1 1 9 1 6 6 
    6 6 6 6 6 1 9 1 1 1 1 6 6 6 6 6 
    `, SpriteKind.Enemy)
let PBT10 = scene.getTile(14, 3)
PBT10.place(PB10)
PlasticBag.follow(Turtle, 10)
PB2.follow(Turtle, 10)
PB3.follow(Turtle, 10)
PB4.follow(Turtle, 10)
PB5.follow(Turtle, 10)
PB6.follow(Turtle, 10)
PB7.follow(Turtle, 10)
PB8.follow(Turtle, 10)
PB9.follow(Turtle, 10)
PB10.follow(Turtle, 10)
let H1 = sprites.create(img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 f f f 6 6 6 6 6 7 6 6 
    6 7 6 6 6 f 1 f 6 6 6 6 7 7 c 6 
    6 7 6 6 f f f f f 6 6 6 7 c 6 6 
    6 c 6 6 9 9 9 9 9 6 6 6 6 6 6 6 
    6 6 6 9 9 9 9 9 9 9 6 6 6 6 6 6 
    6 6 6 9 9 9 9 9 9 9 6 6 1 6 6 6 
    6 6 6 9 1 9 1 9 1 9 6 1 6 1 6 6 
    6 6 6 9 9 1 9 1 9 9 6 c 1 c 6 6 
    6 6 6 9 9 9 1 9 9 9 6 6 6 6 7 6 
    6 6 6 9 9 1 9 1 9 9 6 6 6 6 7 6 
    6 6 6 9 9 9 9 9 9 9 6 6 6 6 c 6 
    6 6 6 9 9 9 9 9 9 9 6 6 6 6 6 6 
    6 6 6 6 9 9 9 9 9 6 6 6 1 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 1 6 1 6 6 
    6 6 6 6 6 6 6 6 6 6 6 c 1 c 6 6 
    `, SpriteKind.F2)
let HT1 = scene.getTile(0, 0)
HT1.place(H1)
let H2 = sprites.create(img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 f f f 6 6 6 6 6 7 6 6 
    6 7 6 6 6 f 1 f 6 6 6 6 7 7 c 6 
    6 7 6 6 f f f f f 6 6 6 7 c 6 6 
    6 c 6 6 9 9 9 9 9 6 6 6 6 6 6 6 
    6 6 6 9 9 9 9 9 9 9 6 6 6 6 6 6 
    6 6 6 9 9 9 9 9 9 9 6 6 1 6 6 6 
    6 6 6 9 1 9 1 9 1 9 6 1 6 1 6 6 
    6 6 6 9 9 1 9 1 9 9 6 c 1 c 6 6 
    6 6 6 9 9 9 1 9 9 9 6 6 6 6 7 6 
    6 6 6 9 9 1 9 1 9 9 6 6 6 6 7 6 
    6 6 6 9 9 9 9 9 9 9 6 6 6 6 c 6 
    6 6 6 9 9 9 9 9 9 9 6 6 6 6 6 6 
    6 6 6 6 9 9 9 9 9 6 6 6 1 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 1 6 1 6 6 
    6 6 6 6 6 6 6 6 6 6 6 c 1 c 6 6 
    `, SpriteKind.F2)
let HT2 = scene.getTile(2, 4)
HT2.place(H2)
let H3 = sprites.create(img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 f f f 6 6 6 6 6 7 6 6 
    6 7 6 6 6 f 1 f 6 6 6 6 7 7 c 6 
    6 7 6 6 f f f f f 6 6 6 7 c 6 6 
    6 c 6 6 9 9 9 9 9 6 6 6 6 6 6 6 
    6 6 6 9 9 9 9 9 9 9 6 6 6 6 6 6 
    6 6 6 9 9 9 9 9 9 9 6 6 1 6 6 6 
    6 6 6 9 1 9 1 9 1 9 6 1 6 1 6 6 
    6 6 6 9 9 1 9 1 9 9 6 c 1 c 6 6 
    6 6 6 9 9 9 1 9 9 9 6 6 6 6 7 6 
    6 6 6 9 9 1 9 1 9 9 6 6 6 6 7 6 
    6 6 6 9 9 9 9 9 9 9 6 6 6 6 c 6 
    6 6 6 9 9 9 9 9 9 9 6 6 6 6 6 6 
    6 6 6 6 9 9 9 9 9 6 6 6 1 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 1 6 1 6 6 
    6 6 6 6 6 6 6 6 6 6 6 c 1 c 6 6 
    `, SpriteKind.F2)
let HT3 = scene.getTile(5, 12)
HT3.place(H3)
let H4 = sprites.create(img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 f f f 6 6 6 6 6 7 6 6 
    6 7 6 6 6 f 1 f 6 6 6 6 7 7 c 6 
    6 7 6 6 f f f f f 6 6 6 7 c 6 6 
    6 c 6 6 9 9 9 9 9 6 6 6 6 6 6 6 
    6 6 6 9 9 9 9 9 9 9 6 6 6 6 6 6 
    6 6 6 9 9 9 9 9 9 9 6 6 1 6 6 6 
    6 6 6 9 1 9 1 9 1 9 6 1 6 1 6 6 
    6 6 6 9 9 1 9 1 9 9 6 c 1 c 6 6 
    6 6 6 9 9 9 1 9 9 9 6 6 6 6 7 6 
    6 6 6 9 9 1 9 1 9 9 6 6 6 6 7 6 
    6 6 6 9 9 9 9 9 9 9 6 6 6 6 c 6 
    6 6 6 9 9 9 9 9 9 9 6 6 6 6 6 6 
    6 6 6 6 9 9 9 9 9 6 6 6 1 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 1 6 1 6 6 
    6 6 6 6 6 6 6 6 6 6 6 c 1 c 6 6 
    `, SpriteKind.F2)
let HT4 = scene.getTile(6, 6)
HT4.place(H4)
let H5 = sprites.create(img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 f f f 6 6 6 6 6 7 6 6 
    6 7 6 6 6 f 1 f 6 6 6 6 7 7 c 6 
    6 7 6 6 f f f f f 6 6 6 7 c 6 6 
    6 c 6 6 9 9 9 9 9 6 6 6 6 6 6 6 
    6 6 6 9 9 9 9 9 9 9 6 6 6 6 6 6 
    6 6 6 9 9 9 9 9 9 9 6 6 1 6 6 6 
    6 6 6 9 1 9 1 9 1 9 6 1 6 1 6 6 
    6 6 6 9 9 1 9 1 9 9 6 c 1 c 6 6 
    6 6 6 9 9 9 1 9 9 9 6 6 6 6 7 6 
    6 6 6 9 9 1 9 1 9 9 6 6 6 6 7 6 
    6 6 6 9 9 9 9 9 9 9 6 6 6 6 c 6 
    6 6 6 9 9 9 9 9 9 9 6 6 6 6 6 6 
    6 6 6 6 9 9 9 9 9 6 6 6 1 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 1 6 1 6 6 
    6 6 6 6 6 6 6 6 6 6 6 c 1 c 6 6 
    `, SpriteKind.F2)
let HT5 = scene.getTile(9, 15)
HT5.place(H5)
let H6 = sprites.create(img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 f f f 6 6 6 6 6 7 6 6 
    6 7 6 6 6 f 1 f 6 6 6 6 7 7 c 6 
    6 7 6 6 f f f f f 6 6 6 7 c 6 6 
    6 c 6 6 9 9 9 9 9 6 6 6 6 6 6 6 
    6 6 6 9 9 9 9 9 9 9 6 6 6 6 6 6 
    6 6 6 9 9 9 9 9 9 9 6 6 1 6 6 6 
    6 6 6 9 1 9 1 9 1 9 6 1 6 1 6 6 
    6 6 6 9 9 1 9 1 9 9 6 c 1 c 6 6 
    6 6 6 9 9 9 1 9 9 9 6 6 6 6 7 6 
    6 6 6 9 9 1 9 1 9 9 6 6 6 6 7 6 
    6 6 6 9 9 9 9 9 9 9 6 6 6 6 c 6 
    6 6 6 9 9 9 9 9 9 9 6 6 6 6 6 6 
    6 6 6 6 9 9 9 9 9 6 6 6 1 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 1 6 1 6 6 
    6 6 6 6 6 6 6 6 6 6 6 c 1 c 6 6 
    `, SpriteKind.F2)
let HT6 = scene.getTile(13, 11)
HT6.place(H6)
let End2 = sprites.create(img`
    7 6 7 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 1 6 6 
    6 6 6 1 1 6 6 6 6 6 6 6 1 6 1 6 
    6 e e e e e e e e e e e e e 8 6 
    6 e e f f e e e e e e e f e 6 6 
    6 e f e e e e e e e e e f e 6 6 
    6 e e f e e e f e e e f f e 6 6 
    6 e f e e e f e f e f e f e 6 6 
    6 e e f f e f e f e e f f e 6 6 
    6 e e e e e e e e e e e e e 6 6 
    6 6 1 6 6 6 e e e 6 6 3 1 1 3 6 
    6 1 6 1 6 6 e e e 6 1 1 8 8 1 1 
    6 8 1 8 6 6 e e e 6 d 1 6 6 1 d 
    6 6 6 6 6 6 e e e 6 8 3 1 1 3 8 
    6 6 6 6 6 e e e e e 6 8 d d 8 6 
    6 6 7 6 6 6 6 6 6 6 6 6 6 6 6 6 
    `, SpriteKind.End)
let endtile = scene.getTile(14, 15)
endtile.place(End2)
let portal = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 4 4 4 4 . . . . . . 
    . . . . 4 4 4 5 5 4 4 4 . . . . 
    . . . 3 3 3 5 4 4 4 4 4 4 . . . 
    . . 4 3 3 5 3 2 5 5 1 1 4 4 . . 
    . . 3 3 3 5 3 5 5 2 1 1 5 4 . . 
    . 4 3 3 5 3 5 2 2 2 2 5 5 4 4 . 
    . 4 3 3 5 2 5 f f 5 5 4 5 5 4 . 
    . 4 5 3 5 5 5 f f 4 5 5 4 5 4 . 
    . 4 5 3 3 5 5 5 5 4 5 4 4 5 4 . 
    . . 5 5 3 5 5 5 4 5 5 4 5 5 . . 
    . . 4 2 5 5 2 5 5 5 4 2 5 4 . . 
    . . . 4 2 5 5 5 5 5 2 5 4 . . . 
    . . . . 4 4 2 5 5 2 4 5 . . . . 
    . . . . . . 4 4 4 4 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Portal)
let PT = scene.getTile(9, 4)
PT.place(portal)
let Portal22 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . 6 6 6 a a 6 6 6 . . . . 
    . . . 7 7 7 a 6 6 6 6 6 6 . . . 
    . . 6 a 7 7 a a a a 1 1 6 6 . . 
    . . 7 a 7 a a 8 8 8 1 1 a 6 . . 
    . 6 7 a 7 a a 8 a a 8 a a a 6 . 
    . 6 7 a 7 a a f f a a 6 a a 6 . 
    . 6 6 a 7 a a f f a a a 6 a 6 . 
    . 6 8 a 7 a a a a a 6 a a 6 6 . 
    . . 6 a a 7 a a a 6 6 6 a 6 . . 
    . . 6 8 a a a a a 6 6 a a 6 . . 
    . . . 6 8 a a 8 8 8 a a 6 . . . 
    . . . . 6 6 8 8 8 a a 6 . . . . 
    . . . . . . 6 a a a . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Portal2)
let PT2 = scene.getTile(10, 10)
PT2.place(Portal22)
