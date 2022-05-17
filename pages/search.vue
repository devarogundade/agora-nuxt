<template>
<section>
    <div class="app-min-width">
        <div class="search">
            <h3 class="title">Search result</h3>
            <p class="desc" v-if="loading">..finding relevant assets..</p>
            <p class="desc" v-else>{{ assets.length }} results found</p>

            <div class="items">
               <a v-for="asset in assets" :key="asset.id" :href="'/assets/' + asset.id">
                <div class="item">
                    <div class="image">
                        <img v-if="asset.images.length > 0" :src="'https://agoralease.herokuapp.com/storage/' + asset.images[0].url" alt="">
                        <img v-else src="/images/asset.jpg" alt="">
                    </div>
                    <div class="content">
                        <h3 class="ellipsis">{{ asset.location }}</h3>
                        <p class="price">value at ₦{{ asset.price }} / 24hr</p>

                        <ul>
                            <li>
                                <i class="fi fi-rr-clock"></i>
                                <p class="single" v-if="asset.type == 'land'">{{ asset.occupied }} plot on lease</p>
                                <p class="single" v-else>{{ asset.occupied }} units on lease</p>
                                <div :style="'width: ' + (asset.occupied / asset.quantity) * 100 + '%;'" class="progress"></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </a>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    layout: 'landing',

    data() {
        return {
            assets: [],
            loading: true
        }
    },

    methods: {
        search() {
            if (this.text == '') {
                return
            }

            const url = 'search?text=' + this.text

            this.loading = true
            this.$axios.get(url).then((response) => {

                this.loading = false
                const data = response.data

                if (data.status) {
                    this.assets = data.data
                } else {
                    alert(data.message)
                }

            }).catch((err) => {
                alert("Cannot connect to our server")
            });
        }
    },

    created() {
        this.text = this.$route.query.text
        this.search()
    }
}
</script>

<style scoped>
section {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

.search {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}

.title {
  font-size: 30px;
  line-height: 35px;
}

.desc {
  font-size: 14px;
}


.items {
    border-radius: 40px;
    column-gap: 20px;
    row-gap: 20px;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-top: 40px;
}

.item {
    background: #003543;
    border-radius: 20px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.item a {
    color: #161704;
}

.item .action {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #04323f46;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 2;
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    border-radius: 20px;
}

.item:hover .action {
    opacity: 1;
}

.image {
    width: 100%;
    height: 220px;
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
    height: 50px;
    font-weight: 500;
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
    border-radius: 10px;
    background: #4577ff;
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
</style>
