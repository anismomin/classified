export class Post {
    constructor(
        public title: string = null,
        public price: number = null,
        public category: string = null,
        public description: string = null,
        public images: {}[] = null, 
        public name: string = null,
        public phone: string = null,
        public state: string = null,
        public city: string = null,
        public status: boolean = false) {
    }

    static fromJSON(json: any) {
        if (json) {
            var title: string = json.title || null;
            var price: number = json.price || null;
            var category: string = json.category || null;
            var description: string = json.description || null;
            var images: {}[] = json.images || null;
            var name: string = json.name || null;
            var phone: string = json.phone || null;
            var state: string = json.state || null;
            var city: string = json.city || null;
            var status: boolean = json.city || false;

            return new Post(title, price, category, description, images, name, phone, state, city, status);
        } else {
            return new Post(null, null, null, null, null, null, null, null, null, null);
        }
    }

    toJSON() {
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
    }
}
