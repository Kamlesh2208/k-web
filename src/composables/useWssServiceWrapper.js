import {Wss} from '@xcom/wss-api'
// import useOAuth from '~/composables/useOAuth'
import useCommon from "~/composables/useCommon"
/**
 *
 * @param apiParams
 * @return {Promise<*>}
 */
export default async function ({ methodName, endpoint, payload, headers, additionalParams, isAccessTokenRequired=false }) {
    const wssTokenErrorCodes = [6, 7, 8]
    const { $conf: { wssbaseurl, wssversion } } = useCommon()
    // const { getOAuthToken, isMemberLoggedIn, removeTokenDetails } = useOAuth()
    const wssObject = (headers == undefined) ? Wss(endpoint, wssbaseurl, wssversion) : Wss(endpoint, wssbaseurl, wssversion, headers)
    // console.log("🚀 4 -- ~ wssObject:", wssObject)
    /**
     * check if errorCode belongs to wss token error codes list
     * @param {*} error
     * @returns <Promise>
     */
    const checkIfTokenError = async (error) => {
        console.log("🚀 6 --~ checkIfTokenError ~ error:", error)
        const errorCode = error?.errStack?.response?.error?.code
        if (wssTokenErrorCodes.includes(errorCode)) {
            try {
                return await callWssService({isAccessTokenExpired: true})
            } catch (err) {
                captureException(err, 'error', 'UseWssServices', 'checkIfTokenError', methodName)
            }
        }
        return Promise.reject(error)
    }
    /**
     * calls wss service via wss api xcom util
     * @returns Object
     */
    const callWssService = async(params) => {

        console.log(" 777-- wssbaseurl:", wssbaseurl, wssversion, endpoint)

        // const isAccessTokenExpired = params?.isAccessTokenExpired ?? false
        // const _isMemberLoggedIn = await isMemberLoggedIn()

        // if (_isMemberLoggedIn && isAccessTokenRequired) {
        //     const accessToken = await getOAuthToken({}, isAccessTokenExpired)
        //     payload = (payload == undefined) ? { accessToken } : { accessToken, ...payload }
        // }

    // console.log("🚀 5 --~ callWssService ~ callWssService:", ' payload:', payload, ' | methodName', methodName, ' wssObject=>', wssObject[methodName](payload))


        return (additionalParams) ? wssObject[methodName](additionalParams.join(', '), payload) : wssObject[methodName](payload)
    }

    try {
        return await callWssService()
    } catch (error) {
        return await checkIfTokenError(error)
    }
}
