// switch
/*
let month = "Augusut"
let season

switch (month)
{
    case "January" || "February" ||"November" || "December":
        season = "Winter"
        break
    case "March" || "April" || "May" || "June" || "July":
        season = "Summer"
        break
    case "August"||"September"||"October":
        season = "Monsoon"
        break
    default:
        season = "Wrong input!"
}

console.log(season)
*/
/*
//for loop (entry level)
let i
for (i=0;i<10;i++)
{
    console.log(i);
}

//while loop (entry level)
let count =0
while (count<=10)
{
    console.log(count)
    count++
}

//do-while loop (exit level)
let x=0
do 
{
    console.log(x);
    x++;    
}
while(x<=10)

let num = 1
while (num<=10)
{
    if (num%2==0)
        console.log(num,"is even");
    else
        console.log(num, "is odd");
num++
}
*/
let j
for(j=1;;++j)
{
    if (j%2==0)
    {
        console.log(j,"is even");
        if (j==10)
            break;
    }
    else
        console.log(j, "is odd");
}

//continue

let k
for(k=1;k<=10;k++)
{
    if(k%2==0)
        continue;
    else
        console.log(k);
        
}