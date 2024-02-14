// import styles from './challenge.module.css';
import React from 'react'
import SearchItem from '../v1/SearchItem';
import ChallengeChangeColor from './ChallengeChangeColor';
import { useState } from "react";

const Challenge = () => {
  const [search, setSearch] = useState('');

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