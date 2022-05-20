<template>
<section >
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
            <select name="" id="">
                <option value="">Price: Low to High</option>
                <option value="">Price: High to Low</option>
            </select>
            <select name="" id="">
                <option value="">All</option>
                <option value="">Not Occupied</option>
            </select>
        </div>

        <div class="items" v-if="assets.length > 0">
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
        getLands() {
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
        }
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
    padding-bottom: 50px;
    margin-top: -5px;
}

.title {
    font-size: 45px;
    margin-bottom: 30px;
    font-weight: 500;
    text-align: center;
    color: #000;
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
    border-radius: 15px;
    font-size: 16px;
    font-weight: 400;
    color: #000;
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
    grid-template-columns: repeat(3, minmax(0, 1fr));
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
        font-size: 30px;
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
