/**
 * Created by xue.bai_2 on 2017/5/8.
 */
import React from 'react';

class EditSeed extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            currentData: this.props.clickData
        };

        this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleCateChange = this.handleCateChange.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleCountChange = this.handleCountChange.bind(this);
        this.submitEdit = this.submitEdit.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
    }

    handleNameChange(event){
        this.state.currentData.name = event.target.value;

        this.setState({
            currentData: this.state.currentData
        });
    }

    handleCateChange(event){
        this.state.currentData.category = event.target.value;

        this.setState({
            currentData: this.state.currentData
        });
    }

    handleColorChange(event){
        this.state.currentData.color = event.target.value;

        this.setState({
            currentData: this.state.currentData
        });
    }

    handleDateChange(event){
        this.state.currentData.date = event.target.value;

        this.setState({
            currentData: this.state.currentData
        });
    }

    handleCountChange(event){
        this.state.currentData.count = event.target.value;

        this.setState({
            currentData: this.state.currentData
        });
    }

    submitEdit(){
        this.props.handleEdit(this.state.currentData);
    }

    cancelEdit(){
        this.props.handleEdit();
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            currentData: nextProps.clickData
        });
    }

    render(){
        let style = this.props.showEditSeed ? 'popupEditSeed' : 'popupEditSeed hide';

        return <div className={style}>
            <h1>编辑种子</h1>
            <label>
                <span>名称：</span>
                <input id="seed-name" type="text" placeholder="名称" value={this.state.currentData.name} onChange={this.handleNameChange} />
            </label>
            <label>
                <span>品种：</span>
                <input id="seed-category" type="text" placeholder="系列" value={this.state.currentData.category} onChange={this.handleCateChange} />
            </label>
            <label>
                <span>颜色：</span>
                <input id="seed-color" type="text" placeholder="颜色" value={this.state.currentData.color} onChange={this.handleColorChange} />
            </label>
            <label>
                <span>生产/购买时间：</span>
                <input id="seed-date" type="text" placeholder="生产/购买时间" value={this.state.currentData.date} onChange={this.handleDateChange} />
            </label>
            <label>
                <span>数量（颗）：</span>
                <input id="seed-count" type="text" placeholder="数量（颗）" value={this.state.currentData.count} onChange={this.handleCountChange} />
            </label>
            <button className="cancel" onClick={this.cancelEdit}>取消</button>
            <button className="ok" onClick={this.submitEdit}>确定</button>
        </div>;
    }
}
export default EditSeed;