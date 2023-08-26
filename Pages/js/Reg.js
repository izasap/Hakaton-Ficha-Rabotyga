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

function check(num, pas){
    let number_1 = 123;
    let number_2 = 321;
    let password_1 = 123
    let password_2 = 321;

    // let num = document.getElementsByName("number")[0].value;
    // let pas = document.getElementsByName("password")[0].value;
    let log = document.getElementsByName("loginlog")[0];

    if((num == number_1 && pas == password_1) || (num == number_2 && pas == password_2)) {
        window.location.href = "../LoginedPages/Wallet.html"
    } else {
        log.innerHTML = "Ошибка! Проверьте логин или пароль";
        console.log("Ошибка! Проверьте логин или пароль");
    }

}