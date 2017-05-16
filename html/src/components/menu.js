/**
 * Created by xue.bai_2 on 2017/5/4.
 */
import React from 'react';
import {Constants} from '../constants/constants';

class Menu extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            selectedMenu: this.props.seledtedMenu
        };

        this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.generateMenu = this.generateMenu.bind(this);
    }

    handleMenuClick(index){
        this.setState({selectedMenu: index});
        this.props.OnMenuChange(index);
    }

    generateMenu(data){
        let menuItems = [];

        for(let item of data){
            menuItems.push(
                <li key={item.index}
                    className={this.state.selectedMenu == item.index ? 'selected' : ''}
                    onClick={function(){this.handleMenuClick(item.index)}.bind(this)} >
                    {item.name}
                </li>
            );
        }

        return <ul>{menuItems}</ul>;
    }

    componentWillReceiveProps(nextProps){
        this.setState({selectedMenu: nextProps.seledtedMenu});
    }

    render() {
        let data = [
            {
                index: Constants.Module.Diary,
                name: '花记'
            },
            {
                index: Constants.Module.Garden,
                name: '花园'
            },
            {
                index: Constants.Module.Cenotaph,
                name: '纪念碑'
            },
            {
                index: Constants.Module.Seed,
                name: '种子仓库'
            }
        ];

        return (
            <div className="menu">
                {this.generateMenu(data)}
            </div>
        );
    }
}
export default Menu;