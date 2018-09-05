import React from 'react'
import './Skills.css'
import react from '../../Images/react.svg'
import node from '../../Images/node.svg'
import postgres from '../../Images/postgres.svg'
import api from '../../Images/api.svg'
import js from '../../Images/javascript.svg'
import html from '../../Images/html.svg'
import css from '../../Images/css.svg'
import bottle from '../../Images/bottle.jpg'

export default function Skill(){
    return(

        <div className='skills-content'>
            <img src={bottle} alt=''/>
            <div className='skills-one'>
                    <div>
                    <img src={react} alt=''/>
                    <p>React</p>
                    </div>

                    <div>
                    <img src={node} alt=''/>
                    <p>Node</p>
                    </div>

                    <div>
                    <img src={postgres} alt=''/>
                    <p>Postgres</p>
                    </div>

                    <div>
                    <img src={api} alt=''/>
                    <p>Restful Api</p>
                    </div>

                </div>

                <div className='skills-two'>
                    <div>
                    <img src={js} alt=''/>
                    <p>JavaScript</p>
                    </div>

                    <div>
                    <img src={html} alt=''/>
                    <p>Html</p>
                    </div>

                    <div>
                    <img src={css} alt=''/>
                    <p>CSS</p>
                    </div>
            </div>

            
        </div>
    )
}