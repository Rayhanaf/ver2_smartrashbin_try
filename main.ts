let jarak = 0
basic.forever(function () {
    jarak = sonar.ping(
    DigitalPin.P13,
    DigitalPin.P12,
    PingUnit.Centimeters
    )
    basic.showNumber(jarak)
    if (jarak >= 0 && jarak < 20) {
        pins.servoWritePin(AnalogPin.P1, 90)
        basic.pause(1000)
    } else {
        pins.servoWritePin(AnalogPin.P1, 0)
        basic.pause(500)
    }
    basic.pause(1000)
})
