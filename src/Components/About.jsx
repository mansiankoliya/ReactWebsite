import React from 'react'
import Common from './Common';
import img from '../Components/Images/about.webp';


const About = () => {
    return (
        <>
            <Common
                name="Wellcome to about page"
                imgsrc={img}
                visit='/contact'
                btname='Contact Now'
            />
        </>
    )
}

export default About