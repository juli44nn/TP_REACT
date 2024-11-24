import { useForm } from "../../hooks/useForm";
export const ForComponent =()=>{

    // si lo planteamos de esta manera , necesitariamos un estado por cada input. no es aconsejable 
    //pq si tuvieramos muchos inputs tendriamos q cambiar muchos estado. podemos resolverlo con un solo
    //const [name,setName]= useState('')
    //const [email,setEmail]= useState('')
    //const [edad,setEdad]= useState(0)
    const {values,manejarCambioForm,resetForm}   =useForm({
        email:'',
        name:'',
        edad:0 
    })

    const {email,name,edad}= values;


    const manejarEnvioForm = ()=>{
        console.log({name,email,edad});
    }

    const resetFormulario = ()=>{
        resetForm();
    }

    return(
        <>
            <div>
                <h2>formulario</h2>
            </div>
            <div style={{display:'flex',flexDirection:'column', gap:'2vh'}}>
                <input value={name} type="text"  placeholder="nombre" onChange={manejarCambioForm} name='name'/>
                <input value={email} type="email"  placeholder="example@.com" onChange={manejarCambioForm} name='email' />
                <input value={edad} type="number"  placeholder="edad" onChange={manejarCambioForm} name='edad' />
            </div>
            <div>
                <button onClick={manejarEnvioForm}>Enviar</button>
                <button onClick={resetForm}>resetear</button>
            </div>
        </>
    )
}