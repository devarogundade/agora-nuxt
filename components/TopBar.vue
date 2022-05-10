<template>
<section>
    <!-- <a href="https://agrotech.ng/" target="_blank">
        <section class="purpose">
            <p>
                An Agro-Tech Hackathon Project.
                <b>Learn more</b>
            </p>
        </section>
    </a> -->
    <section class="header">
        <div class="app-width">
            <div class="header-grid">
                <div class="logo">
                    <a href="/">
                        <h2>AgoraLease</h2>
                    </a>
                </div>

                <div class="menu">
                    <div class="items">
                        <div class="item">
                            <p class="item-name">
                                Explore
                                <i class="fi fi-rr-angle-small-down"></i>
                            </p>

                            <div class="dropdown">
                                <ul>
                                    <li>
                                        <a href="/land">
                                            <i class="fi fi-rr-data-transfer"></i>
                                            <div class="text">
                                                <h3>Lands</h3>
                                                <p>Lagos, Ibadan, and other locations..</p>
                                            </div>
                                        </a>
                                    </li>

                                    <li>
                                        <a href>
                                            <i class="fi fi-rr-strawberry"></i>
                                            <div class="text">
                                                <h3>Best for farming</h3>
                                                <p>Rich nutrient soil for your crops.</p>
                                            </div>
                                        </a>
                                    </li>

                                    <li>
                                        <a href>
                                            <i class="fi fi-rr-tractor"></i>
                                            <div class="text">
                                                <h3>Poultry</h3>
                                                <p>Tractors, Ploughs, others..</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="item">
                            <p class="item-name">
                                Sign in
                                <i class="fi fi-rr-angle-small-down"></i>
                            </p>

                            <div class="dropdown">
                                <ul>
                                    <li>
                                        <router-link to="/profile">
                                            <i class="fi fi-rr-data-transfer"></i>
                                            <div class="text">
                                                <h3>Login</h3>
                                                <p>Welcome back to AgoraLands..</p>
                                            </div>
                                        </router-link>
                                    </li>

                                    <li>
                                        <a href>
                                            <i class="fi fi-rr-strawberry"></i>
                                            <div class="text">
                                                <h3>Register</h3>
                                                <p>Get started today. Rent or Lease your lands.</p>
                                            </div>
                                        </a>
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
                                        <a href>
                                            <i class="fi fi-rr-comment-alt"></i>
                                            <div class="text">
                                                <h3>Blogs</h3>
                                                <p>Read news from agora.</p>
                                            </div>
                                        </a>
                                    </li>

                                    <li>
                                        <a href>
                                            <i class="fi fi-rr-comments"></i>
                                            <div class="text">
                                                <h3>Faqs</h3>
                                                <p>Frequently Asked Questions.</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="item">
                            <p class="item-name">
                                Support
                                <i class="fi fi-rr-interrogation"></i>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="search">
                    <div class="input">
                        <input type="text" placeholder="Search location, properties.." />
                        <i class="fi fi-rr-microphone">
                            <p>Use voice</p>
                        </i>
                    </div>
                </div>
            </div>
        </div>
    </section>
</section>
</template>

<style scoped>
.purpose {
    width: 100%;
    padding: 6px;
    background: #00c675;
    text-align: center;
}

.purpose p {
    color: #161704;
    font-size: 14px;
    font-weight: normal;
}

.purpose:hover {
    background: #4de7a8;
}

.logo {
    display: flex;
    align-items: center;
}

.logo h2 {
    color: #ffffff;
    font-size: 24px;
    font-weight: 600;
}

.header {
    height: 65px;
    width: 100%;
    display: flex;
    justify-content: center;
}

.header-grid {
    display: grid;
    height: 100%;
    grid-template-columns: 150px auto 150px;
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
    color: #ffffff;
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
    z-index: 2;
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

@media screen and (max-width: 1000px) {
    .header-grid {
        grid-template-columns: 100%;
        row-gap: 20px;
    }

    .menu .item:last-child {
        display: none;
    }

    .dropdown {
        position: fixed;
        width: 80%;
        left: 10%;
        top: 110px;
        background: #024e61;
    }

    .search {
        margin-top: 20px;
    }

    .logo {
        margin-top: 20px;
        justify-content: center;
    }
}
</style>
