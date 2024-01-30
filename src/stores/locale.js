import { defineStore } from 'pinia'
export const useLocaleStore = defineStore('locale-store', () => {
    let locales = ref({})
    // let freshdeskURL = ref('')
    // let freshdeskPostfix = ref('.support.webuy.com')

    const $t = computed(() => {
        return (k, variables = {}) => {
            try {
                let val = k.split('.').reduce((o, i) => o[i], locales.value.default)
                Object.keys(variables).forEach((variable) => {
                    const value = variables[variable]
                    const regex = new RegExp(`{${variable}}`, 'g')
                    val = val.split(regex).join(value)
                  })
                return val != undefined ? val : k
            } catch (error) {
                return k
            }
        }
    })


    async function setLocale (countryCode) {
        try {
            locales.value = await import(`../locales/${countryCode}.js`)
        } catch (error) {
            locales.value = await import('../locales/uk.js')
        }
    }

   /*  function setFreshdeskUrl (country) {
        freshdeskURL.value = `//${country}${freshdeskPostfix.value}`

        return freshdeskURL.value
    } */

    return {$t, setLocale}
})
