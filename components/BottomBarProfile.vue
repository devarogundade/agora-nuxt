<template>
<section>
    <div class="app-min-width">
        <div class="bottom-bar">
            <p class="title">Done for today?</p>
            <div class="item" v-on:click="logout()">
                <p class="item-name">
                    Log out
                    <i class="fi fi-rr-sign-out-alt"></i>
                </p>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    methods: {
        logout() {
            this.$auth.logout()
            this.$router.push('/login')
        }
    }
}
</script>

<style scoped>
section {
    background: #003543;
    display: flex;
    justify-content: center;
}

.bottom-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100px;
    color: #fff;
}

.title {
    font-size: 18px;
}

.item {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    user-select: none;
}

.item-name {
    font-size: 15px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
}

.item-name i {
    margin-left: 6px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.item p {
    color: #00dc82;
}
</style>
