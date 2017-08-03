type complicatedType = (a : number, b : number)=> number;

let sum3 : complicatedType = (a: number, b: number)=>{
    return a + b;
}

type Events = 'click' | 'dbclick' | 'touch';

let c : Events = 'click';
// let d : Events = 'touchmove'; 报错，touchmove不在Events之中

// 元组
let info : [string, number] = ['callie', 20];

// info.push(false); 这里会报错，当元组发生元素越界时，会自动将越界的元素设置为 union Type, 在这里就是 string | number, 但是boolean值是不被允许的

// 枚举
enum colors {
    red,
    blue,
    yellow,
    brown
}

// 使用const修饰的枚举，将会在编译过后被删除
const enum nums {
    one = 1,
    two = 22,
    three
}

export default ()=>{
    console.log(colors);
    console.log(nums['one']);
    console.log(nums.three);
}
