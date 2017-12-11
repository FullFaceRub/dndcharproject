import React, { Component } from 'react';
import Modal from 'react-modal';
import './forms.css';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
        // position: 'fixed',

    }
};

class Skills extends Component {
    constructor(props) {
        super(props);

        this.state = {
            acrobatics: false,
            animalHandling: false,
            arcana: false,
            athletics: false,
            deception: false,
            history: false,
            insight: false,
            intimidation: false,
            investigation: false,
            medicine: false,
            nature: false,
            perception: false,
            performance: false,
            persuasion: false,
            religion: false,
            sleightOfHand: false,
            stealth: false,
            survival: false,
            // trainableSkills: [],
            modalIsOpen: false
        }
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
        // this.handleSkills = this.handleSkills.bind(this);
        this.acrobatics = this.acrobatics.bind(this);
        this.animalHandling = this.animalHandling.bind(this);
        this.arcana = this.arcana.bind(this);
        this.athletics = this.athletics.bind(this);
        this.deception = this.deception.bind(this);
        this.history = this.history.bind(this);
        this.insight = this.insight.bind(this);
        this.intimidation = this.intimidation.bind(this);
        this.investigation = this.investigation.bind(this);
        this.medicine = this.medicine.bind(this);
        this.nature = this.nature.bind(this);
        this.perception = this.perception.bind(this);
        this.performance = this.performance.bind(this);
        this.persuasion = this.persuasion.bind(this);
        this.religion = this.religion.bind(this);
        this.sleightOfHand = this.sleightOfHand.bind(this);
        this.stealth = this.stealth.bind(this);
        this.survival = this.survival.bind(this);
        this.applySkills = this.applySkills.bind(this);

    }
    //check this with internet
    // handleSkills(props) {
    //     let trainableSkills = this.props.classSkills;
    //     let backgroundSkills = this.props.backgroundSkills;
    //     //filter out duplicates
    //     for (var i = 0; i < backgroundSkills.length; i++) {
    //         if (trainableSkills.indexOf(backgroundSkills[i]) === -1) {
    //             trainableSkills.push(backgroundSkills[i])
    //         }
    //     }
    //     console.log(trainableSkills)
    //     this.setState({
    //         trainableSkills: trainableSkills
    //     })
    // }

    acrobatics() {
        let acrobatics = this.state.acrobatics


        if (acrobatics === false) {
            acrobatics = true
        }
        else if (acrobatics === true) {
            acrobatics = false
        }
        this.setState({
            acrobatics: acrobatics
        })
    }

    animalHandling() {
        let animalHandling = this.state.animalHandling


        if (animalHandling === false) {
            animalHandling = true
        }
        else if (animalHandling === true) {
            animalHandling = false
        }
        this.setState({
            animalHandling: animalHandling
        })
    }

    arcana() {
        let arcana = this.state.arcana


        if (arcana === false) {
            arcana = true
        }
        else if (arcana === true) {
            arcana = false
        }
        this.setState({
            arcana: arcana
        })
    }

    athletics() {
        let athletics = this.state.athletics


        if (athletics === false) {
            athletics = true
        }
        else if (athletics === true) {
            athletics = false
        }
        this.setState({
            athletics: athletics
        })
    }

    deception() {
        let deception = this.state.deception


        if (deception === false) {
            deception = true
        }
        else if (deception === true) {
            deception = false
        }
        this.setState({
            deception: deception
        })
    }

    history() {
        let history = this.state.history


        if (history === false) {
            history = true
        }
        else if (history === true) {
            history = false
        }
        this.setState({
            history: history
        })
    }

    insight() {
        let insight = this.state.insight


        if (insight === false) {
            insight = true
        }
        else if (insight === true) {
            insight = false
        }
        this.setState({
            insight: insight
        })
    }

    intimidation() {
        let intimidation = this.state.intimidation


        if (intimidation === false) {
            intimidation = true
        }
        else if (intimidation === true) {
            intimidation = false
        }
        this.setState({
            intimidation: intimidation
        })
    }

    investigation() {
        let investigation = this.state.investigation


        if (investigation === false) {
            investigation = true
        }
        else if (investigation === true) {
            investigation = false
        }
        this.setState({
            investigation: investigation
        })
    }

    medicine() {
        let medicine = this.state.medicine


        if (medicine === false) {
            medicine = true
        }
        else if (medicine === true) {
            medicine = false
        }
        this.setState({
            medicine: medicine
        })
    }

    nature() {
        let nature = this.state.nature


        if (nature === false) {
            nature = true
        }
        else if (nature === true) {
            nature = false
        }
        this.setState({
            nature: nature
        })
    }

    perception() {
        let perception = this.state.perception


        if (perception === false) {
            perception = true
        }
        else if (perception === true) {
            perception = false
        }
        this.setState({
            perception: perception
        })
    }

    performance() {
        let performance = this.state.performance


        if (performance === false) {
            performance = true
        }
        else if (performance === true) {
            performance = false
        }
        this.setState({
            performance: performance
        })
    }

    persuasion() {
        let persuasion = this.state.persuasion


        if (persuasion === false) {
            persuasion = true
        }
        else if (persuasion === true) {
            persuasion = false
        }
        this.setState({
            persuasion: persuasion
        })
    }

