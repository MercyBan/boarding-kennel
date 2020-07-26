import React, { Component } from 'react';
import ClickCard from './ClickCard';
import Form from 'react-bootstrap/Form';
import Utils from './Utils';


class CheckOut extends Component{

    defaultState = {
        boardingDogs:[]
    }
    constructor() {
        super();
        this.state = this.defaultState;
    }
    componentDidMount(){
        Utils.get("dogs").then (data => {
            this.setState({boardingDogs: data});
        });
    }
    checkOut = dog => {
        console.log(dog)
    }
    render() {
        return (
        <div>
        <div className="grid-page">
{
    this.state.boardingDogs.map(dog=>{
        return(
            <ClickCard 
            key = {"dog-card" + dog.name}
            target = {dog}
            title = {dog.name}
        text = {<span><span>{"dog breed: " + dog.breed}<br/></span>
        <span>{"dog age: " + dog.age}<br/></span>
        <span>{"kennel size: "  + dog.kennelSize}</span>
        </span>}
        onButtonClick = {this.checkOut}

            /> 
        )
    }

    )
}
            
        </div>
        </div>
            
        );
    }
}
export default CheckOut;
