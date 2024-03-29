<template>
<section>
    <div v-if="asset" class="asset">
        <section>
            <div class="app-min-width">
                <a href="/assets">
                    <div class="back">
                        <i class="fi fi-rr-arrow-small-left"></i>
                        <p>Back to assets</p>
                    </div>
                </a>
            </div>
        </section>

        <section>
            <div class="app-min-width grid">
                <div class="image">
                    <img v-if="asset.images.length > 0" :src="asset.images[0].url" alt="">
                    <img v-else src="/images/land.png" alt="">
                </div>
                <div class="text">
                    <div class="name">
                        <h3 v-if="asset.type.toLowerCase() == 'land'">Land</h3>
                        <h3 v-else>{{ asset.name }}</h3>

                        <p><b>State :</b> {{ asset.state }}</p>
                        <p><b>Location :</b> {{ JSON.parse(asset.location).address }}</p>
                        <p><b>Category :</b> {{ asset.type }}</p>
                        <p class="contact">
                            <a :href="'tel: ' + asset.user.phone"><i class="fi fi-rr-phone-call"></i> Contact Owner</a>
                            &nbsp;
                            <a :href="'mailto: ' + asset.user.email"><i class="fi fi-rr-envelope"></i> Mail Owner</a>
                        </p>
                    </div>

                    <div class="price">
                        <div class="stock" v-if="asset.type.toLowerCase() == 'land'">
                            Available <span>{{ asset.unit - asset.occupied }} plots</span>
                        </div>
                        <div class="stock" v-else>
                            Available <span>{{ asset.unit - asset.occupied }} units</span>
                        </div>
                        <div class="amount">
                            <p class="fixed">Rate per day</p>
                            <h3>₦{{ asset.price.toFixed(2) }}</h3>
                            <div class="btn" v-if="creatingOffer">
                                Creating
                                <Loading :message="'Creating offer'" />
                            </div>
                            <div v-else>
                                <div class="btn delete" v-if="$auth.loggedIn && $auth.user.id == asset.user_id" v-on:click="deleteAsset()">
                                    Delete Asset
                                </div>

                                <div class="btn" v-if="$auth.loggedIn && $auth.user.id != asset.user_id" v-on:click="promptCreateOffer()">
                                    Make Offer
                                </div>

                                <a href="/login" v-if="!$auth.loggedIn">
                                    <div class="btn">
                                        Login to Make Offer
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <ul>
                        <li>
                            <i class="fi fi-rr-time-past"></i>
                            <p v-if="asset.type.toLowerCase() == 'land'">{{ asset.occupied }} plots on lease</p>
                            <p v-else>{{ asset.occupied }} units on lease</p>
                            <div class="progress"></div>
                        </li>

                        <li>
                            <i class="fi fi-rr-star"></i>
                            <p>4 of 5 star</p>
                            <div class="progress"></div>
                        </li>

                        <li>
                            <i class="fi fi-rr-shield-check"></i>
                            <p v-if="asset.verified_at">Verified asset</p>
                            <p v-else>Verified asset</p>
                            <div class="progress"></div>
                        </li>
                    </ul>
                </div>

                <div class="accordion">
                    <div class="head">
                        <p class="title">Attributes</p>
                    </div>
                    <div class="body">
                        <ul>
                            <li v-for="(meta, index) in JSON.parse(asset.metadata)" :key="index">
                                {{ meta.name + ' : ' + meta.value }}
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="accordion">
                    <div class="head">
                        <p class="title">Description</p>
                        <i class="fi fi-rr-duplicate"></i>
                    </div>
                    <div class="body">
                        <p>{{ asset.about }}</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="drone" v-if="asset.images.length > 0">
            <div class="app-min-width">
                <div class="accordion">
                    <div class="head">
                        <p class="title">Images</p>
                    </div>
                    <div class="body">
                        <div class="images">
                            <img v-for="image in asset.images" :key="image.id" :src="image.url" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="video" v-if="asset.video && asset.video != ''">
            <div class="app-min-width">
                <div class="accordion">
                    <div class="head">
                        <p class="title">Video</p>
                    </div>
                    <div class="body">
                        <iframe width="100%" height="400" :src="'https://www.youtube.com/embed/' + asset.video.replace('https://www.youtube.com/watch?v=', '')" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </section>

        <section class="map">
            <div class="app-min-width">
                <div class="accordion">
                    <div class="head">
                        <p class="title">Map</p>
                    </div>
                    <div class="body">
                        <div class="mapouter">
                            <div class="gmap_canvas"><iframe width="100%" height="300" id="gmap_canvas" :src="'https://maps.google.com/maps?q=' + JSON.parse(asset.location).address + '&t=&z=17&ie=UTF8&iwloc=&output=embed'" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>

                                <style>
                                    .mapouter {
                                        position: relative;
                                        text-align: right;
                                        height: 300px;
                                        width: 100%;
                                    }
                                </style>
                                <style>
                                    .gmap_canvas {
                                        overflow: hidden;
                                        background: none !important;
                                        height: 300px;
                                        width: 100%;
                                    }
                                </style>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="app-min-width">
                <h3 class="activity-text">Offers</h3>

                <div class="activities" v-if="asset.offers.length > 0">
                    <div class="activity" v-for="offer in asset.offers" :key="offer.id">
                        <i class="fi fi-rr-time-quarter-to pending" v-if="offer.status == 'pending'">
                            <span>Pending</span>
                        </i>
                        <i class="fi fi-rr-check accepted" v-if="offer.status == 'accepted'">
                            <span>Accepted</span>
                        </i>
                        <i class="fi fi-rr-ban rejected" v-if="offer.status == 'cancelled'">
                            <span>Cancelled</span>
                        </i>
                         <i class="fi fi-rr-ban rejected" v-if="offer.status == 'rejected'">
                            <span>Rejected</span>
                        </i>

                        <p class="message">{{ offer.user.name }} </p>
                        <p class="quantity" v-if="asset.type.toLowerCase() == 'land'">{{ offer.unit }} plots</p>
                        <p class="quantity" v-else>{{ offer.unit }} units</p>
                        <p class="rate">₦{{ offer.price.toFixed(2) }} per day</p>
                        <p class="duration">{{ offer.duration }} days</p>

                        <p class="date" v-if="author && offer.status == 'pending'" v-on:click="accept(offer)">Accept</p>
                        <p class="date" v-if="author && offer.status == 'accepted'">Ends at {{ offer.expires_at }}</p>

                        <p class="date" v-if="!author && $auth.loggedIn && $auth.user.id == offer.user_id && offer.status == 'pending'" v-on:click="cancel(offer)">Cancel</p>
                        <p class="date" v-if="author && $auth.loggedIn && offer.status == 'pending'" v-on:click="reject(offer)">Cancel</p>
                    </div>
                </div>
                <div class="empty" v-else>No offers</div>
            </div>
        </section>
    </div>

    <Loading v-else :message="'Fetching asset'" />

    <Loading v-if="acceptingOffer" :message="'Accepting offer'" />
    <NewOffer v-on:cancel="newOffer = null" v-on:create="createOffer($event)" v-if="newOffer" :data="newOffer" />
    <Alert :message="alertMessage" v-if="alertMessage != ''" v-on:exit="alertMessage = ''" />
