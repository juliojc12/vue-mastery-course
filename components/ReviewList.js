app.component('review-list', {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },

    template:
        /*html*/
        `
        <div class="review-container">
            <h3>Reviews:</h3>
            <ul>
                <li v-for="(review, index) in reviews" :key="index">
                    {{ review.name }} deu {{ review.rating }} {{ review.rating > 1 ? 'estrelas' : 'estrela' }}.
                    <br/>
                    "{{ review.review }}"
                    <br/>
                </li>
            </ul>
        </div>
    `
})