import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import adv from './advanced';

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

ReactDOM.render(<App />, document.getElementById('app'));
