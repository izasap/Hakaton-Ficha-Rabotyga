import mysql from "../";

var connection = mysql.createConnection({
    host: "bxdtspbcqrbpjzcmuagk-mysql.services.clever-cloud.com",
    user: "uahwbqzwggc0ug9y",
    password: "yoJKLMw308q12jGIKrSK"
})

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