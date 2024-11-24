import { useState } from "react";
import { ComponentCounter } from "./componentes/ComponentCounter/ComponentCounter";
import { MiPrimerComponente } from "./componentes/PrimerComponente/MiPrimerComponente";
import { ComponentUseEfect } from "./componentes/ComponenteUseEfect/ComponentUseEfect";
import { ForComponent } from "./componentes/ForComponent/ForComponent";
import { AppProduct } from "./componentes/AppProducto/AppProduct";

export const App = ()=>
    {
        const[enableCounter,setEnableCouter]= useState(false);


        return (
            <>
            
                <MiPrimerComponente text="texto de propiedades" color='red'/>
                <MiPrimerComponente text="texto de ejemplo" color='green'/>

                {enableCounter && <ComponentCounter/>}
                <button onClick={()=>{
                    setEnableCouter(!enableCounter);
                }}>mostrar/ocultar</button>

               <ForComponent/>
               <h1>--------------------</h1>
                <h1>Aplication</h1>
                <AppProduct/>

            </>
        );
    }