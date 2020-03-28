import { abilityScores } from '../components/general/AttributesInitialize'
import { traits } from '../components/general/TraitInitialize'



function characterReducer(state = {abilityScores:abilityScores(),
    items:[],
    traits:traits}, action) {
    switch (action.type){
      case 'UPDATE_TRAITS':
        console.log(action.traits)
        return {...state, traits:action.traits}
      default: 
        return state
    }
    // return state
  };
  export default characterReducer