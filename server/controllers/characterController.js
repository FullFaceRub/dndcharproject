let characters = [];
let id = 0;

module.exports = {

    create: (req,res) =>{
        const {character, profSkills, strength, dexterity,constitution,intelligence,wisdom,charisma}=req.body;
        characters.push({id,character, profSkills, strength, dexterity,constitution,intelligence,wisdom,charisma})
        id++;
        console.log("hit");
        console.log(characters);
        res.status(200).send(characters);
    },
    
    read: (req,res) =>{
        const name = req.params.name;
        const character = characters.map(e=>{
            if (e.character[0].name.toUpperCase()==name){
                return e;
            }
        })
        console.log("hit");
        console.log(character);
        res.status(200).send(character);
    },
    update: (req,res) =>{

        res.status(200).send(characters);
    },
    
    delete: (req,res) =>{

        res.status(200).send(characters);
    }

}