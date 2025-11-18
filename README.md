1. TypeScript-এ Interfaces এবং Types এর পার্থক্য
==============================================

TypeScript-এ আমরা ডাটা স্ট্রাকচার ডিফাইন করতে interface এবং type alias — দুইটাই ব্যবহার করতে পারি। কিন্তু এদের মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য রয়েছে।

Extending / Inheritance

interface সহজে অন্য interface কে extend করতে পারে। type extend করা যায়, তবে সাধারণত intersection (&) ব্যবহার করে।

উদাহরণ : 
interface User {
    name: string;
}

interface Admin extends User {
    role: string;
}


Declaration Merging
একই নামে একাধিক interface ডিফাইন করলে TypeScript এগুলো merge করে। কিন্তু type এ declaration merging সম্ভব নয়।

উদাহরণ : 
interface Product {
    name: string;
}

interface Product {
    price: number;
}


Complex Types

জটিল union, intersection বা conditional টাইপ তৈরি করতে type বেশি কার্যকর। সাধারণ object structure এর জন্য interface বেশি readable।


২. any, unknown এবং never টাইপের পার্থক্য
==================================================

TypeScript-এর তিনটি বিশেষ টাইপ আছে যেমন — any, unknown, এবং never।

any টাইপ সবচেয়ে ফ্লেক্সিবল কিন্তু unsafe টাইপ । TypeScript এর টাইপ-চেকিং প্রায় পুরো বন্ধ করে দেয়।

উদাহরণ : 
let value: any = ৬০;
value = "আমার নাম"; 
value = true;


unknown — any এর নিরাপদ ভার্সন । 

ব্যবহারের আগে অবশ্যই টাইপ-চেক করতে হয়। নিরাপদ কারণ ব্যবহার করার আগে টাইপ নিশ্চিত করতে হয়

উদাহরণ : 
let data: unknown = "Hi";

if (typeof data === "string") {
    console.log(data.toUpperCase());
}


never — যে মান কখনোই আসবে না

সাধারণত দুই স্থানে ব্যবহৃত হয়:

যে ফাংশন কখনো return করে না

function error(msg: string): never {
    throw new Error(msg);
}


Impossible type combinations

type A = string & number; // never

