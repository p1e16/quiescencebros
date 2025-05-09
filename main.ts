let junction = 0
function INCIRCLE () {
    if (reromicro.LineSensorDetectsLine(LineSensors.Center) && (reromicro.LineSensorDetectsLine(LineSensors.Left) && reromicro.LineSensorDetectsLine(LineSensors.Right))) {
        reromicro.MoveBackward(50)
        basic.pause(200)
        reromicro.TurnLeft(20)
        basic.pause(200)
    } else if (reromicro.LineSensorDetectsLine(LineSensors.Right)) {
        reromicro.TurnLeft(50)
        basic.pause(100)
    } else if (reromicro.LineSensorDetectsLine(LineSensors.Left)) {
        reromicro.TurnRight(50)
        basic.pause(100)
    } else {
        reromicro.MoveForward(30)
    }
}
input.onButtonPressed(Button.A, function () {
    junction = 0
})
function LINEFOLLOW () {
    if (reromicro.LineSensorDetectsLine(LineSensors.Center)) {
        reromicro.MoveForward(50)
    } else if (reromicro.LineSensorDetectsLine(LineSensors.Left)) {
        reromicro.TurnLeft(50)
    } else if (reromicro.LineSensorDetectsLine(LineSensors.Right)) {
        reromicro.TurnRight(50)
    }
}
basic.forever(function () {
    reromicro.ReadLineSensors()
    if (junction < 1) {
        if (reromicro.LineSensorDetectsLine(LineSensors.Center) && (reromicro.LineSensorDetectsLine(LineSensors.Left) && reromicro.LineSensorDetectsLine(LineSensors.Right))) {
            junction += 1
            reromicro.TurnLeft(50)
            basic.pause(250)
            reromicro.MoveForward(100)
            basic.pause(100)
        } else {
            LINEFOLLOW()
        }
    } else {
        INCIRCLE()
    }
})
