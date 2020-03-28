import React from 'react' 

const TraitCard = (props) => {
    return (
        <div>
            <label>
                {props.trait[0]}
            </label>

            <input
                name={props.trait[0]}
                type='text'
                // onClick={props.onClick}
                // name={props.trait[0]}
                value={props.trait[1]}
                onChange={props.onChange}
                >
                {/* {props.trait[0]}:{props.trait[1]} */}
            </input>
        </div>
        )
}
export default TraitCard