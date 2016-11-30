$(document).ready(function () {

    $("#btnCreateUser").on("click", function(e){


        var createUser = {

            firstName: $("#createFirstName").val(),
            lastName: $("#createLastName").val(),
            userName: $("#createUserName").val(),
            email: $("#createEmail").val(),
            password: $("#createPassword").val(),
            userType: true


        };

        if(createUser.firstName ==="" || createUser.lastName ==="" || createUser.userName ==="" || createUser.email ==="" || createUser.password ==="") {
            alert("Du mangler et felt, prøv igen")
            return
        }

        SDK.User.create(createUser, function (err, data) {
            alert("Brugeren er nu oprettet");
            window.location.href = "login.html";

        })



    });

})