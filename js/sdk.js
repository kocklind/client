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
                alert("Succes on Ajax!");
            },
            error: function (xhr, status, errorThrown) {
                cb({xhr: xhr, status: status, error: errorThrown});
                alert("failure on Ajax!");
            }
        });
    },



    Book: {
        getAll: function (cb) {
            SDK.request({
                method: "GET",
                url: "/book",
                headers: {filter: {include: ["authors", "publisher"]}}}, cb);
        },

    },

    Curriculum: {
        getCurriculum: function (cb) {
            SDK.request({method: "GET", url: "/curriculum"}, cb)
            
        }
    },

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

    User: {
        create: function (data, cb) {
            SDK.request({method: "POST", url:"/user/", data: data}, cb);
            alert("Når den her?");

        },
        current:function () {
            return localStorage.getItem("user");
        }
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

function encryptDecrypt(input) {
    var key = ['A', 'B', 'C'];
    var out = "";
    for (var i = 0; i < input.length; i++) {
        out += (String.fromCharCode(((input.charAt(i)).charCodeAt(0) ^ (key[i % key.length]).charCodeAt(0))));
    }
    return out;
}