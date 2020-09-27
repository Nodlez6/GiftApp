 import React, {useEffect, useState}from 'react'
 import {useFetchGifs} from '../hooks/useFetchGifs.js'
import { GifGridItem } from './GifGridItem';


const GifGrid = ( {category} ) => {

    const {data: images , loading} = useFetchGifs( category );

    return (
        <>
            <h3 className='animate__animated animate__bounce animate__fadeIn'>{ category }</h3>

            { loading ? <p className="animate__animated animate__bounce animate__flash">Loading</p> : null}

            <div className="card-grid">
                {
                    images.map( img => ( 
                        <GifGridItem key={img.id} 
                        img={img}/>
                    ))
                }
             </div>

        </>
    )
}

export default GifGrid;
