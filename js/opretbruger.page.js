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

        SDK.User.create(createUser, function (err, data) {
            alert("hej");
            if(err);
        })



    });

})