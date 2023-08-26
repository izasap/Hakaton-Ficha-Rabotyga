// function PayOnWallet()
// {
//     var userwallet = document.getElementsByName("userwallet")[0];
//     var pointwallet = document.getElementsByName("pointwallet")[0];
//     var count = document.getElementsByName("count")[0];
//     var log = document.getElementsByName("log")[0];

//     console.log("Счёт пользователя: " + userwallet.value + "\nСчёт цели: " + pointwallet.value + "\nСумма перевода: " + count.value);
//     log.innerHTML = "На счёт '" + pointwallet.value + "' переведно: " + count.value + " С вашего счёта '" + userwallet.value + "'";
// }

let value_1 = 50000.99;
let value_2 = 3000.00;

function transact(value_1, value_2) {
    let transaction = document.getElementsByName("count")[0].value;
    var log = document.getElementsByName("log")[0];
    
    

    let email = "abcd@yandex.ru";
    if ( email == "abcd@yandex.ru"){
        value_1 -= transaction;
        value_2 += transaction / 13.03;
        value_2 = Math.round(value_2, 5);
        let log_1 = `С вашего счета списано ` + transaction + `RUB`; 
        log.innerHTML = `Сумма перевода: ` + Math.round(transaction/13.03) + ` CNY (` + transaction +  ` RUB)`;
        console.log("Счет в RUB: " + value_1);
        console.log("Счет в CNY: " + value_2);
    }
}
