import React, { Component } from 'react';

class Roller extends Component {
    constructor() {
        super();

        this.state = {
            baseStrength: null,
            baseDexterity: null,
            baseConstitution: null,
            baseIntelligence: null,
            baseWisdom: null,
            baseCharisma: null,
        }

        this.handleRoll=this.handleRoll.bind(this);
    }

    handleRoll(){
        let str = Math.floor((Math.random() * (7-1)+1)+(Math.random() * (7-1)+1)+(Math.random() * (7-1)+1));
        let dex = Math.floor((Math.random() * (7-1)+1)+(Math.random() * (7-1)+1)+(Math.random() * (7-1)+1));
        let con = Math.floor((Math.random() * (7-1)+1)+(Math.random() * (7-1)+1)+(Math.random() * (7-1)+1));
        let int = Math.floor((Math.random() * (7-1)+1)+(Math.random() * (7-1)+1)+(Math.random() * (7-1)+1));
        let wis = Math.floor((Math.random() * (7-1)+1)+(Math.random() * (7-1)+1)+(Math.random() * (7-1)+1));
        let cha = Math.floor((Math.random() * (7-1)+1)+(Math.random() * (7-1)+1)+(Math.random() * (7-1)+1));        
    
        this.setState({
            baseStrength: str,
            baseDexterity: dex,
            baseConstitution: con,
            baseWisdom: wis,
            baseIntelligence: int,
            baseCharisma: cha
        })

        this.props.updateRoll(str, dex, con, wis, int, cha);

      
    }

    render() {

        let str = this.state.baseStrength;
        let dex = this.state.baseDexterity;
        let con = this.state.baseConstitution;
        let int = this.state.baseIntelligence;
        let wis = this.state.baseWisdom;
        let cha = this.state.baseCharisma;

        return (
            <div>
                <h3>Base Stats</h3>
                <h5>STR: {str}</h5>
                <h5>DEX: {dex}</h5>
                <h5>CON: {con}</h5>
                <h5>INT: {int}</h5>
                <h5>WIS: {wis}</h5>
                <h5>CHA: {cha}</h5>
                <button onClick={this.handleRoll}>Roll for Stats</button>
            </div>
        )
    }
}

export default Roller;