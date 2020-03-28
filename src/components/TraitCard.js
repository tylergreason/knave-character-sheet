import React from 'react' 

const TraitCard = (props) => {
    return (
        <li>
            {props.trait[0]}:{props.trait[1]}
        </li>
        )
}
export default TraitCard