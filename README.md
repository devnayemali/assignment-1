
# 1. TypeScript-এ Interfaces এবং Types এর পার্থক্য

TypeScript-এ আমরা ডাটা স্ট্রাকচার ডিফাইন করতে interface এবং type alias — দুইটাই ব্যবহার করতে পারি। কিন্তু এদের মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য রয়েছে।

পার্থক্য : interface সহজে অন্য interface কে extend করতে পারে। type extend করা যায়, তবে সাধারণত intersection (&) ব্যবহার করে।

## উদাহরণ 

```javascript
interface User { 
    name: string; 
}

interface Admin extends User 
{ 
    role: string; 
}
```

পার্থক্য : একই নামে একাধিক interface ডিফাইন করলে TypeScript এগুলো merge করে। কিন্তু type এ declaration merging সম্ভব নয়।

## উদাহরণ 

```javascript
interface Product { 
    name: string;
}

interface Product { 
    price: number;
}
```

পার্থক্য : জটিল union, intersection বা conditional টাইপ তৈরি করতে type বেশি কার্যকর। সাধারণ object structure এর জন্য interface বেশি readable।



# 2. any, unknown এবং never টাইপের পার্থক্য
TypeScript-এর তিনটি বিশেষ টাইপ আছে যেমন — any, unknown, এবং never।

পার্থক্য : any টাইপ সবচেয়ে ফ্লেক্সিবল কিন্তু unsafe টাইপ । TypeScript এর টাইপ-চেকিং প্রায় পুরো বন্ধ করে দেয়।

## উদাহরণ 

```javascript
let value: any = ৬০; 
value = "আমার দেশের নাম বাংলাদেশ"; 
value = true;
```

পার্থক্য : unknown হল any এর নিরাপদ ভার্সন । ব্যবহারের আগে অবশ্যই টাইপ-চেক করতে হয়। নিরাপদ কারণ ব্যবহার করার আগে টাইপ নিশ্চিত করতে হয়

```javascript
let data: unknown = "Hi";

if (typeof data === "string") 
{ 
    console.log(data.toUpperCase()); 
}
```

পার্থক্য : never — যে মান কখনোই আসবে না । সাধারণত দুই স্থানে ব্যবহৃত হয় । 
- এক: যে ফাংশন কখনো return করে না। 
- দুই: Impossible type combinations

```javascript
function error(msg: string): never { 
    throw new Error(msg); 
}

type A = string & number;

```