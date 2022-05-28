<template>
<section>
    <div class="app-min3-width">
        <div class="list">
            <h3 class="title">Lease your asset</h3>
            <div class="images">
                <img v-for="(image, index) in images" :key="index" :id="'image' + index" src="" alt="">
                <div class="input" v-if="images.length < 3">
                    <input type="file" accept="image/*" v-on:change="onImageSelected($event)">
                    <i class="fi fi-rr-picture"></i>
                </div>
            </div>

            <div class="textbox">
                <label for="">Optional Preview video</label>
                <input type="file" accept="video/*" v-on:change="onVideoSelected($event)" />
            </div>

            <div class="detail">
                <div class="textbox">
                    <label for="">Select asset state</label>
                    <select name="" id="" v-on:change="onStateChanged($event)">
                        <option v-for="(s, index) in states" :key="index" :value="index">
                            {{ s }}
                        </option>
                    </select>
                </div>

                <div class="textbox">
                    <label for="">Select asset type</label>
                    <select name="" id="" v-on:change="onTypeChanged($event)">
                        <option v-for="(t, index) in types" :key="index" :value="index">
                            {{ t }}
                        </option>
                    </select>
                </div>

                <div class="textbox" v-if="showName">
                    <label for="">Asset name</label>
                    <input placeholder="Enter asset name" v-model="name" />
                </div>

                <div class="textbox">
                    <label for="">Asset location</label>
                    <textarea placeholder="Enter a full location address" v-model="location" cols="30" rows="3"></textarea>
                </div>

                <div class="textbox">
                    <label for="">Write about this asset</label>
                    <textarea placeholder="Enter a full location address" v-model="about" cols="30" rows="3"></textarea>
                </div>

                <div class="textbox">
                    <label for="">₦ Price per day</label>
                    <input class="price" type="number" v-model="price" placeholder="0.00">
                </div>

                <div class="textbox">
                    <label for="">Unit (or plot in land)</label>
                    <input class="price" type="number" v-model="unit" placeholder="100">
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
                        I agree this asset is real
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

    <Loading :message="'Creating your asset'" v-if="loading" />
    <Alert :message="alertMessage" v-if="alertMessage != ''" v-on:exit="alertMessage = ''" />
</section>
</template>

<script>
export default {
    layout: "profile",

    watch: {
        images: {
            handler() {
                this.readImages()
            },
            deep: true
        },

        location: function () {
            this.getPlaces()
        }
    },

    data() {
        return {
            showName: false,
            images: [],
            videos: [],
            metadata: [{
                name: 'PH',
                value: '7'
            }],
            agree1: false,
            agree2: false,
            agree3: false,
            state: 1,
            location: '',
            jsonLocation: '',
            name: '',
            about: '',
            price: '',
            unit: '',
            loading: false,
            states: [
                'Lagos',
                'Enugu',
                'Oyo',
                'Sokoto',
            ],
            types: [
                'Land',
                'Machinery',
                'IoT',
                'Truck',
                'Others'
            ],
            selectedType: 0,
            selectedState: 0,
            alertMessage: '',
            places: []
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
            if (this.location == '' || this.location.length < 15) {
                this.alertMessage = "Please enter a long location"
            } else if (this.about == '' || this.about.length < 15) {
                this.alertMessage = "Please enter a long text about this asset"
            } else if (this.price == '') {
                this("Enter a price")
            } else if (this.unit == '') {
                this.alertMessage = "Enter units"
            } else if (!this.agree1) {
                this.alertMessage = "You have to check the agreements to complete your listing"
            } else if (!this.agree2) {
                this.alertMessage = "You have to check the agreements to complete your listing"
            } else if (!this.agree3) {
                this.alertMessage = "You have to check the agreements to complete your listing"
            } else {
                this.list()
            }
        },

        getPlaces() {
            if (this.location == '') {
                this.jsonLocation = ''
                return
            }

            const json = {
                address: this.location,
                geo: {
                    lat: 0.5,
                    log: 0.5
                }
            }

            this.jsonLocation = JSON.stringify(json)

            // couldn't get a google places api key

            // if (this.location == '') {
            //     this.places = []
            //     return
            // }

            // const url = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=' + this.location

            // this.$axios.get(url).then((response) => {
            //     console.log(response);
            // })
        },

        onImageSelected(event) {
            this.images.push(event.target.files[0])
        },

        onVideoSelected(event) {
            this.videos.push(event.target.files[0])
        },

        onTypeChanged(event) {
            this.selectedType = event.target.value
            this.showName = this.selectedType != 0
        },

        onStateChanged(event) {
            this.selectedState = event.target.value
        },

        readImages() {
            for (let index = 0; index < this.images.length; index++) {
                const reader = new FileReader();
                reader.onload = function () {
                    document.getElementById('image' + index).src = reader.result;
                };
                reader.readAsDataURL(this.images[index]);
            }
        },

        list() {
            this.loading = true

            let formData = new FormData()
            for (let index = 0; index < this.images.length; index++) {
                formData.append('image' + index, this.images[index])
            }

            for (let index = 0; index < this.videos.length; index++) {
                formData.append('video', this.videos[index])
            }

            const name = this.name != '' ? this.name : 'No name'

            const url = "create/asset?state=" + this.states[this.selectedState] +
                '&type=' + this.types[this.selectedType] +
                '&name=' + name +
                '&location=' + this.jsonLocation +
                '&about=' + this.about +
                '&price=' + this.price +
                '&unit=' + this.unit +
                '&metadata=' + JSON.stringify(this.metadata);

            this.$axios.setToken(this.$auth.token)
            this.$axios.setHeader('Content-Type', 'multipart/form-data')
            this.$axios.post(url, formData).then((response) => {

                this.loading = false
                const data = response.data

                if (data.status) {
                    this.alertMessage = "Listing completed"
                    this.$router.push("/profile")
                } else {
                    this.alertMessage = data.message
                }

            }).catch((err) => {
                this.alertMessage = "Cannot connect to our server"
            });
        }
    },
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
    color: #27272a;
    text-align: center;
}

.images {
    display: grid;
    grid-template-columns: auto auto auto;
    column-gap: 20px;
    margin-top: 40px;
    width: 100%;
    overflow-x: auto;
}

.images img,
.input {
    height: 250px;
    object-fit: cover;
    background: #ebebeb;
}

.input {
    position: relative;
    width: 250px;
    border: 1px #ccc solid;
}

.images input {
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
    top: 0;
    left: 0;
    z-index: 2;
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
    background: #ebebeb;
    border: 1px #ccc solid;
    color: #27272a;
    padding: 12px;
    resize: none;
}

.textbox label {
    color: #27272a;
    font-size: 18px;
    margin-bottom: 10px;
}

.textbox input::placeholder,
.textbox textarea::placeholder {
    color: #27272a;
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
    max-width: 100%;
    height: 50px;
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
