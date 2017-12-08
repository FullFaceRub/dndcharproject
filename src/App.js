import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import './reset.css';
import './App.css';
import SelectionBox from './components/SelectionBox';
import Character from './components/Character';
import Stats from './components/Stats';
import Roller from './components/Roller';
import axios from 'axios';
import tiamat from './images/tiamat.jpg';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      race: '',
      class: '',
      background: '',
      alignment: '',
      character: {},
      strengthBonus: null,
      dexterityBonus: null,
      constitutionBonus: null,
      intelligenceBonus: null,
      wisdomBonus: null,
      charismaBonus: null
    }
    this.handleName = this.handleName.bind(this);
    this.handleRace = this.handleRace.bind(this);
    this.handleClass = this.handleClass.bind(this);
    this.handleBackground = this.handleBackground.bind(this);
    this.handleAlignment = this.handleAlignment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateRoll = this.updateRoll.bind(this);
  }

  //for search bar when searching for races and spells
  // componentDidMount(){
  //   let promise = axios.get('http://dnd5eapi.co/api/')
  // }

  handleName(val) {
    this.setState({
      name: val
    })
  }

  handleRace(val) {
    let str = 0;
    let dex = 0;
    let con = 0;
    let int = 0;
    let wis = 0;
    let cha = 0;

    if (val === "Elf") {
      dex = 2;
      int = 1;
    }
    if (val === "Dwarf") {
      str = 2;
      con = 2;
    }
    if (val === "Halfling") {
      dex = 2;
      con = 1;
    }
    if (val === "Human") {
      str = 1;
      dex = 1;
      con = 1;
      int = 1;
      wis = 1;
      cha = 1;
    }
    if (val === "Dragonborn") {
      str = 2;
      cha = 1;
    }
    if (val === "Gnome") {
      con = 1;
      int = 2;
    }
    if (val === "Half-Elf") {
      cha = 2;
    }
    if (val === "Half-Orc") {
      str = 2;
      con = 1;
    }
    if (val === "Tiefling") {
      int = 1;
      cha = 2;
    }

    this.setState({
      race: val,
      strengthBonus: str,
      dexterityBonus: dex,
      constitutionBonus: con,
      intelligenceBonus: int,
      wisdomBonus: wis,
      charismaBonus: cha
    })
  }

  handleClass(val) {
    this.setState({
      class: val
    })
  }

  handleBackground(val) {
    this.setState({
      background: val
    })
  }

  handleAlignment(val) {
    this.setState({
      alignment: val
    })
  }

  handleSubmit() {
    let newChar = {
      name: this.state.name,
      race: this.state.race,
      class: this.state.class,
      background: this.state.background,
      alignment: this.state.alignment
    };
    // newChar.push(
    //   this.state.name,
    //   this.state.race,
    //   this.state.class,
    //   this.state.background,
    //   this.state.alignment)
    console.log(newChar);
    this.setState({
      character: newChar
    })
  }

  updateRoll(str, dex, con, wis, int, cha){
    this.setState({
      baseStrength: str,
      baseDexterity: dex,
      baseConstitution: con,
      baseWisdom: wis,
      baseIntelligence: int,
      baseCharisma: cha
  })
  }



  render() {
    return (
      <div className="App">
        <div className="body">
          <header className="mainheader">
            <img />
            <nav>
            </nav>
            <input />
            <button></button>
          </header>
          <span className="horizontal">
            <section className="topleft"></section>
            <section className="topright"></section>
          </span>
          <span className="horizontal" id="middle">
            <section className="midleft"></section>
            <img src={tiamat} alt="The Evil Goddess Tiamat" className="land-img"/>
            <section className="maincontent">
              <div>
                <h1>Dungeons and Dragons Character Creator</h1>
                <SelectionBox
                  name={this.handleName}
                  race={this.handleRace}
                  class={this.handleClass}
                  background={this.handleBackground}
                  alignment={this.handleAlignment}
                  submit={this.handleSubmit}
                />
                <Roller updateRoll={this.updateRoll} />
              </div>
              <div>
                <Character
                  character={this.state.character} />
                <Stats
                  strength={this.state.strengthBonus}
                  dexterity={this.state.dexterityBonus}
                  constitution={this.state.constitutionBonus}
                  intelligence={this.state.intelligenceBonus}
                  wisdom={this.state.wisdomBonus}
                  charisma={this.state.charismaBonus} />
              </div>
            </section>
            <section className="midright"></section>
          </span>
          <span className="horizontal">
            <section className="topleft"></section>
            <section className="topright"></section>
          </span>
          <footer className="mainfooter">

          </footer>
        </div>
      </div>
    );
  }
}

export default App;
