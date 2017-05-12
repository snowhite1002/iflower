/**
 * Created by xue.bai_2 on 2017/5/12.
 */
import React from 'react';

class Garden extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.ddd(1);
    }

    render() {
        let style = this.props.showContent == 1 ? 'garden hide' : 'garden';

        return <div className={style} onClick={this.handleClick}>
            sss
        </div>;
    }

}

export default Garden;