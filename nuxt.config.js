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
            { name: 'theme-color', content: '#00c675' }
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
        '@nuxtjs/axios',
    ],

    axios: {
        baseURL: '/',
    },


    build: {}
}