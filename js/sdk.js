var SDK = {
    serverURL: "http://localhost:8080/server2_0_war_exploded",
    request: function (options, cb) {
        //Perform XHR
        $.ajax({
            url: SDK.serverURL + options.url,
            method: options.method,
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(options.data),
            success: function (data, status, xhr) {
                cb(null, data, status, xhr);
                //alert("Succes on Ajax!");
            },
            error: function (xhr, status, errorThrown) {
                cb({xhr: xhr, status: status, error: errorThrown});
                //alert("failure on Ajax!");
            }
        });
    },


// SDK er den overordnede forbindelse mellem server og klient. Nedenfor kan du se alle de requests der sendes til serveren.
    // Disse request er de funktioner som vi skal have hjælp fra serveren til at udføre.

    //Lige under her, sender den et GET request for at få alle bøger frem. Det kan ses i url (/books)
    Book: {
        getAll: function (cb) {
            SDK.request({
                method: "GET",
                url: "/book",
                headers: {filter: {include: ["authors", "publisher"]}}}, cb);
        },

    },
// Her sendes der GET requests for at få pensum og pensumID. Dette bruges fordi den søger på et bestemt id på siden
    // for at den kan ramme den rigtige sti på databsen og får vist den rigtige pensumliste
    Curriculum: {
        getCurriculum: function (cb) {
            SDK.request({method: "GET", url: "/curriculum"}, cb)
            
        },
        getCurriculumBook: function (id, cb) {
            SDK.request({method: "GET", url: "/curriculum/" + id+"/books"}, cb)

        }
    },
//Her er det et post request fordi den skal tilføje til databasen. Her er det opret bruger.
    User: {
        create: function (data, cb) {
            SDK.request({method: "POST", url:"/user/", data: data}, cb);
            alert("Når den her?");

        },
        current: function (user) {
            return localStorage.getItem("user");
        }
    },

    Logout: function () {
      SDK.Storage.remove("token");
        SDK.Storage.remove("user");
    },
//Her er funktionen til login
    Login: function (username, password, cb) {
        this.request({
            data: {
                username: username,
                password: password
            },
            url: "/user/login",
            method: "POST"
        }, function (err, data) {

            //On login-error
            if (err) return cb(err);

            SDK.Storage.persist("token", data);
            SDK.Storage.persist("user", data.user);


            cb(null, data);

        });
    },





    Storage: {
        prefix: "BookitSDK",
        persist: function (key, value) {
            window.localStorage.setItem(this.prefix + key, (typeof value === 'object') ? JSON.stringify(value) : value)
        },
        load: function (key) {
            var val = window.localStorage.getItem(this.prefix + key);
            try {
                return JSON.parse(val);
            }
            catch (e){
                return val;
            }
        },
        remove:function (key) {
            window.localStorage.removeItem(this.prefix + key);
        }



}




}
//Dette er med til krypteringen fungerer
function encryptDecrypt(input) {
    var key = ['A', 'B', 'C'];
    var out = "";
    for (var i = 0; i < input.length; i++) {
        out += (String.fromCharCode(((input.charAt(i)).charCodeAt(0) ^ (key[i % key.length]).charCodeAt(0))));
    }
    return out;
}