export const find = function (a, fn) {
    for (let i = 0; i < a.length; i++) {
        if (fn(a[i])) {
            return a[i];
        }
    }

    return null;
};
