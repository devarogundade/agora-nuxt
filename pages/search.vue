<template>
<section>
    <div class="app-min-width">
        <div class="search">
            <h3 class="title">Search result</h3>
            <p class="desc" v-if="loading">..finding relevant assets..</p>
            <p class="desc" v-else>{{ assets.length }} results found</p>

            <div class="asset-items">
                <a v-for="asset in assets" :key="asset.id" :href="'/assets/' + asset.id">
                    <Asset :asset="asset" />
                </a>
            </div>
        </div>
    </div>

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
                    this.alertMessage = data.message
                }

            }).catch((err) => {
                this.alertMessage = "Cannot connect to our server"
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
    color: #000;
}

.title {
    font-size: 30px;
    line-height: 35px;
}

.desc {
    font-size: 14px;
}
</style>
