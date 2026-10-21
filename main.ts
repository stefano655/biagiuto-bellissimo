input.onGesture(Gesture.Shake, function () {
    basic.showString("Ciao sono stefano")
})
input.onGesture(Gesture.LogoDown, function () {
    music.setVolume(444)
    music.play(music.stringPlayable("D F B E A B G B ", 120), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.ScreenDown, function () {
    music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.pause(1000)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # # # # #
        # # # # #
        `)
})
