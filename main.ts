input.onButtonPressed(Button.A, function () {
    serial.writeString("- A -")
})
input.onButtonPressed(Button.B, function () {
    serial.writeString("--B--")
})
serial.redirect(
SerialPin.P8,
SerialPin.P12,
BaudRate.BaudRate9600
)
basic.pause(200)
basic.showIcon(IconNames.Sword)
serial.writeString("HELLO")
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
let n = 0
basic.forever(function () {
    serial.writeNumber(n)
    n += 1
    basic.pause(1000)
})
