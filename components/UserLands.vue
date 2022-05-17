<template>
<section>
    <div class="items">
        <a v-for="land in lands" :key="land.id" :href="'/lands/' + land.id">
            <div class="item">
                <div class="image">
                    <img v-if="land.images.length > 0" :src="'http://127.0.0.1:8000/storage/' + land.images[0].url" alt="">
                    <img v-else src="/images/land.png" alt="">
                </div>
                <div class="content">
                    <h3 class="ellipsis">{{ land.location }}</h3>
                    <p class="price">Owned by You</p>

                    <ul>
                        <li>
                            <i class="fi fi-rr-clock"></i>
                            <p class="single">{{ land.occupied }} plots on lease</p>
                            <div :style="'width: ' + (land.occupied / land.plot) * 100 + '%;'" class="progress"></div>
                        </li>
                    </ul>
                </div>
            </div>
        </a>
    </div>
</section>
</template>

<script>
export default {
    props: ['endpoint'],

    data() {
        return {
            lands: [],
            loading: true
        }
    },

    methods: {
        getLands() {
            this.loading = true

            this.$axios.setToken(this.$auth.token)
            this.$axios.get(this.endpoint).then((response) => {

                this.loading = false
                const data = response.data

                if (data.status) {
                    this.lands = data.data
                } else {
                    alert(data.message)
                }

            }).catch((err) => {
                alert('Cannot connect to our server')
            });
        },
    },

    created() {
        this.getLands()
    }
}
</script>

<style scoped>
section {
    display: flex;
    justify-content: center;
    margin: 0 !important;
}

.items {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    column-gap: 20px;
    row-gap: 20px;
    width: 100%;
    padding: 40px 20px;
}

.item {
    background: #345158;
    border-radius: 20px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
}

.image {
    width: 100%;
    height: 200px;
}

.image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.content {
    padding: 10px;
    text-align: center;
    color: #ffffff;
}

.content h3 {
    font-size: 16px;
    font-weight: 500;
    height: 50px;
}

.content .price {
    font-size: 12px;
    font-weight: 300;
    color: #7be9bb;
}

.content ul {
    margin-top: 10px;
}

.content li {
    display: grid;
    grid-template-columns: 40px auto;
    height: 30px;
    background: #3f5e66;
    margin-bottom: 5px;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
}

.content .progress {
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    width: 88%;
    border-radius: 10px;
}

.content li i {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
}

.content li p {
    z-index: 1;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 15px;
    font-weight: 400;
}

@media screen and (max-width: 700px) {
    .image {
        height: 150px;
    }

    .content li {
        height: 25px;
    }

    .content p {
        font-size: 14px;
    }

    .items {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        column-gap: 10px;
        row-gap: 10px;
        padding: 20px 0;
    }
}
</style>
