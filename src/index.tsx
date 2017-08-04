import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import adv from './advanced';
import cls from './class';
import ge from './generic';

class App extends Component<any, any> {
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

ReactDOM.render(<App />, document.getElementById('app'));