    religion() {
        let religion = this.state.religion


        if (religion === false) {
            religion = true
        }
        else if (religion === true) {
            religion = false
        }
        this.setState({
            religion: religion
        })
    }

    sleightOfHand() {
        let sleightOfHand = this.state.sleightOfHand


        if (sleightOfHand === false) {
            sleightOfHand = true
        }
        else if (sleightOfHand === true) {
            sleightOfHand = false
        }
        this.setState({
            sleightOfHand: sleightOfHand
        })
    }

    stealth() {
        let stealth = this.state.stealth


        if (stealth === false) {
            stealth = true
        }
        else if (stealth === true) {
            stealth = false
        }
        this.setState({
            stealth: stealth
        })
    }

    survival() {
        let survival = this.state.survival


        if (survival === false) {
            survival = true
        }
        else if (survival === true) {
            survival = false
        }
        this.setState({
            survival: survival
        })
    }



    applySkills(event) {
        event.preventDefault()
        let profSkills = [
            {"Acrobatics":this.state.acrobatics},
            {"Animal Handling":this.state.animalHandling},
            {"Arcana":this.state.arcana},
            {"Athletics":this.state.athletics},
            {"Deception":this.state.deception},
            {"History":this.state.history},
            {"Insight":this.state.insight},
            {"Intimidation":this.state.intimidation},
            {"Investigation":this.state.investigation},
            {"Medicine":this.state.medicine},
            {"Nature":this.state.nature},
            {"Perception":this.state.perception},
            {"Performance":this.state.performance},
            {"Persuasion":this.state.persuasion},
            {"Religion":this.state.religion},
            {"Sleight of Hand":this.state.sleightOfHand},
            {"Stealth":this.state.stealth},
            {"Survival":this.state.survival}]

        console.log(profSkills)

        let mappedSkills = [];
        profSkills.map((e,i,a) => {
            for (var i in e){
                // console.log(i)
                if (e[i] === true) {
                    mappedSkills.push(i)
                }
            }
        })
        console.log(mappedSkills);
        this.props.handleSkills(mappedSkills)            
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    afterOpenModal() {
        this.subtitle.style.color = 'darkred';
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }


    render() {
        let trainableSkills = this.props.trainableSkills;
        let mappedSkills = trainableSkills.map(e => {
            return e.slice(6)

        })

        return (
            <div>
                {/* <button onClick={this.handleSkills}>Choose Skills</button> */}
                <button onClick={this.openModal}>Select Skills</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Choose your Skills">
                    <button className="close" onClick={this.closeModal}>x</button>

                    <h2 ref={subtitle => this.subtitle = subtitle}>Available Skills Proficiencies</h2>
                    <div>Choose 4 from: {mappedSkills}</div>
                    <form onSubmit={this.applySkills}>
                        <div className="checkbox">

                            <input type="checkbox" value="Acrobatics" onChange={this.acrobatics} />Acrobatics

                        </div>
                        <div className="checkbox">

                            <input type="checkbox" value="Animal Handling" onChange={this.animalHandling} />Animal Handling

                        </div>
                        <div className="checkbox">

                            <input type="checkbox" value="Arcana" onChange={this.arcana} />Arcana

                        </div>
                        <div className="checkbox">

                            <input type="checkbox" value="Athletics" onChange={this.athletics} />Athletics

                        </div>
                        <div className="checkbox">

                            <input type="checkbox" value="Deception" onChange={this.deception} />Deception

                        </div>
                        <div className="checkbox">

                            <input type="checkbox" value="History" onChange={this.history} />History

                        </div>
                        <div className="checkbox">

                            <input type="checkbox" value="Insight" onChange={this.insight} />Insight

                        </div>
                        <div className="checkbox">

                            <input type="checkbox" value="Intimidation" onChange={this.intimidation} />Intimidation

                        </div>
                        <div className="checkbox">

                            <input type="checkbox" value="Investigation" onChange={this.investigation} />Investigation

                        </div>
                        <div className="checkbox">

                            <input type="checkbox" value="Medicine" onChange={this.medicine} />Medicine

                        </div>
                        <div className="checkbox">

                            <input type="checkbox" value="Nature" onChange={this.nature} />Nature

                        </div>
                        <div className="checkbox">

                            <input type="checkbox" value="Perception" onChange={this.perception} />Perception

                        </div>
                        <div className="checkbox">

                            <input type="checkbox" value="Performance" onChange={this.performance} />Performance

                        </div>
                        <div className="checkbox">

                            <input type="checkbox" value="Persuasion" onChange={this.persuasion} />Persuasion

                        </div>
                        <div className="checkbox">

                            <input type="checkbox" value="Religion" onChange={this.religion} />Religion

                        </div>
                        <div className="checkbox">

                            <input type="checkbox" value="Sleight of Hand" onChange={this.sleightOfHand} />Sleight of Hand

                        </div>
                        <div className="checkbox">

                            <input type="checkbox" value="Stealth" onChange={this.stealth} />Stealth

                        </div>
                        <div className="checkbox">

                            <input type="checkbox" value="Survival" onChange={this.survival} />Survival

                        </div>
                        <button type="submit" >Submit</button>
                    </form>
                </Modal>
            </div>

        )
    }
}

export default Skills;

