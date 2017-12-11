import React, { Component } from 'react';
import Modal from 'react-modal';
import './forms.css';
import './roller.css';

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

class Roller extends Component {
    constructor(props) {
        super(props);

        this.state = {
            baseStrength: null,
            baseDexterity: null,
            baseConstitution: null,
            baseIntelligence: null,
            baseWisdom: null,
            baseCharisma: null,
        }

        this.handleRoll = this.handleRoll.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
    }

    handleRoll(props) {
        let str = Math.floor((Math.random() * (7 - 1) + 1) + (Math.random() * (7 - 1) + 1) + (Math.random() * (7 - 1) + 1));
        console.log(str);
        let dex = Math.floor((Math.random() * (7 - 1) + 1) + (Math.random() * (7 - 1) + 1) + (Math.random() * (7 - 1) + 1));
        let con = Math.floor((Math.random() * (7 - 1) + 1) + (Math.random() * (7 - 1) + 1) + (Math.random() * (7 - 1) + 1));
        let int = Math.floor((Math.random() * (7 - 1) + 1) + (Math.random() * (7 - 1) + 1) + (Math.random() * (7 - 1) + 1));
        let wis = Math.floor((Math.random() * (7 - 1) + 1) + (Math.random() * (7 - 1) + 1) + (Math.random() * (7 - 1) + 1));
        let cha = Math.floor((Math.random() * (7 - 1) + 1) + (Math.random() * (7 - 1) + 1) + (Math.random() * (7 - 1) + 1));

        this.setState({
            baseStrength: str,
            baseDexterity: dex,
            baseConstitution: con,
            baseWisdom: wis,
            baseIntelligence: int,
            baseCharisma: cha
        })




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

    submitRoll() {
        let str = this.state.baseStrength;
        let dex = this.state.baseDexterity;
        let con = this.state.baseConstitution;
        let wis = this.state.baseWisdom;
        let int = this.state.baseIntelligence;
        let cha = this.state.baseCharisma;

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
                <button onClick={this.openModal}>Ability Roller</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Roll for Ability Scores">

                    <button className="close" onClick={this.closeModal}>x</button>
                    <h2 ref={subtitle => this.subtitle = subtitle}>Base Ability Scores</h2>

                    <div className="display">
                        <h5>STR: {str}</h5>
                        <h5>DEX: {dex}</h5>
                        <h5>CON: {con}</h5>
                        <h5>INT: {int}</h5>
                        <h5>WIS: {wis}</h5>
                        <h5>CHA: {cha}</h5>
                        <button onClick={this.handleRoll}>Roll for Stats</button>
                        <button onClick={this.submitRoll}>Submit</button>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default Roller;