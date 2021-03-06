export default {
    target: 'static',

    head: {
        title: 'Peer to Peer Agricultural Leasing Marketplace',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
            { name: 'theme-color', content: '#003543' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

        ],
        script: [{
            src: "https://aka.ms/csspeech/jsbrowserpackageraw",
            defer: true
        }]
    },

    css: [
        '@/static/css/global.css'
    ],

    components: true,

    buildModules: [],

    modules: [
        '@nuxtjs/axios', ['cookie-universal-nuxt', { alias: 'cache', parseJSON: true }],
        '@nuxtjs/auth-next'
    ],

    axios: {
        baseURL: 'https://agoralease.herokuapp.com/api/',
    },

    auth: {
        strategies: {
            local: {
                endpoints: {
                    login: { url: '/login', method: 'post' },
                    user: { url: '/user', method: 'get' },
                    logout: false
                },
                token: {
                    property: 'data.token',
                    type: 'Bearer',
                    required: true,
                },
                user: {
                    property: 'data'
                }
            }
        }
    },

    generate: {
        fallback: true
    },

}