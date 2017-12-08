import React from 'react';

export default function Stats (props){

        let strength = props.strength;
        let dexterity = props.dexterity;
        let constitution = props.constitution;
        let intelligence = props.intelligence;
        let wisdom = props.wisdom;
        let charisma = props.charisma;

    return(
        <div>
            <h4>Racial Attribute Bonuses</h4>
            <h5>Strength: {strength}</h5>
            <h5>Dexterity: {dexterity}</h5>
            <h5>Constitution: {constitution}</h5>
            <h5>Intelligence: {intelligence}</h5>
            <h5>Wisdom: {wisdom}</h5>
            <h5>Charisma: {charisma}</h5>
        </div>
    )
}
