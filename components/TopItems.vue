<template>
<section>
    <div class="app-min-width">
        <h3 class="title">Marketplace</h3>

        <div class="toolbar">
            <select name="" id="">
                <option disabled>Select a state</option>
                <option selected value="all">All states</option>
                <option value="lagos">Lagos</option>
                <option value="ogun">Ogun</option>
                <option value="oyo">Oyo</option>
                <option value="enugu">Enugu</option>
            </select>
            <select name="" id="">
                <option disabled>Sort by</option>
                <option selected value="all">Recently listed</option>
                <option value="price-low-to-high">Price: Low to High</option>
                <option value="price-high-to-low">Price: High to Low</option>
                <option value="offer-low-to-high">Offer: Low to High</option>
                <option value="offer-high-to-low">Offer: High to Low</option>
            </select>
            <select name="" id="" v-on:change="changeScope($event)">
                <option disabled>Category</option>
                <option selected value="land">Land</option>
                <option value="machinery">Machinery</option>
                <option value="iot">IoTs</option>
            </select>
        </div>

        <div class="items" v-if="topLands.length > 0 && scope == 'land'">
            <a v-for="land in topLands" :key="land.id" :href="'/lands/' + land.id">
                <div class="item">
                    <div class="image">
                        <img v-if="land.images.length > 0" :src="'https://dashboard.heroku.com/images' + land.images[0].url" alt="">
                        <img v-else src="/images/land.png" alt="">
                    </div>
                    <div class="content">
                        <h3>{{ land.location }}</h3>
                        <p class="price">value at $ {{ land.price }} / 24hr</p>

                        <ul>
                            <li>
                                <i class="fi fi-rr-clock"></i>
                                <p>On lease</p>
                                <div class="progress"></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </a>
        </div>

        <div class="items" v-if="topMachineries.length > 0 && scope == 'machinery'">
            <a v-for="machinery in topMachineries" :key="machinery.id" :href="'/machineries/' + machinery.id">
                <div class="item">
                    <div class="image">
                        <img v-if="machinery.images.length > 0" :src="'https://dashboard.heroku.com/images' + machinery.images[0].url" alt="">
                        <img v-else src="/images/tractor.jpg" alt="">
                    </div>
                    <div class="content">
                        <h3>{{ machinery.name }}</h3>
                        <p class="price">value at $ {{ machinery.price }} / 24hr</p>

                        <ul>
                            <li>
                                <i class="fi fi-rr-clock"></i>
                                <p>On lease</p>
                                <div class="progress"></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </a>
        </div>

        <div class="items" v-if="topIots.length > 0 && scope == 'iot'">
            <a v-for="iot in topIots" :key="iot.id" :href="'/iots/' + iot.id">
                <div class="item">
                    <div class="image">
                        <img v-if="iot.images.length > 0" :src="'https://dashboard.heroku.com/images' + iot.images[0].url" alt="">
                        <img v-else src="/images/iot.jpg" alt="">
                    </div>
                    <div class="content">
                        <h3>{{ iot.name }}</h3>
                        <p class="price">value at $ {{ iot.price }} / 24hr</p>

                        <ul>
                            <li>
                                <i class="fi fi-rr-clock"></i>
                                <p>On lease</p>
                                <div class="progress"></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </a>
        </div>

        <div class="more">
            <div class="market">
                Go to Marketplace
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    data() {
        return {
            topLands: [],
            topIots: [],
            topMachineries: [],
            loadingTopLands: true,
            loadingTopIots: true,
            loadingTopMachineries: true,

            scope: 'land'
        }
    },

    methods: {
        changeScope(event) {
            this.scope = event.target.value
        },

        getTopLands() {
            this.loadingTopLands = true
            const url = 'top/land'

            this.$axios.get(url).then((response) => {

                this.loadingTopLands = false
                const data = response.data

                if (data.status) {
                    this.topLands = data.data
                } else {
                    alert(data.message)
                }

            }).catch((err) => {
                alert("Cannot connect to our server")
            });
        },

        getTopMachineries() {
            this.loadingTopMachineries = true
            const url = 'top/machinery'

            this.$axios.get(url).then((response) => {

                this.loadingTopMachineries = false
                const data = response.data

                if (data.status) {
                    this.topMachineries = data.data
                } else {
                    alert(data.message)
                }

            }).catch((err) => {
                alert("Cannot connect to our server")
            });
        },

        getTopIots() {
            this.loadingTopIots = true
            const url = 'top/iot'

            this.$axios.get(url).then((response) => {

                this.loadingTopIots = false
                const data = response.data

                if (data.status) {
                    this.topIots = data.data
                } else {
                    alert(data.message)
                }

            }).catch((err) => {
                alert("Cannot connect to our server")
            });
        }
    },

    created() {
        this.getTopLands()
        this.getTopMachineries()
        this.getTopIots()
    }
}
</script>

<style scoped>
section {
    background: #4d727b;
    display: flex;
    justify-content: center;
    padding-bottom: 50px;
    margin-top: -5px;
}

.title {
    font-size: 45px;
    margin-bottom: 30px;
    font-weight: 500;
    text-align: center;
    color: #ffffff;
    margin-top: 30px;
}

.toolbar {
    padding: 10px;
    border-radius: 20px;
    margin-bottom: 20px;
    border: 1px solid #003543;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: 20px;
}

.toolbar select {
    padding: 10px;
    background: transparent;
    border-radius: 15px;
    font-size: 16px;
    font-weight: 400;
    color: #ffffff;
    border: none;
    outline: none;
}

.toolbar option {
    color: #161704;
}

.items {
    border-radius: 40px;
    column-gap: 20px;
    row-gap: 20px;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
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
    width: 88%;
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

.action {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.action .button {
    padding: 10px 25px;
    border-radius: 10px;
    background: #ffffff;
    margin: 5px 0;
}

.more {
    margin-top: 40px;
    display: flex;
    justify-content: center;
}

.market {
    padding: 10px 25px;
    border-radius: 10px;
    background: #7be9bb;
    font-weight: 600;
    margin: 5px 0;
}

@media screen and (max-width: 1000px) {
    .items {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        column-gap: 15px;
        grid-row-gap: 15px;
    }
}

@media screen and (max-width: 700px) {
    .items {
        column-gap: 10px;
        grid-row-gap: 10px;
    }

    .title {
        margin-top: 0;
        font-size: 30px;
    }

    .image {
        height: 150px;
    }

    .content h3 {
        font-size: 24px;
    }

    .content li {
        height: 25px;
    }

    .content p {
        font-size: 14px;
    }

    .toolbar {
        padding: 5px;
        column-gap: 5px;
    }
}

@media screen and (max-width: 320px) {
    .items {
        grid-template-columns: repeat(1, minmax(0, 1fr));
        grid-row-gap: 15px;
    }
}
</style>
