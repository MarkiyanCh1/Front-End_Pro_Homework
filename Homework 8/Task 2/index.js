// 2.  На странице есть две кнопки. При нажатии на первую кнопку пользователь должен ввести в prompt ссылку,
// при нажатии на вторую – переадресовывается на другой сайт (по ранее введенной ссылке).
// document.location.href = “url_to_go”;

"use strict";

let userLink;
const buttonOne = document.querySelector(".enter-link");
const buttonTwo = document.querySelector(".sent-link");

buttonOne.addEventListener("click", function () {
    userLink = prompt("Please enter your Link:");
    if (!validURL(userLink)) {
        alert("Link is Invalid!");
        userLink = "";
    }
});

buttonTwo.addEventListener("click", function () {
    document.location.href = userLink;
});


function validURL(url) {
    let pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(url);
}