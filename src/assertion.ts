/**
 * Created by jearbilove on 2017/8/3.
 */

// 类型断言

function getLength (a : number | string) : number | string{
    // if(a.length){
    //     return a.length;
    // }else{
    //     return a.toString().length;
    // }

    if((<string>a).length){
        return (<string>a).length;
    }else{
        return (<number>a).toString().length;
    }
}