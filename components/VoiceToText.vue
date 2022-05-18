<template>
<section>
    <div class="voice-to-text">
        <p>I'm listening..</p>
        <div class="input">
            <input type="text" placeholder="Text" v-model="text" id="" />
            <!-- <div class="button" v-on:click="readFile()">Test</div> -->
            <div class="button" v-on:click="search()">Search</div>
        </div>
        <i class="fi fi-rr-cross" v-on:click="$emit('exit')"></i>
    </div>
</section>
</template>

<script>
export default {
    data() {
        return {
            text: ''
        }
    },

    methods: {
        search() {
            if (this.text == '') {
                alert('Say something to your mic')
                return
            }

            this.$emit('search', this.text)
        },

        // readFile() {
        //     const sdk = require("microsoft-cognitiveservices-speech-sdk");
        //     const speechConfig = sdk.SpeechConfig.fromSubscription("9a6e6f80-18ea-4c82-af12-782b237e84a3", "	en-US");
        //     speechConfig.speechRecognitionLanguage = "en-US";

        //     const reader = new FileReader()
        //     reader.onload = (res) => {
        //         console.log(res.target.result);
        //     }
        //     reader.onerror = (err) => console.log(err);
        //     reader.readAsText(this.file);

        //     let audioConfig = sdk.AudioConfig.fromWavFileInput(fs.readFileSync("test.wav"));

        //     const speechRecognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);
        //     speechRecognizer.recognizeOnceAsync(result => {
        //         switch (result.reason) {
        //             case sdk.ResultReason.RecognizedSpeech:
        //                 this.text = result.text
        //                 break;
        //             case sdk.ResultReason.NoMatch:
        //                 alert("NOMATCH: Speech could not be recognized.");
        //                 break;
        //             case sdk.ResultReason.Canceled:
        //                 const cancellation = sdk.CancellationDetails.fromResult(result);
        //                 alert(`CANCELED: Reason=${cancellation.reason}`);

        //                 if (cancellation.reason == sdk.CancellationReason.Error) {
        //                     console.log(`CANCELED: ErrorCode=${cancellation.ErrorCode}`);
        //                     console.log(`CANCELED: ErrorDetails=${cancellation.errorDetails}`);
        //                     alert("CANCELED: Did you set the speech resource key and region values?");
        //                 }
        //                 break;
        //         }
        //         speechRecognizer.close();
        //     });
        // }
    }
}
</script>

<style scoped>
section {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    background: #000000ee;
    width: 100%;
    height: 100vh;
    z-index: 30;
    top: 0;
    left: 0;
}

.input {
    display: grid;
    grid-template-columns: 220px 80px;
    column-gap: 10px;
    align-items: center;
    margin-top: 10px;
}

input {
    padding: 5px 15px;
    border-radius: 10px;
    border: none;
    outline: none;
    font-size: 16px;
}

p {
    font-size: 24px;
}

.voice-to-text {
    color: white;
    text-align: center;
}

.button {
    background: #00c675;
    color: #000;
    padding: 5px 15px;
    font-size: 16px;
    border-radius: 10px;
    cursor: pointer;
}

.voice-to-text i {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    background: #ffffff;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    position: absolute;
    top: 40px;
    right: 40px;
}
</style>
