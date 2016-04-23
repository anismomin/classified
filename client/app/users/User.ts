export class User {
    constructor(
        public username: string = null,
        public email: string = null,
        public password: string = null,
        public status: boolean = true) {
    }

    static fromJSON(json: any) {
        if (json) {

            var username: string = json.username || null;
            var email: string = json.email || null;
            var password: string = json.password || null;
            var status: boolean = json.city || true

            return new User(username, email, password, status);
        } else {
            return new User(null, null, null, null);
        }
    }

    toJSON() {
        var json = {
            username: this.username,
            email: this.email,
            password: this.password,
            status: this.status
        };

        return json;
    }
}
