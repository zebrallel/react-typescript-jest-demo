/**
 * Created by jearbilove on 2017/8/3.
 */

class Animal{
    public name : string;
    private sex : string;
    protected color : string; // protected修饰的字段可以再子类中访问，private的不可以

    public constructor(name : string, sex : string){
        this.name = name;
        this.sex = sex;
    }
}

export default ()=>{
    let zebra : Animal = new Animal('Zebra', 'male');
    console.log(zebra.name);
    // console.log(zebra.sex); 私有属性不可访问
}

// 抽象类
// 1. 抽象类不可实例化
// 2. 抽象类中的抽象方法必须被子类实现
abstract class Shape{
    public name : string;
    public color : string;

    public constructor(name : string, color : string){
        this.name = name;
        this.color = color;
    }

    public abstract draw() : void;
}

class Circle extends Shape{
    public draw() : void{
        console.log(this.name);
    }
}

// 类和接口
interface Move{
    goAhead() : void,
    goBack() : void
}

interface Light{
    lightOn() : void,
    lightOff() : void
}

// 一个类可以实现多个接口
class Car implements Move,Light{
    goAhead() : void{

    }

    goBack() : void{

    }

    lightOn() : void{

    }

    lightOff() : void{

    }
}

//接口之间可以继承
interface darkLight extends Light{
    darkLightOn() : void
}

//混合类型
interface Counter{
    (start : number) : number,
    name : string
}

let counter : Counter;

counter = (num : number)=>{
    counter.name = 'Counter';
    // counter.aaa = 1123; 这里会报错，因为没有在类型中声明

    return 123;
};