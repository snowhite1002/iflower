/**
 * Created by xue.bai_2 on 2017/5/12.
 */
import React from 'react';
import {Constants} from '../constants/constants';
import PlantItem from './plantItem';

class Garden extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            showDetail: false
        };

        this.generatePlantList = this.generatePlantList.bind(this);
        this.handlePlantClick = this.handlePlantClick.bind(this);
    }

    handlePlantClick(id){
        if(id){
            this.setState({showDetail: true});
        }
    }

    generatePlantList(){
        let plantArr = [];

        for(let i = 1; i < 5; ++i){
            plantArr.push(<PlantItem key={i} id={i} clickPlant={this.handlePlantClick} />);
        }

        return plantArr;
    }

    render() {
        let gardenStyle = this.props.selectedContent == Constants.Module.Garden ? 'garden' : 'garden hide';
        let plantDetailStyle = this.state ? 'plant-detail' : 'plant-detail hide';

        return <div className={gardenStyle}>
            {this.generatePlantList()}
            <div className={plantDetailStyle}></div>
        </div>;
    }

}

export default Garden;