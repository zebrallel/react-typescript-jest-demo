/**
 * Created by jearbilove on 2017/8/3.
 */

// Function

function sum (a : number, b : number) : number{
    return a + b;
}

sum(12,23);
// sum(1,2,3); 参数的数量必须严格等于函数中定义的参数数量
// sum(1);

// Function Expression (函数表达式)

// 你可能会写出这样的代码
let subtract = function (a : number, b : number) : number{
    return a - b;
}

// 但是实际上，如果省略了左边参数类型，类型将由类型推断自动得出
let subtract2 : (a : number, b : number) => number = (a: number, b: number)=>{return a-b};

interface doSum{
    (a : number, b: number) : number
}

let sum2 : doSum;

sum2 = (a: number, b: number)=>{return a+b;}

// 可选参数

function print(name : string, age? : number) : void{
    console.log(name);
}

print('callie');
print('callie', 20);
// print('callie', 20, 'famale'); 参数个数不匹配

function printArgs(...args : number[]) : void{
    console.log(args);
}

printArgs(1,2,3);

// 重载
function reverse (a: number) : number;
function reverse (a: string) : string;
function reverse (a: number | string) : number | string{
    if(typeof a === 'number'){
        return Number(Array.from(a.toString()).reverse().join(''))
    }else{
        return Array.from(a).reverse().join('');
    }
}