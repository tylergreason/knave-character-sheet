import React from 'react' 

const AbilityScoreCard = (props) => {
    // console.log(props)
    return(
        <div>
            {props.abilityScore[0]} : {props.abilityScore[1]}
        </div>
    )
}

export default  AbilityScoreCard