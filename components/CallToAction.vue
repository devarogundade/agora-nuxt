<template>
<section>
    <div class="app-width">
        <div class="call-to-action">
            <div class="text">
                <h3>The Largest Agriculture Land Solution</h3>
                <p>
                    Rent and Lease your vacant land to promote agriculture.
                    <br />And start earning every seconds.
                </p>

                <div class="actions">
                    <router-link to>
                        <div class="button">Rent</div>
                    </router-link>
                    <router-link to>
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
            <path fill="#fafafa" fill-opacity="1" d="M0,256L24,240C48,224,96,192,144,170.7C192,149,240,139,288,154.7C336,171,384,213,432,208C480,203,528,149,576,117.3C624,85,672,75,720,80C768,85,816,107,864,138.7C912,171,960,213,1008,234.7C1056,256,1104,256,1152,261.3C1200,267,1248,277,1296,256C1344,235,1392,181,1416,154.7L1440,128L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z" />
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
            bgColor: "#002028",
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
}

.call-to-action {
    display: grid;
    justify-content: space-around;
    grid-template-columns: 650px 300px;
    align-items: center;
}

.text {
    color: #ffffff;
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
    opacity: 0.6;
}

.model {
    position: relative;
    height: 100%;
}

.object {
    position: absolute;
    top: 0;
    left: 50px;
}

.actions {
    display: grid;
    grid-template-columns: auto auto auto;
    width: 300px;
    column-gap: 20px;
    margin-top: 40px;
}

.actions .button {
    background: #00c675;
    padding: 10px;
    border-radius: 10px;
    color: #161704;
    font-size: 15px;
    font-weight: 500;
}

.wave {
    width: 100%;
    height: fit-content;
    top: 250px;
}
</style>
