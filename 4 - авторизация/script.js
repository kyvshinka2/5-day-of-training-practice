function reg() {
    let name = document.getElementsByClassName("name").value;
    let spacename = document.getElementsByClassName("spacename").value;
    let email = document.getElementsByClassName("email").value;
    let login = document.getElementsByClassName("login").value;
    let password = document.getElementsByClassName("password").value;

    if (!name.value || !spacename.value || !email.value || !login.value || !password.value) {
        alert("Ошибка! Не все поля заполнены.");
    } else {
        window.location.href = './page/authorization.html';
    }

}