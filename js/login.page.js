$(document).ready(function () {

    $("#loginButton").on("click", function(e){
        e.preventDefault();
//Javascript siden for login.
        var un = $("#inputUsername").val();
        var pw = $("#inputPassword").val();

        var current =  JSON.parse(localStorage.getItem("user"));

        SDK.Login(un, pw, function(err, data){

            //On wrong credentials


            if(err) {
                alert("Forkert brugernavn eller adgangskode");
               return;

            }

            //Login OK!
            alert("succes");
            window.location.href = "curriculum.html";

        });

    });

});