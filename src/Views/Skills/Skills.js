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
            <div className='skills-one'>
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
                    <p>Restful Api</p>
                    </div>

                </div>

                <div className='skills-two'>
                    <div className='skills-div'>
                    <img src={js} alt=''/>
                    <p>JavaScript</p>
                    </div>

                    <div className='skills-div'>
                    <img src={html} alt=''/>
                    <p>Html</p>
                    </div>

                    <div className='skills-div'>
                    <img src={css} alt=''/>
                    <p>CSS</p>
                    </div>

                    <div className='skills-div'>
                    <img src={react} alt=''/>
                    <p>React Native</p>
                    </div>
            </div>

            
        </div>
    )
}