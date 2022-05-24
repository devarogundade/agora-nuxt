<template>
<section>
    <div class="app-min-width">
        <div class="bottom-bar">
            <div class="grid">
              <div class="child">
                <h3>Categories</h3>

                <a href="">Lands</a>
                <a href="">Machineries</a>
                <a href="">Internet of Things</a>
                <a href="">Trucks</a>
                <a href="">Others</a>
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
</style>
