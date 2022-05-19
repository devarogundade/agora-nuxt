<template>
<section>
    <div class="voice-to-text">
        <p class="title">I'm listening..</p>
        <div class="input">
            <input type="text" placeholder="Text" disabled v-model="text" id="" />
            <div class="button" v-on:click="search()">Search</div>
        </div>
        <p class="sample">Try saying 'I need a land at enugu around 100 Naira per day'</p>
        <i class="fi fi-rr-cross" v-on:click="$emit('exit')"></i>
    </div>

    <Alert :message="alertMessage" v-if="alertMessage != ''" v-on:exit="alertMessage = ''" />
</section>
</template>

<script>
export default {
    data() {
        return {
            text: '',

            alertMessage: ''
        }
    },

    methods: {
        search() {
            if (this.text == '') {
                this.alertMessage = 'Say something to your mic'
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
    background: #000000b7;
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
    background: #ffffff;
    outline: none;
    font-size: 16px;
}

.title {
    font-size: 24px;
}

.voice-to-text {
    color: white;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
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

.sample {
  font-size: 12px;
  margin-top: 10px;
  background: rgba(245, 230, 230, 0.747);
  border-radius: 10px;
  padding: 3px 6px;
  color: #000;
  width: 300px;
  max-width: 100%;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}
</style>
