// activity 1
/*
let spaceDiv = document.querySelector(`.space`);
let newElement = document.createElement(`h2`);

spaceDiv.appendChild(`newElement`);

newElement.setAttribute(`class`, `heading`);

let text = document.createTextNode("hello, I'm Maram");
newElement.appendChild(text);
*/
//__________________________________________________________
//*_________________ Task (ES6,Loops and HOF)_________________
//part1 : Choose
/*
1) إيه اللي بيرجعه `map()` ؟

- [ ] أول عنصر يحقق شرط
- [//* ] Array جديدة بنفس الطول
- [ ] Boolean
- [ ] Number

---

2) مين فيهم بيرجع أول عنصر يحقق الشرط؟

- [ ] filter()
- [ ] map()
- [//* ] find()
- [ ] forEach()

---

3) `filter()` بيرجع...

- [ ] أول عنصر
- [//* ] Array جديدة بالعناصر اللي حققت الشرط
- [ ] Number
- [ ] String

---

4) `forEach()` بيرجع...

- [ ] Array جديدة
- [ ] أول عنصر
- [//* ] undefined
- [ ] Boolean

---

5) `for...of` بنستخدمها غالباً مع...

- [ ] Objects
- [//* ] Arrays
- [ ] Functions
- [ ] Classes

---

# Part 2 - True or False

1. `map()` بيغير الـ Array الأصلية.    ==> //*False بيعمل مصفوفه جديده معمول عليها العمليات اللي انا قيلاها والاصليه بتبقى زي اهي ممكن اطبعها
2. `filter()` ممكن يرجع Array فاضية.  ==> //*True لو الشرط متحققش ع اي عنصر من عناصر المصفوفه 
3. `find()` ممكن يرجع undefined.      ==> //*True لو الشرط متحققش
4. `for...in` بيلف على الـ Index بتاع الـ Array. ==>//*True 
5. `forEach()` ينفع أعمل بيها break.  ==> //* false عشان بنستخدمها عشان ننفذ حاجه معينه  ع كل عناصر المصفوفه 

---
*/
// Part 3 - Compelete the following
//*Q1
/*
const numbers = [1,2,3,4];
numbers.map((num)=>{console.log(num * 2);});
*/
//*Q2
/*
const nums = [10,25,5,30,15,40];
const result = nums.filter((num)=>{return num > 20;});
console.log(result);
*/
//*Q3
/*
const users = [
    {name:"Ali", age:20},
    {name:"Sara", age:28},
    {name:"Omar", age:30}
];

const user = users.find((item)=>{
    return item.age > 25;
});
console.log(user);

//*Q4 for of
/*
const fruits = ["Apple","Banana","Orange"];
for (const fruit of fruits) {
    console.log(fruit);
};
*/
//*Q4 for in
/*
const fruits = ["Apple","Banana","Orange"];
for (const index in fruits) {
    console.log(index);
}
*/
//*Q4 forEach
/*
const fruits = ["Apple","Banana","Orange"];
fruits.forEach((fruit , index) => {console.log(index , fruit)});
*/

//part 5
//*Q1
/*
let ope = (num1, num2) => return num1 + num2;
ope(18 ,8);
*/
//*Q2,3
/*
const user = {
    name:"Mostafa",
    age:25
};
const userName = user.name;
const userAge = user.age;
console.log( userName ,userAge);
console.log(`hello , ${userName}`) //template literal
*/
//*Q4
/*
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const newArr = [...arr1 , ...arr2];
console.log(newArr);
*/

//part 6 
const students = [
    {name:"Ali", degree:70},
    {name:"Sara", degree:95},
    {name:"Ahmed", degree:40},
    {name:"Mona", degree:85},
    {name:"Omar", degree:55}
];
console.log(students.map((student) => student.name ));
console.log(students.filter((student)=> (student.degree >= 60)));
console.log(students.find((student)=> (student.degree >= 60)));
students.forEach((student) => console.log(student.name ));
//____________________________

const numbers = [5,10,15,20]; //   بتختصر العناصر اللي فالمصفوفه وبتجمهم وتطلع فاليو واحده ع حسب قايلالها تعمل عليهم عمليه ايه
console.log( numbers.reduce( (num, current) => {return num + current}, 0 )); // هنا هيجمعهم









