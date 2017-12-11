import React, { Component } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

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
            trainableSkills: [],
            modalIsOpen: false
        }
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
        this.handleSkills = this.handleSkills.bind(this);
    }
    //check this with internet
    handleSkills(props) {
        let trainableSkills = this.props.classSkills;
        let backgroundSkills = this.props.backgroundSkills;
        //filter out duplicates
        for (var i = 0; i < backgroundSkills.length; i++) {
            if (trainableSkills.indexOf(backgroundSkills[i]) === -1) {
                trainableSkills.push(backgroundSkills[i])
            }
        }
        console.log(trainableSkills)
        this.setState({
            trainableSkills: trainableSkills
        })
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    afterOpenModal() {
        this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }


    render() {
        let trainableSkills=this.state.trainableSkills;
        return (
            <div>
                <button onClick={this.handleSkills}>Choose Skills</button>
                <button onClick={this.openModal}>Select Skills</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Choose your Skills">

                    <h2 ref={subtitle => this.subtitle = subtitle}>Available Skills Proficiencies</h2>
                    <button onClick={this.closeModal}>close</button>
                    <div>Choose from: {trainableSkills}</div>
                    <form>
                        <div className="radio">
                            <label>
                                <input type="radio" value="Acrobatics" checked={false} />Acrobatics
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio" value="Animal Handling" checked={false} />Animal Handling
                        </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio" value="Arcana" checked={false} />Arcana
                        </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio" value="Athletics" checked={false} />Athletics
                        </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio" value="Deception" checked={false} />Deception
                        </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio" value="History" checked={false} />History
                        </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio" value="Insight" checked={false} />Insight
                        </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio" value="Intimidation" checked={false} />Intimidation
                        </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio" value="Investigation" checked={false} />Investigation
                        </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio" value="Medicine" checked={false} />Medicine
                        </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio" value="Nature" checked={false} />Nature
                        </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio" value="Perception" checked={false} />Perception
                        </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio" value="Performance" checked={false} />Performance
                        </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio" value="Persuasion" checked={false} />Persuasion
                        </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio" value="Religion" checked={false} />Religion
                        </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio" value="Sleight of Hand" checked={false} />Sleight of Hand
                        </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio" value="Stealth" checked={false} />Stealth
                        </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio" value="Survival" checked={false} />Survival
                        </label>
                        </div>

                    </form>
                </Modal>
            </div>

        )
    }
}

export default Skills;

