import React, { Component } from 'react';
import Modal from 'react-modal';
import './reset.css';
import './App.css';
import SelectionBox from './components/SelectionBox';
import Character from './components/Character';
// import Stats from './components/Stats';
import Roller from './components/Roller';
import axios from 'axios';
import tiamat from './images/tiamat.jpg';
import Skills from './components/Skills';
import magglass from './images/magglass.png';
import logo from './images/logo.png';



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
      charismaBonus: null,
      classSkills: [],
      backgroundSkills: [],
      trainableSkills: [],
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
      profSkills: [],
      strength:null,
      dexterity:null,
      constitution: null,
      intelligence: null,
      wisdom: null,
      charisma: null,
      search:''
    }
    this.handleName = this.handleName.bind(this);
    this.handleRace = this.handleRace.bind(this);
    this.handleClass = this.handleClass.bind(this);
    this.handleBackground = this.handleBackground.bind(this);
    this.handleAlignment = this.handleAlignment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateRoll = this.updateRoll.bind(this);
    this.handleSkills = this.handleSkills.bind(this);
    this.createCharacter = this.createCharacter.bind(this);
    this.searchInput = this.searchInput.bind(this);
    this.findCharacter = this.findCharacter.bind(this);
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

    axios.get('http://dnd5eapi.co/api/races')
      .then(res => {
        console.log(res);
      })

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
    // if (val === "Dragonborn") {
    //   str = 2;
    //   cha = 1;
    // }
    // if (val === "Gnome") {
    //   con = 1;
    //   int = 2;
    // }
    // if (val === "Half-Elf") {
    //   cha = 2;
    // }
    // if (val === "Half-Orc") {
    //   str = 2;
    //   con = 1;
    // }
    // if (val === "Tiefling") {
    //   int = 1;
    //   cha = 2;
    // }

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
    axios.get('http://dnd5eapi.co/api/classes/' + (val).toLowerCase())//use parameter to get class
      .then(res => {
        console.log(res);
        let skills = res.data.proficiency_choices[0].from.map(skill => {
          return skill.name
        })
        this.setState({
          classSkills: skills
        })//map through array to get proficient skills
        console.log(this.state.classSkills)
      })
    this.setState({
      class: val
    })
  }

  handleBackground(val) {
    let skills = [];
    if (val === 'Acolyte') {
      skills = ["Skill: Insight", "Skill: Religion"]
    }
    if (val === 'Charlatan') {
      skills = ["Skill: Deception", "Skill: Sleight of Hand"]
    }
    if (val === 'Criminal') {
      skills = ["Skill: Deception", "Skill: Stealth"]
    }
    if (val === 'Entertainer') {
      skills = ["Skill: Acrobatics", "Skill: Performance"]
    }
    if (val === 'Folk Hero') {
      skills = ["Skill: Animal Handling", "Skill: Survival"]
    }
    if (val === 'Guild Artisan') {
      skills = ["Skill: Insight", "Skill: Persuasion"]
    }
    if (val === 'Hermit') {
      skills = ["Skill: Medicine", "Skill: Religion"]
    }
    if (val === 'Noble') {
      skills = ["Skill: History", "Skill: Persuasion"]
    }
    if (val === 'Outlander') {
      skills = ["Skill: Athletics", "Skill: Survival"]
    }
    if (val === 'Sage') {
      skills = ["Skill: Arcana", "Skill: History"]
    }
    if (val === 'Sailor') {
      skills = ["Skill: Athletics", "Skill: Persuasion"]
    }
    if (val === 'Soldier') {
      skills = ["Skill: Athletics", "Skill: Intimidation"]
    }
    if (val === 'Urchin') {
      skills = ["Skill: Sleight of Hand", "Skill: Stealth"]
    }
    this.setState({
      backgroundSkills: skills,
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
    let trainableSkills = this.state.classSkills;
    let backgroundSkills = this.state.backgroundSkills;
    //filter out duplicates
    for (var i = 0; i < backgroundSkills.length; i++) {
      if (trainableSkills.indexOf(backgroundSkills[i]) === -1) {
        trainableSkills.push(backgroundSkills[i])
      }
    }
    // newChar.push(
    //   this.state.name,
    //   this.state.race,
    //   this.state.class,
    //   this.state.background,
    //   this.state.alignment)
    console.log(newChar);
    this.setState({
      character: newChar,
      trainableSkills: trainableSkills
    })
  }

  updateRoll(str, dex, con, wis, int, cha) {
    let strength = str + this.state.strengthBonus;
    let dexterity = dex + this.state.dexterityBonus;
    let constitution = con + this.state.constitutionBonus;
    let intelligence = int + this.state.intelligenceBonus;
    let wisdom = wis + this.state.wisdomBonus;
    let charisma = cha + this.state.charismaBonus;

    this.setState({
      strength: strength,
      dexterity: dexterity,
      constitution: constitution,
      wisdom: wisdom,
      intelligence: intelligence,
      charisma: charisma
    })
  }

  handleSkills(profSkills){
    
    this.setState({
      profSkills:profSkills
    })
  }

  createCharacter(){
    const {character, profSkills, strength, dexterity,constitution,intelligence,wisdom,charisma}= this.state;
    axios.post('/api/characters',{character,profSkills,strength,dexterity,constitution,intelligence,wisdom,charisma}).then(res =>{
    
    })
  }

  findCharacter(){
    let val = this.state.search;
    axios.get('/api/characters/'+val.toUpperCase()).then(res=>{
      console.log(res);
      // this.setState({
      //   name: 
      // })
    })
  } 

  searchInput(e){
    this.setState({
      search:e
    })
  }


  render() {
    return (
      <div className="App">
        <div className="body">
          <header className="mainheader">
            <img src={logo} alt="logo" className="logo" />
            <div className="title">
              <h1>Dungeons and Dragons Character Creator</h1>
            </div>
            <div className="search">
              <input className="searchbox" placeholder="Search" onChange={e=>this.searchInput(e.target.value)} />
              <button className="searchbutton" onClick={this.findCharacter}><img src={magglass} alt="Search" className="searchicon" /></button>
            </div>
          </header>
          <span className="horizontal">
            <section className="topleft"></section>
            <section className="topmidleft"></section>
            <section className="topmidright"></section>
            <section className="topright"></section>
          </span>
          <span className="horizontal" id="middle">
            <section className="midleft"></section>
            <img src={tiamat} alt="The Evil Goddess Tiamat" className="land-img" />
            <section className="maincontent">
              <div className="buttons">

                <SelectionBox
                  name={this.handleName}
                  race={this.handleRace}
                  class={this.handleClass}
                  background={this.handleBackground}
                  alignment={this.handleAlignment}
                  submit={this.handleSubmit} />


                <Roller

                  updateRoll={this.updateRoll} />
                <Skills
                  // strengthBonus={this.state.strengthBonus}
                  // dexterityBonus={this.state.dexterityBonus}
                  // constitutionBonus={this.state.constitutionBonus}
                  // intelligenceBonus={this.state.intelligenceBonus}
                  // wisdomBonus={this.state.wisdomBonus}
                  // charismaBonus={this.state.charismaBonus}
                  // baseStrength={this.state.baseStrength}
                  // baseDexterity={this.state.baseDexterity}
                  // baseConstitution={this.state.baseConstitution}
                  // baseWisdom={this.state.baseWisdom}
                  // baseIntelligence={this.state.baseIntelligence}
                  // baseCharisma={this.state.baseCharisma}
                  // backgroundSkills={this.state.backgroundSkills}
                  // classSkills={this.state.classSkills}
                  trainableSkills={this.state.trainableSkills}
                  handleSkills={this.handleSkills}
                />
              </div>
              <div className="charPreview">
                <Character
                  character={this.state.character}
                  profSkills={this.state.profSkills}
                  strength={this.state.strength}
                  dexterity={this.state.dexterity}
                  constitution={this.state.constitution}
                  intelligence={this.state.intelligence}
                  wisdom={this.state.wisdom}
                  charisma={this.state.charisma} />
              </div>
              <button onClick={this.createCharacter}>Create Character</button>
            </section>
            <section className="midright"></section>
          </span>
          <span className="horizontal">
            <section className="bottomleft"></section>
            <section className="bottommidleft"></section>
            <section className="bottommidright"></section>
            <section className="bottomright"></section>
          </span>
          <footer className="mainfooter">
            <div>
              <h5>Copyright: Dan Bury</h5>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
