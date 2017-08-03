import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import * as basic from './basic';

class App extends Component<any, any> {
    public render() {
        return (
            <div>
                <p>Hello World</p>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
