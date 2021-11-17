input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 90)
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo2, 90)
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo3, 90)
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo4, 90)
})
let Drehung = 0
let Greifer = 0
Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 90)
Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo2, 90)
Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo3, 90)
Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo4, 90)
basic.forever(function () {
    while (input.buttonIsPressed(Button.A) && Greifer <= 180) {
        Greifer += 2
        Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo4, Greifer)
        if (Greifer >= 180) {
            Greifer = 180
        }
        basic.pause(100)
    }
    while (input.buttonIsPressed(Button.B) && Greifer >= 0) {
        Greifer += -2
        Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo4, Greifer)
        if (Greifer <= 0) {
            Greifer = 0
        }
        basic.pause(100)
    }
})
basic.forever(function () {
    Drehung = pins.analogReadPin(AnalogPin.P1)
    led.plotBarGraph(
    Greifer,
    1024
    )
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo3, pins.map(
    Drehung,
    0,
    990,
    20,
    160
    ))
})
