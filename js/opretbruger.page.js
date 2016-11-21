$(document).ready(function () {

    $("#btnCreateUser").on("click", function(e){


        var createUser = {

            firstname: $("#createFirstName").val(),
            lastname: $("#createLastName").val(),
            username: $("#createUserName").val(),
            email: $("#createEmail").val(),
            password: $("#createPassword").val(),
            //usertype: $("#createUserype").val(1)


        }

        SDK.User.create(createUser, function (err, data) {
            alert("Rune er en idiot");
            if(err);
        })



    });

})