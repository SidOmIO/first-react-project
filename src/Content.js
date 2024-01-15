import { useState } from "react";

const Content = () => {
  const [name, setName] = useState('Dave');
  const [count, setCount] = useState(0);
  const handleNameChange = () => {
      const names = ['Bob','Kevin','Dave'];
      const int = Math.floor(Math.random() * 3);
      setName(names[int]);
    }

    const handleClick = () => {
      setCount(count + 1);
      console.log(count);
    }

    const handleClick2 = (name) => {
      console.log(count);
    }

return (
  <main>
      <p onDoubleClick={handleClick}>
          Hello {name}!
      </p>
      <button onClick={handleNameChange}>Change Name (Click It)</button>
      <button onClick={handleClick}>Button 2 (Click It)</button>
      <button onClick={(e) => handleClick2(e)}>Button 3 (Click It)</button>
  </main>
)
}

export default Content