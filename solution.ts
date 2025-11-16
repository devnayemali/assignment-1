

const formatValue = (value: string | number | boolean): string | number | boolean => {

    if (typeof value === "string") {
        return value.toLocaleUpperCase();
    } else if (typeof value === "number") {
        return value * 10;
    } else if (typeof value === 'boolean') {
        return !value
    }

    return value
};


const getLength = (data: string | any[]): number => {

    if (typeof data === "string") {
        return data.length;
    } else if (Array.isArray(data)) {
        return data.length;
    } else {
        return 0;
    }

}

