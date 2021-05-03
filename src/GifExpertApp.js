import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () =>{

    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () =>{
    //     // setcategories(cats => [...cats, 'Naruto']);  //otra forma de hacerlo
    //     setcategories([...categories, 'Naruto']); //los tres puntos (...) es para mantener los datos que tiene categories
    // }

    return(
        <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr/>

        

        <ol>   {/* ol es orden list (lista ordenada) */}
            {
                categories.map( category => {  //el .map sirve para sacar cada valor del arreglo
                    // return <li key={category}> {category} </li>  //era para sacar todos los valores del arreglo cuando habian varios
                    return <GifGrid key={category}  category= {category} />
                })
            }
        </ol>
        </>
    );
}

export default GifExpertApp