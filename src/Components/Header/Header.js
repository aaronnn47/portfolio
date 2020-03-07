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
        
        if(this.state.width < 415){
            this.setState({
                skills: 374,
                projects: 814,
                about: 1884,
                contact: 2294,
                contactTitle: '' 
        })}
        else if((this.state.width > 415) && (this.state.width < 620)){
            this.setState({
                skills:374,
                projects:744,
                about: 1778,
                contact: 2338,
                contactTitle: 'Contact Me'
            })
        }else{
            this.setState({
                skills:660,
                projects:1100,
                about:2050,
                contact: 2580,
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
        return(
            <div className='header-body'>
                <div className='header-nav'>
                    <span onClick={()=>this.onNavClick(0)}>Home</span>
                    <span onClick={()=>this.onNavClick(this.state.skills)}>Skills</span>
                    <span onClick={()=>this.onNavClick(this.state.projects)}>Projects</span>
                    <span onClick={()=>this.onNavClick(this.state.about)}>About</span>
                    <span onClick={()=>this.onNavClick(this.state.contact)}>{this.state.contactTitle}</span>
                </div>
            </div>
        )
    }
}

export default Header