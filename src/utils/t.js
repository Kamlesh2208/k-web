export const t = (label, keys={}) => {
    const { $t } = useLocaleStore();
    return $t(label, keys);
};
