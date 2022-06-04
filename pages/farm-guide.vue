<template>
<section>
    <div class="app-min2-width">
        <h3 class="title">Farm Guide</h3>
        <p class="desc">Let's help you find the right tools and best locations on our platform to start your farm.</p>

        <div class="farm-guide">
            <div class="what">
                <select name="" id="" v-on:change="onPlantChanged($event)">
                    <option value="none">What do you want to plan?</option>
                    <option value="cassava">Cassava</option>
                    <option value="maize">Maize</option>
                    <option value="yam">Yam</option>
                    <option value="cocoa">Cocoa</option>
                    <option value="cashew">Cashew</option>
                </select>
            </div>

            <div class="result" v-for="state in states" :key="state">
                <div class="location">
                    <h3>{{ Object.keys(state) }}</h3>

                    <div class="assets-items" v-for="asset in state.assets" :key="asset.id">
                        <Asset :asset="asset" />
                    </div>
                </div>
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
            loading: true,
            plant: '',

            states: [],
            alertMessage: ''
        }
    },

    methods: {
        onPlantChanged(event) {
            this.plant = event.target.value
            this.getFarmGuide()
        },

        getFarmGuide() {
            this.loading = true
            const url = 'https://agoralease.herokuapp.com/api/farm-guide?text=' + this.plant

            this.$axios.get(url).then((response) => {

                const data = response.data

                if (data.status) {
                    this.states = data.data
                } else {
                    this.alertMessage = data.message
                }

            }).catch(() => {
                this.alertMessage = 'Can not connect to our server'
            });

        }
    }
}
</script>

<style scoped>
section {
    display: flex;
    justify-content: center;
}

.title {
    font-size: 45px;
    font-weight: 500;
    text-align: center;
    color: #27272a;
    margin-top: 30px;
}

.desc {
    font-size: 18px;
    text-align: center;
    margin-bottom: 30px;
    max-width: 100%;
}

.what {
    margin-bottom: 40px;
    width: 100%;
}

.what select {
    width: 100%;
    padding: 5px 10px;
}

@media screen and (max-width: 700px) {
    .title {
        font-size: 30px;
    }

    .desc {
        font-size: 15px;
    }
}
</style>
