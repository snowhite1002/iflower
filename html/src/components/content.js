/**
 * Created by xue.bai_2 on 2017/5/4.
 */
import React from 'react';
import Seed from './seed';
import Garden from './garden';

class Content extends React.Component {
    constructor(props){
        super(props);

        // this.state = {
        //     showContent: 2
        // };

        //this.ccc = this.ccc.bind(this);
    }

    // ccc(data){
    //     this.setState({
    //         showContent: data
    //     });
    // }

    render() {
        return <div className="content">
            {/* <FlowerDiary />*/}
            {/*<Garden showContent={this.state.showContent} ddd={this.ccc} />*/}
            {/*<Cenotaph />*/}
            <Seed />
        </div>;
    }

}

export default Content;