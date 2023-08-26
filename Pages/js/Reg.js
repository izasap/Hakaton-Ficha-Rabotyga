function GetNumber(number)
{
    console.log(number);
}

function CheckPass()
{
    var pass = document.getElementsByName("regpassword")[0].value;
    var passtoo = document.getElementsByName("regpasswordtoo")[0].value;
    if (pass.value == passtoo.value)
        console.log("correct");
    else
        console.log("incorrect");
}