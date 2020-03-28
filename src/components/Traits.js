import React, { Component } from 'react' 
import { connect } from 'react-redux'
import { updateTraits } from '../actions/knaves'
import TraitCard from './TraitCard'
import Button from './general/Button'

class Traits extends Component {
    state = {
        traits:{}
    }

    componentDidMount = () => {
        this.setState({
            traits:this.props.traits
        })
    }

    handleOnChange = (e) => {
        this.setState({
            traits:{...this.state.traits,[e.target.name]:e.target.value}
        })

    }

    submitTraits = (traits) => {
        this.props.updateTraits(traits)
    }

    renderSubmitTraitsButton = () => {
        return (
            // render button that submits this component's state as traits 
            <Button 
                onSubmit={this.submitTraits(this.state.traits)}
                text={"Submit Traits"}
            />
            )
        }

    renderTraits = (traits) => {
        const traitPairs = Object.entries(traits) 
        return traitPairs.map(trait => {
            return <TraitCard  
                        key={trait[0]}
                        trait={trait} 
                        onChange={this.handleOnChange}
                    />
        })
    }

    render(){
        return(
            <div>Traits
                {<form>
                {this.renderTraits(this.props.traits)}
                    
                    </form>}
                {this.renderSubmitTraitsButton()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {traits: state.traits}
  }

export default connect(mapStateToProps, { updateTraits })(Traits)