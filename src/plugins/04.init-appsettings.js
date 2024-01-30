
// // import useMember from "~/composables/useMember";
// import useSuperCats from "~/composables/useSuperCats";
// import useCms from "~/composables/useCms"

export default defineNuxtPlugin({
    name: "init-appsettings",
    enforce: "post",
    async setup(nuxtApp) {

        if (process.client) {
            /* const { getMemberIdFromLs } = useCommon();
            const { isMemberLoggedIn } = useOAuth()
            const { setAppsettingIntoStore, setPreLoginAppsettingIntoStore } = useMember()
            const { loadCategories } = useSuperCats()
            const { setCmsIntoStore } = useCms()
            await setPreLoginAppsettingIntoStore()
            await loadCategories();
            await setCmsIntoStore()
            await getMemberIdFromLs();
            if(await isMemberLoggedIn()){
              await setAppsettingIntoStore()
            } */

         const { loadPreLoginAppsettings, loadPostLoginAppsettings } = useAppsetting()
         console.log("🚀 ~ setup ~ loadPreLoginAppsettings: called 1--")
         await loadPreLoginAppsettings()

         //if use logged in then call this service
        //  loadPostLoginAppsettings()
        }

    },
});
