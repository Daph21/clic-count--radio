input.onButtonPressed(Button.A, function () {
    basic.showString("Reset")
    Clic = 0
})
pins.onPulsed(DigitalPin.P0, PulseValue.Low, function () {
    Clic += 1
})
let Temps = 0
let T0 = 0
let Clic = 0
radio.setGroup(5)
pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
Clic = 0
basic.forever(function () {
    if (Clic > 0) {
        T0 = input.runningTime()
        while (Clic > 0) {
            radio.sendValue("Clic", Clic)
            Temps = input.runningTime() - T0
            radio.sendValue("Temps", Temps)
            basic.pause(10)
        }
    }
})
