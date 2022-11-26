app.component('products-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template:
        /*html*/
        `<div class="product-display">
            <div class="product-container">
                <div class="product-image">
                    <img v-bind:src="image" alt="">
                </div>
                <div class="product-info">
                    <h1>{{ title }}</h1>


                    <p v-if="inStock">Em estoque</p>
                    <p v-else>Sem estoque</p>

                    <p>Shipping: {{ shipping }}</p>

                    <ul>
                        <li v-for="detail in details">{{ detail }}</li>
                    </ul>
                    <div v-for="(variant, index) in variants" :key="variant.id" @mouseover="upadateVariant(index)"
                        class="color-circle" :style="{backgroundColor: variant.color}">

                    </div>
                    <!-- <a :href="url"> Made by Julio Cesar</a> -->
                    <button class="button" :class="{disabledButton: !inStock}" v-on:click="addToCart"
                        :disabled="!inStock">Add </button>
                    <button class="button" :class="{displayNone: !inStock}" v-on:click="removeFromCart">Remove</button>
                </div>
            </div>
        </div>`,
    data() {
        return {
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
            this.$emit('add-to-cart', this.variants[this.selectVariant].id)
        },
        removeFromCart() {
            this.$emit('remove-from-cart', this.variants[this.selectVariant].id)
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
        },
        shipping() {
            if (this.premium) {
                return "Free"
            }
            return 2.99
        }
    }
})  