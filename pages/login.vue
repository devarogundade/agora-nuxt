<template>
<section>
    <div class="app-min-width">
        <h3 class="title">Welcome back to AgoraLease</h3>
        <p class="desc">Keep your password safe.</p>

        <div class="form">
            <div class="group">
                <label for="">Email Address</label>
                <input type="text" placeholder="Enter" v-model="emailAddress" />
            </div>

            <div class="group">
                <label for="">Password</label>
                <input type="password" placeholder="Enter" v-model="password" />
            </div>

            <p :class="remember ? 'purpose checked' : 'purpose'" v-on:click="remember = !remember">
                <i class="fi fi-rr-check"></i>
                Remember me
            </p>

            <button v-on:click="attempt()">Login</button>
            <a href="/register">Register a New Account</a>
        </div>
    </div>

    <Loading v-if="loading" :message="'Authenticating'" />
</section>
</template>

<script>
export default {
    layout: "landing",

    data() {
        return {
            remember: false,

            emailAddress: "",
            password: "",

            loading: false,
        };
    },

    methods: {
        attempt() {
            if (this.loading) {
                return;
            }

            if (this.emailAddress == "") {
                alert("Email Address is required");
            } else if (this.password == "") {
                alert("Password is required");
            } else {
                this.login();
            }
        },

        login() {
            this.loading = true;

            const url =
                "/login?email=" + this.emailAddress + "&password=" + this.password;

            this.$axios.post(url).then((response) => {
                this.loading = false;

                const data = response.data;

                console.log(data);

                if (data.status) {
                    setCookie(data.data, 'user')
                    this.$router.push("profile")
                } else {
                    this.error = data.message;

                    if (this.error) {
                        if (this.error.email && this.error.email.length > 0) {
                            alert(this.error.email[0]);
                        } else if (this.error.password && this.error.password.length > 0) {
                            alert(this.error.password[0]);
                        } else {
                            alert(this.error);
                        }
                    } else {
                        alert("something went wrong");
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

.app-min-width {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.title {
    font-size: 40px;
    font-weight: 600;
    color: #ffffff;
    text-align: center;
}

.desc {
    font-size: 20px;
    font-weight: 400;
    color: #ffffff;
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
    color: white;
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
