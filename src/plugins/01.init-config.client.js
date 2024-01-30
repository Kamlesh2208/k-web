import globalConfig from '~/config/globalConfig.js'
// import appConfig from '~/config/appConfig.js'

export default defineNuxtPlugin({
    name: 'init-config',
    enforce: 'pre',
    async setup(nuxtApp) {
        const { hostname } = window.location
        const countryCode = hostname.substring(0,2)
        const { common, env } = globalConfig
        // const { appConf } = appConfig
        const { company, companydomainslug } = common

        let branchId = hostname[hostname.indexOf(companydomainslug) + companydomainslug.length]
        branchId = (/\d/.test(branchId)) ? (branchId) : ''
        const envConfig = env.find((configValue) => hostname.indexOf(configValue.url) !== -1)

        const _format = (targetValue, ...args) => {
            return targetValue.replace(/{([0-9]+)}/g, function (match, index) {
                // check if the argument is present
                return typeof args[index] == 'undefined' ? match : args[index];
            });
        }

        for (const k in envConfig) {
            envConfig[k] = (typeof envConfig[k] === 'string') ? _format(envConfig[k], company, countryCode, branchId) : envConfig[k]
        }

        const conf = {countryCode, company, ...common, ...envConfig}

        return {
            provide: {
                conf
            }
        }
    }
})
