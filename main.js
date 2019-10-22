let loginMsg = $("#failed-login-msg");
let loginMsgText = loginMsg.text;
loginMsg.text("");


//$('.login-form button').on('click', function () {
$(".login-form button").on("submit", function(e) {
  // e = event
  e.preventDefault(); //prevents the default behaviour which is RELOAD PAGE

  let username = $("#username").val();
  let password = $("#password").val();

  if (username == "admin" && password == "password123") {
    console.log("Welcome " + username + "!");
    console.log("You just logged in!");
  } else {
    loginMsg.text(loginMsgText);
  }
});
