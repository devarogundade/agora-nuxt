export default {
    target: 'static',

    head: {
        title: 'Agora - Agricultural Marketplace',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
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