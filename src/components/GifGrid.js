import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/GetGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);

    // useEffect(() =>{  //el useEffect se usa para que no esté haciendo cada rato la peticion http y no haga un bucle infinito (solo se renderiza una vez)
    //     getGifs(category)
    //         .then(setImages);
    // }, [category]) // cuando se deja el getGifs en el mismo script no es necesario poner category en esta linea

    const {data:images, loading} = useFetchGifs(category);  //se pone data:images para renombrar data como images
   

    return (
        <>
            <h3> {category} </h3>
            {loading && <p className="animate__animated animate__flash">Loading...</p>}
            <div className="card-grid">

            {
                images.map( img => (  //se pede desestructurando adentro {id, title} en vez de img y abajo  se llama cada item
                    <GifGridItem 
                        key={img.id}
                        {...img}  //se desestructura cada item de img y se envian por separado
                    />
                ) )
            }
        </div>
        </>
    )
}

export default GifGrid



// return (
//     <>
//         <h3> {category} </h3>
//         {loading?'cargando...': 'data cargada'}
        // <div className="card-grid">
        //     {/* <ol>
        //         {
        //             images.map( img => (  //se pede desestructurando adentro {id, title} en vez de img y abajo  se llama cada item
        //                 <li key={img.id}> {img.title} </li>
        //             ) )
        //         }
        //     </ol> */}

        //     {
        //         images.map( img => (  //se pede desestructurando adentro {id, title} en vez de img y abajo  se llama cada item
        //             <GifGridItem 
        //                 key={img.id}
        //                 {...img}  //se desestructura cada item de img y se envian por separado
        //             />
        //         ) )
        //     }
        // </div>
//     </>
// )