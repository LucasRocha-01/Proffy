import React from 'react';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import study from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';

function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className = "container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Sua plataforma de estudos online.</h2>
                </div>
                
                <img 
                    src={landingImg} 
                    alt="Plataforma de estudos" 
                    className="hero-image"
                />

                <div className="buttons-container">
                    <a href="www." className="study">
                        <img src={study} alt="Estudar"/>
                        Estudar
                    </a>

                    <a href="www." className="give-classes">
                        <img src={giveClassesIcon} alt="Dar Aular"/>
                        Dar Aular
                    </a>

                </div>

                <span className="total-connections">
                    Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt=""/>
                </span>
            </div>
        </div>
    )
}

export default Landing;