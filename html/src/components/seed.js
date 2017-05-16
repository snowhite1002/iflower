/**
 * Created by xue.bai_2 on 2017/5/4.
 */
import React from 'react';
import {Constants} from '../constants/constants';
import EditSeed from './editSeed';

class Seed extends React.Component {
    constructor(props){
        super(props);

        this.generateSeedList = this.generateSeedList.bind(this);
        this.showEditSeed = this.showEditSeed.bind(this);
        this.editSeed = this.editSeed.bind(this);
        this.deleteSeed = this.deleteSeed.bind(this);

        this.state = {
            seedData: [
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
            ],
            clickData: {
                id: 0,
                name: '',
                category: '',
                color: '',
                date: '',
                count: 0
            },
            showEditSeed: false
        };
    }

    deleteSeed(id){
        for(let index in this.state.seedData){
            if(this.state.seedData[index].id == id){
                this.state.seedData.splice(index, 1);
                break;
            }
        }

        this.setState({
            seedData: this.state.seedData
        });
    }

    showEditSeed(data){
        this.setState({
            clickData: data,
            showEditSeed: true
        });
    }

    editSeed(clickData){
        if(clickData){
            if(clickData.id){
                for(let index in this.state.seedData){
                    if(this.state.seedData[index].id == clickData.id){
                        this.state.seedData.splice(index, 1, clickData);
                        break;
                    }
                }
            }else{
                this.state.seedData.push(clickData);
            }

            this.setState({
                seedData: this.state.seedData
            });
        }

        this.setState({
            clickData: {
                id: 0,
                name: '',
                category: '',
                color: '',
                date: '',
                count: 0
            },
            showEditSeed: false
        });
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
                        <span className="edit-seed" onClick={function(){this.showEditSeed(item)}.bind(this)}>编辑</span>&nbsp;|&nbsp;
                        <span className="delete-seed" onClick={function(){this.deleteSeed(item.id)}.bind(this)}>删除</span>
                    </td>
                </tr>
            );
        }

        return <table>
            <tbody>
            <tr>
                <th>名称</th>
                <th>品种</th>
                <th>颜色</th>
                <th>生产/购买时间</th>
                <th>数量（颗）</th>
                <th>操作</th>
            </tr>
            {seedListDom}
            </tbody>
        </table>;
    }

    componentWillReceiveProps(nextProps){
        this.setState({selectedContent: nextProps.selectedContent});
    }

    render() {
        let item = {
            id: 0,
            name: '',
            category: '',
            color: '',
            date: '',
            count: 0
        };

        let style = this.props.selectedContent == Constants.Module.Seed ? 'seed-content' : 'seed-content hide';

        return (
            <div className={style}>
                <button className="add-seed" onClick={function(){this.showEditSeed(item)}.bind(this)}>添加种子</button>
                {this.generateSeedList(this.state.seedData)}
                <div className="shade">
                    <EditSeed clickData={this.state.clickData} showEditSeed={this.state.showEditSeed} handleEdit={this.editSeed} />
                </div>
            </div>
        );
    }
}

export default Seed;