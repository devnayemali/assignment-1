

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
        return `'Name: ${this.name}, Age: ${this.age}'`;
    }

}
const person1 = new Person('John Doe', 30);
console.log(person1.getDetails());


const filterByRating = (items: { title: string, rating: number }[]): { title: string, rating: number }[] => {

    const filterItem = items.filter(item => item.rating >= 4);

    return filterItem;

}


const filterActiveUsers = (users: { id: number, name: string, email: string, isActive: boolean }[]): { id: number, name: string, email: string, isActive: boolean }[] => {

    const activeUser = users.filter(user => user.isActive === true);
    return activeUser;

}


interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

const printBookDetails = (book: Book): void => {

    let availableText: string;
    if (book.isAvailable === true) {
        availableText = 'Yes';
    } else {
        availableText = 'No';
    }

    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availableText}`);

}


function getUniqueValues(arr1: (string | number)[], arr2: (string | number)[]): (string | number)[] {

    const uniqueValues: (string | number)[] = [];

    function checkHave(array: (string | number)[], value: string | number): boolean {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === value) {
                return true;
            }
        }
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (!checkHave(uniqueValues, arr1[i])) {
            uniqueValues[uniqueValues.length] = arr1[i];
        }
    }


    for (let i = 0; i < arr2.length; i++) {
        if (!checkHave(uniqueValues, arr2[i])) {
            uniqueValues[uniqueValues.length] = arr2[i];
        }
    }

    return uniqueValues;
}


const calculateTotalPrice = (products: { name: string, price: number; quantity: number; discount?: number }[]): number => {

    if (products.length === 0) return 0;

    const subTotalPriceArray = products.map(product => {

        const baseTotal = product.price * product.quantity;

        if (product.discount !== undefined) {

            if (product.discount >= 0 && product.discount <= 100) {

                const discountAmount = (baseTotal * product.discount) / 100;
                return baseTotal - discountAmount;

            } else {
                console.warn(
                    `Discount must be between 0 and 100.`
                );
            }
        }

        return baseTotal;

    });

    return subTotalPriceArray.reduce((total, itemTotal) => total + itemTotal, 0);

}
