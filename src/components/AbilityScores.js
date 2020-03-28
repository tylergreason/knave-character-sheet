import React, { Component } from 'react' 
import { connect } from 'react-redux'
import AbilityScoreCard from './cards/AbilityScoreCard'

class AbilityScores extends Component {

    renderAbilityScores = (abilityScores) => {
        const abilityScorePairs = Object.entries(abilityScores)
        return abilityScorePairs.map(score => {
            return <AbilityScoreCard abilityScore={score}/>
        })
    }

    componentDidMount = () => {
        this.setState({
            abilityScores:this.props.abilityScores  
        })
    }

    render(){
        return(
            <div>Ability Scores
                {this.renderAbilityScores(this.props.abilityScores)}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {abilityScores: state.abilityScores}
}

export default connect(mapStateToProps)(AbilityScores)