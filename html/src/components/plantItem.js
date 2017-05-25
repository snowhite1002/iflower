/**
 * Created by xue.bai_2 on 2017/5/25.
 */
import React from 'react';

class PlantItem extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            id: this.props.id
        };

        this.handleClick = this.handleClick.bind(this);
        this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
    }

    handleClick(){
        this.props.clickPlant(this.props.id);
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            id: nextProps
        });
    }

    render() {

        return <div className="plantItem" onClick={this.handleClick}>
            <p>矮牵牛</p>
        </div>;
    }

}

export default PlantItem;