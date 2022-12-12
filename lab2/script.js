function myFunction() {
  var x = { userName: "", password: "" };
  x.userName = document.getElementById("username").value;
  x.password = document.getElementById("password").value;
  if (x.userName == "ali" && x.password == 12345) {
    document.write("welcome");
  } else {
    document.write("not registered");
  }
}
