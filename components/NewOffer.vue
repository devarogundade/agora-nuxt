<template>
<section>
    <div class="create">
        <h3>Make offer</h3>

        <div class="item">
            <img :src="data.image" alt="">
            <p>{{ data.name }}</p>
        </div>

        <div class="form">
            <div class="input">
                <input type="number" placeholder="Price(24h)" v-model="price">
                <p v-on:click="resetPrice()">Default</p>
            </div>
            <div class="input">
                <input type="number" placeholder="Duration" v-model="duration">
                <p v-on:click="oneYear()">1 year</p>
            </div>
            <div class="input">
                <input type="number" placeholder="Unit" v-model="unit">
                <p v-on:click="maxQuantity()">Max</p>
            </div>

            <div class="submit">
                <div class="button" v-on:click="createOffer()">
                    Create
                </div>
                <div class="button" v-on:click="$emit('cancel')">
                    Cancel
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    props: ['data'],

    data() {
        return {
            price: '',
            duration: '',
            unit: ''
        }
    },

    methods: {
        resetPrice() {
            this.price = this.data.price
        },
        oneYear() {
            this.duration = this.data.duration
        },
        maxQuantity() {
            this.unit = this.data.unit
        },

        createOffer() {
            if (this.price == '') {
                alert('Price is required')
            } else if (this.duration == '') {
                alert('Duration is required')
            } else if (this.unit == '') {
                alert('Unit is required')
            } else if (this.unit > this.data.unit) {
                alert('Owner do not have up to this amount of ' + this.data.quantityHint + '. Use max to be precise')
            } else if (this.price > this.data.price) {
                if (prompt("You are offering more than owner's request. Type CONFIRM to continue") == 'CONFIRM') {
                    this.$emit('create', {
                        price: this.price,
                        duration: this.duration,
                        unit: this.unit
                    })
                    this.$emit('cancel')
                } else {
                    alert('Incorrect confirmation')
                }
            } else {
                this.$emit('create', {
                    price: this.price,
                    duration: this.duration,
                    unit: this.unit
                })
                this.$emit('cancel')
            }

        }
    },
}
</script>

<style scoped>
section {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    background: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 100%;
    z-index: 3;
    top: 0;
    left: 0;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
}

.create {
    background: #003543;
    max-height: 80%;
    width: 500px;
    max-width: 100%;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px;
}

.create h3 {
    font-size: 40px;
}

.item {
    display: grid;
    grid-template-columns: 40px auto;
    background: #60909c;
    width: fit-content;
    align-items: center;
    height: 40px;
    border-radius: 10px;
    overflow: hidden;
    column-gap: 10px;
    margin-top: 10px;
}

.item img {
    height: 100%;
    width: 40px;
    object-fit: cover;
}

.item p {
    padding-right: 15px;
    color: #001014;
}

.form {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    width: 300px;
    max-width: 100%;
}

.input {
    margin-bottom: 10px;
    position: relative;
}

.input p {
    position: absolute;
    top: 0;
    height: calc(100% - 20px);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 80px;
    font-size: 14px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 200px;
    right: 0;
    margin: 10px;
}

input {
    background: #002028;
    padding: 10px 15px;
    font-size: 20px;
    font-weight: 500;
    width: 100%;
    border: none;
    outline: none;
    text-align: center;
    border-radius: 200px;
    color: #ffffff;
}


input::placeholder {
    color: #ffffff;
    opacity: 0.8;
}

.submit {
    margin-top: 40px;
}

.button {
    padding: 10px 20px;
    background: #078ce5;
    margin-top: 10px;
    border-radius: 200px;
    font-weight: 600;
    cursor: pointer;
}

.button:last-child {
    background: transparent;
    color: #a14f55;
    text-decoration: underline;
}
</style>
