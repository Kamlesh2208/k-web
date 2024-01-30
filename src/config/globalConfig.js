import pkg from '~/package.json'

export default {
    common: {
        platformId: 16,
        lsconfig: {
            driver: "LOCALSTORAGE",
            name: "kidx",
            storeName: "v1",
            version: 1.0,
            description: "KidX v1.0.0",
        },
        lscartkey: "myCart",
        lsUserKey: "user",
        lsTokenDetailsKey: "tokenDetails",
        lsVoucherInfoKey: "voucherInfo",
        lsSelectedVoucherKey: "selectedVouchers",
        lswebordernumkey: 'webordernumber',
        cookieKeys: {
            pricespy: 'pjref',
            ideoclickid: 'idealoClickId'
        },
        webuymode: "webuy",
        wesellmode: "wesell",
        wssversion: "v3",
        suffixcurrencysymbol: ["pl", "es", "ic"],
        showCounterfeitProductPolicy: ['uk', 'au', 'ie', 'in'],
        company: "kex",
        companydomainslug: "kidx",
        pcaScpturl: "https://services.postcodeanywhere.co.uk/js/captureplus-2.30.min.js?key=",
        pcaCssurl: "https://services.postcodeanywhere.co.uk/css/captureplus-2.30.min.css?key=",
        validPaymentIds: {
            paypal: 8,
            voucher: 12,
            worldPay: 20,
            applePay: 22,
            googlePay: 24,
            card: 1,
            ideal: 2,
            przelewy: 3,
            billdesk: 4
        },
        checkoutConstants : {
            deliveryMethods: {
                delivery: 1,
                collection: 2,
            }
        },
        paymentTypeModes:{
            weBuy : 1,
            weSell : 2,
            testDrop : 4,
        },
        gmapJs: "https://cdnjs.cloudflare.com/ajax/libs/gmaps.js/0.4.25/gmaps.min.js",
        twoLetterISOCountryCode: {uk: 'GB', my: 'MY', ie: 'IE', au: 'AU', in: 'IN', es: 'ES', mx: 'MX', nl: 'NL', pl: 'PL', pt: 'PT', it: 'IT', ic: 'ES'},
        showKmFirstCountryArr : ['es', 'ic'],
        languageMap: {
            uk: 'en',
            ie: 'en',
            au: 'en',
            in: 'en',
            ic: 'es',
            es: 'es',
            mx: 'es',
            it: 'it',
            nl: 'nl',
            pl: 'pl',
            pt: 'pt'
        },
        defaultTitleMessage: {
            'uk': 'CeX (UK) Buy & Sell Games, Phones, DVDs, Blu-ray, Electronics, Computing, Vision & CDs',
            'au': 'CeX (AU) Buy & Sell Games, Phones, DVDs, Blu-ray, Electronics, Computing, Vision & CDs',
            'es': 'CeX (ES) Compramos y vendemos Juegos, DVDs, Componentes de PC, Software, Teléfonos y Electrónica',
            'ic': 'CeX (IC) Compramos y vendemos Juegos, DVDs, Componentes de PC, Software, Teléfonos y Electrónica',
            'ie': 'CeX (IE) Buy & Sell Games, Phones, DVDs, Blu-ray, Electronics, Computing, Vision & CDs',
            'in': 'CeX (IN) Buy & Sell Games, Phones, DVDs, Blu-ray, Electronics, Computing, Vision & CDs',
            'it': 'CeX (IT) Buy & Sell Games, Phones, DVDs, Blu-ray, Electronics, Computing, Vision & CDs',
            'mx': 'CeX (MX) : Buy & Vender Juegos, Celulares, DVD, Blu-ray, Electrónica, Computación, Visión & CDs.',
            'my': 'CeX (MY) Buy & Sell Games, Phones, DVDs, Blu-ray, Electronics, Computing, Vision & CDs',
            'nl': 'CeX (NL) :Begin pagina',
            'pl': 'CeX (PL) :Strona główna',
            'pt': 'CeX (PT) : Página Inicial',
        },
        decimalFormatter: {
            'uk': 2,
            'au': 2,
            'es': 2,
            'ic': 2,
            'ie': 2,
            'it': 2,
            'in': 0,
            'mx': 2,
            'my': 0,
            'nl': 2,
            'pl': 2,
            'pt': 2
        },
    },
    env: [
        {
            url: "dev.kidx",
            wssbaseurl: "https://dev-wss2.{0}.{1}.kidx.dev",
            wssauthbaseurl: "https://dev-oauth2.{0}.{1}.kidx.dev",
            wssauthbaseurlprotocol: "https://",
            version: "v3",
            cookieDomain: ".kidx.dev",
            loggerConfig : {
                dsn: 'https://00eef6e89359cd44cb97d365299d3569@sentrynew.webuy.dev/2',
                driver: 'Sentry',
                releaseVersion: pkg.version || '',
                brandName: 'KidX',
                country: 'UK',
                environment: 'development',
                debug: false
            }
        },
        {
            url: "uatat.webuy.dev",
            wssbaseurl: "https://uatat-wss2.{0}.{1}.webuy.dev",
            wssauthbaseurl: "https://uatat-oauth2.{0}.{1}.webuy.dev",
            wssauthbaseurlprotocol: "https://",
            freshdeskbaseurl: "https://{1}.support.webuy.com",
            version: "v3",
            cookieDomain: ".webuy.dev",
            loggerConfig : {
                dsn: 'https://00eef6e89359cd44cb97d365299d3569@sentrynew.webuy.dev/2',
                driver: 'Sentry',
                releaseVersion: pkg.version || '',
                brandName: 'KidX',
                country: 'UK',
                environment: 'development',
                debug: false
            }
        },
        {
            url: "penuat.webuy.tools",
            wssbaseurl: "https://stageuat-wss2.{0}.{1}.webuy.tools",
            wssauthbaseurl: "https://stageuat-oauth2.{0}.{1}.webuy.tools",
            wssauthbaseurlprotocol: "https://",
            freshdeskbaseurl: "https://{1}.support.webuy.com",
            version: "v3",
            cookieDomain: ".webuy.tools",
            loggerConfig : {
                dsn: 'https://00eef6e89359cd44cb97d365299d3569@sentrynew.webuy.dev/2',
                driver: 'Sentry',
                releaseVersion: pkg.version || '',
                brandName: 'KidX',
                country: 'UK',
                environment: 'development',
                debug: false
            }
        },
        {
            url: "uat.webuy.tools",
            wssbaseurl: "https://uat-wss2.{0}.{1}.webuy.tools",
            wssauthbaseurl: "https://uat-oauth2.{0}.{1}.webuy.tools",
            wssauthbaseurlprotocol: "https://",
            //freshdeskbaseurl: "https://{1}.support.webuy.com",
            version: "v3",
            cookieDomain: ".webuy.tools",
            loggerConfig : {
                dsn: 'https://00eef6e89359cd44cb97d365299d3569@sentrynew.webuy.dev/2',
                driver: 'Sentry',
                releaseVersion: pkg.version || '',
                brandName: 'KidX',
                country: 'UK',
                environment: 'development',
                debug: false
            }
        },
        {
            url: "penuat.webuy.dev",
            wssbaseurl: "https://stageuat-wss2.{0}.{1}.webuy.dev",
            wssauthbaseurl: "https://stageuat-oauth2.{0}.{1}.webuy.io",
            wssauthbaseurlprotocol: "https://",
            freshdeskbaseurl: "https://{1}.support.webuy.com",
            version: "v3",
            cookieDomain: ".webuy.dev",
            loggerConfig : {
                dsn: 'https://00eef6e89359cd44cb97d365299d3569@sentrynew.webuy.dev/2',
                driver: 'Sentry',
                releaseVersion: pkg.version || '',
                brandName: 'KidX',
                country: 'UK',
                environment: 'development',
                debug: false
            }
        },
        {
            url: "uat.webuy",
            wssbaseurl: "https://uat-wss2.{0}.{1}.webuy.dev",
            wssauthbaseurl: "https://uat-oauth2.{0}.{1}.webuy.ws.branch{2}",
            wssauthbaseurlprotocol: "https://",
            freshdeskbaseurl: "https://{1}.support.webuy.com",
            version: "v3",
            cookieDomain: ".webuy.dev",
            loggerConfig : {
                dsn: 'https://00eef6e89359cd44cb97d365299d3569@sentrynew.webuy.dev/2',
                driver: 'Sentry',
                releaseVersion: pkg.version || '',
                brandName: 'KidX',
                country: 'UK',
                environment: 'development',
                debug: false
            }
        },
        {
            url: "webuy",
            wssbaseurl: "https://wss2.{0}.{1}.webuy.io",
            wssauthbaseurl: "https://oauth2.{0}.{1}.webuy.io",
            wssauthbaseurlprotocol: "https://",
            freshdeskbaseurl: "https://{1}.support.webuy.com",
            version: "v3",
            cookieDomain: ".webuy.com",
            loggerConfig : {
                dsn: 'https://7583bc92b6e266c0f9b80b7ffcaf55e5@sentryprod.webuy.io/2',
                driver: 'Sentry',
                releaseVersion: pkg.version || '',
                brandName: 'KidX',
                country: 'UK',
                environment: 'production',
                debug: false
            }
        },
    ]
};
