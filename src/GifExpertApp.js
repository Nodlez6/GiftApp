import React, {useState} from 'react'
import AddCategory from './Components/AddCategory';
import  GifGrid  from './Components/GifGrid';



const GifExpertApp = () => {

    const [categories , setCategories] = useState([''])

    // const hanldeAdd = () =>{
    //     setCategories([...categories, 'One punch man']);//set es practicmante setear
    //     //entonces debemos amntener el arreglo que ya tenemos
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }
            categories={ categories }/>
            <hr/>
           <ol>
               { 
                    categories.map( category => (  
                        <GifGrid 
                        key={ category }
                        category={category} />
                    ))
               }
           </ol>
        </>
    );
};

export default GifExpertApp;
