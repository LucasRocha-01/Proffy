import React from 'react';

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem () {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars2.githubusercontent.com/u/48070334?s=460&u=52cae4b4ca26fb11c99bd2692e6864bc9c63f8fd&v=4" alt="Lucas"/>
                        <div>
                            <strong>Lucas Rocha</strong>
                            <span>Excel</span>
                        </div>
                    </header>
                    <p>
                        Entusiasta das mais faceis maneiras de lidar com as coisas
                    </p>

                    <footer>
                        <p>
                            Preço/hora 
                            <strong>R$ 20,00</strong>   
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="WhatsApp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    )
}

export default TeacherItem;