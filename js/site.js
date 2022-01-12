function getString(){
    check = false;
    document.getElementById("alert").classList.add("invisible");
    let iString = document.getElementById("userString").value;
    iString = iString.toLowerCase();
    let regex = /[^a-z0-9]/gi;
    iString = iString.replace(regex,"");
    let pString = checkString(iString);
    if(pString == iString){
        check = true;
    }
    else{
        check = false;
    }
    displayResult(check, pString);
}
function checkString(string){
    pString = [];
    for(index = string.length - 1; index >=0; index--){
        pString += string[index];
    } 
    return pString;
}
function displayResult(check, string){
    if(check == true){
        document.getElementById("check").innerHTML = `Well done! You entered a palindrome!`;
        document.getElementById("msg").innerHTML = `Your string reversed is: ${string}`;
        document.getElementById("alert").classList.remove("invisible");

    }
    else{
        document.getElementById("check").innerHTML = `This is not a palindrome!`;
        document.getElementById("msg").innerHTML = `Your string reversed is: ${string}`;
        document.getElementById("alert").classList.remove("invisible");
    }
}