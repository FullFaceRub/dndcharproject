import React, { Component } from 'react';
import axios from 'axios';

class SelectionBox extends Component {
    constructor() {
        super();

        this.state = {
            races: [],
            classes: [],
            // backgrounds: [],
            // alignments: []
        }
        
    }

    componentDidMount() {        

            axios.get('http://dnd5eapi.co/api/races')
                .then(res => {
                    console.log(res)
                    this.setState({
                        races: res.data.results
                    })
                })

            axios.get('http://dnd5eapi.co/api/classes')
                .then(res => {
                    console.log(res);
                    this.setState({
                        classes: res.data.results
                    })
                })

            // axios.get('http://dnd5eapi.co/api/backgrounds')
            //     .then(res => {
            //         this.setState({
            //             backgrounds: res.data.results
            //         })
            //     })       

        
            // axios.get('http://dnd5eapi.co/api/alignment')
            //     .then(res => {
            //         console.log(res.data.results)
            //         this.setState({
            //             alignments: res.data.results
            //         })

            //     })
        
    }

    render() {
        let raceArr = this.state.races;
        let classArr = this.state.classes;
        // let bgArr = this.state.backgrounds;
        // let alignArr = this.state.alignments;
        
        console.log(raceArr)

        let raceMap = raceArr.map((race,i) => {
            return (<option key={i} value={race.name} >{race.name}</option>)
        })
        let classMap = classArr.map((role,i) => {
            return (<option key={i} value={role.name} >{role.name}</option>)
        })

        return (
            <div>
                <input
                    onChange={event => this.props.name(event.target.value)}
                    placeholder='Enter Character Name' />
                
                <select
                    required
                    onChange={event => this.props.race(event.target.value)}
                    placeholder='Select Race'>
                    <option defaultValue='Race' disabled selected>Select Race</option>
                    {raceMap}
                </select>
                
                <select
                    required
                    onChange={event => this.props.class(event.target.value)}
                    placeholder='Select Class'>
                    <option defaultValue='Class' disabled selected>Select Class</option>
                    {classMap}
                </select>
                <select
                    required
                    onChange={event => this.props.background(event.target.value)}
                    placeholder='Select Background'>
                    <option defaultValue='Background' disabled selected>Select Background</option>
                    <option value='Acolyte'>Acolyte</option>
                    <option value='Charlatan'>Charlatan</option>
                    <option value='Criminal'>Criminal</option>
                    <option value='Entertainer'>Entertainer</option>
                    <option value='Folk Hero'>Folk Hero</option>
                    <option value='Guild Artisan'>Guild Artisan</option>
                    <option value='Hermit'>Hermit</option>
                    <option value='Noble'>Noble</option>
                    <option value='Outlander'>Outlander</option>
                    <option value='Sage'>Sage</option>
                    <option value='Sailor'>Sailor</option>
                    <option value='Soldier'>Soldier</option>
                    <option value='Urchin'>Urchin</option>
                </select>
                <select
                    required
                    // defaultValue='Alignment'
                    onChange={event => this.props.alignment(event.target.value)}
                    placeholder='Select Alignment'>
                    <option defaultValue='Alignment' disabled selected>Select Alignment</option>
                    <option value='Lawful Good'>Lawful Good</option>
                    <option value='Neutral Good'>Neutral Good</option>
                    <option value='Chaotic Good'>Chaotic Good</option>
                    <option value='Lawful Neutral'>Lawful Neutral</option>
                    <option value='True Neutral'>True Neutral</option>
                    <option value='Chaotic Neutral'>Chaotic Neutral</option>
                    <option value='Lawful Evil'>Lawful Evil</option>
                    <option value='Neutral Evil'>Neutral Evil</option>
                    <option value='Chaotic Evil'>Chaotic Evil</option>
                </select>
                <button
                    onClick={event => this.props.submit(event.target.value)}>
                    Create Character
                </button>
            </div>
        )
    }
}

export default SelectionBox;