</section>
</template>

<script>
export default {
    layout: "landing",

    data() {
        return {
            loading: true,
            asset: null,
            author: false,

            newOffer: null,
            creatingOffer: false,
            acceptingOffer: false,
            cancellingOffer: false,

            alertMessage: ''
        }
    },

    methods: {
        getAsset() {
            const url = 'asset?id=' + this.$route.params.detail

            this.$axios.get(url).then((response) => {
                this.loading = false
                const data = response.data

                if (data.status) {
                    this.asset = data.data

                    if (this.$auth.loggedIn && this.asset.user_id == this.$auth.user.id) {
                        this.author = true
                    }

                } else {
                    this.alertMessage = data.message
                }

            }).catch((err) => {
                this.alertMessage = 'Cannot connect to our server'
            });
        },

        getWeather() {
            // const url = 'https://gate.eos.com/api/forecast/weather/forecast/?api_key=apk.672ed6b9ec961a3e136446209fed249074982f57719ad8cfa4e09e6a4fedc739&geometry=' + this.geo

            // this.$axios.post(url).then((response) => {
            //     console.log(response);
            // }).catch((err) => {

            // });
        },

        deleteAsset() {
            const url = '/delete/asset?id=' + this.asset.id

            this.$axios.get(url).then((response) => {
                const data = response.data

                if (data.status) {
                    this.$router.push('/profile')
                } else {
                    this.alertMessage = data.message
                }

            }).catch((err) => {
                this.alertMessage = "Cannot connect to our server"
            });
        },

        promptCreateOffer() {
            if (this.author) {
                this.alertMessage = 'You cannot make offer to your assets'
                return
            }

            this.newOffer = {
                name: this.asset.type.toLowerCase() == 'land' ? JSON.parse(this.asset.location).address : this.asset.name,
                image: this.asset.images.length > 0 ? this.asset.images[0].url : '/land.png',
                price: this.asset.price,
                duration: '365',
                unit: this.asset.unit - this.asset.occupied
            }
        },

        createOffer(offer) {
            this.creatingOffer = true
            const url = '/create/offer?id=' + this.asset.id +
                '&duration=' + offer.duration +
                '&price=' + offer.price +
                '&unit=' + offer.unit

            this.$axios.setToken(this.$auth.token)
            this.$axios.get(url).then((response) => {

                this.creatingOffer = false
                const data = response.data

                if (data.status) {
                    this.alertMessage = 'Offer created'
                    this.getAsset()
                } else {
                    this.alertMessage = data.message
                }

            }).catch((err) => {
                this.alertMessage = "Cannot connect to our server"
            });

        },

        accept(offer) {
            if (prompt("Type ACCEPT to confirm") != "ACCEPT") {
                this.alertMessage = "Wrong confirmation"
                return
            }

            this.acceptingOffer = true

            const url = 'accept/offer?id=' + this.asset.id +
                '&offer_id=' + offer.id;

            this.$axios.setToken(this.$auth.token)
            this.$axios.get(url).then((response) => {

                this.acceptingOffer = false
                const data = response.data

                if (data.status) {
                    this.alertMessage = 'offer accepted'
                    this.getAsset()
                } else {
                    this.alertMessage = data.message
                }

            }).catch((err) => {
                this.alertMessage = 'Cannot connect to our server'
            });
        },

        cancel(offer) {
            if (prompt("Type CANCEL to confirm") != "CANCEL") {
                this.alertMessage = "Wrong confirmation"
                return
            }

            this.cancellingOffer = true

            const url = 'cancel/offer?offer_id=' + offer.id;

            this.$axios.setToken(this.$auth.token)
            this.$axios.get(url).then((response) => {

                this.cancellingOffer = false
                const data = response.data

                if (data.status) {
                    this.alertMessage = 'offer cancelled'
                    this.getAsset()
                } else {
                    this.alertMessage = data.message
                }

            }).catch((err) => {
                this.alertMessage = 'Cannot connect to our server'
            })
        },

        reject(offer) {
            if (prompt("Type REJECT to confirm") != "REJECT") {
                this.alertMessage = "Wrong confirmation"
                return
            }

            this.cancellingOffer = true

            const url = 'reject/offer?offer_id=' + offer.id;

            this.$axios.setToken(this.$auth.token)
            this.$axios.get(url).then((response) => {

                this.cancellingOffer = false
                const data = response.data

                if (data.status) {
                    this.alertMessage = 'offer rejected'
                    this.getAsset()
                } else {
                    this.alertMessage = data.message
                }

            }).catch((err) => {
                this.alertMessage = 'Cannot connect to our server'
            })
        }
    },

    created() {
        this.getAsset()
        // this.getWeather()
    }
};
</script>

