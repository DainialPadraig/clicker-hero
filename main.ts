controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
})
info.setScore(0)
info.startCountdown(10)
scene.setBackgroundColor(8)
game.splash("Click the buttons to score!")
