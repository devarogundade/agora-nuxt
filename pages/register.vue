<template>
<section>
    <div class="app-min-width">
        <h3 class="title">Join our community of investors and farmers</h3>
        <p class="desc">You will be able to leased your Lands, Machinery and IoTs to farmers and also promoting agriculture in Nigeria.</p>

        <div class="form">
            <div class="group">
                <label for="">FullName</label>
                <input type="text" placeholder="Enter">
            </div>

            <div class="group">
                <label for="">Email Address</label>
                <input type="text" placeholder="Enter">
            </div>

            <div class="group">
                <label for="">Password</label>
                <input type="password" placeholder="Enter">
            </div>

            <div class="group">
                <label for="">Confirm Password</label>
                <input type="password" placeholder="Enter">
            </div>

            <!-- just for survey -->

            <p :class="purpose == 1 ? 'purpose checked' : 'purpose'" v-on:click="purpose = 1">
                <i class="fi fi-rr-check"></i>
                I want to lease my properties
            </p>

            <p :class="purpose == 2 ? 'purpose checked' : 'purpose'" v-on:click="purpose = 2">
                <i class="fi fi-rr-check"></i>
                I want to rent properties
            </p>

            <button>Register</button>
        </div>

    </div>
</section>
</template>

<script>
export default {
    layout: 'landing',

    data() {
        return {
            purpose: 0
        }
    }
}
</script>

<style scoped>
section {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    padding-bottom: 100px;
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
