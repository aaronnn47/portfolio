import React from 'react'
import './Skills.css'
import react from '../../Images/react.svg'
import node from '../../Images/node.svg'
import postgres from '../../Images/postgres.svg'
import api from '../../Images/api.svg'
import js from '../../Images/javascript.svg'
import html from '../../Images/html.svg'
import css from '../../Images/css.svg'

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
            <p>Engineering</p>
            </div>

            <div className='skills-div'>
            <img src={api} alt=''/>
            <p>Modeling</p>
            </div>

        </div>
    )
}