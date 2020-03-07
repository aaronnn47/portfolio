import React,{Component} from 'react'
import './Contacts.css'
import SocialMediaIcons from 'react-social-media-icons'

const socialMediaIcons =[
    {
        url: 'https://github.com/aaronnn47',
        className: 'fa-github-square'
    },
    {
        url: 'https://www.linkedin.com/in/aaron-kim42',
        className: 'fa-linkedin'
    },
    {
        url: 'https://www.facebook.com/aaron.kim.7739',
        className: 'fa-facebook'
    },
    {
        url: 'https://www.instagram.com/aarkitech_',
        className: 'fa-instagram'
    }
]

export default function Contacts(){
    return(
        <div className='contact-body'>
            <div className='contact-content'>
                <h1>Contact Me</h1>

                <SocialMediaIcons
                className='social-media-icons'
                icons={socialMediaIcons}
                iconSize={'5em'}
                iconColor={'#495056'}
                />
            </div>
        </div>
    )
}