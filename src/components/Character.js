import React from 'react';
import './character.css';
import Stats from './Stats';
//Going to pop up with a print button that saves to pdf
export default function Character(props) {
    let name = props.character.name;
    let race = props.character.race;
    let role = props.character.class;
    let background = props.character.background;
    let alignment = props.character.alignment;

    let mappedSkills = props.profSkills.map(e=>{
        return (<h5>{e}</h5>)
    })

    return (
        <div className="charpreview">
            <div>
                <h3>Character Name: {name}</h3>
                <h5>Race: {race}</h5>
                <h5>Class: {role}</h5>
                <h5>Background: {background}</h5>
                <h5>Alignment: {alignment}</h5>
            </div>

            <div className="profskills">
                <h3>Proficient Skills:</h3>
                {mappedSkills}
            </div>

            <div className="scores">
                <Stats
                strength={props.strength}
                dexterity={props.dexterity}
                constitution={props.constitution}
                intelligence={props.intelligence}
                wisdom={props.wisdom}
                charisma={props.charisma} />
            </div>

        </div>
    )
}