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
                    <i class="fi fi-rr-ban rejected" v-if="offer.status == 'rejected'">
                        <span>Rejected</span>
                    </i>

                    <p v-if="$auth.user.id == offer.user_id">Sent offer to {{ offer.asset.name }}</p>
                    <p v-else>Received offer for land at {{ offer.asset.location }}</p>
                </div>

                <table>
                    <thead>
                        <tr>
                            <td>Quantity (unit)</td>
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
                    </tbody>
                </table>

                <div class="accept" v-if="$auth.user.id == offer.user_id && offer.status == 'pending'">
                    <div class="button cancel" v-on:click="cancel(offer)">Cancel Offer</div>
                </div>
                <div class="accept" v-if="offer.asset.user_id == $auth.user.id  && offer.status == 'pending'">
                    <div class="button" v-on:click="reject(offer)">Reject</div>
                    <div class="button" v-on:click="accept(offer)">Accept</div>
                </div>
            </div>
        </div>
        <p v-else>No offers</p>
        <Loading :message="'Accepting offer'" v-if="acceptingOffer" />
        <Loading :message="'Cancelling offer'" v-if="cancellingOffer" />
        <Loading :message="'Rejecting offer'" v-if="rejectingOffer" />
    </div>

    <Loading :message="'Loading offers'" v-else />
</section>
</template>

<script>
export default {
    props: ['endpoint'],

    data() {
        return {
            offers: [],
            loading: true
        }
    },

    methods: {
        getOffers() {
            const url = this.endpoint

            this.$axios.setToken(this.$auth.token)
            this.$axios.get(url).then((response) => {
                this.loading = false
                const data = response.data

                if (data.status) {
                    this.offers = data.data
                } else {
                    alert(data.message)
                }

            }).catch((err) => {
                alert("Cannot connect to our server")
            });
        },

        accept(offer) {
            if (prompt("Type ACCEPT to confirm") != "ACCEPT") {
                alert("Wrong confirmation")
                return
            }

            this.acceptingOffer = true

            const url = 'accept/offer?&offer_id=' + offer.id;

            this.$axios.setToken(this.$auth.token)
            this.$axios.get(url).then((response) => {

                this.acceptingOffer = false
                const data = response.data

                if (data.status) {
                    alert('offer accepted')
                    this.getOffers()
                } else {
                    alert(data.message)
                }

            }).catch((err) => {
                alert('Cannot connect to our server')
            });
        },

        cancel(offer) {
            if (prompt("Type CANCEL to confirm") != "CANCEL") {
                alert("Wrong confirmation")
                return
            }

            this.cancellingOffer = true

            const url = 'cancel/offer?offer_id=' + offer.id;

            this.$axios.setToken(this.$auth.token)
            this.$axios.get(url).then((response) => {

                this.cancellingOffer = false
                const data = response.data

                if (data.status) {
                    alert('offer cancelled')
                    this.getOffers()
                } else {
                    alert(data.message)
                }

            }).catch((err) => {
                alert('Cannot connect to our server')
            });
        },

        reject(offer) {
            if (prompt("Type REJECT to confirm") != "REJECT") {
                alert("Wrong confirmation")
                return
            }

            this.rejectingOffer = true

            const url = 'cancel/offer?&offer_id=' + offer.id;

            this.$axios.setToken(this.$auth.token)
            this.$axios.get(url).then((response) => {

                this.rejectingOffer = false
                const data = response.data

                if (data.status) {
                    alert('offer cancelled')
                    this.getOffers()
                } else {
                    alert(data.message)
                }

            }).catch((err) => {
                alert('Cannot connect to our server')
            });
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
    background: #003543;
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
    height: 40px;
    border-radius: 6px;
    width: fit-content;
    grid-template-columns: 22px auto;
    align-items: center;
    color: #ffffff;
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
    color: #ffffff;
    border-radius: 10px;
    border: 1px solid #002028;
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
