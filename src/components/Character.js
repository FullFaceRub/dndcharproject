import React from 'react';
import './character.css'
//Going to pop up with a print button that saves to pdf
export default function Character(props) {
    let name = props.character.name;
    let race = props.character.race;
    let role = props.character.class;
    let background = props.character.background;
    let alignment = props.character.alignment;



    return (
        <div>
            <div>
                <h3>Character Name: {name}</h3>
                <h5>Race: {race}</h5>
                <h5>Class: {role}</h5>
                <h5>Background: {background}</h5>
                <h5>Alignment: {alignment}</h5>
            </div>

            <div>
                
            </div>
        </div>
    )
}