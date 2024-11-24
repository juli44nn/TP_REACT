import {  useState } from "react";

export const ComponentCounter = ()=>
{
    const [count, setCount] = useState<number>(0);

    const incrementar = ()=>{ 
        setCount((actual)=> actual+1);
    };

    const decrementar = ()=>{
        if(count>0)
            setCount((actual)=>actual-1)
    };
        

    return (
        <>
            <h2>el valor del contador es {count}</h2>
            <button onClick={incrementar}>+</button>
            <button onClick={decrementar}>-</button>
        </>
    );
}