namespace SpriteKind {
    export const Weapon = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Weapon, SpriteKind.Player, function (sprite, otherSprite) {
    music.baDing.play()
    Knife.destroy()
    game.splash("Achievement Murder Weapon (you pick up a knife)")
})
let Knife: Sprite = null
let mySprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
scene.setBackgroundColor(3)
Knife = sprites.create(assets.image`Knife`, SpriteKind.Weapon)
info.setLife(100)
tiles.setTilemap(tilemap`level1`)
game.onUpdateInterval(5000, function () {
	
})
