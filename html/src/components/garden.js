/**
 * Created by xue.bai_2 on 2017/5/12.
 */
import React from 'react';
import {Constants} from '../constants/constants';

class Garden extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        let style = this.props.selectedContent == Constants.Module.Garden ? 'garden' : 'garden hide';

        return <div className={style}>
            sss
        </div>;
    }

}

export default Garden;