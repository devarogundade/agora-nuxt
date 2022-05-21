<template>
<section>
    <div class="app-min-width" v-if="!loading">
        <h3 class="title">Assets</h3>

        <div class="toolbar">
            <select name="" id="">
                <option value="all">All State</option>
                <option value="lagos">Lagos</option>
                <option value="enugu">Enugu</option>
                <option value="oyo">Oyo</option>
                <option value="sokoto">Sokoto</option>
            </select>
            <select name="" id="" v-on:change="onCategoryChanged($event)">
                <option value="all">All Category</option>
                <option value="land">Land</option>
                <option value="machinery">Machinery</option>
                <option value="iot">IoT</option>
                <option value="truck">Truck</option>
                <option value="others">Others</option>
            </select>
            <select name="" id="">
                <option value="">All</option>
                <option value="">Not Occupied</option>
            </select>
        </div>

        <div class="asset-items" v-if="assets.length > 0">
            <a v-for="asset in assets" :key="asset.id" :href="'/assets/' + asset.id">
                <Asset :asset="asset" />
            </a>
        </div>

        <div class="more">
            <div class="market">
                Load more
            </div>
        </div>
    </div>

    <Loading v-else :message="'Loading assets'" />
    <Alert :message="alertMessage" v-if="alertMessage != ''" v-on:exit="alertMessage = ''" />
</section>
</template>

<script>
export default {
    layout: 'landing',

    data() {
        return {
            assets: [],
            loading: true,

            alertMessage: ''
        }
    },

    methods: {
        getAssets() {
            this.loading = true

            const type = this.$route.query.type ? this.$route.query.type : 'all'
            const url = 'assets?type=' + type

            this.$axios.get(url).then((response) => {

                this.loading = false
                const data = response.data

                if (data.status) {
                    this.assets = data.data
                } else {
                    this.alertMessage = data.message
                }

            }).catch((err) => {
                this.alertMessage = "Cannot connect to our server"
            });
        },

        onCategoryChanged(event) {
            const url = 'assets?type=' + event.target.value
            this.$axios.get(url).then((response) => {
                const data = response.data

                if (data.status) {
                    this.assets = data.data
                } else {
                    this.alertMessage = data.message
                }

            }).catch((err) => {
                this.alertMessage = "Cannot connect to our server"
            });
        }
    },

    created() {
        this.getAssets()
    }
}
</script>

<style scoped>
section {
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
    color: #27272a;
    margin-top: 30px;
}

.toolbar {
    padding: 10px;
    border-radius: 20px;
    margin-bottom: 20px;
    background: rgb(228, 228, 228);
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: 20px;
}

.toolbar select {
    padding: 10px;
    border-radius: 15px;
    font-size: 16px;
    font-weight: 400;
    color: #27272a;
    background: none;
    border: none;
    outline: none;
}

.toolbar option {
    color: #161704;
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

@media screen and (max-width: 700px) {
    .title {
        font-size: 30px;
    }

    .toolbar {
        padding: 5px;
        column-gap: 5px;
    }
}
</style>
