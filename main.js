const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Meias',
            image: './assets/images/socks_green.jpg',
            url: 'https://github.com/juliojc12',
            inStock: true,
            details: ['50% algodão', '30% poliéster', '20% nylon'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' }
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
        updateImage(variantImage) {
            this.image = variantImage
        }
    }
})