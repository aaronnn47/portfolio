import React from 'react'
import './Projects.css'
import account from '../../Project_Images/Account.png'
import home from '../../Project_Images/Home.png'
import cart from '../../Project_Images/Cart.png'
import mens from '../../Project_Images/Mens.png'
import wallet from '../../Project_Images/Wallet.png'


export default function Projects(){
    return(
    <div className='project-body'>
        
        <div className='project-context'>
            <h1>clonebase.fun</h1>
            <p>
                The project Clonebase is a clone of
                the website Coinbase. It was a personal
                passion project of mine because
                Coinbase is a website that I frequent often.
                I believe Coinbase is an integral part of
                adapting bitcoin to the mass public. 
                The technology is second to none and
                blockchain will one day be the prime resource
                for transactions. I also added an eccommerce 
                aspect to Clonebase with a shopping cart and
                a full cart. Some of the technologies that I used for 
                this project was Stripe Checkout, coinmarketcap api, 
                postgreSQL database, react/redux, html/css, and
                gmail API.
            </p>
        </div>
        
        <div className='project-carousel'>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img class="d-block w-100" src={home} alt="First slide"/>
                </div>

                <div class="carousel-item">
                <img class="d-block w-100" src={cart} alt="Second slide"/>
                </div>

                <div class="carousel-item">
                <img class="d-block w-100" src={wallet} alt="Third slide"/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src={account} alt="Third slide"/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src={mens} alt="Third slide"/>
                </div>
            </div>

            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>

            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        
        </div>
        </div>
    </div>
    )
}