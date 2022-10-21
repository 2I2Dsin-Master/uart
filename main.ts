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
basic.forever(function () {
	
})
