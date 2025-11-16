

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


class Person {

    public name: string;
    public age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }

}


const filterByRating = (items: { title: string, rating: number }[]): { title: string, rating: number }[] => {

    const filterItem = items.filter(item => item.rating >= 4);

    return filterItem;

}