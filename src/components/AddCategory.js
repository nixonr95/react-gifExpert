import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) =>{   //la e es el nombre que se le pone al evento
         setInputValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault(); // e.preventDefault() se usa para que no se recargue la pagina al dar enter

        if (inputValue.trim().length > 2){   // el trim() borra los espacios y si es mayor de 2 letras se cumple la condicion
            
            setCategories(cats => [inputValue, ...cats]);  //se pone ésta para en cats hacer al call back y traer los elementos del arreglo categorias
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>  {/* en el for es para enviar los formularios completos al hacer enter */}
           <input
                type="text"
                value= {inputValue}
                onChange={handleInputChange}
           />
        </form>
    )
}

AddCategory.prototypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory