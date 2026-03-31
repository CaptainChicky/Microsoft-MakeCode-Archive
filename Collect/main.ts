namespace SpriteKind {
    export const Superfood = SpriteKind.create()
    export const food2 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.food2, function (sprite3, otherSprite3) {
    info.changeScoreBy(25)
    Character2.destroy(effects.halo, 300)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(25)
    Character4.destroy(effects.halo, 300)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Superfood, function (sprite2, otherSprite2) {
    info.changeScoreBy(50)
    Character3.destroy(effects.halo, 300)
})
let Character4: Sprite = null
let Character3: Sprite = null
let Character2: Sprite = null
scene.setBackgroundColor(9)
let Character1 = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ....3333..........3...333.......
    .......3333......3...3f33f......
    .........3333....3...33333......
    ............33aaaaaa33..........
    .............33aaaa33...........
    ..............33aa333...........
    ..............33333..33.........
    ..............33.33.............
    ..............33.33.............
    ..............3...3.............
    ..............3...3.............
    ..............33..33............
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.Player)
controller.moveSprite(Character1, 30, 30)
Character2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . 1 d 1 . . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . 1 1 1 1 d . . . . . . 
    . . . . . d 1 1 1 1 . . . . . . 
    . . . . . 1 1 1 d 1 . . . . . . 
    . . . . . . d 1 1 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.food2)
Character2.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
Character3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . a a a . . . . . . 
    . . . . . . a 8 a a a . . . . . 
    . . . . . a a 8 a 8 8 a . . . . 
    . . . . . a 8 a 8 8 8 8 . . . . 
    . . . . a a 8 a a a a 8 a . . . 
    . . . . a 8 8 a a 8 a 8 a . . . 
    . . . . a a 8 8 8 8 a 8 8 . . . 
    . . . a a a a a 8 8 8 8 8 a . . 
    . . . 8 a 8 8 8 a 8 8 a 8 a . . 
    . . . a a a a a a 8 a a 8 a . . 
    . . . . a a 8 a a 8 8 a a . . . 
    . . . . a a 8 8 a 8 8 a a . . . 
    . . . . . a a 8 a 8 8 a . . . . 
    . . . . . . a 8 8 8 a . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Superfood)
Character3.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
Character4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . d d d . . . . . . . 
    . . . . . . f d d . . . . . . . 
    . . . . . d d d d d . . . . . . 
    . . . . . f d d d f . . . . . . 
    . . . . . d d d d d . . . . . . 
    . . . . . . d d f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
Character4.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
info.startCountdown(10)
game.onUpdateInterval(600, function () {
    Character3.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
})
game.onUpdateInterval(500, function () {
    Character2.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
})
game.onUpdateInterval(500, function () {
    Character4.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
})
