import React from 'react';
import Home_hero_image from './../../../image/Home-hero.png'

const Homehero = () => {
    return (
        <>
            <div id="home-hero">
                <div className="container">
                    <div className="home-hero">
                        <div className="home-hero_desc">
                            <h1>IT образовательная платформа </h1>
                            <p>Наша образовательная платформа вам даст необходимые практические знания для адаптации в IT-сфере.</p>
                        </div>
                        <div className="home-hero_img">
                            <img src={Home_hero_image} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Homehero;