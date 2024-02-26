import React, { useContext, useState } from 'react';
import { Peragraph } from '../App';

export default function Context() {
  const [count, setCount] = useState(0);
  const peraContext = useContext(Peragraph);
  const [isTextVisible, setIsTextVisible] = useState(true);

  const likeHandler = () => {
    setCount(count + 1);
  };

  const toggleText = () => {
    setIsTextVisible((prev) => !prev);
  };

  return (
    <div>
      <div>
        <button onClick={toggleText} className='Toggle'> Context</button>
        <div className='text'>
            {isTextVisible && peraContext}
        </div>
        
        <div>
            <span>{count}</span>
            <button onClick={likeHandler} className='likeBtn'>Like</button>
        </div>
      </div>
    </div>
  );
}

