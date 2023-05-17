import React from 'react'
import Common from './Common';
import img from '../Components/Images/home.png';

const Home = () => {
    return (
        <>
            <Common
                name="Grow your bussiness now"
                imgsrc={img}
                visit='/service'
                btname='Get Started'
            />
        </>
    )
}

export default Home