/**
 * Created by xue.bai_2 on 2017/5/4.
 */
import React from 'react';
import Seed from './seed';

class Content extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return <div className="content">
            <Seed />
        </div>;
    }

}

export default Content;