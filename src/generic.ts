/**
 * Created by xuejian.xu on 2017/8/4.
 */

function showValue <T> (value : T) : T{
    return value;
}

function swap <T, U> (tuple : [T, U]) : [U, T]{
    return [tuple[1], tuple[0]];
}

// 泛型约束
interface LenInterface{
    length : number
}

function showLength <T extends LenInterface> (args : T) : number{
    return args.length;
}

export default ()=>{
    console.log(swap([123, 321]));
    console.log(showLength('hello'));
    // console.log(showLength(123)); 报错，因为数字没有length属性
}

// 多个泛型之间也可以相互约束，这就保证了所有T的属性都会在U中
function copyFields<T extends U, U>(target: T, source: U): T {
    for (let id in source) {
        target[id] = (<T>source)[id];
    }
    return target;
}

interface ISum <T>{
    (a: T, b: T) : T
}

let sum4 : ISum<number> = (a: number, b: number)=>a+b;

type TSubtract<T> = (a: T, b: T) => T;

let sub4 : TSubtract<number> = (a: number, b: number)=>a-b;
