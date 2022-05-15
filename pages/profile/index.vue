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

                <div :class="user.verified_at != null ? 'verified yes' : 'verified no'">
                    <i class="fi fi-rr-shield-check"></i>
                    {{ user.verified_at != null ? 'Verified' : 'Not Verified' }}
                </div>

                <div class="balance">
                    ₦ {{ user.balance.toFixed(2) }}
                </div>
            </div>
            <div class="options">
                <a href="/profile/edit"><i class="fi fi-rr-pencil"></i></a>
                <a href="/withdraw"><i class="fi fi-rr-angle-circle-up"></i></a>
                <a href="/deposit"><i class="fi fi-rr-bank"></i></a>
            </div>
        </div>

        <div class="tab-container">
            <div class="tabs">
                <a href="/profile">
                    <div class="item">
                        <i class="fi fi-rr-apps"></i>
                        <p>Lands</p>
                        <div class="indicator"></div>
                    </div>
                </a>

                <a href="/profile/machineries">
                    <div class="item">
                        <i class="fi fi-rr-clock"></i>
                        <p>Machineries</p>
                        <!-- <div class="indicator"></div> -->
                    </div>
                </a>

                <a href="/profile/iots">
                    <div class="item">
                        <i class="fi fi-rr-clock"></i>
                        <p>IoTs</p>
                        <!-- <div class="indicator"></div> -->
                    </div>
                </a>
            </div>
        </div>

        <Items :endpoint="'all/user/land'" />
    </div>
</section>
</template>

<script>
export default {
    layout: "profile",

    data() {
        return {
            user: this.$auth.user,
        }
    },

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
    color: #ffffff;
    padding: 10px 0;
}

.name h3 {
    font-size: 40px;
}

.name p {
    font-size: 15px;
    opacity: 0.8;
    font-weight: 300;
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
    width: 150px;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    border: 2px #003543 solid;
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
    border-right: 2px #003543 solid;
    justify-content: center;
    cursor: pointer;
    height: 100%;
    color: #ffffff;
}

.options a:last-child i {
    border: none !important;
}

.options i:hover {
    box-shadow: 0 0 15px #003543;
}

.options i:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}

.balance {
    margin-top: 10px;
    font-style: 14px;
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