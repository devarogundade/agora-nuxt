<template>
<section>
    <div class="app-min-width">
        <div class="call-to-action">
            <div class="text">
                <h3>The Largest Agriculture Lease Solution</h3>
                <p>
                    First Peer to Peer Agricultural Lease Platform. Increase your productivity with low cost in production.
                </p>

                <div class="actions">
                    <router-link to="/assets">
                        <div class="button">Rent</div>
                    </router-link>
                    <router-link to="/profile">
                        <div class="button">Lease</div>
                    </router-link>
                </div>
            </div>

            <div class="model">
                <model-obj v-if="hasMount" class="object" src="models/call-to-action.obj" mtl="models/call-to-action.mtl" :backgroundColor="bgColor" :controlsOptions="{
              enablePan,
              enableZoom,
              enableRotate,
            }" />
            </div>
        </div>
    </div>

    <div class="wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ebebeb" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
    </div>
</section>
</template>

<script>
import {
    ModelObj
} from "vue-3d-model";

export default {
    components: {
        ModelObj,
    },

    mounted() {
        this.hasMount = true;
    },

    data() {
        return {
            hasMount: false,
            bgColor: "#fff",
            enablePan: false,
            enableZoom: false,
            enableRotate: true,
        };
    },
};
</script>

<style scoped>
section {
    margin-top: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    user-select: none;
}

.call-to-action {
    display: grid;
    justify-content: space-around;
    grid-template-columns: 650px 300px;
    align-items: center;
}

.text {
    color: #27272a;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
}

.text h3 {
    font-size: 60px;
    line-height: 70px;
    font-family: "DM Serif Display", serif;
}

.text p {
    font-size: 20px;
    margin-top: 15px;
    font-weight: 400;
    opacity: 0.8;
}

.model {
    height: 100%;
}

.actions {
    display: grid;
    grid-template-columns: auto auto;
    width: 250px;
    column-gap: 20px;
    margin-top: 40px;
}

.actions .button {
    padding: 10px 25px;
    border-radius: 10px;
    background: #7be9bb;
    font-weight: 600;
    color: #161704;
    font-size: 15px;
    font-weight: 600;
}

.wave {
    width: 100%;
    height: fit-content;
    top: 250px;
}

@media screen and (max-width: 1000px) {
    .call-to-action {
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
    }

    .model {
        margin-top: 30px;
    }

    .text h3 {
        font-size: 50px;
        line-height: 60px;
    }

    section {
        margin-top: 60px;
    }
}
</style>
