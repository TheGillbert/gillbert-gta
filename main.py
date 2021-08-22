def on_a_pressed():
    pass
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

mySprite: Sprite = None
controller.move_sprite(mySprite, 100, 100)
mySprite = sprites.create(assets.image("""
    myImage
"""), SpriteKind.player)
scene.set_background_color(0)
tiles.set_tilemap(tilemap("""
    level1
"""))
scene.set_background_color(2)
info.set_life(100)
if controller.A.is_pressed() and controller.B.is_pressed():
    game.reset()

def on_update_interval():
    info.change_score_by(1)
game.on_update_interval(5000, on_update_interval)
