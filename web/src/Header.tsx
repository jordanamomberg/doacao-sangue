import React, { Props } from 'react'; 

interface HeaderProps{
    title: String;
}

//Componente em formato de função
const Header: React.FC<HeaderProps> = (props) => {
    return (
    <header>
        <h1>{props.title}</h1>
    </header>
    );  
};

export default Header; 