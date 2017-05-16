/**
 * Created by xue.bai_2 on 2017/5/4.
 */
import React from 'react';
import {Constants} from '../constants/constants';
import Menu from './menu.js';
import Content from './content';

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            selectedMenu: Constants.Module.Diary
        };

        this.handleContent = this.handleContent.bind(this);
    }

    handleContent(selectedMenu){
        this.setState({selectedMenu: selectedMenu});
    }

    render() {
        return (
            <div className="app-container">
                <Menu seledtedMenu={this.state.selectedMenu} OnMenuChange={this.handleContent} />
                <Content selectedContent={this.state.selectedMenu} />
            </div>

        );
    }
}
export default App;