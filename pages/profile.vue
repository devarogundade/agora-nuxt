<template>
<section>
    <div class="app-width" v-if="user">
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
            </div>
            <div class="options">
                <i class="fi fi-rr-pencil"></i>
                <i class="fi fi-rr-share"></i>
                <i class="fi fi-rr-interrogation"></i>
            </div>
        </div>

        <Tabs />

        <Items />
    </div>

    <Loading v-if="loading" :message="'Loading profile'" />
</section>
</template>

<script>
export default {
    layout: "profile",
    middleware: "auth",

    data() {
        return {
            user: null,

            loading: true
        }
    },

    methods: {
        getUser() {
            const token = this.$cache.get('token')

            this.loading = true
            const url = '/user'

            this.$axios.setToken(token, 'Bearer')
            this.$axios.get(url).then(response => {
                this.loading = false

                const data = response.data

                if (data.status) {
                    this.user = data.data
                } else {
                    alert('something went wrong')
                }
            })
        }
    },

    created() {
      this.getUser()
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

.options i:last-child {
    border: none;
}

.options i:hover {
    box-shadow: 0 0 15px #003543;
}

.options i:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
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
