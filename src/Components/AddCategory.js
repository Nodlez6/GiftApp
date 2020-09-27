import React, {useState} from 'react'
import PropTypes from 'prop-types'


const AddCategory = ( {setCategories , categories} ) => {

    const [inputValue, setInpuntValue] = useState('');

    
    const handleInputChange = ( e ) => {   
        setInpuntValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();//saco el comportamiento del form que refresca la pagina

        if( inputValue.trim().length > 2){//trim borra los espacios blancos
            setCategories([inputValue , ...categories ]);
            setInpuntValue('');
        }


        

    }

    return (
        
        <form onSubmit={ handleSubmit }>
            <input type="text" value={inputValue}
            onChange={handleInputChange}></input>
        </form>
    )

}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired
        
}

export default AddCategory;



