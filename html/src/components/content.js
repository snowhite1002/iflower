/**
 * Created by xue.bai_2 on 2017/5/4.
 */
import React from 'react';
import Garden from './garden';
import Seed from './seed';

class Content extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            selectedContent: this.props.selectedContent
        };

        this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
    }

    componentWillReceiveProps(nextProps){
        this.setState({selectedContent: nextProps.selectedContent});
    }

    render() {
        return <div className="content">
            <Garden selectedContent={this.state.selectedContent} />
            <Seed selectedContent={this.state.selectedContent} />
        </div>;
    }

}

export default Content;