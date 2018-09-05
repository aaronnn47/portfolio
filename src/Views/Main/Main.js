import React,{Component} from 'react'
import './Main.css'
import ocean from '../../Images/ocean.jpg'

export default function Main(){
    return(
        <div className='main-body'>
        <div className='main-content'>
        <h1>Aaron Kim's Portfolio</h1>
        </div>
        <img src={ocean} alt=''/>
            
        </div>
    )
}