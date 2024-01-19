import React from 'react'

const ChallengeChangeColor = ({search}) => {

    const newString = search ? search : "Empty Value";
    
  return (
    <div className="box" style={(newString) ? { backgroundColor:
        newString} : null}>
        {newString}
    </div>
  )
}

export default ChallengeChangeColor