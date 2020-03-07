import React from 'react'
import './Main.css'
import ocean from '../../Images/ocean.jpg'
import background from '../../Images/architecture.jpg'

export default function Main(){
    return(
        <div className='main-body'>
            <img src={background} alt='' className='main-pic'/>
            <div className='main-content'>
            <h1>Aaron Kim</h1>
            <p>Architecure | Engineering | Drafting | Design</p>
            </div>
            
        </div>
    )
}