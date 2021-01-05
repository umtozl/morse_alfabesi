input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.clearScreen()
    sinyal = "."
    item = "" + item + sinyal
})
input.onButtonPressed(Button.AB, function () {
    sira = morseCode.indexOf(item)
    harf = alfabe[sira]
    basic.showString("" + (harf))
    metin = "" + metin + harf
    item = ""
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.clearScreen()
    sinyal = "-"
    item = "" + item + sinyal
})
input.onGesture(Gesture.Shake, function () {
    basic.showString(metin)
    metin = ""
})
let metin = ""
let harf = ""
let sira = 0
let item = ""
let sinyal = ""
let alfabe: string[] = []
let morseCode: string[] = []
morseCode = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", ".----", "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.", "-----"]
alfabe = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
