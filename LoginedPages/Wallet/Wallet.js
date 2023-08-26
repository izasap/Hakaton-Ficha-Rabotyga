// таблица Wallet

let email = "abcd@yandex.ru";
let transaction = 15000.00;


let id = 1;
let idWallet_1 = 1;
let idWallet_2 = 2;

let country_1 = "Russia";
let country_2 = "China";

let bank_1 = "Tinkoff";
let bank_2 = "Hui Sung";

let curency_1 = "RUB";
let curency_2 = "CNY"; //13.03

let value_1 = 50000.99;
let value_2 = 3000.00;

if ( email == "abcd@yandex.ru"){
    value_1 -= transaction;
    value_2 += transaction / 13.03
    value_2 = Math.round(value_2, 5)
    console.log(`Сумма перевода: ` + Math.round(transaction/13.03) + ` Юаней или ` + transaction +  ` Рублей`);
    console.log(value_1)
    console.log(value_2)
}