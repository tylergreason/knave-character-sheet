import React, { Component } from 'react' 
import { connect } from 'react-redux'
import { changeTrait } from '../actions/knaves'
import TraitCard from './TraitCard'

class Traits extends Component {

    renderTraits = (traits) => {
        const traitPairs = Object.entries(traits) 
        return traitPairs.map(trait => <TraitCard trait={trait} />)
    }

    render(){
        return(
            <div>Traits
                {this.renderTraits(this.props.traits)}

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {traits: state.traits}
  }

export default connect(mapStateToProps, {changeTrait})(Traits)