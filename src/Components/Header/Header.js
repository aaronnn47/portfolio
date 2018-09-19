import React, {Component} from 'react'
import animateScrollTo from 'animated-scroll-to'
import './Header.css'

class Header extends Component{
    constructor(){
        super()

        this.state={
            width: 0,
            skills: 0,
            projects: 0,
            about: 0,
            contact: 0,
            contactTitle: ''
        }
    }

    componentWillMount(){
        this.setState({
            width: window.innerWidth
        })
    }
    componentDidMount(){
        if(this.state.width > 800){
            console.log(this.state.width)
            this.setState({
                skills:600,
                projects:1040,
                about: 1800,
                contact: 2400,
                contactTitle: 'Contact Me'
            })
        }else{
            this.setState({
                skills:420,
                projects:850,
                about:1750,
                contact: 2370,
                contactTitle: 'Contact'
            })
        }
    }

    onNavClick(offset){
        const options={
            speed:500,
            minDuration:400,
            maxDuration: 800,
            element: window,
            cancelOnUserAction:true
        }
        const desiredOffset = offset
        animateScrollTo( desiredOffset, options)
    }
    
    render(){
        console.log(this.state.about)
        return(
            <div className='header-body'>
                <div className='header-nav'>
                    <div onClick={()=>this.onNavClick(0)}>Home</div>
                    <div onClick={()=>this.onNavClick(this.state.skills)}>Skills</div>
                    <div onClick={()=>this.onNavClick(this.state.projects)}>Projects</div>
                    <div onClick={()=>this.onNavClick(this.state.about)}>About</div>
                    <div onClick={()=>this.onNavClick(this.state.contact)}>{this.state.contactTitle}</div>
                </div>
            </div>
        )
    }
}

export default Header