<template>
<div class="modal">
    <div class="verify">
        <p>This page assume you have provided necessary KYC document required by our platform to get verified.</p>
        <div class="button" v-if="!loading" v-on:click="verify()">Verify me</div>
        <div class="button" v-else>Verifying..</div>

        <div class="button close" v-on:click="$emit('exit')">Close</div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            loading: false
        }
    },

    methods: {
        verify() {
            this.loading = true

            const url = 'verify'
            this.$axios.setToken(this.$auth.token)
            this.$axios.get(url).then((response) => {

                this.loading = false

                const data = response.data

                if (data.status) {
                    this.$emit('verified')
                } else {
                    alert(data.message)
                }

            }).catch(() => {
                alert('Can not connect to our server')
            })
        }
    }
}
</script>

<style scoped>
.verify {
    width: 400px;
    max-width: 90%;
    height: fit-content;
    text-align: center;
    padding: 20px;
    background: #fff;
    border-radius: 20px;
}

.button {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    border-radius: 10px;
    cursor: pointer;
    user-select: none;
    background: #00c675;
    margin-top: 20px;
}

.close {
    margin-top: 0;
    background: none;
    color: #d20808;
}
</style>
