import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {Link, useParams} from "react-router-dom"

function Cuisine() {
    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    const getCuisine = async(name) => {
        const data = await fetch( `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
        const recipes = await data.json();
        setCuisine(recipes.results);


    };
    useEffect(()=>{
        getCuisine(params.type)
       console.log(params.type)
    },[params.type]);


  return (
    <div className='grid gap-4 grid-cols-4 container mx-auto'>
        {cuisine.map((item)=>{
            return (
                <div key={item.id} >
                    <div className='border-2'> 
                             <img className='rounded-lg w-full' src={item.image} alt=""/>
                             <h4> {item.title} </h4>
                        
                     </div>
                 </div>
            )
        })}
    </div>
  )
}

export default Cuisine  


const Grid = styled.div `
    
`