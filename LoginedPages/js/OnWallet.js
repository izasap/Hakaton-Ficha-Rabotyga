function PayOnWallet()
{
    var userwallet = document.getElementsByName("userwallet")[0];
    var pointwallet = document.getElementsByName("pointwallet")[0];
    var count = document.getElementsByName("count")[0];
    var log = document.getElementsByName("log")[0];

    console.log("Счёт пользователя: " + userwallet.value + "\nСчёт цели: " + pointwallet.value + "\nСумма перевода: " + count.value);
    log.innerHTML = "На счёт '" + pointwallet.value + "' переведно: " + count.value + " С вашего счёта '" + userwallet.value + "'";
}