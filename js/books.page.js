$(document).ready(function () {

    //Dette er forbindelsen mellem denne side og SDK'en
    SDK.Book.getAll(function(err, data){
        if(err) throw err;

// her spiller den sammen med HTML dokumentet books.html hvor den sammenligner #bookstablebody samt kryptering.
        var decrypted = encryptDecrypt(data);
         decrypted = JSON.parse(decrypted);


        var $booksTableBody = $("#booksTableBody");
        decrypted.forEach(function (book, i) {

            $booksTableBody.append(
                "<tr>" +
                "<td>" + book.title + "</td>" +
                "<td>" + book.author + "</td>" +
                "<td>" + book.publisher + "</td>" +
                "<td>" + book.priceSAXO + ".-</td>" +
                "<td>" + book.priceCDON + ".-</td>" +
                "<td>" + book.priceAB + ".-</td>" +
                "<td>" + book.ISBN + "</td>" +
                "<td>" + book.version + "</td>" +
                "<td>" + book.bookID + "</td>" +
                "</tr>");
        });

    });

});