<style scoped>
.asset {
    max-width: 100%;
    margin-bottom: 50px;
}

section section {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    color: #27272a;
}

.back {
    display: grid;
    grid-template-columns: 35px auto;
    height: 35px;
    border-radius: 10px;
    background: #003543;
    overflow: hidden;
    width: fit-content;
}

.back i {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #00c675;
}

.back p {
    height: 100%;
    display: flex;
    align-items: center;
    padding-right: 10px;
    font-size: 14px;
    color: #ffffff;
    font-weight: 400;
}

.grid {
    display: grid;
    grid-template-columns: 400px auto;
    column-gap: 40px;
    row-gap: 40px;
}

.name h3 {
    font-size: 36px;
    line-height: 46px;
    font-weight: 500;
}

.name p {
    font-size: 14px;
    font-weight: 400;
    opacity: 0.6;
}

.contact {
  margin-top: 10px;
}

.contact a {
  font-weight: 500;
  color: blue;
}

.image {
    background: #003543;
    border-radius: 10px;
    overflow: hidden;
    height: 450px;
}

.image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.price {
    margin-top: 20px;
    border: 1px #ccc solid;
    border-radius: 10px;
    overflow: hidden;
}

.stock {
    height: 50px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    border-bottom: 1px #ccc solid;
    font-size: 14px;
}

