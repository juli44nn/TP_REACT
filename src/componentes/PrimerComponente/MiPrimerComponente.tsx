import {FC} from 'react';

interface IPrimerComponent{
    text: string,
    color: string;
    fontSize?: number;
}


export const MiPrimerComponente: FC<IPrimerComponent>= ({text,color,fontSize})=>{
    return(
        <div style={{color:color , fontSize:fontSize} }>
            <p>{text}</p>
        </div>
        
    );
}
    