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



const traits = {
    gender:traitOptions.gender[0],
    physique:traitOptions.physique[0],
    face:traitOptions.face[0],
    skin:traitOptions.skin[0],
    hair:traitOptions.hair[0],
    clothing:traitOptions.clothing[0],
    virtue:traitOptions.virtue[0],
    vice:traitOptions.vice[0],
    speech:traitOptions.speech[0],
    background:traitOptions.background[0],
    misfortune:traitOptions.misfortune[0]
}


function characterReducer(state = {abilityScores:[],
    items:[],
    traits:traits}, action) {
    switch (action.type){
      case 'UPDATE_TRAITS':
        // return {bands: state.bands.concat(action.payload.name)}
        // return {...state, bands: [...state.bands, action.band]}
      default: 
        return state
    }
    // return state
  };
  export default characterReducer