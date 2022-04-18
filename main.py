@namespace
class SpriteKind:
    Superfood = SpriteKind.create()
    food2 = SpriteKind.create()

def on_on_overlap(sprite, otherSprite):
    info.change_score_by(25)
    Character4.destroy(effects.halo, 300)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)

def on_on_overlap2(sprite2, otherSprite2):
    info.change_score_by(50)
    Character3.destroy(effects.halo, 300)
sprites.on_overlap(SpriteKind.player, SpriteKind.Superfood, on_on_overlap2)

def on_on_overlap3(sprite3, otherSprite3):
    info.change_score_by(25)
    Character2.destroy(effects.halo, 300)
sprites.on_overlap(SpriteKind.player, SpriteKind.food2, on_on_overlap3)

Character4: Sprite = None
Character3: Sprite = None
Character2: Sprite = None
scene.set_background_color(9)
Character1 = sprites.create(img("""
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
           . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
           . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
           . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
           . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
           . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
           . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
           . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
           . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
           . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
           . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
           . . . . 3 3 3 3 . . . . . . . . . . 3 . . . 3 3 3 . . . . . . .
           . . . . . . . 3 3 3 3 . . . . . . 3 . . . 3 f 3 3 f . . . . . .
           . . . . . . . . . 3 3 3 3 . . . . 3 . . . 3 3 3 3 3 . . . . . .
           . . . . . . . . . . . . 3 3 a a a a a a 3 3 . . . . . . . . . .
           . . . . . . . . . . . . . 3 3 a a a a 3 3 . . . . . . . . . . .
           . . . . . . . . . . . . . . 3 3 a a 3 3 3 . . . . . . . . . . .
           . . . . . . . . . . . . . . 3 3 3 3 3 . . 3 3 . . . . . . . . .
           . . . . . . . . . . . . . . 3 3 . 3 3 . . . . . . . . . . . . .
           . . . . . . . . . . . . . . 3 3 . 3 3 . . . . . . . . . . . . .
           . . . . . . . . . . . . . . 3 . . . 3 . . . . . . . . . . . . .
           . . . . . . . . . . . . . . 3 . . . 3 . . . . . . . . . . . . .
           . . . . . . . . . . . . . . 3 3 . . 3 3 . . . . . . . . . . . .
           . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
           . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
           . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
           . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
           . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
           . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
           . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
           . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
           . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    """),
    SpriteKind.player)
controller.move_sprite(Character1, 30, 30)
Character2 = sprites.create(img("""
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
    """),
    SpriteKind.food2)
Character2.set_position(Math.random_range(0, 160), Math.random_range(0, 120))
Character3 = sprites.create(img("""
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
    """),
    SpriteKind.Superfood)
Character3.set_position(Math.random_range(0, 160), Math.random_range(0, 120))
Character4 = sprites.create(img("""
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
    """),
    SpriteKind.food)
Character4.set_position(Math.random_range(0, 160), Math.random_range(0, 120))
info.start_countdown(10)

def on_update_interval():
    Character3.set_position(Math.random_range(0, 160), Math.random_range(0, 120))
game.on_update_interval(600, on_update_interval)

def on_update_interval2():
    Character2.set_position(Math.random_range(0, 160), Math.random_range(0, 120))
game.on_update_interval(500, on_update_interval2)

def on_update_interval3():
    Character4.set_position(Math.random_range(0, 160), Math.random_range(0, 120))
game.on_update_interval(500, on_update_interval3)
