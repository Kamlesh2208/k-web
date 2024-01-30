import { storeToRefs } from 'pinia'

export const useAppsetting = () => {
  const { getPreLoginAppsettings, getPostLoginAppsettings } = useAppsettingServices()
  const { setPreLoginAppsetting, setPostLoginAppsettings } = useAppsettingsStore()


  const {
    ls,
    $conf: {
        platformId,
    },
} = useCommon();

  const loadPreLoginAppsettings = async () => {

    try {

        const {
          data: { response }
        } = await getPreLoginAppsettings({ platformId: platformId })

        if (response.ack !== 'Success') return

        setPreLoginAppsetting(response?.data?.preLoginSettings);

      } catch (err) {
        // captureException(err, 'error', 'Checkout', 'useTaxId', 'updateTaxId')
      }
  }

  const loadPostLoginAppsettings = async () => {

    try {
      const payload = {
        platformId,
        memberId: getMemberId()
      }

      const {
        data: { response }
      } = await getPostLoginAppsettings(payload)

      if (response.ack !== 'Success') return

      setPostLoginAppsettings(response?.data?.postLoginSettings);

    } catch (err) {
      return err
    }
  }




  return {
    loadPreLoginAppsettings,
    loadPostLoginAppsettings
  }
}
