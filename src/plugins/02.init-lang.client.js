import { useLocaleStore } from "~/stores/locale"
export default defineNuxtPlugin({
    name: 'init-lang',
    enforce: 'post',
    async setup(nuxtApp) {
        const { $conf: { countryCode } } = nuxtApp
        const { setLocale } = useLocaleStore()

        await setLocale(countryCode)
    }
})
