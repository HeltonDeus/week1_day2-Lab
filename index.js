

let driverName = 'John'; /*1.1*/
console.log(`The driver's name is ${driverName}.`); /*1.2*/

let navigatorName ='Paul'; /*1.3*/
console.log(`The navigator's name is ${navigatorName}.`); /*1.4*/

let driverCharacters = driverName.length();  /*2.1*/
let navigatorCharacters = navigatorName.length();

if (driverCharacters > navigatorCharacters){
  console.log(`The driver has the longest name, it has ${driverName.length()}.`);

}else if (navigatorCharacters > driverCharacters) {
  console.log(`It seems that the navigator has the longest name, it has ${navigatorName.length()}.`);

}else if (navigatorCharacters = driverCharacters){
  console.log(`Wow, you both have equally long names, ${driverName.length()}.`);

} else {
  console.log (`The amount of the characters is unknown.`);
}

driverName.length();
console.log(driverName.toUpperCase());

function wordReverse()
{
    let i = navigatorName.length() - 1;
    let start, end = i + 1;
    let result = "";
     
    while (i >= 0)
    {
        if (navigatorName[i] == ' ')
        {
            start = i + 1;
            while (start != end)
                result += navigatorName[start++];
             
            result += ' ';
            end = i;
        }
        i--;
    }
    start = 0;
     
    while (start != end)
        result += navigatorName[start++];
     
    return result;
}





