export default {
  ssr: true,
  target: 'server',
  head: {
    title: 'template-nuxt2',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    '@unocss/reset/tailwind.css',
    '~/styles/main.css',
    '~/assets/ant/main.less'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/uno.ts',
    '~/plugins/http.ts',
    '~/plugins/ant-design-vue'
  ],

  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api/module',
    [
      'unplugin-auto-import/nuxt',
      {
        imports: ['@nuxtjs/composition-api']
      }
    ]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@unocss/nuxt',
    'cookie-universal-nuxt'
  ],

  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
    proxy: true,
    prefix: '/api'
  },

  proxy: {
    '/api': {
      target: 'http://localhost:3001',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true, // 提取css到单独link文件
    transpile: [/^ant-design-vue/],
    optimization: {
      splitChunks: {
        // 代码打包分割规则
        cacheGroups: {
          antDesignVue: {
            name: 'chunk-antd',
            priority: 10,
            test: /[\\/]node_modules[\\/]_?ant-design-vue(.*)/
          }
        }
      }
    },
    loaders: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
          math: 'always'
        }
      }
    },
    babel: {
      presets ({ envName }) {
        const envTargets = {
          client: { ie: 9 },
          server: { node: 'current' }
        }
        return [
          [
            '@nuxt/babel-preset-app',
            {
              targets: envTargets[envName]
            }
          ]
        ]
      }
    }
  },

  router: {
    middleware: ['auth']
  },

  postcss: {
    plugins: {
      'postcss-url': false
    },
    preset: {
      autoprefixer: {
        grid: true
      }
    }
  }
}
