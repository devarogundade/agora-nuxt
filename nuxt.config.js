export default {
    target: 'static',

    head: {
        title: 'AgoraLands - Agricultural Land Leasing Marketplace',
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

        ]
    },

    css: [
        '@/static/css/global.css'
    ],

    plugins: [
        { src: '@/plugins/vue-awesome-swiper.js', mode: 'client' }
    ],

    components: true,

    buildModules: [],

    modules: [
        '@nuxtjs/axios', ['cookie-universal-nuxt', { alias: 'cache', parseJSON: true }],
        '@nuxtjs/auth-next'
    ],

    axios: {
        baseURL: 'http://127.0.0.1:8000/api/',
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

    build: {}
}