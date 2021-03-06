$(document).ready(function () {

    SDK.Curriculum.getCurriculum(function (err, data) {
        if (err) {
            return
        }
//Kryptering og sammenspil mellem SDK og HTML side.
        var decrypted = encryptDecrypt(data);
        decrypted = JSON.parse(decrypted);


        var $curriculumTableBody = $("#curriculumTableBody");
        decrypted.forEach(function (curriculum, i) {

            $curriculumTableBody.append(
                "<tr>" +
                "<td>" + curriculum.curriculumID + "</td>" +
                "<td>" + curriculum.school + "</td>" +
                "<td>" + curriculum.education + "</td>" +
                "<td>" + curriculum.semester + "</td>" +
                "<td><button class='visBooksButton' data-curriculumId=" + curriculum.curriculumID + "> Se bøger</button></td>" +
                "</tr>");
        });

        $(".visBooksButton").on("click", function () {
            var $button = $(this);
            var id = $button.data("curriculumid");
            $("#visBooksModal").modal();

            SDK.Curriculum.getCurriculumBook(id, function (err, data) {
                if (err) throw err;

                var decrypted = encryptDecrypt(data);
                decrypted = JSON.parse(decrypted);

                var $CurriculumBookTable = $("#CurriculumBookTable");
                decrypted.forEach(function (book, i) {

                    $CurriculumBookTable.append(
                        "<tr>" +
                        "<td>" + book.title + "</td>" +
                        "<td>" + book.author + "</td>" +
                        "<td>" + book.publisher + "</td>" +
                        "<td>" + book.version + "</td>" +
                        "<td>" + book.priceAB + ".-</td>" +
                        "<td>" + book.priceSAXO + ".-</td>" +
                        "<td>" + book.priceCDON + ".-</td>" +
                        "</tr>");

                });
                $("#closeModal").on("click", function () {
                    $("#CurriculumBookTable").children().remove()
                });
            });

        });

    })
})

