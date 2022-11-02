let num1 = prompt("Enter some number")
let num2 = prompt("Enter some other number")

for (var i=1; i <= num2; i++) {
    document.write("<b> <center> <br>")
    document.write(`${num1} x ${i} = ${num1*i}`)
}

document.write("<b> <br> <hr> <center> Created by Abdullah")