import React, { Component } from 'react'
import { connect } from 'react-redux'
import Traits from '../components/Traits'
import AbilityScores from '../components/AbilityScores'


class CharacterSheet extends Component {
    render(){
        return(
            <div>
                Character Sheet
                <AbilityScores />
                <Traits />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {state}
  }

//   const mapStateToProps = state => {
//     return { quotes: state.quotes }
//   }


export default connect(mapStateToProps)(CharacterSheet)