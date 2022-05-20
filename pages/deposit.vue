<template>
<section>
    <div class="app-min3-width">
        <div class="deposit">
            <h3 class="title">Deposit</h3>

            <div class="field">
                <input type="number" maxlength="6" placeholder="₦ amount" v-model="amount">
                <div class="button" v-on:click="attempt()">Deposit</div>
            </div>

        </div>
    </div>

    <Loading :message="'Depositing'" v-if="loading" />
    <Alert :message="alertMessage" v-if="alertMessage != ''" v-on:exit="alertMessage = ''" />
</section>
</template>

<script>
export default {
    layout: 'profile',

    data() {
        return {
            loading: false,
            amount: '',

            alertMessage: ''
        }
    },

    methods: {
        attempt() {
            if (this.amount == '') {
                this.alertMessage = "Enter amount"
            } else {
                this.deposit()
            }
        },

        deposit() {
            this.loading = true

            const url = 'deposit?amount=' + this.amount

            this.$axios.setToken(this.$auth.token)
            this.$axios.get(url).then((response) => {

                this.loading = false
                const data = response.data

                if (data.status) {
                    this.alertMessage = 'Deposit success'
                    this.amount = ''
                } else {
                    this.alertMessage = data.message
                }

            }).catch((err) => {
                this.alertMessage = 'Cannot connect to our server'
            });
        }
    }
}
</script>

<style scoped>
section {
    padding: 50px 0;
    display: flex;
    justify-content: center;
}

.title {
    font-size: 30px;
    color: #27272a;
    text-align: center;
}

.field {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
}

input {
    width: 200px;
    max-width: 100%;
    padding: 10px 12px;
    border-radius: 10px;
    background: #4d727b;
    border: none;
    font-size: 20px;
    color: #ffffff;
    text-align: center;
    outline: none;
}

input::placeholder {
    color: #ffffff;
    opacity: 0.6;
}

.button {
    margin-top: 50px;
    padding: 10px 40px;
    border-radius: 10px;
    background: #00dc82;
    color: #ffffff;
    user-select: none;
    cursor: pointer;
    font-size: 16px;
}
</style>
