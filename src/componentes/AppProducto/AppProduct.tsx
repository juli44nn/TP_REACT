import { useState } from 'react'
import { FormProduct } from './FormProduct/FormProduc'
import {Header} from './Header/Header'
import { ListProduct } from './ListProduct/ListProduct';

interface ItemProduct{
    precio:number;
    imagen:string;
    producto:string;
};

export const AppProduct = ()=>{
    const [products,setProdcuts]= useState<ItemProduct[]>([])

    const manejarAddProduct = (newItem:ItemProduct)=>{
        setProdcuts((prev)=>[...prev,newItem])
    }


    return(
        <div>
            <Header/>
            <h2 className='text-center'>Form</h2>
            <Header/>
            <FormProduct handAddProduct={manejarAddProduct}/>
            <h2 className='text-center'>Productos</h2>
            {
                products.length>0?<ListProduct arrItems={products}/>:<h3 className='text-center'>No hay productos</h3>   
            }

        </div>
    )
}