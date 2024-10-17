// functions
/*
function myFirstfn()
{
    console.log("hello world");
}

function line()
{
    console.log("---------------------")
}

function addSum()
{
    return 6
}

function addSum2()
{
    var a = addSum
    return a+9
}

function finalValue()
{
    var b=addSum2
    console.log("sum is:",b)
}
*/
//lab

function studetails()
{
    var studid = 7896
    let stuname = "Hermione"
    let stucourse = "Witchcraft & Wizadry"
    let sem = "Sem VI"
    console.log("Student ID:",studid,"Student Name:",stuname,"Student Course:",stucourse,"Student Semester:",sem)
}

function marks()
{
    var potions = 99
    var dark_arts = 98
    var charms = 99 
    var total = potions+dark_arts+charms
    console.log("Total marks from 300:",total);    
    return total
}

function percent()
{
    var percentage = (marks()/300)*100
    console.log("Percentage is :",percentage)
}
studetails()
marks()
percent()