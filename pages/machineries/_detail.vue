<template>
<div v-if="land">
    <section>
        <div class="app-min-width">
            <a href="/lands">
                <div class="back">
                    <i class="fi fi-rr-arrow-small-left"></i>
                    <p>Back to lands</p>
                </div>
            </a>
        </div>
    </section>

    <section>
        <div class="app-min-width grid">
            <div class="image">
                <img src="/images/land.png" alt="">
            </div>
            <div class="text">
                <div class="name">
                    <h3>Land at {{ land.state }}</h3>
                    <p>{{ land.location }}</p>
                </div>

                <div class="price">
                    <div class="stock">
                        Availability <span>In stock</span>
                    </div>
                    <div class="amount">
                        <p class="fixed">Rate per day</p>
                        <h3>₦{{ land.price.toFixed(2) }}</h3>
                        <div class="btn">
                            Make Offer
                        </div>
                    </div>
                </div>

                <ul>
                    <li>
                        <i class="fi fi-rr-time-past"></i>
                        <p>5 leases</p>
                        <div class="progress"></div>
                    </li>

                    <li>
                        <i class="fi fi-rr-star"></i>
                        <p>4 of 5 star</p>
                        <div class="progress"></div>
                    </li>

                    <li>
                        <i class="fi fi-rr-shield-check"></i>
                        <p>Verified item</p>
                        <div class="progress"></div>
                    </li>
                </ul>
            </div>

            <div class="accordion">
                <div class="head">
                    <p class="title">Attributes</p>
                    <i class="fi fi-rr-duplicate"></i>
                </div>
                <div class="body">
                    <ul>
                        <li v-for="(meta, index) in JSON.parse(land.metadata)" :key="index">
                            {{ Object.keys(meta) + ' : ' +Object.values(meta)}}
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
                    <p>{{ land.about }}</p>
                </div>
            </div>
        </div>
    </section>

    <section class="drone" v-if="land.images.length > 0">
        <div class="app-min-width">
            <div class="accordion">
                <div class="head">
                    <p class="title">Drone footages</p>
                    <!-- <i class="fi fi-rr-duplicate"></i> -->
                </div>
                <div class="body">
                    <div class="images">
                        <img v-for="image in land.images" :key="image.id" :src="'http://127.0.0.1:8000/' + image.url" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="app-min-width">
            <h3 class="activity-text">Offers</h3>

            <div class="activities" v-if="land.offers.length > 0">
                <div class="activity" v-for="offer in land.offers" :key="offer.id">
                    <i class="fi fi-rr-dollar"></i>
                    <p class="message">{{ author ? 'You' : offer.user.name }} </p>
                    <p class="quantity">{{ offer.quantity }} plots</p>
                    <p class="rate">₦{{ offer.price.toFixed(2) }} per day</p>
                    <p class="duration">{{ offer.duration }} days</p>


                    <p class="date" v-if="author">Accept</p>
                    <p class="date" v-if="!author && author">Cancel</p>
                </div>
            </div>
            <div class="empty" v-else>No offers</div>
        </div>
    </section>

    <section class="others">

    </section>
</div>

<Loading v-else :message="'Fetching land'" />
</template>

<script>
export default {
    layout: "landing",

    data() {
        return {
            loading: true,
            land: null,
            author: false
        }
    },

    methods: {
        getLand() {
            const url = 'get/land?id=' + this.$route.params.detail

            this.$axios.get(url).then((response) => {
                this.loading = false
                const data = response.data

                if (data.status) {
                    this.land = data.data

                    if (this.$auth.loggedIn && this.land.user_id == this.$auth.user.id) {
                        this.author = true
                    }
                } else {
                    alert(data.message)
                }

            }).catch((err) => {
                console.log(err);
                alert('Cannot connect to our server')
            });
        }
    },

    created() {
        this.getLand()
    }
};
</script>

<style scoped>
section {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    color: #ffffff;
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

.image {
    background: #003543;
    border-radius: 10px;
    height: 450px;
}

.image img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 20px;
}

.price {
    margin-top: 20px;
    border: 1px #003543 solid;
    border-radius: 10px;
    overflow: hidden;
}

.stock {
    height: 50px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    border-bottom: 1px #003543 solid;
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
    background: #003543;
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
    width: 70%;
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
    height: 400px;
}

.activities {
    border-radius: 20px;
    overflow: hidden;
}

.activity {
    border-bottom: #002028 3px solid;
    background: #00181e;
    padding: 15px;
    display: grid;
    grid-template-columns: 40px auto 100px 160px 160px 100px;
    column-gap: 20px;
    align-items: center;
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
}

.activity i {
    height: 40px;
    background: #00c675;
    color: #ffffff;
    border-radius: 50%;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.empty {
    text-align: center;
    opacity: 0.8;
    padding: 50px 0;
}

.activity:last-child {
    border: none;
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
    border: 2px #003543 solid;
    border-radius: 10px;
    height: fit-content;
}

.accordion .head {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    cursor: pointer;
    user-select: none;
}

.accordion .body {
    justify-content: space-between;
    padding: 20px;
    border-top: 2px #003543 solid;
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
        grid-template-columns: 35px auto 120px 120px 80px;
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
