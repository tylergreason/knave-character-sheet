// roll 3d6 and get the lowest 
const generateAbilityScore = () =>{
    const scores = []; 
    [1,2,3].forEach( index => scores.push(Math.floor(Math.random()*6)+1))
    scores.sort()
    return scores[0]
}

const abilities = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma']

export function abilityScores(){
    const abilityScoresToReturn = {} 
    abilities.forEach( ability => {
        abilityScoresToReturn[ability] = generateAbilityScore()
    })
    return abilityScoresToReturn
}