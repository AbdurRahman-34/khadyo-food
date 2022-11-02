import React from 'react';
import { Button } from 'react-bootstrap';
import Shop from '../Shop/Shop';
import './Home.css'

const Home = () => {
    return (
        <div>
        <div className='Hero-section '>
            <div className='hero-content container'>
                <h2>ENJOY OUR <br/> DELICIOUS <span>FOOD</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt maiores <br/> dolorem, cum distinctio praesentium dolores vitae error at iste? Incidunt,<br/> voluptates quia neque corrupti doloremque odio dignissimos eaquevoluptatem<br/> quasi sint numquam molestiae qui dolorum, id quidem ipsum odit maxime?</p>
                <Button  variant='danger'>Try It Now</Button>
            </div>
        </div>

        <Shop/>

        </div>
    );
};

export default Home;