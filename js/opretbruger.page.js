$(document).ready(function () {

    $("#btnCreateUser").on("click", function(e){
//Her er siden for opret bruger

        var createUser = {

            firstName: $("#createFirstName").val(),
            lastName: $("#createLastName").val(),
            userName: $("#createUserName").val(),
            email: $("#createEmail").val(),
            password: $("#createPassword").val(),
            userType: true


        };
// Nedenfor er med til at den sikre sig at der ikke er et tomt felt når man opretter en bruger, ellers kommer der en fejl
        // og du får lov at prøve igen.
        if(createUser.firstName ==="" || createUser.lastName ==="" || createUser.userName ==="" || createUser.email ==="" || createUser.password ==="") {
            alert("Du mangler et felt, prøv igen")
            return
        }
//Hvis alle felter er udfyldt får man lov til at oprette brugeren og den bliver tilføjet til databasen. Dette kan ses i SDK.
        SDK.User.create(createUser, function (err, data) {
            alert("Brugeren er nu oprettet");
            window.location.href = "login.html";

        })



    });

})