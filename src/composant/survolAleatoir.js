import React, {useState} from 'react';

const survol = ({couleur}) =>
{
    const [color, setColor] = useState(couleur);
    const changeColor = () => {
        const newColor = ["#1ec891", "#ff725e", "#ffd05b", "#8e44ad", "#3498db", "#e74c3c"];
        setColor(newColor[Math.floor(Math.random() * newColor.length)]);
        
        setColor(newColor);
    };

    return (
        <div>

        <div style={{color}}>
            Un composant
        </div>
        <button onClick={changeColor}>Changer quelque chose</button> // mouseover pour le survole onClick quand on click
        </div>
    );
};

export default survol;