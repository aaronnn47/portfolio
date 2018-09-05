import React from 'react'
import './Projects.css'
import account from '../../Project_Images/Account.png'
import home from '../../Project_Images/Home.png'
import cart from '../../Project_Images/Cart.png'
import mens from '../../Project_Images/Mens.png'
import wallet from '../../Project_Images/Wallet.png'
import ImageGallery from 'react-image-gallery'


export default function Projects(){

    const images = [
        {
            original: {home}
        },
        {
            original: {account}
        },
        {
            original: {cart}
        },
        {
            original: {mens}
        },
        {
            original: {wallet}
        },
    ]


    return(
        <div className='project-body'>
            <ImageGallery items={images}/>
            <div className='project-context'>
            <p>
                The project Clonebase was is a clone of
                the website coinbase. It was a personal
                passion project of mine because
                coinbase is a website that I frequent often.
                I believe coinbase is an integral part of
                adapting bitcoin to the mass public. 
                The technology is second to none and
                blockchain will one day be the prime resource
                for transactions. I also added an eccommerce 
                aspect to Clonebase with a shopping cart and
                a full cart. 

            </p>

            </div>
        </div>
    )
}