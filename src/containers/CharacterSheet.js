import React, { Component } from 'react'
import Traits from '../components/Traits'
import { connect } from 'react-redux'

class CharacterSheet extends Component {
    state = {
    }

    render(){
        return(
            <div>
                Character Sheet
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