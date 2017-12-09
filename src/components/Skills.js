import React, {Component} from 'react';

class Skills extends Component {
    constructor(props) {
        super(props);

        this.state = {
            acrobatics: null,
            animalHandling: null,
            arcana: null,
            athletics: null,
            deception: null,
            history: null,
            insight: null,
            intimidation: null,
            investigation: null,
            medicine: null,
            nature: null,
            perception: null,
            performance: null,
            persuasion: null,
            religion: null,
            sleightOfHand: null,
            stealth: null,
            survival: null,
            trainableSkills: []
        }
    }
//check this with internet
    handleSkills(props){
        let trainableSkills = props.classSkills;
        let backgroundSkills = props.backgroundSkills;
        //filter out duplicates
        for (var i = 0; i<backgroundSkills.length; i++){
            if (trainableSkills.indexOf(backgroundSkills[i])===-1){
                trainableSkills.push(backgroundSkills[i])
            }
        }
        console.log(trainableSkills)
        this.setState({
            trainableSkills: trainableSkills
        })
    }


    render() {
        return (
            <div>
                <button onClick={this.handleSkills}>Choose Skills</button>
            </div>
        )
    }
}

export default Skills;

