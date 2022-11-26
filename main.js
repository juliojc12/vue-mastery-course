const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Meias',
            brand: 'Vue Mastery',
            selectVariant: 0,
            details: ['50% algodão', '30% poliéster', '20% nylon'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
            ]
        }

    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        removeToCart() {
            if (this.cart > 0)
                this.cart -= 1
        },
        upadateVariant(index) {
            this.selectVariant = index
        }
    },
    computed: {
        title() {
            return this.product + ' ' + this.brand
        },
        image() {
            return this.variants[this.selectVariant].image
        },
        inStock() {
            return this.variants[this.selectVariant].quantity
        }
    }
})