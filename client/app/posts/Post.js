System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Post;
    return {
        setters:[],
        execute: function() {
            Post = (function () {
                function Post(title, price, category, description, images, name, phone, state, city, status) {
                    if (title === void 0) { title = null; }
                    if (price === void 0) { price = null; }
                    if (category === void 0) { category = null; }
                    if (description === void 0) { description = null; }
                    if (images === void 0) { images = null; }
                    if (name === void 0) { name = null; }
                    if (phone === void 0) { phone = null; }
                    if (state === void 0) { state = null; }
                    if (city === void 0) { city = null; }
                    if (status === void 0) { status = false; }
                    this.title = title;
                    this.price = price;
                    this.category = category;
                    this.description = description;
                    this.images = images;
                    this.name = name;
                    this.phone = phone;
                    this.state = state;
                    this.city = city;
                    this.status = status;
                }
                Post.fromJSON = function (json) {
                    if (json) {
                        var title = json.title || null;
                        var price = json.price || null;
                        var category = json.category || null;
                        var description = json.description || null;
                        var images = json.images || null;
                        var name = json.name || null;
                        var phone = json.phone || null;
                        var state = json.state || null;
                        var city = json.city || null;
                        var status = json.city || false;
                        return new Post(title, price, category, description, images, name, phone, state, city, status);
                    }
                    else {
                        return new Post(null, null, null, null, null, null, null, null, null, null);
                    }
                };
                Post.prototype.toJSON = function () {
                    var json = {
                        title: this.title,
                        price: this.price,
                        category: this.category,
                        description: this.description,
                        images: this.images,
                        name: this.name,
                        phone: this.phone,
                        state: this.state,
                        city: this.city,
                        status: this.status
                    };
                    return json;
                };
                return Post;
            }());
            exports_1("Post", Post);
        }
    }
});

//# sourceMappingURL=Post.js.map
