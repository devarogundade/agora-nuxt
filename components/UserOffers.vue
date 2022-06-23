<template>
<section>
    <div class="items" v-if="!loading">
        <div v-if="offers.length > 0" class="wrapper">
            <div class="item" v-for="offer in offers" :key="offer.id">
                <div class="status">
                    <i class="fi fi-rr-time-quarter-to pending" v-if="offer.status == 'pending'">
                        <span>Pending</span>
                    </i>
                    <i class="fi fi-rr-check accepted" v-if="offer.status == 'accepted'">
                        <span>Accepted</span>
                    </i>
                    <i class="fi fi-rr-check accepted" v-if="offer.status == 'received'">
                        <span>Received</span>
                    </i>
                    <i class="fi fi-rr-ban rejected" v-if="offer.status == 'cancelled'">
                        <span>Cancelled</span>
                    </i>
                    <i class="fi fi-rr-ban rejected" v-if="offer.status == 'rejected'">
                        <span>Rejected</span>
                    </i>

                    <p v-if="$auth.user.id == offer.user_id">Sent offer to {{ offer.asset.type }} at {{ JSON.parse(offer.asset.location).address }}</p>
                    <p v-else>Received offer from {{ offer.asset.type }} at {{ JSON.parse(offer.asset.location).address }}</p>
                </div>

                <table>
                    <thead>
                        <tr>
                            <td>Unit (or plot in land)</td>
                            <td>Duration (day)</td>
                            <td>Rate (₦ per day)</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{{ offer.unit }}</td>
                            <td>{{ offer.duration }}</td>
                            <td>₦{{ (offer.price).toFixed(2) }}</td>
                        </tr>

                        <LeaseTimeline v-on:exit="showOffer = -1" v-if="showOffer == offer.id" :offer="offer" />
                    </tbody>
                </table>

                <div class="accept" v-if="$auth.user.id == offer.user_id && offer.status == 'pending'">
                    <div class="button cancel" v-on:click="cancel(offer)">Cancel Offer</div>
                </div>
                <div class="accept" v-if="offer.asset.user_id == $auth.user.id && offer.status == 'pending'">
                    <div class="button" v-on:click="reject(offer)">Reject</div>
                    <div class="button" v-on:click="accept(offer)">Accept</div>
                </div>

                <div class="accept" v-if="$auth.user.id == offer.user_id && offer.status == 'accepted'">
                    <div class="button" v-on:click="received(offer)">Confirm received</div>
                </div>
                <div class="accept" v-if="offer.asset.user_id == $auth.user.id && offer.status == 'accepted'">
                    <div class="button">Wait for farmer to confirm received</div>
                </div>

                <div class="accept" v-if="offer.status == 'received'">
                    <a href="/sample-agreement.docx" download>
                        <div class="button">Agreement</div>
                    </a>
                    <div class="button" v-on:click="showOffer = offer.id">View status</div>
                </div>
            </div>
        </div>
        <p v-else>No offers</p>
        <Loading :message="'Accepting offer'" v-if="acceptingOffer" />
        <Loading :message="'Cancelling offer'" v-if="cancellingOffer" />
        <Loading :message="'Rejecting offer'" v-if="rejectingOffer" />
        <Loading :message="'Confirming receive'" v-if="receivingOffer" />
    </div>

    <Loading :message="'Loading offers'" v-else />
    <Alert :message="alertMessage" v-if="alertMessage != ''" v-on:exit="alertMessage = ''" />
</section>
</template>

<script>
export default {
    data() {
        return {
            offers: [],
            loading: true,
            alertMessage: '',
            showOffer: -1,

            acceptingOffer: false,
            cancellingOffer: false,
            rejectingOffer: false,
            rejectingOffer: false
        }
    },

    methods: {
        getOffers() {
            const url = 'user/offers'

            this.$axios.setToken(this.$auth.token)
            this.$axios.get(url).then((response) => {
                this.loading = false
                const data = response.data

                if (data.status) {
                    this.offers = data.data
                } else {
                    this.alertMessage = data.message
                }

            }).catch((err) => {
                this.alertMessage = "Cannot connect to our server"
            })
        },

        accept(offer) {
            if (prompt("Type ACCEPT to confirm") != "ACCEPT") {
                this.alertMessage = "Wrong confirmation"
                return
            }

            this.acceptingOffer = true

            const url = 'accept/offer?id=' + offer.asset.id +
                '&offer_id=' + offer.id;

            this.$axios.setToken(this.$auth.token)
            this.$axios.get(url).then((response) => {

                this.acceptingOffer = false
                const data = response.data

                if (data.status) {
                    this.alertMessage = 'offer accepted'
                    this.getOffers()
                } else {
                    this.alertMessage = data.message
                }

            }).catch((err) => {
                this.alertMessage = 'Cannot connect to our server'
            })
        },

        received(offer) {
            if (prompt("Type RECEIVED to confirm") != "RECEIVED") {
                this.alertMessage = "Wrong confirmation"
                return
            }

            this.rejectingOffer = true

            const url = 'received/offer?id=' + offer.asset.id +
                '&offer_id=' + offer.id;

            this.$axios.setToken(this.$auth.token)
            this.$axios.get(url).then((response) => {

                this.rejectingOffer = false
                const data = response.data

                if (data.status) {
                    this.alertMessage = 'offer accepted'
                    this.getOffers()
                } else {
                    this.alertMessage = data.message
                }

            }).catch((err) => {
                this.alertMessage = 'Cannot connect to our server'
            })
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
                    this.getOffers()
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

            this.rejectingOffer = true

            const url = 'reject/offer?offer_id=' + offer.id;

            this.$axios.setToken(this.$auth.token)
            this.$axios.get(url).then((response) => {

                this.rejectingOffer = false
                const data = response.data

                if (data.status) {
                    this.alertMessage = 'offer rejected'
                    this.getOffers()
                } else {
                    this.alertMessage = data.message
                }

            }).catch((err) => {
                this.alertMessage = 'Cannot connect to our server'
            })
        }
    },

    created() {
        this.loading = true
        this.getOffers()
    }
}
</script>

<style scoped>
section {
    padding: 0 !important;
}

.items {
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 600px;
    max-width: 100%;
}

.wrapper {
    width: 100%;
}

.item {
    border-radius: 20px;
    border: 1px solid #ccc;
    background: #FAFAFA;
    padding: 10px 15px;
    margin-bottom: 20px;
    width: 100%;
}

.item:last-child {
    margin: 0;
}

.item i {
    height: 40px;
    color: #ffffff;
    border-radius: 50%;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
}

.item i span {
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

.item i:hover span {
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

.status {
    display: grid;
    border-radius: 6px;
    width: fit-content;
    grid-template-columns: 22px auto;
    align-items: center;
    column-gap: 10px;
}

.status i {
    height: 22px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.status p {
    font-size: 15px;
    font-weight: 400;
}

table {
    width: 100%;
    margin-top: 10px;
    border-radius: 10px;
    border: 1px solid #ccc;
    overflow: hidden;
}

thead,
tbody {
    height: 50px;
}

td {
    padding: 0 10px;
    width: calc(100%/ 3);
    font-size: 15px;
}

.accept {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.cancel {
    background: #4d727b !important;
}

.accept .button {
    padding: 8px 30px;
    font-size: 16px;
    color: #ffffff;
    cursor: pointer;
    border-radius: 10px;
}

.accept .button:first-child {
    background: #a14f55;
}

.accept .button:last-child {
    background: #00dc82;
    margin-left: 20px;
}

@media screen and (max-width: 700px) {
    .items {
        padding: 20px 0;
    }
}
</style>
