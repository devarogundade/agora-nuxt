<template>
<section>
    <div class="app-min-width">
        <h3 class="title">Farm Guide</h3>
        <p class="desc">
            Let's help you find the right tools and best locations from our platform
            to start your farm.
        </p>

        <div class="farm-guide">
            <div class="what">
                <select v-on:change="onPlantChanged($event)">
                    <option value="none">What do you want to plan?</option>
                    <option value="cassava">Cassava</option>
                    <option value="maize">Maize</option>
                    <option value="yam">Yam</option>
                    <option value="cocoa">Cocoa</option>
                    <option value="cashew">Cashew</option>
                </select>
            </div>

            <div class="result">
                <div class="location">
                    <div v-if="result.Lagos">
                        <h3>Lagos</h3>

                        <div class="asset-items">
                            <a v-for="asset in result.Lagos" :key="asset.id" :href="'/assets/' + asset.id">
                                <Asset :asset="asset" />
                            </a>
                        </div>
                    </div>
                </div>

                <div class="location">
                    <div v-if="result.Enugu">
                        <h3>Enugu</h3>

                        <div class="asset-items">
                            <a v-for="asset in result.Enugu" :key="asset.id" :href="'/assets/' + asset.id">
                                <Asset :asset="asset" />
                            </a>
                        </div>
                    </div>
                </div>

                <div class="location">
                    <div v-if="result.Sokoto">
                        <h3>Sokoto</h3>

                        <div class="asset-items">
                            <a v-for="asset in result.Sokoto" :key="asset.id" :href="'/assets/' + asset.id">
                                <Asset :asset="asset" />
                            </a>
                        </div>
                    </div>
                </div>

                <div class="location">
                    <div v-if="result.Oyo">
                        <h3>Oyo</h3>

                        <div class="asset-items">
                            <a v-for="asset in result.Oyo" :key="asset.id" :href="'/assets/' + asset.id">
                                <Asset :asset="asset" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Alert v-if="alertMessage != ''" :message="alertMessage" />
        <Loading v-if="loading" :message="'Fetching'" />
    </div>
</section>
</template>

<script>
export default {
    layout: "landing",

    data() {
        return {
            loading: false,
            plant: "",

            result: [],
            alertMessage: "",
        };
    },

    methods: {
        onPlantChanged(event) {
            this.plant = event.target.value;
            this.getFarmGuide();
        },

        getFarmGuide() {
            if (this.plant == "none") {
                this.result = [];
                return;
            }

            this.loading = true;

            const url =
                "https://agoralease.herokuapp.com/api/farm-guide?text=" + this.plant;

            this.$axios
                .get(url)
                .then((response) => {
                    this.loading = false;
                    const data = response.data;

                    if (data.status) {
                        this.result = data.data;
                    } else {
                        this.alertMessage = data.message;
                    }
                })
                .catch(() => {
                    this.alertMessage = "Can not connect to our server";
                });
        },
    },
};
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
