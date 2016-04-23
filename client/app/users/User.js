System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var User;
    return {
        setters:[],
        execute: function() {
            User = (function () {
                function User(username, email, password, status) {
                    if (username === void 0) { username = null; }
                    if (email === void 0) { email = null; }
                    if (password === void 0) { password = null; }
                    if (status === void 0) { status = true; }
                    this.username = username;
                    this.email = email;
                    this.password = password;
                    this.status = status;
                }
                User.fromJSON = function (json) {
                    if (json) {
                        var username = json.username || null;
                        var email = json.email || null;
                        var password = json.password || null;
                        var status = json.city || true;
                        return new User(username, email, password, status);
                    }
                    else {
                        return new User(null, null, null, null);
                    }
                };
                User.prototype.toJSON = function () {
                    var json = {
                        username: this.username,
                        email: this.email,
                        password: this.password,
                        status: this.status
                    };
                    return json;
                };
                return User;
            }());
            exports_1("User", User);
        }
    }
});

//# sourceMappingURL=User.js.map
