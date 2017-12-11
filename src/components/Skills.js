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
            acrobatics: 0,
            animalHandling: 0,
            arcana: 0,
            athletics: 0,
            deception: 0,
            history: 0,
            insight: 0,
            intimidation: 0,
            investigation: 0,
            medicine: 0,
            nature: 0,
            perception: 0,
            performance: 0,
            persuasion: 0,
            religion: 0,
            sleightOfHand: 0,
            stealth: 0,
            survival: 0,
            // trainableSkills: [],
            modalIsOpen: false
        }
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
        // this.handleSkills = this.handleSkills.bind(this);
        this.acrobatics = this.acrobatics.bind(this);
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


        if (acrobatics < 2) {
            acrobatics = 2
        }
        else if (acrobatics > 0) {
            acrobatics = 0
        }
        this.setState({
            acrobatics: acrobatics
        })
        console.log(this.state.acrobatics);
    }

    applySkills() {

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
                    <div>Choose from: {trainableSkills}</div>
                    <form>
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
                        <button onClick={this.applySkills}>Submit</button>
                    </form>
                </Modal>
            </div>

        )
    }
}

export default Skills;

