let loginMsg = $('#failed-login-msg')
let loginMsgText = loginMsg.text()
loginMsg.text("")

$('.login-form button').on('click', function(){

    let name = $('#username').val();
    let password = $('#password').val();

    if (name == "admin" && password == "password123") {
        console.log("Welcome " + name + "!")
        console.log("You just logged in!")
    } else {
        loginMsg.text(loginMsgText)
    }
})