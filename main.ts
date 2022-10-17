serial.redirect(
SerialPin.P8,
SerialPin.P12,
BaudRate.BaudRate9600
)
basic.forever(function () {
    serial.writeString("HELLO")
    basic.pause(15)
})
