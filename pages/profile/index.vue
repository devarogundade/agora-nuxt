<template>
<section>
    <div class="app-min-width" v-if="user">
        <div class="bio">
            <div class="image">
                <div class="img">
                    <i class="fi fi-rr-user"></i>
                </div>
            </div>
            <div class="name">
                <h3>{{ user.name }}</h3>
                <p>{{ user.email.toLowerCase() }}</p>

                <div v-if="user.verified_at == null" v-on:click="promptVerify = true" class="verified no">
                    <i class="fi fi-rr-shield-check"></i>
                    Not Verified
                </div>
                <div v-else class="verified yes">
                    <i class="fi fi-rr-shield-check"></i>
                    Verified
                </div>

                <div class="balance">
                    <b>Balance:</b> ₦ {{ user.balance.toFixed(2) }} <a href="/deposit">Deposit</a> <a href="/withdraw">Withdraw</a>
                </div>
            </div>
            <div class="options">
                <a href="/profile/edit"><i class="fi fi-rr-pencil"></i></a>
                <a href="/deposit"><i class="fi fi-rr-bank"></i></a>
            </div>
        </div>

        <div class="tab-container">
            <div class="tabs">
                <a href="/profile">
                    <div class="item">
                        <i class="fi fi-rr-apps"></i>
                        <p>Assets</p>
                        <div class="indicator"></div>
                    </div>
                </a>

                <a href="/profile/edit">
                    <div class="item">
                        <i class="fi fi-rr-clock"></i>
                        <p>Settings</p>
                        <!-- <div class="indicator"></div> -->
                    </div>
                </a>
            </div>
        </div>

        <div class="asset-items">
            <a v-for="asset in assets" :key="asset.id" :href="'/assets/' + asset.id">
                <Asset :asset="asset" :trash="true" :rented="true" />
            </a>

            <p v-if="!loading && assets.length == 0">
                {{ user.purpose == 1 ? 'You do not own any asset.' : 'You haven\'t rent any asset.' }}
            </p>
        </div>

        <Alert :message="alertMessage" v-if="alertMessage != ''" v-on:exit="alertMessage = ''" />
        <Loading v-if="loading" :message="'Loading your assets'" />

        <Verify v-if="promptVerify" v-on:exit="promptVerify = false" v-on:verified="onVerified()" />
    </div>
</section>
</template>

<script>
export default {
    layout: "profile",

    data() {
        return {
            assets: [],
            loading: true,

            alertMessage: '',
            user: this.$auth.user,

            promptVerify: false
        }
    },

    methods: {
        getAssets() {
            this.loading = true
            const url = 'user/assets'

            this.$axios.setToken(this.$auth.token)
            this.$axios.get(url).then((response) => {

                this.loading = false
                const data = response.data

                if (data.status) {
                    this.assets = data.data
                } else {
                    this.alertMessage = data.message
                }

            }).catch((err) => {
                this.alertMessage = 'Cannot connect to our server'
            });
        },

        onVerified() {
            location.reload()
        }
    },

    created() {
        this.getAssets()
    }
};
</script>

<style scoped>
section {
    display: flex;
    justify-content: center;
    margin-top: 50px;
}

.bio {
    display: grid;
    grid-template-columns: 200px auto;
    column-gap: 40px;
    position: relative;
}

.image .img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: #00c675;
    color: #ffffff;
    font-size: 100px;
}

.image i {
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
}

.name {
    color: #27272a;
    padding: 10px 0;
}

.name h3 {
    font-size: 40px;
}

.name p {
    font-size: 15px;
    opacity: 0.8;
}

.verified {
    padding: 5px 12px;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 500;
    color: #ffffff;
    width: fit-content;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    user-select: none;
}

.yes {
    background: #003543;
}

.no {
    background: #a14f55;
}

.verified i {
    margin-right: 5px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.options {
    width: 100px;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    border: 1px #ccc solid;
    border-radius: 10px;
    height: 50px;
    position: absolute;
    right: 0;
    top: 20px;
}

.options i {
    display: flex;
    width: 100%;
    padding: 15px;
    align-items: center;
    border-right: 1px #ccc solid;
    justify-content: center;
    cursor: pointer;
    height: 100%;
    color: #27272a;
}

.options a:last-child i {
    border: none !important;
}

.options i:hover {
    box-shadow: 0 0 15px #ccc;
}

.options i:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}

.balance {
    margin-top: 10px;
    font-style: 14px;
}

.balance a {
    font-size: 14px;
    margin-left: 10px;
    text-decoration: underline;
    color: #003543;
}

@media screen and (max-width: 1000px) {
    .bio {
        grid-template-columns: 100%;
    }
}

@media screen and (max-width: 700px) {
    .image .img {
        height: 150px;
        width: 150px;
    }

    .name h3 {
        font-size: 30px;
    }

    .options {
        top: 10px;
    }
}
</style>
