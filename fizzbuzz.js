var checkString = (num, numCheck) => {
    let stringNum = "" + num;
    let sResult = "";

    if(numCheck == 3) sResult = "fizz";
    else sResult = "buzz";

    if(num % numCheck == 0 || stringNum.search(numCheck) != -1) return sResult;
    else return "";
}

var fizzbuzz = num => {
    let stringResult = "";

    for(let i = 0; i <= num; i++){
        let stringTest = "";
        let strNumin3 = checkString(i, 3);
        let strNumin5 = checkString(i, 5);

        if(strNumin3 == "" && strNumin5 == "")
            stringTest = stringTest + i;
        else 
            stringTest = stringTest + checkString(i, 3) + checkString(i, 5);

        stringResult = stringResult + stringTest + " ";
    }
    return stringResult;
}

var checkResult = (s1, s2) => {
    var check = true;

    if(s1.length != s2.length) check = false;
    else {
        for(var i = 0; i < s1.length; i++){
            if(s1[i] != s2[i]) check = false;
        }
    }

    if(check == true) console.log("yes");
    else console.log("no");
}



/*-------------TEST CASE-----------------*/
/*---------------------------------------*/

var stringResult1 = fizzbuzz(15);
var stringResult2 = fizzbuzz(35);
var stringResult3 = fizzbuzz(50);

var stringTest1 = "fizzbuzz 1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz fizz 14 fizzbuzz ";
var stringTest2 = "fizzbuzz 1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz fizz 14 fizzbuzz 16 17 fizz 19 buzz fizz 22 fizz fizz buzz 26 fizz 28 29 fizzbuzz fizz fizz fizz fizz fizzbuzz ";
var stringTest3 = "fizzbuzz 1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz fizz 14 fizzbuzz 16 17 fizz 19 buzz fizz 22 fizz fizz buzz 26 fizz 28 29 fizzbuzz fizz fizz fizz fizz fizzbuzz fizz fizz fizz fizz buzz 41 fizz fizz 44 buzz fizzbuzz 47 fizz 49 buzz "

checkResult(stringResult1, stringTest1);
checkResult(stringResult2, stringTest2);
checkResult(stringResult3, stringTest3);
