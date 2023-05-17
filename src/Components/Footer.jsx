import React from 'react'

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <>
            <footer className='w-100  text-center'>
                <p> copyright © {year} </p>
            </footer>
        </>
    )
}

export default Footer