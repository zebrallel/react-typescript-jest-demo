import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import adv from './advanced';
import cls from './class';
import ge from './generic';

interface IAppProps{
    id: number
}

class App extends Component<IAppProps, any> {
    public render() {
        return (
            <div>
                <p>Hello World</p>
            </div>
        );
    }
}

adv();
cls();
ge();

interface IIProps {
    name: string
}

// 函数泛型
interface IShow{
    <P extends IIProps>(component: React.ComponentClass<P> | React.SFC<P>) : any
}

let show : IShow = () => {}

// show(App) 这里会报错

ReactDOM.render(<App id={10} />, document.getElementById('app'));
