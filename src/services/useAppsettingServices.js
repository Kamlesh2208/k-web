
export default () => {
//this iwll fetch appsettings
    const getPreLoginAppsettings = (payload) => {

        return useWssServiceWrapper({
            methodName: 'getPreloginAppsettings',
            endpoint: 'appsettings',
            payload: payload,
        })
    }

    const getPostLoginAppsettings = (payload) => {

        return useWssServiceWrapper({
            methodName: 'getPostloginAppsettings',
            endpoint: 'appsettings',
            payload: payload,
            isAccessTokenRequired: true,
        })
    }

    return {
        getPreLoginAppsettings,
        getPostLoginAppsettings
    }
}
