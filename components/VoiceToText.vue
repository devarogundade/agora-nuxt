<template>
<section>
    <div class="voice-to-text">
        <div class="title" v-if="!speaking">Click the mic and speak!</div>
        <div class="title" v-if="speaking">I'm listening</div>
        <div class="input">
            <div :class="speaking ? 'button speaking' : 'button'" ref="search">
                <i class="fi fi-rr-microphone"></i>
            </div>
        </div>
        <p class="sample">{{ text != "" ? text : "Try saying 'I need a land at enugu around 100 Naira per day'" }}</p>
        <i class="fi fi-rr-cross close" v-on:click="$emit('exit')"></i>
    </div>

    <Alert :message="alertMessage" v-if="alertMessage != ''" v-on:exit="alertMessage = ''" />
</section>
</template>

<script>
export default {
    data() {
        return {
            text: '',

            alertMessage: '',
            speaking: false
        }
    },

    mounted() {
        const startRecognizeOnceAsyncButton = this.$refs['search']
        const serviceRegion = "westus"
        const languageTargetOptions = "en"
        const languageSourceOptions = "en-US"

        // context
        const _this = this

        startRecognizeOnceAsyncButton.addEventListener("click", function () {
            startRecognizeOnceAsyncButton.disabled = true;
            _this.speaking = true

            // configure MS Speech to Text SDK
            const speechConfig = SpeechSDK.SpeechTranslationConfig.fromSubscription("8c857a412d4a4414945c7af7cfe90970", serviceRegion)
            speechConfig.speechRecognitionLanguage = languageSourceOptions;
            speechConfig.addTargetLanguage(languageTargetOptions)

            const audioConfig = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput()
            let recognizer = new SpeechSDK.TranslationRecognizer(speechConfig, audioConfig)

            _this.text = ""

            recognizer.recognizeOnceAsync(
                function (result) {
                    startRecognizeOnceAsyncButton.disabled = false
                    _this.speaking = false

                    if (result.reason === SpeechSDK.ResultReason.TranslatedSpeech) {
                        let translation = result.translations.get(languageTargetOptions)
                        _this.text += translation
                    }

                    recognizer.close()
                    recognizer = undefined
                },

                function () {
                    startRecognizeOnceAsyncButton.disabled = false
                    _this.speaking = false
                    _this.alertMessage = "Something is wrong with voice search"

                    recognizer.close()
                    recognizer = undefined
                });
        });

        if (!!window.SpeechSDK) {
            SpeechSDK = window.SpeechSDK;
            startRecognizeOnceAsyncButton.disabled = false;
            _this.speaking = false
        }
    },
}
</script>

<style scoped>
section {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    background: #1b7966e1;
    width: 100%;
    height: 100vh;
    z-index: 30;
    top: 0;
    left: 0;
}

.input {
    column-gap: 10px;
    align-items: center;
    margin-top: 10px;
    background: #00c675;
    height: 300px;
    width: 400px;
    border-radius: 20px;
    max-width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
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
    color: #27272a;
    background: #ffffffee;
    padding: 5px 15px;
    font-size: 40px;
    cursor: pointer;
    width: 100px;
    height: 100px;
    border-radius: 200px;
    border: 10px #61e7af solid;
    box-shadow: 0 0 4px #ccc;
}

.button i {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.speaking {
    animation: speaking 800ms ease-out infinite;
}

@keyframes speaking {

    0%,
    100% {
        transform: scale(1, 1);
    }

    50% {
        transform: scale(1.1, 1.1);
    }
}

.voice-to-text .close {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #27272a;
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
    color: #27272a;
    width: 300px;
    max-width: 100%;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
}
</style>
