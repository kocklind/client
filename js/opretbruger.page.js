$(document).ready(function () {

    $("#btnCreateUser").on("click", function(e){


        var createUser = {

            firstName: $("#createFirstName").val(),
            lastName: $("#createLastName").val(),
            userName: $("#createUserName").val(),
            email: $("#createEmail").val(),
            password: $("#createPassword").val(),
            userType: true


        }

        if (user.firstName === "" || user.lastName === "" || user.userName === "" || user.email === "" || user.password === "") {

            alert("Du mangler et felt, prøv igen")
        }

        SDK.User.create(createUser, function (err, data) {
            alert(hej);
            if(err);
        })



    });

})