import React from 'react';

import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

function TeacherList () {
    return (
        <div id="page-teacher-list" className="container">
            <header className="page-header">
                <div className="topbarcontainer">
                    <Link to="/">
                        <img src={backIcon} alt="voltar"/>
                    </Link>
                    <img src={logoImg} alt="Proffy"/>
                </div>
                <div className="header-content">
                    <strong>
                        Estes são os proffys disponiveis
                    </strong>
                </div>
            </header>
        </div>
    )
}

export default TeacherList;