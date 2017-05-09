/**
 * Created by xue.bai_2 on 2017/5/8.
 */
import React from 'react';

class EditSeed extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        let style = this.props.showEditSeed ? 'popupEditSeed' : 'popupEditSeed hide';
        return <div className={style}>
            <label>
                名称：
                <input id="seed-name" placeholder="名称" value={this.props.clickData.name} />
            </label>

            <button className="cancel">取消</button>
            <button className="ok">确定</button>
        </div>;
    }
}
export default EditSeed;