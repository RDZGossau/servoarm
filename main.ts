input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 90)
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo2, 90)
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo3, 90)
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo4, 90)
})
let HochRunter = 0
let Greifer = 0
let Drehung = 0
let VorZurück = 0
Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 90)
Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo2, 90)
Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo3, 90)
Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo4, 90)
basic.forever(function () {
    VorZurück = pins.analogReadPin(AnalogPin.P0)
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, pins.map(
    VorZurück,
    0,
    990,
    20,
    160
    ))
})
basic.forever(function () {
    Drehung = pins.analogReadPin(AnalogPin.P1)
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo2, pins.map(
    Drehung,
    0,
    990,
    20,
    160
    ))
})
basic.forever(function () {
    Greifer = pins.analogReadPin(AnalogPin.P3)
    led.plotBarGraph(
    Greifer,
    Greifer
    )
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo4, pins.map(
    Greifer,
    25,
    1000,
    0,
    100
    ))
})
basic.forever(function () {
    HochRunter = pins.analogReadPin(AnalogPin.P2)
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo5, pins.map(
    HochRunter,
    0,
    990,
    20,
    160
    ))
})
basic.forever(function () {
    Greifer = pins.analogReadPin(AnalogPin.P2)
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo6, pins.map(
    Greifer,
    0,
    990,
    20,
    160
    ))
})
