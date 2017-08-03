/**
 * @fileOverView: Basic
 * @author: xuejian.xu
 * @date: 2017/8/3.
 */

// Bool
let isMale : boolean = false;

// Number
let age : number = 23;
let hexNumber : number = 0xfff;

// String
let name : string = 'callie';

// Void
let undefineVal : void = undefined;
let nullVal : null = null;
let u: undefined = undefined;

// Any
let staff : any = 123;
staff = 'she';

// 类型推论
let num = 100;

// num = '100'; 这里会报错，因为前面num的类型已经被自动推断为number，所以使用string类型值赋值时会报错

// 联合类型 (Union Types)
let unionType : string | number;

unionType = 123;
unionType = 'haha';
// unionType = false; 这里会报错，因为boolan类型不在union types中

function unionDemo(she : string | number) : string{
    //return she.length; 这里报错，因为number类型不存在length字段
    return she.toString(); //这样子是没问题的，因为toString是公共方法
}

// Interface
interface Person {
    readonly id : number,
    name : string,
    age : number,
    nickName? : string, //添加一个？，使其成为一个可选属性，但是任然不允许添加未定义的属性
    [propName : string] : any //可以添加任意属性
}

let Jack : Person = {
    id : 123,
    name : 'Jack',
    age : 18,
    // nickName : 'abc' 多一个属性或者少一个属性都是不被允许的
}

console.log(Jack.id);
// Jack.id = 345; 这里报错是因为id是一个只读属性

// 数组
let arr : number[] = [1,2,3,4,5];
arr.push(11);
// arr.push(false); error because false is not in type : number

// Array Generic
let arr2 : Array<number> = [2,3,4,5];

interface cArray {
    [propName : number] : number
}

let arr3 : cArray = [3,4,5,6];
// arr3.push('1');


function arrDemo(){
    // let args : number[] = arguments; argument object is  an Array-like object but not an Array
    let args : IArguments = arguments;
}

export default {}