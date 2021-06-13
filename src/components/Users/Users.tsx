import React, {useState, useEffect} from 'react';

const Users = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Users Component</h1>
      <button onClick={() => setCount(count + 1)}>
        click here
      </button>
      <h1>{count}</h1>
    </div>
  ) 
}

export default Users