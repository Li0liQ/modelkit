export const getFlagBits = (flagList, flags) => {
    let flagBits = 0;

    for (let i = 0; i < flagList.length; i += 1) {
        if (flags[flagList[i]]) {
            /* eslint-disable no-bitwise */
            flagBits += 1 << i;
        }
    }

    return flagBits;
};

export const getBooleanFlagPermutations = (flagList, freezeFlags = {}) => {
    const currentFlags = Object.assign({}, freezeFlags);
    const resultList = [];

    const changeFlagByIndex = (flagIndex) => {
        if (flagIndex >= flagList.length) {
            resultList.push(Object.assign({}, currentFlags));
        } else {
            const flag = flagList[flagIndex];
            if (typeof freezeFlags[flag] !== 'undefined') {
                changeFlagByIndex(flagIndex + 1);
            } else {
                currentFlags[flag] = false;
                changeFlagByIndex(flagIndex + 1);
                currentFlags[flag] = true;
                changeFlagByIndex(flagIndex + 1);
            }
        }
    };

    changeFlagByIndex(0);

    return resultList;
};
