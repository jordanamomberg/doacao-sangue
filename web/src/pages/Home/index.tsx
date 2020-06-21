import React from "react";
import { FiLogIn } from "react-icons/fi";
import { Link } from 'react-router-dom';

import "./styles.css";

import logo from "../../assets/logo.svg";

const Home = () => {
    return (
        <div id="page-home">
            <div className="content">
                <header>
                    <img src={logo} alt="Mais Vidas" />
                </header>

                <main>
                    <h1>
                        Doe <span>Sangue</span><br></br>
                        Salve <span>Vidas</span>
                    </h1>
                    <p>
                        Pra quem doa são alguns minutos, pra quem recebe é uma vida inteira.<br></br> <br></br>
                        Ajudamos você encontrar pontos de coleta.  
                    </p>

                    <Link to="/create-point">
                        <span>
                            <FiLogIn />
                        </span>
                        <strong>Cadastre um ponto de coleta</strong>
                    </Link>
                </main>
            </div>
        </div>
    );
};

export default Home;
