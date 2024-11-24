import {FC} from 'react';
import { Card } from 'react-bootstrap';
interface ItemProduct{
    precio:number;
    imagen:string;
    nombre:string;
};
interface IpropsListProduct{
    arrItems: ItemProduct[];
}

export const ListProduct:FC<IpropsListProduct> = ({arrItems})=>{
    return(
        <div className='p-4 m-3 border rounder d-grid gap-2'
        style={{gridTemplateColumns:'repeat(2,1fr)',justifyItems:'center',
            alignItems:'center'
        } }>
            {
                arrItems.map((item,i)=>(
                    <Card key={i} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.imagen} />
      <Card.Body>
        <Card.Title>{item.nombre}</Card.Title>
        <Card.Text>
          ${item.precio}
        </Card.Text>
      </Card.Body>
    </Card>
                ))}
            

        </div>
    )
}