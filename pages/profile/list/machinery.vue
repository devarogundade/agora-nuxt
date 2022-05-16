<template>
<section>
    <div class="app-min3-width">
        <div class="list">
            <h3 class="title">List your machine</h3>
            <div class="images">
                <img v-for="image in images" :key="image.id" :src="'http://127.0.0.1:8000' + image.url" alt="">
                <div class="input">
                    <input type="file" name="" id="">
                    <i class="fi fi-rr-picture"></i>
                </div>
            </div>

            <div class="detail">
                <div class="textbox">
                    <label for="">Select land state</label>
                    <select name="" id="">
                        <option v-for="(s, index) in states" :key="index" :value="index" v-on:change="state = index">
                            {{ s }}
                        </option>
                    </select>
                </div>

                <div class="textbox">
                    <label for="">Machine Name</label>
                    <input placeholder="Enter machine name" v-model="name" />
                </div>

                <div class="textbox">
                    <label for="">Machine location</label>
                    <textarea placeholder="Enter a full location address" v-model="location" cols="30" rows="3"></textarea>
                </div>

                <div class="textbox">
                    <label for="">Write about this machine</label>
                    <textarea placeholder="Enter a full location address" v-model="about" cols="30" rows="3"></textarea>
                </div>

                <div class="textbox">
                    <label for="">₦ Price per day</label>
                    <input class="price" type="number" v-model="price" placeholder="0.00">
                </div>

                <div class="textbox">
                    <label for="">Quantity</label>
                    <input class="price" type="number" v-model="quantity" placeholder="1">
                </div>

                <div class="textbox">
                    <label for="">Add Attributes</label>
                    <div class="meta" v-for="(meta, index) in metadata" :key="index">
                        <input type="text" placeholder="Name" v-model="meta.name">
                        <input type="text" placeholder="Value" v-model="meta.value">
                    </div>
                    <div class="add" v-if="metadata.length < 10" v-on:click="addNewMeta()">Add 1 column</div>
                </div>

                <div class="textbox">
                    <p :class="agree1  ? 'purpose checked' : 'purpose'" v-on:click="agree1 = !agree1">
                        <i class="fi fi-rr-check"></i>
                        I agree this machine is real
                    </p>

                    <p :class="agree2  ? 'purpose checked' : 'purpose'" v-on:click="agree2 = !agree2">
                        <i class="fi fi-rr-check"></i>
                        I agree this information is not fake
                    </p>

                    <p :class="agree3  ? 'purpose checked' : 'purpose'" v-on:click="agree3 = !agree3">
                        <i class="fi fi-rr-check"></i>
                        I agree to follow the platform rules
                    </p>
                </div>

                <div class="submit" v-on:click="attempt()">Complete listing</div>
            </div>
        </div>
    </div>

    <Loading :message="'Listing your machine'" v-if="loading" />
</section>
</template>

<script>
export default {
    layout: "profile",

    data() {
        return {
            images: [],
            metadata: [{
                name: 'PH',
                value: '7'
            }],
            agree1: false,
            agree2: false,
            agree3: false,
            state: 1,
            name: '',
            location: '',
            about: '',
            price: '',
            quantity: '',
            loading: false,
            states: [
                'Lagos',
                'Ogun',
                'Oyo',
            ]
        }
    },

    methods: {
        addNewMeta() {
            this.metadata.push({
                name: '',
                value: ''
            })
        },

        attempt() {
            if (this.name == '') {
                alert("Please enter a name")
            } else if (this.location == '' || this.location.length < 15) {
                alert("Please enter a long location")
            } else if (this.about == '' || this.about.length < 15) {
                alert("Please enter a long text about this land")
            } else if (this.price == '') {
                alert("Enter a price")
            } else if (this.quantity == '') {
                alert("Enter plots")
            } else if (!this.agree1) {
                alert("You have to check the agreements to complete your listing")
            } else if (!this.agree2) {
                alert("You have to check the agreements to complete your listing")
            } else if (!this.agree3) {
                alert("You have to check the agreements to complete your listing")
            } else {
                this.list()
            }
        },

        list() {
            this.loading = true

            const url = "create/machine?state=" + this.states[this.state] +
                '&name=' + this.name +
                '&location=' + this.location +
                '&about=' + this.about +
                '&price=' + this.price +
                '&quantity=' + this.quantity +
                '&metadata=' + JSON.stringify(this.metadata);

            this.$axios.setToken(this.$auth.token)
            this.$axios.get(url).then((response) => {

                this.loading = false
                const data = response.data

                if (data.status) {
                    alert("Listing completed")
                    this.$router.push("/profile/machineries")
                } else {
                    alert(data.message)
                }

            }).catch((err) => {
                alert("Cannot connect to our server")
            });
        }
    }
}
</script>

<style scoped>
section {
    display: flex;
    justify-content: center;
    padding: 50px 0;
}

.title {
    font-size: 40px;
    color: #ffffff;
    text-align: center;
}

.images {
    display: flex;
    margin-top: 40px;
    width: 100%;
}

.images img,
.input {
    height: 250px;
    border-radius: 20px;
    object-fit: cover;
    background: #4d727b;
}

.images img {
    margin-right: 20px;
}

.input {
    position: relative;
}

.images input {
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
}

.input i {
    font-size: 60px;
    color: #ffffff;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
}

.detail {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    align-items: center;
}

.textbox {
    width: 100%;
    margin-bottom: 40px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.textbox input,
select,
textarea {
    border: none;
    outline: none;
    font-size: 18px;
    width: 100%;
    height: 50px;
    height: 100%;
    border-radius: 20px;
    background: #4d727b;
    color: #ffffff;
    padding: 12px;
    resize: none;
}

.textbox label {
    color: #ffffff;
    font-size: 18px;
    margin-bottom: 10px;
}

.textbox input::placeholder,
.textbox textarea::placeholder {
    color: #ffffff;
    opacity: 0.6;
}

.textbox .price {
    width: 100px;
    text-align: center;
    font-size: 24px;
    font-weight: 600;
}

.meta {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 10px;
    margin-top: 10px;
    width: 400px;
}

.add {
    margin-top: 10px;
    background: #078ce5;
    padding: 10px 30px;
    border-radius: 20px;
    color: #ffffff;
    font-size: 16px;
    cursor: pointer;
    width: fit-content;
    user-select: none;
}

.purpose {
    background: #075469;
    border-radius: 8px;
    padding: 8px;
    color: #ffffff;
    margin-bottom: 5px;
    display: grid;
    grid-template-columns: 25px auto;
    column-gap: 10px;
    user-select: none;
    font-size: 15px;
    width: 100%;
    cursor: pointer;
}

.purpose i {
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 12px;
    background: #99aeb4;
}

.checked i {
    background: #00c675;
}

.submit {
    margin-top: 10px;
    background: #00dc82;
    padding: 10px 30px;
    border-radius: 20px;
    color: #ffffff;
    font-size: 22px;
    cursor: pointer;
    width: fit-content;
    user-select: none;
}
</style>
