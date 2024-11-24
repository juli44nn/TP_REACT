import { Form, FormLabel } from "react-bootstrap"
import { useForm } from "../../../hooks/useForm"
import {FC} from 'react';

interface IpropsFormProduct{
    handAddProduct:Function;  
}


export const FormProduct:FC<IpropsFormProduct> = ({handAddProduct})=>{
    const {values,manejarCambioForm,resetForm} = useForm({
        nombre:'',
        imagen:'',
        precio:0
    })

    const manejarEnvioForm = ()=>{
        handAddProduct(values);
        resetForm();
    }
        console.log(values)
    return(
        <Form className='p-4 border rounded m-3'>
            <Form.Group controlId="forNombre">
                <FormLabel>Nombre</FormLabel>
                <Form.Control type='text' name='nombre' placeholder="ingrese nombre producto" value={values.nombre} onChange={manejarCambioForm}></Form.Control>
            </Form.Group>

            <Form.Group controlId="forNombre">
                <FormLabel>Imagen</FormLabel>
                <Form.Control type='text' name='imagen' placeholder="ingrese imagen producto" value={values.imagen} onChange={manejarCambioForm}></Form.Control>
            </Form.Group>

            <Form.Group controlId="forNombre">
                <FormLabel>Precio</FormLabel>
                <Form.Control type='text' name='precio' placeholder="ingrese precio producto" value={values.precio} onChange={manejarCambioForm}></Form.Control>
            </Form.Group>
            <div className="d-flex justify-content-center mt-4">
                <button  onClick={manejarEnvioForm}>Cargar Product</button>
            </div>
        </Form>
    )
}