.stock span {
    padding: 2px 8px;
    border-radius: 10px;
    background: #99f1cd;
    margin-left: 10px;
    color: #00181e;
}

.amount {
    padding: 20px;
}

.btn {
    height: 50px;
    background: #00dc82;
    border-radius: 12px;
    width: 200px;
    color: white;
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    font-size: 17px;
    font-weight: 500;
    margin-top: 20px;
    justify-content: center;
}

.delete {
  background: rgb(163, 10, 10);
}

.text ul {
    margin-top: 30px;
}

.text li {
    display: grid;
    grid-template-columns: 40px auto;
    height: 30px;
    background: #3f5e66;
    margin-bottom: 5px;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    width: 250px;
    max-width: 100%;
}

.text .progress {
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 10px;
}

.text li:first-child .progress {
    width: 100%;
    background: #4577ff;
}

.text li:nth-child(2) .progress {
    width: 80%;
    background: #fac20a;
}

.text li:last-child .progress {
    width: 100%;
    background: #99b4ff;
}

.text li i {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
}

.text li p {
    z-index: 1;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 15px;
    font-weight: 400;
}

.drone {
    width: 100%;
}

.drone .accordion {
    width: 100%;
}

.accordion .body .images {
    display: flex;
    overflow: auto;
}

.accordion img {
    height: 350px;
    margin-right: 20px;
    border-radius: 20px;
}

.accordion img:last-child {
    margin: 0;
}

/* .activities {
    border-radius: 10px;
    overflow: hidden;
} */

.activity {
    background: #FAFAFA;
    border: 1px solid #ccc;
    padding: 15px;
    display: grid;
    grid-template-columns: 40px auto 100px 160px 160px 100px;
    column-gap: 20px;
    align-items: center;
    margin-bottom: 10px;
    border-radius: 10px;
}

.activity .message {
    font-size: 18px;
    font-weight: 400;
}

.activity .date {
    background: #4577ff;
    padding: 4px 16px;
    border-radius: 6px;
    text-align: center;
    font-size: 12px;
    color: #ffffff;
    cursor: pointer;
}

.activity i {
    height: 40px;
    color: #ffffff;
    border-radius: 50%;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
}

.activity i span {
    position: absolute;
    z-index: 2;
    left: 0;
    font-size: 15px;
    padding: 10px;
    display: flex;
    align-items: center;
    height: 100%;
    border-radius: 100px;
    opacity: 0;
}

.activity i:hover span {
    opacity: 1;
}

.pending,
.pending span {
    background: #888888;
}

.rejected,
.rejected span {
    background: #a14f55;
}

.accepted,
.accepted span {
    background: #00c675;
}

.empty {
    text-align: center;
    opacity: 0.8;
    padding: 50px 0;
}

.activity-text {
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 15px;
}

.others {
    padding-bottom: 50px;
}

.accordion {
    border: 1px #ccc solid;
    border-radius: 10px;
    height: fit-content;
    overflow: hidden;
}

.accordion .head {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    cursor: pointer;
    user-select: none;
    background: #FAFAFA;
}

.accordion .body {
    justify-content: space-between;
    padding: 20px;
    border-top: 1px #ccc solid;
}

.accordion .body p {
    font-size: 15px;
}

.accordion ul {
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 10px;
    row-gap: 10px;
}

.accordion li {
    padding: 10px;
    background: #00dc8027;
    border: 1px #57e6aa solid;
    border-radius: 10px;
}

@media screen and (max-width: 900px) {
    .grid {
        grid-template-columns: 100%;
        row-gap: 30px;
    }

    .grid {
        margin-top: -20px;
    }

    .activity {
        grid-template-columns: 35px 150px 100px 160px 160px 100px;
        overflow: auto;
        column-gap: 10px;
    }

    .activity i {
        height: 35px;
        font-size: 16px;
    }

    .activity .message {
        font-size: 14px;
    }

    .activity .date {
        padding: 3px 10px;
    }

    .activity-text {
        font-size: 20px;
    }
}
</style>
