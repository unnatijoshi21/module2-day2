// if & else
// '/' for quotient
// '%' for remainder
var a=10
var b=2
if (a%b==0)
    console.log("even")
else
    console.log("odd")

var age=20

if (age>=16)
    console.log("eligible for gearless license")
    if (age>=18)
        console.log("eligible for gear license")
else
    console.log("not eligible")

var weight1=68
var weight2="68"

if (weight1==weight2)
    console.log("weight is same")
else
    console.log("weight not same")

var weight3=78

if (weight1 != weight3)
    console.log("weights are different")


var age=28

if (age <18 || age >=65)
    console.log("not eligible")
else
    console.log("eligible")