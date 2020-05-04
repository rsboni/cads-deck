import React, { Component } from 'react'
import axios from "axios";
import Card from "./Card";
import "./DeckCards.css";

export default class DeckCards extends Component {
    constructor(props){
        super(props);
        this.state = {deckId: "",
                    remaining: "",
                    cards: []
        }
        this.handleClick = this.handleClick.bind(this);

    }
    
    async componentDidMount() {
        let response = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
        this.setState({deckId: response.data.deck_id, remaining: response.data.remaining});
    }

    async handleClick (){
        let response = await axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/?count=1`);
        this.setState(st => ({
            cards: [...st.cards, response.data.cards[0]], remaining: response.data.remaining}
        )
        );

    }

    render() {
        return (
            <div className="DeckCards">
                {this.state.remaining !== 0 ? <button onClick={this.handleClick}>Draw a card</button> : ""}
                <div className="Deck">
                    {this.state.cards.map(h => (
                        <Card
                            key={h.code} 
                            image={h.image} 
                            alt={`${h.value} of ${h.suit}`}/>
                    ))}
                </div>
            </div>
        )
    }
}
