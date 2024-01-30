import { defineStore } from "pinia";
//abc
export const useAppsettingsStore = defineStore(
    "appsettings-store",
    () => {
        const appsettings = ref({});
        const postLoginAppsettings = ref({});

        const setPreLoginAppsetting = (value) => {
            appsettings.value = value;
        };

        const setPostLoginAppsettings = (value) => {
            postLoginAppsettings.value = value;
        };

        const getPreLoginAppsettings = computed(() => {
            return appsettings.value;
        });

        const getPostLoginAppsettings = computed(() => {
            return postLoginAppsettings.value;
        });

        return {
            appsettings,
            setPreLoginAppsetting,
            setPostLoginAppsettings,
            getPreLoginAppsettings,
            getPostLoginAppsettings,
        };
    }
);
