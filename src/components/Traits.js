import React, { Component } from 'react' 
import { connect } from 'react-redux'
import { changeTrait } from '../actions/knaves'

class Traits extends Component {
    state = {

    }
    render(){
        return(
            <div>Traits</div>
        )
    }
}

const mapStateToProps = state => {
    return {traits: state.traits}
  }

export default connect(mapStateToProps, {changeTrait})(Traits)