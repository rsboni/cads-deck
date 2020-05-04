import React, { Component } from 'react'

export default class Card extends Component {
    constructor(props){
        super(props);

        let angle = Math.random() * 90 -45;
        let xPos = Math.random() * 40 -20;
        let yPos = Math.random() * 40 -20;
        let transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;
        this._transform = transform;

    }
    render() {
        return (
            <div>
                <img 
                    key={this.props.key} 
                    src={this.props.image} 
                    style={{transform: this._transform}}
                    alt={this.props.alt}
                />
                    
            </div>
        )
    }
}
