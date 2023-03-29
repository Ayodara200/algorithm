//Question 1
//input a string
//Get the ASCII code for each character
//Sum up the values
//Display the output

function uniTotal (string) {
    let charSum = 0;
    for (let i = 0; i < string.length; i++) {
         let eachCharCode = string.charCodeAt(i);
            charSum = charSum + eachCharCode ;
            console.log(charSum)
    }
   return charSum;
}

console.log(uniTotal('Ayo'));

function uniTotal (string) {
    let charSum = 0;
    for (let i = 0; i < string.length; i++) {
            charSum += string.charCodeAt(i) ;
    }
   return charSum;
}

console.log(uniTotal('Ayo'));

//Question 2
//Input A string
//Input a char
//compare the required char with each char in the given string
//if the input char is same with the string char, count.
//output the total count

function strCount(str, letter){  
        let count = 0;
    for (let i = 0; i < str.length; i++){
       if (letter == str[i]) {
        // count += 1;
        count++;
        console.log(count);
       } 
    }
    return count;
  }

console.log(strCount('The boy is carrying a basket', 'a'));

//Question 3
//input a number
//Get the power of the number
//Canculate the power of the number
//Display the output
function numberToPower(number, power){
    let forPower = 1;
    for (let k = 1; k <= power; k++) {
        forPower *= number; 
    }
    return forPower;

}

console.log(numberToPower(2, 4))


//Question 4
//It's an array

function countSheeps(arrayOfSheep) {
    let count = 0;  
    for (let i = 0; i < arrayOfSheep.length; i++){
    if(true == arrayOfSheep[i]){
        count++;
    }
        }
    return count;
  }

  console.log(countSheeps([true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]));


//Question 5
//input string
//check for space
//remove space
//output the string without space.

function noSpace(x){
    let noSpaceString = []; 
    for (let index = 0; index < x.length; index++) {
       if(x[index] != " "){
        noSpaceString.push(x[index]);
        console.log(noSpaceString)
       }  
    }
    return noSpaceString.join("");
}

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));