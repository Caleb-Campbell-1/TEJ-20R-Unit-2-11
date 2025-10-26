/* Copyright (c) 2025 MTHS All rights reserved
 *
 * Created by: Caleb Campbell
 * Created on: Oct 2025
 * This program shows an if...then...else statement
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)
basic.pause(1000)

// variables
let randomNumberTwo = 0
let randomNumber = 0
randomNumber = randint(0, 99)
randomNumberTwo = randint(0, 99)

input.onButtonPressed(Button.A, function () {
    basic.showNumber(randomNumber)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(randomNumberTwo)
})
input.onGesture(Gesture.Shake, function () {
    if (randomNumber < randomNumberTwo) {
        basic.showString("1st < 2nd")
    } else {
        basic.showString("1st > 2nd")
    }
})