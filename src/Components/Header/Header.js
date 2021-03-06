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
            websites: 0,
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
                projects: 748,
                about: 1698,
                websites: 2278,
        })}
        else if((this.state.width > 620) && (this.state.width < 820)){
            this.setState({
                skills:418,
                projects:836,
                about: 1786,
                websites: 2366,
            })
        }else{
            this.setState({
                skills:660,
                projects:1320,
                about:2270,
                websites: 2850,
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
                    <span onClick={()=>this.onNavClick(this.state.websites)}>Websites</span>
                </div>
            </div>
        )
    }
}

export default Header