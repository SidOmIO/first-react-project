import React from 'react'
import SearchItem from '../SearchItem';
import ChallengeChangeColor from './ChallengeChangeColor';

const Challenge = ({search,setSearch}) => {
  return (
    <div className="App">
        <ChallengeChangeColor
        search={search}
        />
      <SearchItem 
        search={search}
        setSearch={setSearch}
      />
    </div>
  )
}

export default Challenge