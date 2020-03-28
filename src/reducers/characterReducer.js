const traitOptions = {
    gender:['Male','Female'],
    physique:['Athletic','Brawny','Corpulent','Delicate','Gaunt','Hulking','Lanky','Ripped','Rugged','Scrawny','Short','Stout','Sinewy','Tiny','Slender','Towering','Flabby','Willowy','Statuesque','Wiry'],
    face:['Bloated','Blunt','Bony','Chiseld','Delicate','Elongated','Patrician','Pinched','Hawkish','Broken','Impish','Narrow','Ratlike','Round','Sunken','Sharp','Soft','Square','Wide','Wolfish'],
    skin:['Battle Scar','Oily','Reeking','Birthmark','Pale','Tattooed','Burn Scar','Perfect','Rosy','Dark','Pierced','Rough','Makeup','Pockmarked','Sallow','Sunburned','Tanned','War Paint','Weathered','Whip Scar'],
    hair:['Bald','Braided','Bristly'],
    clothing:['Antique','Bloody','Ceremonial'],
    virtue:['Ambitious','Cautious','Courageous'],
    vice:['Aggressive','Arrogant','Bitter'],
    speech:['Blunt','Booming','Breathy'],
    background:['Alchemist','Beggar','Butcher'],
    misfortune:['Abandoned','Addicted','Blackmailed']
};

// function to find random value from trait in traitOptions
function randomTrait(trait){
    const listLength = traitOptions[trait].length; 
    const randomValue = Math.floor(Math.random()*listLength)
    return traitOptions[trait][randomValue]
}

const traits = {
    gender:randomTrait('gender'),
    physique:randomTrait('physique'),
    face:randomTrait('face'),
    skin:randomTrait('skin'),
    hair:randomTrait('hair'),
    clothing:randomTrait('clothing'),
    virtue:randomTrait('virtue'),
    vice:randomTrait('vice'),
    speech:randomTrait('speech'),
    background:randomTrait('background'),
    misfortune:randomTrait('misfortune')
}


function characterReducer(state = {abilityScores:[],
    items:[],
    traits:traits}, action) {
    switch (action.type){
      case 'UPDATE_TRAITS':
        // debugger
        console.log(action.traits)
        return {...state, traits:action.traits}
        // return {bands: state.bands.concat(action.payload.name)}
        // return {...state, bands: [...state.bands, action.band]}
        
      default: 
        return state
    }
    // return state
  };
  export default characterReducer