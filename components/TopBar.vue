<template>
<section>
    <section class="header">
        <div class="app-width">
            <div class="header-grid">
                <div class="logo">
                    <a href="/">
                        <img src="/images/logo.png" alt="">
                    </a>

                    <div class="handburger" v-on:click="toggleMenu()">
                        <i class="fi fi-rr-list"></i>
                    </div>
                </div>

                <div class="menu" ref="menu">
                    <div class="items">
                        <div class="item">
                            <router-link to="/assets">
                                <p class="item-name">
                                    Explore
                                </p>
                            </router-link>
                        </div>

                        <div class="item" v-if="!$auth.loggedIn">
                            <p class="item-name">
                                Sign in
                                <i class="fi fi-rr-angle-small-down"></i>
                            </p>

                            <div class="dropdown">
                                <ul>
                                    <li>
                                        <router-link to="/login">
                                            <i class="fi fi-rr-user"></i>
                                            <div class="text">
                                                <h3>Login</h3>
                                                <p>Welcome back to AgoraLands..</p>
                                            </div>
                                        </router-link>
                                    </li>

                                    <li>
                                        <router-link to="/register">
                                            <i class="fi fi-rr-user-add"></i>
                                            <div class="text">
                                                <h3>Register</h3>
                                                <p>Get started today. Rent and/or Lease.</p>
                                            </div>
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="item" v-else>
                            <p class="item-name">
                                My Profile
                                <i class="fi fi-rr-angle-small-down"></i>
                            </p>

                            <div class="dropdown">
                                <ul>
                                    <li>
                                        <router-link to="/profile">
                                            <i class="fi fi-rr-strawberry"></i>
                                            <div class="text">
                                                <h3>Assets</h3>
                                                <p>Edit, Create or Modify your items.</p>
                                            </div>
                                        </router-link>
                                    </li>

                                    <li>
                                        <router-link to="/profile/offers">
                                            <i class="fi fi-rr-dollar"></i>
                                            <div class="text">
                                                <h3>Offers</h3>
                                                <p>See all offers sent or received.</p>
                                            </div>
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="item">
                            <p class="item-name">
                                Learn
                                <i class="fi fi-rr-angle-small-down"></i>
                            </p>

                            <div class="dropdown">
                                <ul>
                                    <li>
                                        <a href="https://dev-arogundade.gitbook.io/agoralease/" target="_blank">
                                            <i class="fi fi-rr-comment-alt"></i>
                                            <div class="text">
                                                <h3>Documentation</h3>
                                                <p>Read about from agora.</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="item">
                            <p class="item-name">
                                Farm Guide
                                <i class="fi fi-rr-interrogation"></i>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="search">
                    <div class="input">
                        <input type="search" placeholder="Search anything.." v-on:keyup.enter="search()" v-model="text" />
                        <i class="fi fi-rr-microphone" v-on:click="voice = true">
                            <p>Use voice</p>
                        </i>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <VoiceToText v-if="voice" v-on:exit="voice = false" v-on:search="searchFromVoice($event)" />
</section>
</template>

<script>
export default {
    data() {
        return {
            voice: false,
            text: ''
        }
    },

    methods: {
        searchFromVoice(text) {
            this.voice = false
            this.text = text
        },

        search() {
            if (this.text == '') {
                return
            }

            window.open('/search?text=' + this.text, "_self")
        },

        toggleMenu() {
            this.$refs['menu'].classList.toggle('open-menu')
        }
    }
}
</script>

<style scoped>
section {
    height: fit-content;
    position: sticky;
    z-index: 10;
    top: 0;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
}

.logo {
    display: flex;
    align-items: center;
}

.logo img {
    height: 40px;
}

.header {
    width: 100%;
    min-height: 70px;
    display: flex;
    justify-content: center;
}

.header-grid {
    display: grid;
    min-height: 100%;
    grid-template-columns: 200px auto 200px;
    column-gap: 50px;
}

.menu {
    height: 100%;
    user-select: none;
}

.items {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.item {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    cursor: pointer;
    user-select: none;
}

.item-name {
    color: #27272a;
    font-size: 16px;
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

.item:hover .dropdown {
    display: block !important;
}

.dropdown {
    position: absolute;
    display: none;
    background: #003543;
    top: 65px;
    width: 300px;
    padding: 5px;
    border-radius: 10px;
    z-index: 20;
}

.dropdown li {
    padding: 10px;
    border-radius: 10px;
}

.dropdown li a {
    display: grid;
    grid-template-columns: 35px auto;
    height: 35px;
    column-gap: 10px;
}

.dropdown ul i {
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    border-radius: 10px;
}

.dropdown li:hover {
    background: #002028;
}

.item:first-child ul i {
    background: #429988;
    border-radius: 10px;
}

.item:nth-child(2) ul i {
    background: #22d3ee;
}

.item:nth-child(3) ul i {
    background: #078ce5;
}

.dropdown .text {
    color: #ffffff;
    height: 35px;
}

.dropdown h3 {
    font-size: 14px;
    line-height: 18px;
    font-weight: 500;
}

.dropdown p {
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
}

/* search */

.search {
    display: flex;
    align-items: center;
}

.input {
    width: 100%;
    height: 40px;
    background: #003543;
    border-radius: 200px;
    display: grid;
    grid-template-columns: auto 35px;
    column-gap: 10px;
    padding: 5px 5px 5px 10px;
}

.input:hover i {
    transform: scale(1.5, 1.5);
}

input {
    height: 100%;
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
    color: #ffffff;
    font-size: 15px;
}

input::placeholder {
    color: #ffffff;
    opacity: 0.6;
}

.input i {
    height: 100%;
    width: 30px;
    background: #4de7a8;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #161704;
    cursor: pointer;
    border-radius: 50%;
    position: relative;
}

.input p {
    position: absolute;
    top: 35px;
    width: max-content;
    background: #ffffff;
    font-size: 8px;
    text-align: center;
    border-radius: 200px;
    padding: 2px 8px;
    display: none;
    color: #161704;
}

.input:hover p {
    display: block !important;
}

.handburger {
    display: none;
}

@media screen and (max-width: 1100px) {
    section {
        top: 0;
    }

    .header-grid {
        grid-template-columns: 100%;
    }

    .menu {
        position: fixed;
        top: 100vh;
        left: 0;
        width: 100%;
        background: #002028;
        z-index: 10;
        padding: 20px;
        height: 100vh;
    }

    .open-menu {
        top: 65px !important;
    }

    .logo {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
    }

    .items {
        flex-direction: column;
        height: fit-content;
    }

    .item {
        position: unset;
        flex-direction: column;
        margin: 10px 0;
    }

    .item-name {
        color: #ffffff;
    }

    .handburger {
        display: block !important;
        cursor: pointer;
    }

    .handburger i {
        font-size: 26px;
        height: 100%;
        display: flex;
        align-items: center;
    }

    .dropdown {
        position: unset;
        width: 300px;
        left: 10%;
        top: 50px;
        background: #024e61;
        display: block;
    }

    .search {
        margin: 10px 0;
    }

    input {
        font-size: 16px;
    }

    .input {
        height: 50px;
    }

    .input i {
        width: 40px;
        margin-left: -10px;
    }

    .input p {
        top: 42px;
        padding: 2px 4px;
    }
}

@media screen and (max-width: 700px) {
    .search {
        margin: 5px 0;
    }
}
</style>
