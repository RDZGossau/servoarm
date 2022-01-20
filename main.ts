// "Bedienhilfe", um alle Servos während dem Betrieb in die Mittelposition zu bringen
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 90)
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo2, 90)
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo3, 90)
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo4, 90)
})
// Dieser Startblock positioniert alle Servos in die Mitte.
let Greifer = 0
let VorZurück = 0
let Drehung = 0
let HochRunter = 0
Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 90)
Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo2, 90)
Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo3, 90)
Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo4, 90)
basic.pause(2000)
basic.forever(function () {
    HochRunter = pins.analogReadPin(AnalogPin.P0)
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, pins.map(
    HochRunter,
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
    180,
    0
    ))
})
basic.forever(function () {
    VorZurück = pins.analogReadPin(AnalogPin.P2)
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo5, pins.map(
    VorZurück,
    0,
    990,
    20,
    160
    ))
})
basic.forever(function () {
    Greifer = pins.analogReadPin(AnalogPin.P3)
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo8, pins.map(
    Greifer,
    0,
    990,
    0,
    160
    ))
})
