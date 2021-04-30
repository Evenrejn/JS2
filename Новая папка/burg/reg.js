'use strict';
//1
const str = "Lorem ipsum dolor sit' amet, consectetu'r adipisicing elit. In debitis autem, hic 'itaque quod velit explicabo omni's nulla' totam aliquid repellat ipsam provident fuga, dolorem veritatis. Animi tempora, recusandae, unde quaerat officiis explicabo consectetur possimus corpori's soluta accusantium iste quo, 'quisquam esse 'aperiam harum placeat cum quod debitis totam provident.";
const regexp9 = /'/g;
console.log(str.replace(regexp9, '"'));


//2 
const str6 = "Lorem ipsum dolor sit' amet, consectetu'r adipisicing elit. In debitis autem, hic 'itaque quod velit explicabo omni's nulla' totam aliquid repellat ipsam provident fuga, dolorem veritatis. Animi tempora, recusandae, unde quaerat officiis explicabo consectetur possimus corpori's soluta accusantium iste quo, 'quisquam esse 'aperiam harum placeat cum quod debitis totam provident.";
const regexp6 = /(\B'|'\B)/g;
console.log(str.match(regexp6));
console.log(str.replace(regexp6, '"'));



// 3. *Создать форму обратной связи с полями: Имя, Телефон, E-mail, текст, кнопка Отправить. 
// При нажатии на кнопку Отправить произвести валидацию полей следующим образом:
// a. Имя содержит только буквы.
// b. Телефон имеет вид +7(000)000-0000.
// c. E-mail имеет вид mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru.
// d. Текст произвольный.
// e. Если одно из полей не прошло валидацию, необходимо выделить это поле красной рамкой и сообщить пользователю об ошибке.

const names = document.querySelector(".name"),
      phone = document.querySelector(".phone"),
      email = document.querySelector(".email"),
      sbm = document.querySelector(".submit");

const regexp = /^[a-zA-Z]+$/;
const regexp1 = /\+7\([\d]{3}\)[\d]{3}-[\d]{4}/;
const regexp2 = /[a-zA-Z.-_0-9]+@[a-zA-Z]+\.[a-zA-Z]+/;

sbm.addEventListener("click", function(event) {
    event.preventDefault();
    names.style.borderColor = "black";
    phone.style.borderColor = "black";
    email.style.borderColor = "black";
    if (!regexp.test(names.value)) {
        names.style.borderColor = "red";
        alert("Поле 'Имя' заполнено не корректно");
    } else if (!regexp1.test(phone.value)) {
        phone.style.borderColor = "red";
        alert("Поле 'Телефон' заполнено не корректно");
    } else if (!regexp2.test(email.value)) {
        email.style.borderColor = "red";
        alert("Поле 'E-mail' заполнено не корректно");
    } else {
        alert("Форма отправлена");
    }
});
