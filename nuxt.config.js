export default {
    target: 'static',

    head: {
        title: 'agora-nuxt',
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
            {
                type: 'javascript',
                href: '../static/js/model-viewer.js'
            }
        ]
    },

    css: [
        '@/static/css/global.css'
    ],

    plugins: [],

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