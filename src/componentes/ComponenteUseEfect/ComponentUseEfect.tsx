import { useEffect, useState } from "react";


export const  ComponentUseEfect = ()=>{
    const[state,setState] = useState(true);

    useEffect(()=>{
        console.log('componente montado');
        return ()=>{
            console.log('componente desmontado')
        }
    },[])

    useEffect(()=>{
        console.log(state);
    },[state]);
    return (
        <div>
            <p>{state?'es verdadero':'es falso'}</p>    
            <button onClick={()=>{setState(!state)}}>ChangeState</button>
        </div>
    );
}