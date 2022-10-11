import {FaPizzaSlice, FaHamburger} from "react-icons/fa"

import {GiNoodles,GiChopsticks } from "react-icons/gi"
import { NavLink } from "react-router-dom"

import React from 'react'
import styled from "styled-components"

function Category() {
  return (
    <List>
           <Slink to={'/cuisine/Italian'}> 
                <FaPizzaSlice/>
                <h3> italian </h3>
           </Slink>

            <Slink to={'/cuisine/american'} > 
                <FaHamburger/>
                <h3> American  </h3>
           </Slink>

            <Slink to={'/cuisine/thai'}> 
                <GiNoodles/>
                <h3> Thai </h3>
           </Slink>

            <Slink to={'/cuisine/spanish'}> 
                <GiNoodles/>
                <h3> Spanish </h3>
           </Slink>

           
    </List>
  )
}

export default Category

const List = styled.div `
    display: flex;
    justify-content: center;
    margin: 2rem 0rem; 
`


const Slink = styled(NavLink)  `
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   border-radius: 50%;
   margin-right: 2rem;
   text-decoration: none;
   background-color: aquamarine;
   width: 6rem;
   height: 6rem;
   cursor: pointer;
   transform: scale(0.8);

   h3{
    color: white;
    font: 0.8rem;
   }
   svg{
    color: white;
    font-size: 1.5rem;
   }
   &.active {
    background-color: red;
    

     svg{
    color: white;
    
   }
   h3{
    color: white;
    font-weight: bold;
   }
   }

  
`