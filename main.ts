let start = 0
let waarde = 0
input.onButtonPressed(Button.A, function () {
    start = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    waarde = input.runningTime() - start
    basic.showNumber(waarde / 1000)
})
