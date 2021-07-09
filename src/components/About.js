import React from 'react'
import './About.css'
import Footer from './Footer'
import TopNavbar from './TopNavbar'

const About = () => {
    return (
        <>
        <div className="about">
        <TopNavbar/>
            <h1 className="heading">About gallery !</h1>
            <p className="details">It's a demo project of a photo gallery. We are bringing image from unsplash api. We can Tweet the photo that we like here in times of rendering random photos. We can download image from here and also we can view photo in bigger screen. </p>
            <br/>
            <p className="details future">In future we can add image upload feature and store them in a database. There we can have CRUD (create, read, update, delete) operation.</p>
            
        </div>
        <Footer/>

        </>
    )
}

export default About
