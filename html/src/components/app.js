/**
 * Created by xue.bai_2 on 2017/5/4.
 */
import React from 'react';
import Constants from './content';
import Menu from './menu.js';
import Content from './content';

class App extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="app-container">
                <Menu />
                <Content />
            </div>

        );
    }
}
export default App;