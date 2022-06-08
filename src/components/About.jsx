import React from 'react';
const About = function () {
    return (
        <div className='about'>
            <h3 className='header-big'>Hello, this is me - Josh</h3>
            <img
                className='about__photo'
                src='https://res.cloudinary.com/kreiva/image/upload/v1654078236/FrontendMentor/EcommerceProductPage/owner_zqvt65.png'
                alt='owner photo'
            />
            <div className='text'>
                Thank you for visiting my shop. I'm Josh, owner of this small but impactfull online sneaker shop. Lorem
                ipsum dolor sit, amet consectetur adipisicing elit. Nobis excepturi, modi fuga eos quod est eaque
                voluptatem corrupti repellendus necessitatibus perferendis doloribus aperiam voluptatibus quidem maxime
                recusandae praesentium iusto? Dolore.
            </div>
        </div>
    );
};

export default About;
