<template>
<section>
    <div class="app-min-width">
        <div class="bottom-bar">
            <div class="grid">
                <div class="child">
                    <h3>Categories</h3>

                    <ul>
                        <li><a href="/assets?type=land">Lands</a></li>
                        <li><a href="/assets?type=machinery">Machineries</a></li>
                        <li><a href="/assets?type=iot">Internet of Things</a></li>
                        <li><a href="/assets?type=truck">Trucks</a></li>
                        <li><a href="/assets?type=others">Others</a></li>
                    </ul>
                </div>

                <div class="child">
                    <h3>Features</h3>

                    <ul>
                        <li><a href="/farm-guide">Farm Guide</a></li>
                    </ul>
                </div>

                <div class="child">
                    <h3>Contact</h3>

                    <ul>
                        <li><a href="tel: 08111755759">08111755759</a></li>
                        <li><a href="mailto: devarogundade@outlook.com">devarogundade@outlook.com</a></li>
                    </ul>
                </div>
            </div>
            <div class="trouble">
                <p>Having trouble using this website?</p>
                <a href="https://dev-arogundade.gitbook.io/agoralease/" target="_blank">Read our documentation</a>
            </div>
        </div>
    </div>
</section>
</template>

<style scoped>
section {
    background: #003543;
    display: flex;
    justify-content: center;
}

.bottom-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #fff;
}

.grid {
    width: 800px;
    max-width: 100%;
    display: flex;
    column-gap: 20px;
    justify-content: space-between;
    margin: 40px 0;
}

ul {
    margin-top: 20px;
}

ul a {
    color: #fff;
    opacity: 0.8;
    font-size: 14px;
    font-weight: 300;
    padding: 4px;
}

ul a:hover {
    text-decoration: underline;
}

.trouble {
    text-align: center;
    margin: 20px 0;
}

.trouble p {
    font-size: 18px;
}

.trouble a {
    color: #00dc82;
}

@media screen and (max-width: 1000px) {
  .grid {
    row-gap: 20px;
    flex-direction: column;
}

}
</style>
