/**
 * Created by xue.bai_2 on 2017/5/4.
 */
import React from 'react';

class Seed extends React.Component {
    constructor(props){
        super(props);

        this.generateSeedList = this.generateSeedList.bind(this);
    }

    deleteSeed(event, id){
        let currentDom = event.target.parentNode.parentNode;// <tr></tr>
        let parentDom = currentDom.parentNode;

        parentDom.removeChild(currentDom);

        // operate data
    }

    generateSeedList(data){
        let seedListDom = [];

        for(let item of data){
            seedListDom.push(
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.category}</td>
                    <td>{item.color}</td>
                    <td>{item.date}</td>
                    <td>{item.count}</td>
                    <td>
                        {/*<a className="sow-seed">播种</a>|*/}
                        <a className="edit-seed">编辑</a>|
                        <a className="delete-seed" onClick={function(event){this.deleteSeed(event, item.id)}.bind(this)}>删除</a>
                    </td>
                </tr>
            );
        }

        return <table>
            <tbody>
            <tr>
                <th>名称</th>
                <th>系列</th>
                <th>颜色</th>
                <th>生产/购买时间</th>
                <th>数量（颗）</th>
                <th>操作</th>
            </tr>
            {seedListDom}
            </tbody>
        </table>;
    }

    render() {
        let seedData = [
            {
                id: 1,
                name: '矮牵牛',
                category: '海市蜃楼',
                color: '红色',
                date: '2017-02-10',
                count: 30
            },
            {
                id: 2,
                name: '矮牵牛',
                category: '海市蜃楼',
                color: '黄色',
                date: '2017-02-10',
                count: 30
            },
            {
                id: 3,
                name: '矮牵牛',
                category: '海市蜃楼',
                color: '粉色',
                date: '2017-02-10',
                count: 30
            }
        ];

        return (
            <div className="seed-content">
                {this.generateSeedList(seedData)}
            </div>
        );
    }

}

export default Seed;