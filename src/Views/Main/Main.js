import React,{Component} from 'react'
import './Main.css'
import ocean from '../../Images/ocean.jpg'

export default function Main(){
    return(
        <div className='main-body'>
            <img src={ocean} alt='' className='main-pic'/>
            <div className='main-content'>
            <h1>Aaron Kim</h1>
            <p>Web Development/ Mobile / Game / Blockchain</p>
            </div>
            
        </div>
    )
}