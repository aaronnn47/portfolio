import React from 'react'
import './Gallery.css'
import pic1 from '../../Images/vs1.png'
import pic2 from '../../Images/vs2.png'
import pic3 from '../../Images/vs3.png'
import pic4 from '../../Images/vs4.png'

export default function Gallery(){

    return(
        <div className='gallery-div'>
            <img src={pic1} alt=''/>
            <img src={pic2} alt=''/>
            <img src={pic3} alt=''/>
            <img src={pic4} alt=''/>
        </div>
    )
}