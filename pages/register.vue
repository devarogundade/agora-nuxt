<template>
<section>
    <div class="app-min2-width">
        <h3 class="title">Join our community of leasors and farmers</h3>
        <p class="desc">
            You will be able to leased your Lands, Machinery and IoTs to farmers and
            also promoting agriculture in Nigeria.
        </p>

        <div class="form">
            <div class="generate-fake-data" v-on:click="generateFakeLessorData()"><span class="label">Test</span> Insert lessor details</div>
            <div class="generate-fake-data" v-on:click="generateFakeFarmerData()"><span class="label">Test</span> Insert farmer details</div>

            <div class="group">
                <label for="">FullName</label>
                <input type="text" placeholder="Enter" v-model="fullName" />
            </div>

            <div class="group">
                <label for="">Email Address</label>
                <input type="email" placeholder="Enter" v-model="emailAddress" />
            </div>

            <div class="group">
                <label for="">Phone Number</label>
                <input type="phone" placeholder="Enter" v-model="phone" />
            </div>

            <div class="group">
                <label for="">Password</label>
                <input type="password" placeholder="Enter" v-model="password" />
            </div>

            <div class="group">
                <label for="">Confirm Password</label>
                <input type="password" placeholder="Enter" v-model="confirmPassword" />
            </div>

            <p :class="purpose == 1 ? 'purpose checked' : 'purpose'" v-on:click="purpose = 1">
                <i class="fi fi-rr-check"></i>
                I want to lease my properties
            </p>

            <p :class="purpose == 2 ? 'purpose checked' : 'purpose'" v-on:click="purpose = 2">
                <i class="fi fi-rr-check"></i>
                I want to rent properties
            </p>

            <button v-on:click="attempt()">Register</button>
            <a href="/login">Login to an Existing Account</a>
        </div>
    </div>

    <Loading v-if="loading" :message="'Creating an Account'" />
    <Alert :message="alertMessage" v-if="alertMessage != ''" v-on:exit="alertMessage = ''" />
</section>
</template>

<script>
export default {
    layout: "landing",

    data() {
        return {
            purpose: 0,

            fullName: "",
            emailAddress: "",
            phone: "",
            password: "",
            confirmPassword: "",

            error: null,
            loading: false,
            alertMessage: ''
        };
    },

    methods: {
        attempt() {
            if (this.loading) {
                return
            }

            if (this.fullName == "") {
                this.alertMessage = "FullName is required"
            } else if (this.emailAddress == "") {
                this.alertMessage = "Email Address is required"
            } else if (this.phone == "") {
                this.alertMessage = "Phone number is required"
            } else if (this.password == "") {
                this.alertMessage = "Password is required"
            } else if (this.confirmPassword == "") {
                this.alertMessage = "Confirm password is required"
            } else if (this.password != this.confirmPassword) {
                this.alertMessage = "Password must be the same"
            } else {
                this.register();
            }
        },

        generateFakeLessorData() {
            this.fullName = "Investor TedPrime"
            this.emailAddress = "investor@tedprime.test"
            this.phone = "08111755759"
            this.password = "password"
            this.confirmPassword = "password"
            this.purpose = 1
        },

        generateFakeFarmerData() {
            this.fullName = "Farmer TedPrime"
            this.emailAddress = "farmer@tedprime.test"
            this.phone = "08111755759"
            this.password = "password"
            this.confirmPassword = "password"
            this.purpose = 2
        },

        register() {
            this.loading = true

            const url =
                "/register?name=" +
                this.fullName +
                "&email=" +
                this.emailAddress +
                "&password=" +
                this.password +
                "&phone=" +
                this.phone +
                "&purpose=" +
                this.purpose

            this.$axios.post(url).then((response) => {
                this.loading = false

                const data = response.data;
                console.log(data);

                if (data.status) {
                    this.$router.push('/login')
                } else {
                    this.error = data.message

                    if (this.error) {
                        if (this.error.name && this.error.name.length > 0) {
                            this.alertMessage = this.error.name[0]
                        } else if (this.error.email && this.error.email.length > 0) {
                            this.alertMessage = this.error.email[0]
                        } else if (this.error.password && this.error.password.length > 0) {
                            this.alertMessage = this.error.password[0]
                        } else {
                            this.alertMessage = this.error
                        }
                    } else {
                        this.alertMessage = "something went wrong"
                    }
                }
            });

        },
    },
};
</script>

<style scoped>
section {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    padding-bottom: 50px;
}

.app-min2-width {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.title {
    font-size: 40px;
    font-weight: 600;
    color: #27272a;
    text-align: center;
}

.desc {
    font-size: 20px;
    font-weight: 400;
    color: #27272a;
    text-align: center;
    opacity: 0.8;
}

.form {
    width: 400px;
    max-width: 100%;
    margin-top: 40px;
    border-radius: 20px;
}

.group {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    border-radius: 12px;
    padding: 6px 10px;
    padding-bottom: 0;
    background: #3c8497;
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

input {
    background: transparent;
    color: #ffffff;
    border: none;
    outline: none;
    padding: 5px 0;
    font-size: 16px;
}

label {
    line-height: 15px;
    color: #ffffff;
    font-size: 15px;
    font-weight: 300;
}

button {
    width: 100%;
    padding: 12px;
    color: #ffffff;
    background: #00c675;
    font-size: 20px;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 10px;
    margin-top: 40px;
}

input::placeholder {
    color: #ffffff;
    opacity: 0.8;
}

.form a {
    margin-top: 30px;
    color: #27272a;
    text-align: center;
    width: 100%;
    display: block;
    padding: 4px;
    font-size: 16px;
}

@media screen and (max-width: 700px) {
    .title {
        font-size: 30px;
        line-height: 40px;
    }

    .desc {
        font-size: 16px;
        margin-top: 10px;
    }
}
</style>
