import { Localstorage } from "@xcom/utils";

export default () => {
    const { $conf } = useNuxtApp();
    const { $t } = useLocaleStore();
    const ls = new Localstorage(Object.assign({}, $conf.lsconfig));
    const { countryCode: country, lsUserKey } = $conf;

    const getTwoDecimalAmount = (amount) => {
        return (Math.round(amount * 100) / 100).toFixed(2);
    };

    return {
        ls,
        country,
        $conf,
        getTwoDecimalAmount,
    };
};
