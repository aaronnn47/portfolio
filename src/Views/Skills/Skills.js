import React from 'react'
import './Skills.css'
import react from '../../Images/react.svg'
import node from '../../Images/node.svg'
import postgres from '../../Images/postgres.svg'
import api from '../../Images/api.svg'

export default function Skill(){
    return(
        
        <div className='skills-content'>
            
            <div className='skills-div'>
            <img src={react} alt=''/>
            <p>React</p>
            </div>

            <div className='skills-div'>
            <img src={node} alt=''/>
            <p>Node</p>
            </div>

            <div className='skills-div'>
            <img src={postgres} alt=''/>
            <p>Postgres</p>
            </div>

            <div className='skills-div'>
            <img src={api} alt=''/>
            <p>Api</p>
            </div>

        </div>
    )
}