import React, { useState, useEffect } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const increment = () => {
            setCount(count + 1);
        }

        const interval = setInterval(increment, 1000);
        return () => clearInterval(interval);

    });

    return (
        <div>
            <h1>Contador: {count}</h1>
        </div>
    );
};

export default Counter;