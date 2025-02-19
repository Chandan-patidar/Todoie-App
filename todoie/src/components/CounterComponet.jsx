import React, { useState } from 'react';

const CounterComponent = () => {
    const [count, setCount] = useState(15);
    
    }
    return (
        <div>
            <p> Count Component - {count}</p>
            <h6> Number is  {count % 2 === 0 ? "Even" : "odd"} </h6>
        
            <button onClick={ checkOddOrEven}> Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>

        </div>
    );
};
export default CounterComponent;