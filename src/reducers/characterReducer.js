// const state = {abilityScores:[],
//             items:[],
//             traits:[]}

function characterReducer(state = {abilityScores:[],
    items:[],
    traits:[]}, action) {
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