/**
 * Created by xue.bai_2 on 2017/5/4.
 */
import React from 'react';

class Menu extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            selectedMenu: 3
        };

        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.generateMenu = this.generateMenu.bind(this);
    }

    handleMenuClick(index){
        this.setState({selectedMenu: index});
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

    render() {
        let data = [
            {
                index: 0,
                name: '花记'
            },
            {
                index: 1,
                name: '花园'
            },
            {
                index: 2,
                name: '纪念碑'
            },
            {
                index: 3,
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